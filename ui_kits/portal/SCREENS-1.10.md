# Portal UI Kit — 1.10 ("Live Ops · Most-Severe · Expected Impact · Portal Overlays") notes

The 1.10 pass adds a new **operational page archetype** (Live View), replaces hex
averaging with **Most Severe** aggregation, swaps numeric "Anticipated Lift" for a
categorical **Expected Impact** field, and hardens the **overlay layer** portal-wide.
Most of the law lives in `Greater Design System.md` (Live Surfaces, Coverage Map,
Tables → DataTable/RowKebab/pinned actions, Tooltip, App Shell, Login, Forms, Voice).
This file records the screen-level + kit-file specifics. Live reference:
`frontend/src/screens/live-view/*`, `components/DataTable.js`,
`screens/planned-assignments/RowKebab.js`, `lib/conditions.js`,
`screens/store-promotions/*`, `screens/visualize-impact/*`, `screens/store-layouts/*`.

Kit files: `DataTable.jsx`, `RowKebab.jsx` (new); `conditions.js`, `primitives.jsx`
(Tooltip clamp + `ImpactBars`), `AppShell.jsx`, `LoginScreen.jsx`, `colors_and_type.css`
(`gr-livedot`, `.gr-sticky-actions`), `maps.css` (`.g-live-*`, `.g-routemap*`).

---

## §A — Live View (Sales → Live View · `/sales/live-view` · cap `sales.view` · read-only)

A joint **map + table** of every rep's route for **TODAY**. A "live surface": it answers
"what is happening right now" — deliberately **no date filter**. First child under Sales.

### Anatomy (top → bottom)
1. **Page header** — title + subtitle, `SaveViewButton` (section "Sales", icon `radar`) right.
2. **Alert banner (conditional)** — when ANY of today's stops (unfiltered) is *Incomplete*:
   red banner (`background: var(--p-danger-soft)`, red `error` icon, radius 8, pad `10px 12px`):
   *"N stops today were started but not submitted before the rep moved on."* + a text-link
   **"Show incomplete tasks"** that sets the Status filter to Incomplete. testids
   `lv-incomplete-banner`, `lv-show-incomplete`.
3. **Filter row** — **Status `Select` LEFTMOST** (`lv-status-filter`), then role-aware team
   quick-filters (supervisor → "My Team" chip; managers → Supervisor dropdown "{Name} (N)",
   `lv-supervisor-select`), then the standard `FilterMenu` (Sales Rep / Chain / License Type /
   Account Type / Warehouse). All state syncs to the URL (1.9 `urlFilters`).
4. **Map strip** — a **collapsible** horizontal panel above the table (collapse persisted in
   `localStorage["lv_map_collapsed"]`; toggle + refresh use `.g-routemap-btn`, `lv-map-collapse`).
   Strip header carries the summary ("N stops · M reps · K incomplete") + the liveness chip
   *"Live · Updated Xs ago"* + manual refresh (`lv-refresh`).
5. **Table** — ALWAYS grouped by **Rep & Date** (no group-by control; grouping is the point).

### The five live stop statuses (closed vocabulary — compose existing tokens, no new colors)
| Status | Meaning | Table badge | Map pin (`.g-live-pin`) |
|---|---|---|---|
| **Planned** | scheduled, not started | *borderless*: 6px `--p-border-strong` dot + "Planned" in `--p-muted` | base (white, ink ring, dark number) |
| **In Progress** | started, on site | pill `--p-primary-tint`/`--p-primary-ink`, **pulsing** `gr-livedot` | `.is-in_progress` (solid blue, white number) |
| **Complete** | submitted | pill `--p-success-bg`/`--p-success-fg`, currentColor dot | `.is-complete` (ink fill, white number; dark inverts) |
| **Incomplete** | started, never submitted, **and a following stop already started** | pill `--p-danger-soft`/`--p-danger`, `Tooltip`: *"Not submitted and following task was started."* | `.is-incomplete` (`#FDECEC` fill, red ring, red number) |
| **Skipped** | not worked in sequence (rep may circle back) | *quiet*: borderless, `--p-border-strong` dot + "Skipped" in `--p-text-2`, `Tooltip`: *"Not worked in sequence — the rep may still return to this stop today."* | **plain un-started pin** (identical to Planned) |

Badge geometry: `padding:3px 10px; border-radius:999; font:500 12px/1.4 Inter; gap:7` + leading
6px dot. Borderless variants: `font:500 12.5px/1.4 Inter`, same dot, no fill. **Color-law ruling
(user-decided, reversed once):** Incomplete is **RED** — an unsubmitted, abandoned task IS the
real-world problem this surface exists to surface. Amber stays "your unsaved edit"; red stays
"real-world conflict / needs attention". Skipped is deliberately **not** a warning. On live
surfaces the un-started status is **"Planned"**, never "Upcoming".

