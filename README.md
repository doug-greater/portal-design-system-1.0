# Greater Portal Design System

This repository is our **shared design system** — the single source of truth for Greater Portal's tokens, components, voice, and UI. Design and code should both point here when building anything new.

## For AI agents

**Read [`Greater Design System.md`](./Greater%20Design%20System.md) first — it is the source of truth.** Treat it as authoritative for tokens, components, patterns, and voice before doing any design or implementation work.

**Before creating any new component, review this design system first.** Most needs are already covered by existing components, tokens, and patterns. Only build something new once you've confirmed an existing component can't be used or extended — a new component should be the exception, not the default.

## What's here

- **`Greater Design System.md`** — the source of truth (read this first)
- **`DESIGN-SYSTEM-OVERVIEW.md`** — detailed index and origin of the system
- **`SKILL.md`** — Claude-Code-compatible skill entry point
- **`colors_and_type.css`** — design tokens (CSS variables)
- **`fonts/`** — Inter + JetBrains Mono (self-hosted, 1.11)
- **`assets/`** — logos and brand marks
- **`ui_kits/portal/`** — component library and sample screens
- **`preview/`** — specimen cards for reference
- **`screenshots/`**, **`uploads/`** — reference imagery

## What's new in Portal 1.1

- **New components:** the **Wizard** (full-screen multi-step flow), **Audit Log, Change Row & Restore** (timeline modal + portal-wide ledger), **Echo Pulse** (post-auth brand moment), **Expandable Rows**, and the header **Batch Actions** dropdown (the multi-select pattern for tables). Plus a solid **danger** button, stat-card **drill-in** + Show/Hide Stats, and Date Picker **min/max + context-aware preset rails**.
- **Casing rule changed:** Title Case is now **mandatory** for all button / link-button / SplitButton labels and Modal · Drawer · Dialog headers. Body copy, helper text, banners, and toasts stay sentence case.
- **App Shell bottom nav reworked:** "Ops Tools" removed; the utility nav is now **Help Center · Audit Log · Settings · Account · Sign Out** (Audit Log and Settings are routed, with an active state).
- The vertical `more_vert` kebab is **banned** portal-wide — overflow triggers always use horizontal `more_horiz`.

## What's new in Phase 3 (Store Layouts)

- **New primitives:** the **Chip** (micro status — the canonical small tinted pill, replacing one-off badges), **Chip Toggle**, a documented **Tooltip** (`maxWidth` + downward `side`), and **MenuButton** (a full-height header/toolbar disclosure — the off-table sibling of SplitButton).
- **New patterns:** the **Arrangement Board** (drag-and-drop sections + placements + an Unassigned tray, on `@dnd-kit`), the **Section Meta Row**, **General Stock Area**, the **Inline Quantity Control** (amber "soft-required" cue), the grouped **Add-items Picker**, and a **CSV Import** (validate → preview → commit) flow.
- **Extended:** Batch Actions now covers **row-checkbox tables** with a tab-conditional menu and partial-result two-toasts; the App Shell documents an **in-shell detail editor**; Info Banners gain an **amber** tone; a **soft-required = amber** input state; plus `.g-textlink`, `gr-label-swap`, and ~25 Store-Layouts icons.
- **`@dnd-kit`** (core / sortable / utilities) is the one new runtime dependency.

## What's new in Portal 1.3

> *(Phase 3 above = the Portal 1.2 delta; this is the 1.3 "shell + motion" pass on top of it.)*