### Grouped table
- Row grid `LIVE_COLS = "84px minmax(240px,1.7fr) 104px 118px 168px 104px 104px"`, `minWidth 980`,
  row height **54**: **Sequence · Account · Service · Tasks · Status · Start · End**. Sequence /
  Start / End are **Geist Mono** (`500 13px`); empty = em-dash.
- **Group header** (`height 44`, `--p-surface-alt`, top+bottom hairline, click to collapse, chevron
  rotates −90° closed): 22px `Avatar` (rep initials, `--p-role-rep-bg/fg`) · rep name (`600 13px`,
  ink) · **progress bar** (56×4px rounded track `--p-surface-tint` + hairline, `--p-success` fill) ·
  mono `"{complete}/{total} complete"` (Incomplete stops **excluded** from complete) · **live-activity
  line** (6px dot, pulsing `gr-livedot` while `en_route`/`on_site`):

  | rep status | dot | text |
  |---|---|---|
  | `not_started` | `--p-placeholder` | "Not started" |
  | `en_route` | `--p-primary` | "En route to {next stop}" |
  | `on_site` | `--p-primary` | "On site at {current stop}" |
  | `done` | `--p-success` | "Day complete" |
  | `done_incomplete` | `--p-danger` | "Day ended · N incomplete" |

  Right end: a neutral **"Locate"** button (28px, `my_location`, `--p-border-strong` border,
  `--p-surface-tint` hover, `lv-locate-<repId>`) that zooms + focuses the rep's route; hovering the
  header also focuses it. testids `lv-group-<repId>`, `lv-group-progress-<repId>`,
  `lv-group-live-<repId>`, rows `lv-row-<id>`, status badge `lv-status-badge` (+`data-status`).
- **Empty states:** page hero *"No stops planned for today"* (links to Planned Assignments);
  in-table *"No stops match"* when filters exclude everything.

### Liveness mechanics (pattern rules)
- **Auto-refresh every 60s**, paused while the tab is hidden (`document.hidden` guard); visible
  *"Live · Updated Xs ago"* chip + manual refresh. Refreshes **preserve map center/zoom** (keep a
  `viewRef` of `{center, zoom}` across reloads).
- **QA time-travel:** accepts `?at=10:15am` (URL or API); the page strips it from the URL after
  mount, so any other chrome that needs it (the nav alert dot, §B) must capture it into a ref **at
  render time**, not lazily.
- Feed is **simulated** in the reference app (deterministic from clock + per-stop hash); the DS
  documents the *contract*: rows carry `{status, startedAt, endedAt, sequence}`, groups carry
  `{repId, repName, stops[], rep:{status, total, complete, currentStop, nextStop, incomplete, position}}`.

### Status filter = table-only lens (general rule for joint map+table surfaces)
The Status `Select` filters **the table only**; the **map keeps every facet-filtered stop**
regardless of status (a live map that hid "Complete" pins would misrepresent the day). Facet
filters (rep/chain/warehouse/…) apply to **both**. Rule: *state filters lens the table; identity
facets scope both.*

### Map law (see `maps.css` §C + GDS Maps)
Monochrome gray routes (light `#A9B2BE` / dark `#50565F`, weight 2.5, opacity .7); only sequenced
stops join the polyline. Focus recolors one route blue, scales its pins (`.is-focus`), dims the
rest (`.is-dim`). One pulsing `.g-live-rep` per rep (ping disabled under `prefers-reduced-motion`).

---

## §B — App Shell nav **alert dot** (see `AppShell.jsx` + GDS App Shell)
A static (non-pulsing, no count) 7px `--p-danger` dot, `lv-nav-alert-dot`, native `title=
"Incomplete stops need attention in Live View"`, shown when Live View has ≥1 Incomplete stop today.
Renders in all four sidebar states: (1) beside the Live View child row (Sales expanded), (2) beside
the Sales parent row (group collapsed), (3) top-right of the Sales rail icon (sidebar collapsed),
(4) in the collapsed-rail flyout row. Contract: `GET /api/assignments/live/alerts → {incomplete}`
(same pipeline as the feed), polled every 60s, visibility-gated, cap-gated `sales.view`, honoring
`?at=`. Red — never amber for nav "needs attention".

---

## §E — Expected Impact (Store Promotions · replaces "Anticipated Lift")

Store Promotions no longer take a numeric lift multiplier. The field is categorical
`expectedImpact` — `EXPECTED_IMPACTS` = Minor / Moderate / Significant (+ `IMPACT_RANK`
{Minor:1, Moderate:2, Significant:3}), all in `primitives.jsx`.