- **Shell background:** pages, the wizard workspace, login, and loaders now sit on a warm off-white **`--p-shell` (#FDFCF9)**; white is reserved for surfaces (cards, tables, side nav, wizard chrome) so they lift off the canvas.
- **Surface elevation:** new **`--shadow-surface`** soft-diffuse shadow for large resting surfaces (cards / tables / ledgers); the tight `--shadow-card` stays for small elements.
- **StatCard motion:** values **count up** from 0 (ease-out-quart) with a coupled fade-in; formats (`%`, `k`, `x`, `$`, decimals, grouping) are preserved; respects reduced-motion.
- **Filter-responsive stats:** stat cards now reflect the page's active search + facet filters (tab-independent); stats fold into the list response. Plus an **informational StatCard** (no drill-in action) for derived KPIs like coverage / averages.
- **Pending-delta count cell:** a carried count followed by clickable **`+N` (green) / `−N` (red)** mono chips for pending adds / discontinues — each a deep-link (`CountDeltaCell`).
- **Deep-linking:** list filters are URL-addressable; cross-page chips / links navigate with a facet query (`?account=…`); renamed routes redirect **preserving the query string**.
- **Route rename:** the catalog page is now **`/in-the-market`** (old `/products` 301s to it).
- **App Shell motion:** the collapsible nav **crossfades** its logo (wordmark ↔ crow) and reveals the company name with a `grid-template-rows` animation that wraps freely at full width and is hidden during the transition (no 2-line flash, and **no truncation** of long names).

## What's new in Portal 1.4

> *(The "Accounts → Coverage Map → unified-filters" pass, on top of 1.3. Two items **supersede** earlier specs — update, don't append: Sharp icons and the portal Tooltip.)*

- **Iconography → Sharp.** The portal icon family is now **Material Symbols *Sharp*** (was Rounded) — one font import + the `Icon` class. Glyph names are unchanged, so every existing icon reference keeps working.
- **Tooltip → portal.** `Tooltip` renders into `document.body` (`position: fixed`, viewport-clamped, `z-index: 4000`), so it never clips inside scrolling tables, transformed cards, or map overlays. Keeps the `maxWidth` wrapping variant.
- **New Chip tone `atrisk`** (`#FFF7ED` / `#C2410C`) for "at risk" / "draining" semantics.
- **New primitives: `AccountTypeIcon` + `AccountTypePill`** — the canonical mark + label for an account's type (white disc, thin ring, dark glyph; neutral pill).
- **Inventory "Conditions" palette** — a fixed 6-level diverging health scale (Out of Stock → Heavy Overstock) with locked colors (`--cond-*`) and an ordinal severity, shared by the table and the map.
- **Coverage Map** — a Leaflet basemap (CARTO Light) with a **D3 hexbin overlay** that encodes **two** variables at once (color = Condition, fill area = Demand velocity), plus pins⇄hexbin modes, a click-to-isolate condition legend, floating overlay cards, and a custom hex tooltip. Ships as `maps.css`.
- **Filter Menu `daterange` attribute type** — date ranges are now a first-class facet (rail item → calendar, applied token, "N filters" count). Retires one-off "Date" toolbar buttons.
- **Related-record facet** — filter a list by an attribute of a related record (e.g. Warehouse filters products by the carrying accounts' market).
- **Form patterns** — conditional (toggle-gated) required fields with input masking; **write-only secrets** (`*Set` boolean, "leave blank to keep current"); **async field-level uniqueness** checks with Reactivate / View-profile branches; `FloatingField`/`Input` gain `onBlur(value)` + `helper`.
- **Conventions** — numeric summary values are Geist Mono; spell out "Average"; unit-suffix the value (`12.5 cs/wk`, `45 days`, `471 cs`); encode magnitude as fill **area**, not opacity.
- **Deps** — `leaflet` 1.9.x, `d3-hexbin`, `d3-scale`, `d3-array`; basemap tiles **CARTO "Light All" / "Dark All" @2x** (with the required OpenStreetMap + CARTO attribution).

## What's new in Portal 1.5

> *the "Dark Mode + governed UI" pass on top of 1.4. Two items **supersede** earlier specs: the Conditions palette and "Days on Hand."*

- **Global Dark Mode.** A live, no-reload **light / dark / system** theme (`data-theme` on `<html>`, a `useSyncExternalStore` store, no-flash bootstrap), a full inverted-neutral dark token set (elevation via inset highlight + deep shadow), an App-Shell **theme toggle** (cycles light→dark→system), KO brand marks, and a negative Material-Symbols grade in dark. The Coverage Map swaps to CARTO **dark_all** tiles and themes its overlays. Authoring rule: tinted status/role/category surfaces are **bg/fg token pairs** (`theme.js` is the reference store).
- **Conditions palette → "Palette A"** *(supersedes 1.4)*. A colour-blind-safe diverging Orange→Teal→Purple ramp, WCAG ≥3:1 against both basemaps; same token names, severity, and helpers (`conditions.js` returns `var(--cond-…)`, never hex).
- **Governed UI.** A **hide-vs-disable** affordance model for role capabilities, first-class **disabled** states for `Select` / `Checkbox` / `Input` (lock glyph), and an amber **capability-lock banner**.
- **Forms & flows.** An **Unsaved-Changes "Discard" guard** (with a data-router caveat), a fully specified **two-step Login + dev quick sign-in**, and a tightened **write-only secret** (Mobile PIN) rule.
- **Hardening.** 4px control radii, unified **pending-change** tint language, mono bare-code table columns with em-dash empties + filter↔column parity, granular **audit-record** format, a **Replace-in-place** placement action, the **Route** facet, and **"Days on Hand"** (supersedes "Weeks on Hand").
- **Deps** — adds the CARTO **dark_all** basemap (no new packages).

## What's new in Portal 1.6

> *the "Ink-Forward" pass — primary actions & active navigation move blue → ink.*

- **Ink-forward.** Primary buttons, the active nav row / tab / wizard step / pagination page, and view-mode toggles use **brand ink** (`--p-action`), which **inverts to a white surface in dark**. **Blue** (`--p-primary`) is narrowed to selection / state / focus *inside content* (links, focus, selected rows, filters, controls, calendar, info).
- **Components.** A single **ink wizard track** (green reserved for genuine success), the **ink spinner**, adaptive `--shadow-brutal` + a neo press, the illustrated **EmptyArt** empty states (state-accent dot), and a neutral **row-action icon button**.
- **Brand.** A squared **crow icon** + multi-size favicon for square slots (favicon / app icon / avatar).

## What's new in Portal 1.7

> *the "search + ⌘K + General Stock" pass.*

- **Command Palette (⌘K)** + a portal-wide **Search Query Grammar** (`AND` default · uppercase `OR` · `"exact phrase"` · case- & accent-insensitive) + **`<Highlight>`** match-painting, front-end and back-end in sync.
- **Tokens.** A **search-highlight** family (`--p-highlight` — the only sanctioned yellow) and the **General Stock purple** concept accent (`--p-genstock*`).
- **Iconography.** A canonical **entity-icon** table (one glyph per entity — POD Planner `blur_medium`, Store Promotions `award_star`).
- **Component props.** `Input` clearable ✕ + `?` hint, `Toggle.color`, `Chip.iconRight`, `Tooltip.z`, `Modal tone="general"`.
- **Arrangement Board.** Tray kebab (Add to Section / Discontinue), `Adding` / `Discontinuing` badges, single-indicator **purple** General Stock, the "Suggested →" nudge, and the **Section Picker**.

## What's new in Portal 1.8

> *the "governed + guarded" pass on top of 1.7.*

- **Global Navigation Guard.** The unsaved-changes "Discard" guard now covers **all in-app navigation — sidebar, programmatic, in-page tabs, and hard unloads — under the existing declarative router** (a tiny `register/guard` context; no data router required). *Supersedes the 1.5 back-link-only caveat.*
- **Role-derived RBAC + Settings → Roles & Permissions.** Permissions are now **role-level with no per-user overrides**, edited in a new Settings matrix that **re-syncs every user of a role on save**; the user page is **read-only** about permissions. *Supersedes the 1.5 per-user editor.*
- **Assignment-Edit pattern.** A wide calendar + **live route preview** editor that codifies the **Amber = your edit / Red = real-world conflict** color law, a **legend-as-mini-cell** rule, and an amber **"(preview)"** label for staged views.
- **Maps.** Pins moved to **hover-to-reveal** (with a grace timer) and carry an in-popup **"Edit Assignment"** deep-link back to the list editor.
- **Hardening.** **Masonry** packing for variable-height cards, **native `title=` retired** in favor of the portal `Tooltip`, and **Cancel is ghost/neutral** (blue "Cancel" links retired). New tokens `--p-danger-soft` / `--g-gold-04`; new `NavGuard.jsx` kit + `SCREENS-1.8.md`.

## What's new in Portal 1.9

> *the "Home + shareable URLs + real-anchor navigation" pass.*

- **AppLink — navigation as real anchors.** Every navigating element now renders a real `<a href>`, so the browser's **Open in new tab / ⌘-click / middle-click** all work; a plain left-click is still intercepted and routed through the SPA + the unsaved-changes NavGuard. Applies to the sidebar (incl. flyout), bottom rows, Saved-View cards, list rows, back links, ⌘K results, and count-delta chips — plus a **stretched-link row** pattern for clickable table rows.
- **URL filter-state.** A list's search, facets, sort, and date range live in the **URL query string** (`urlFilters.js`) — copy-paste shareable and reload-safe; relative date presets persist as a **key** (`?range=last-week`). *Supersedes `sessionStorage` / `filterPersist`.*
- **Saved Views.** A `SaveViewButton` in every list / report header bookmarks the page + its exact filters to the Home grid (per-user).
- **Home dashboard.** The post-login landing: role-gated, drag-to-reorder **Health Stat Cards**, a **Saved Views** grid, and a hover-reveal **Crow Fact** easter egg.
- **Login → single page.** One screen (email + password + Sign In), generic "Incorrect email or password" error; dev quick sign-in retained. *Supersedes the 1.5 two-step.*
- **Animated, collapsible nav.** Parent groups **start collapsed** (only the active group auto-expands) and **animate** open / closed (grid-rows + staggered children); the landing item is **Home** (`home`). External Help Center is a real `<a target="_blank">`.

## What's new in Portal 1.10

> *the "Live Ops · Most-Severe · Expected Impact · Portal Overlays" pass.*

- **Live View — a new "live surface" page archetype.** An auto-refreshing (60s, visibility-gated) map + grouped table of every rep's route **today**: a five-state stop vocabulary (Planned / In Progress / Complete / **Incomplete = red** / Skipped = quiet), a **monochrome-routes + blue-focus** map law with pulsing rep dots, group headers with progress + live-activity lines, and the rule *state filters lens the table; identity facets scope both*. Plus an App-Shell **nav alert dot** that mirrors the Incomplete count in all four sidebar states.
- **Coverage-Map hexes → Most Severe.** A hex now takes its **most severe** member by business pain (`SEVERITY_RANK_BY_LEVEL`: OOS worst), never the average — averaging a diverging scale read mixed hexes as "Optimal". Includes the **zoom-reveals-granularity** contract. *Supersedes the 1.4/1.5 averaging.*
- **Expected Impact replaces "Anticipated Lift".** A categorical Minor / Moderate / Significant field with a new **radio-card group** input pattern and the shared **`ImpactBars`** glyph; lists sort by rank, not alphabetically. Subtype fields are now **conditionally mounted** (never disabled placeholders).
- **The overlay layer goes fully portal.** The broadened **portal law** (any floating UI born in a scroll container renders into `document.body`), the canonical **`RowKebab`** row-action menu (flip-up, re-measuring), a **measured Tooltip viewport clamp** (*supersedes the 1.4 fixed clamp*), and the **pinned right-hand actions column** (`.gr-sticky-actions`).
- **Shared table skeleton.** `DataTable.jsx` — `SortHeader` (+ disabled-while-grouped variant), `TableShell` (one scroll container + minWidth), `TableHeader` (owns the sticky z-index), `DataTableFooter` (group-based pagination). Nested mini-tables get sortable headers (Condition sorts by severity).
- **Governance & app shell.** Nav gating is **capability-per-child** (drop child → hide empty group; *supersedes 1.9 role-id nav gating*) over a versioned 22-cap catalog; dev quick sign-in is **id-based** (passwords never reach the client; *supersedes 1.9/1.5*); Help Center **toggles an in-product Messenger** (active state + unread badge, no floating launcher; external-link fallback).
- **Search-highlight law:** match painting is always the yellow `mark.gr-hl` — never a local blue.
- **Also:** Store Layouts **Templates** tab, the plan-relative **week selector** (`?week=`), `gr-livedot` + `.g-live-*` + ported `.g-routemap*` CSS, and `SCREENS-1.10.md`.

## What's new in Portal 1.11 — "Dusk"

> *the restyle pass: dark-first, dusty palette, sharp corners, JetBrains Mono.*

- **Dark mode is the default.** First-run theme preference is `dark` (returning users keep their saved choice; Light/System stay one click away). Every preview page carries a dark-first no-flash bootstrap; the dark neutral ramp gets a **near-black shell with lifted surfaces** (shell `#0F0F0F` → nav `#131316` → surface `#161618` → surface-alt `#202022` — text stays off-white, never pure). New **`--p-surface-nav`** token: the sidebar sits one step below content surfaces in dark, so the nav recedes and cards lift.
- **The Dusk palette.** Primary goes muted: light `#007CFF → #1861AF` (link contrast on white 3.9:1 → **6.3:1**, AA at last) and dark `#3B82F6 → #ADBDD1` (dusty steel — selection reads quiet, 8.8:1). The feedback trio dusts in both modes (dark: success `#44AB89`, warning `#E2A336`, danger `#D84B4B`). Every derived tint — hovers, softs, focus rings, `::selection`, the live pulse — re-bases on the new hues.
- **The `--p-pal-1…10` badge ramp** (ported from the app): one theme-aware foreground per slot + computed 15% `color-mix` tints; the legacy role/category pill pairs become pal-derived compat aliases that flip automatically; **dusty dark variants** across all ten slots; dark General-Stock purple aligns to pal-1.
- **Sharper geometry.** Radii square off — controls 4 → **1px**, cards/menus/floating surfaces 6–10 → **2px** (pills stay round); fields, cards & tables move to **0.5px hairline strokes**; light-mode shadow alphas drop to **×0.25** (dark's inset-highlight elevation is untouched).
- **JetBrains Mono** replaces Geist Mono for data & numbers — self-hosted variable woff2 in `fonts/` (no CDN dependency); page titles settle at **28px** (`--fs-28`).
- **Deliberately vivid:** the Conditions map palette (CARTO legibility + color-blind-safe separation) and the Intelligence gradient are exempt from dusting. *(The gradient's exemption was later revoked — see 1.11.3 below; the Conditions palette remains the sole exemption.)*
- **Hardcode sweep:** `BRAND_BLUE`, Toggle/Checkbox fills, the `.g-link` underline dot (light + new dark variant), live-map pins/rep dots, and `gr-livedot` (now token-driven via `--p-pulse`) all re-based.

### 1.11.2 — Dusk refinements (post-port, from real dark-mode usage)

- **Toggle knob = `--p-surface`, never `#fff`** — a white knob vanished on the dusty-steel dark ON-track. Solid-fill ON track / border-strong OFF track; the knob never takes the fill. *(Supersedes the tinted-track + colored-knob spec.)*
- **Check glyphs = `--p-action-fg`** on every check-on-primary-fill control (checkboxes, select-all/row selects, multi-select lists, drawn-tick pickers) — white checks "disappear" on steel in dark.
- **Checkbox-style squares unified at 1px radius** (drift to 3px/5px removed); true radios, the toggle knob, and pills stay round by shape.
- **Select placeholders lose the trailing `…`** ("Select a type"); search inputs keep it ("Search accounts…").
- **`TableShell` default radius token-bound to `--radius-lg`** (matching Home stat tiles) + the rule: *never hard-code a numeric radius on a surface card* — tokens only, no per-caller overrides.
- Stale vivid-blue hexes swept from the doc's §9 component spec blocks.

### 1.11.3 — Intelligence gradient dusted

- **Light = "Dusk Rose"** `#1861AF → #4338CA → #BE185D` (primary navy → pal-9 indigo → pal-7 magenta; all existing token values). **Dark = the "half-step"** `#9FB6D4 → #929ADB → #D38AAD` — the same rose arc at 30% vivid (fully-dusty stops read too flat on the quiet dark chrome; these bespoke blends are the sanctioned middle). Supersedes the 1.11 "stays vivid" exemption.
- Applies to `--p-intel-gradient`, `--p-intel-start/mid/end`, `--p-intel-tint` (both modes) and the **Echo Pulse** conic rings (a dark variant now exists). **`#007CFF` is fully retired from the system.**

## What's new in Portal 1.12 — "Cockpit"

> *the typography pass: humans read Inter, the machine speaks mono.*

- **JetBrains Mono expands from data into the machine layer.** Two new semantic tokens: **`--font-display`** (page/section/modal titles) and **`--font-control`** (buttons, inputs, selects, filter chips, tabs, menus, pagination + machine labels: table headers, stat labels, overlines + status vocabulary: badges, toasts, liveness chips). Both alias the mono stack — components reference the role, so a future re-tune re-points one token.
- **Inter deliberately survives** where humans actually read: account/product names, prose, helper copy, nav destinations, category/role pills, and the Home greeting (it addresses the person, not the system).
- **Details:** status badges go UPPERCASE mono (1–2 word machine states); buttons keep Title Case (mono alone carries the register); mono sizes on an **integer scale** (10 / 11 / 12 / 13 — fractional sizes evaluated and removed in 1.12.1; scanning caps sit at 11+ for reps on phones); no route line (evaluated and dropped).
- Kit primitives + flagship previews (buttons, controls, live-view, login, table, stat cards, home) updated; remaining specimen pages pick up the pass as they're next touched.

### 1.12.2 — Cockpit typography clarifications (post-port, from real usage)

- **The litmus test** that resolves every Inter ↔ mono edge case: *a **destination or descriptor** a
  human reads to find their way or understand content → Inter; a **control, datum, or the machine
  addressing the operator** → mono.* Corollaries: navigation is a **role, not a location**; page
  title is a **role, not a literal**; **an entity's name is content wherever it appears**; machine
  **speech** is mono at any length, but machine **documents** are content.
- **Filter Menu boundary drawn:** rail categories, pane header, and value rows (entity names) are
  wayfinding/content → **Inter**; the trigger, group overlines, count pills, Select-all, and footer
  count are machine vocabulary → **mono** (spec table in §9 Filter Menu).
- **The Home greeting reverses to mono** (`.g-h1`) — it *is* the page's H1 AND the machine speaking;
  supersedes the 1.12 Inter exception.
- **Two-tier titles:** new **`.g-h1-entity`** (Inter 700 28/1.1, nowrap + ellipsis) for an H1 holding
  a *record's* name — mono H1 = system surface, Inter H1 = you're looking at a record. Mixed surfaces
  switch per state (aggregate Coverage Map → mono; scoped to one product → the product's name, Inter).
- **Text links go mono** (`.g-link`, `BackLink`, standalone action links — machine directions);
  links inside running sentences (`.g-textlink`) keep their sentence's voice. 11/12/13px link sizes
  are all legal — the size rule is *integer*, never even-only.
- **Content pills stay Inter Title Case** (Beer, Sales Rep, account types) vs UPPERCASE-mono status
  badges (ACTIVE, PENDING) — the discriminator is *vocabulary*, not shape.
- **Sizing:** `.g-body-1` 16 → **15px** (pairing under the 26px mono H1; the integer rule is
  mono-only) · `SegmentedTabs` 13 → **600 14px mono** (the scale gains a 14 step) · split-button
  labels **never wrap** (`white-space: nowrap` — shorten the label instead).
- **Conversational surfaces:** assistant reply prose = **mono 14/1.7** (machine speech, verbatim);
  user bubbles = Inter; entity names in response tables stay Inter; and in conversational inputs
  **the typed value renders in the voice of its author** — mono placeholder, Inter as you type.
  General form/search inputs are unaffected (values entering records are data → mono).

## What's new in Portal 1.13 — "Black Ops"

> *(the theme-skin + governed-tables + General-Stock-2.0 pass.)*

- **Theme SKINS.** A second theming axis: `data-skin` layers a token-override block on a resolved
  `data-theme` — no component forks. First skin: **Black Ops**, a near-black ops console (teal
  selection `#86EAE8`, pastel stroke-only badges, 0px radii, 1px hairlines, all-mono type with
  IBM-Plex table cells, ALL-CAPS nav) — and it's the **default theme**. New skin-token contract:
  `--hair`, `--r-ctl/card/nav/tgl(-knob)`, `--st-badge`, `--badge-fill/stroke`, `--tab-on`,
  `--font-cell`, `--tz-*/--tw-*`, `--font-h1`. Theme picker is now a **popover menu** (supersedes
  the cycle toggle).
- **Dark primary re-tuned** to `#A8BFDC` (supersedes 1.11's `#ADBDD1`).
- **The Badge Vocabulary Law**: outlines are for category/type badges only; status badges are
  always fill+dot or text-only+dot. Count/delta chips go bare; new `ServicePill` (name-hash → pal
  slot).
- **Tables 2.0**: content-hugging **CSS subgrid** templates (`minmax(max-content,1fr)`), the
  **8px gap standard**, **zebra rows** (`--p-row-alt` + `.g-zebra`), row dividers removed,
  `contain:inline-size` law for spanning panels (supersedes the 1.10 fixed templates).
- **General Stock Areas 2.0**: GSAs may hold an optional **pinned, sequenced product list**
  (supersedes "no product list"); pars/Display never apply; non-destructive conversion with an
  "Erase par levels?" confirm; glyph = `inventory_2`; violet `--p-genstock` ramp per theme
  (pastel `#C0A6EC` in Black Ops). "Capacity" renames to **"Par Level"**.
- **Maps**: dark-tile contrast filter; selection colors follow `--p-primary` (JS geometry
  resolves the computed value; rebuilds keyed on skin).
- **The Oracle**: the assistant renamed; bare crow marks, full-width responses, "Ask and your
  data shall answer."
- Plus: `--font-h1` (H1 back to Inter outside Black Ops), FilterMenu `numrange`,
  `DataTableFooter trailing`, grouped `Select` headers, `dangerOutline` rename,
  danger-interaction tokens, and the greeting drops its vocative comma.