### Radio-card group (new canonical single-choice input — 2–4 rich options)
Wizard Step 1: `role="radiogroup"`, label row ("Expected Impact" + red `*`) + helper ("How much
impact do you anticipate this promotion will have on consumer demand for the included products?").
Grid `repeat(3,1fr)`, gap 10. Each card = `<button role="radio" aria-checked>`, `padding:12px 14px;
radius:8; text-align:left`, column `gap:6` of **glyph → value → blurb** (value `600 14px/1`, blurb
`400 12px/1.35` `--p-muted`). **Selected** = `border:1px solid var(--p-primary)` +
`background:var(--p-primary-tint)` + `box-shadow: inset 0 0 0 1px var(--p-primary)` (doubled inner
ring, no layout shift); value → `--p-primary-ink`. Unselected = `--p-border-strong` on `--p-surface`.
Transition `border-color/background/box-shadow .12s ease`. Selection is **blue** (a choice inside
content). testids `promo-impact-group`, `promo-impact-{minor|moderate|significant}`.

### `ImpactBars` (shared magnitude glyph — `primitives.jsx`)
Ascending Material Symbols `signal_cellular_alt` family layered over a faint full-scale base so
"N of 3" stays legible; `active` paints filled bars blue. Icons added to the §8 registry:
`signal_cellular_alt`, `signal_cellular_alt_2_bar`, `signal_cellular_alt_1_bar`.

### Downstream
- List column "Lift" → **"Impact"** = `ImpactBars(size 0.82, active)` + label; **sorts by
  `IMPACT_RANK`**, not alphabetically.
- "Avg Anticipated Lift" stat card **removed** (3 cards remain). CSV header "Expected Impact".
- Audit diffs the categorical value ("Expected Impact: Minor → Significant"); legacy
  `anticipatedLift` entries still render as "2x" (keep the formatter case).

### §F — Conditional Subtype (Forms)
A type's Subtype field exists **only when the type has subtypes** (`step1ok` requires subtype only
when `subtypesFor(type).length > 0`), else it is hidden AND not required. Retired the old
"Minor/Significant Discount" depth-variant subtypes (their signal moved into Expected Impact). List
rows with no subtype show nothing (not an em-dash). General rule: *never render a disabled/placeholder
dependent field — conditionally mount it.*

---

## §N — Relative week selector (Visualize Impact → Route Assignments)

The date-range control is replaced by a single `Select` (`ra-week`, width 250, `menuMaxHeight 440`):
**"All Assignments"** (default) + **Week 1..n** anchored at the plan's **Start Date** (Monday start →
Weeks 1–8; non-Monday → a partial Week 1 [start→Sunday] + 8 full Mon–Sun weeks). Option label =
"Week N" + muted "{Mon d} – {Mon d}" + a "· partial" suffix where applicable. Week list is per-plan
(`GET /api/orchestration/plans/{id}/weeks`); a stale selection snaps back to All. Persists to the URL
as `?week=` (`urlFilters` `PARAM_LABELS` gains `week: "Week"` so Saved-View chips humanize it). This
tab **shows past stops** (the `≥ today` clamp applies ONLY to Sales → Planned Assignments).
⚠️ A per-week workload summary strip was prototyped and **removed at the user's request** — do not
reintroduce one. The week dropdown is the only week control.

---

## §R — Store Layouts: Templates tab (after Active / No Layout / Scheduled / Drafts)

Reusable layout blueprints, decoupled from any account.
- **List** mirrors the account tabs' table anatomy (search-aware, `SummaryCell` "N sections · M
  placements", **Updated By | Updated** trailing columns, shared sort headers). Row menu is a **portal
  `RowKebab`** (§I): **"Apply to Accounts…"** (`dashboard_customize`, `tmpl-menu-apply-<id>`) ·
  **"Rename / Edit…"** (`edit`, `tmpl-menu-edit-<id>`) · **"Delete Template"** (`delete`, danger,
  `tmpl-menu-delete-<id>`).
- **TemplateDetailModal** — read-only walkthrough of sections + placements. Quantity lines read
  **"Par Level: n units"**; display placements read **"Display Size: n units"** + a static **Display
  chip** (`curtains` icon in a `--p-primary-tint` pill) — same vocabulary as the Layout Editor.
- **ApplyToAccountsModal** — a multi-select account picker (the standard grouped search-and-select)
  that stamps the template onto chosen accounts.
- **Delete** uses the standard confirm `Modal` (`variant="confirm" tone="danger" icon="delete"`, ghost
  Cancel + solid danger "Delete Template"). testids `tmpl-delete-modal`, `tmpl-delete-confirm`.
- Starter templates are seeded so the tab is never empty on first run.
