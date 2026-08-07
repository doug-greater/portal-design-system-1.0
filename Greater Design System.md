# Greater Design System
### Portal 1.13 "Black Ops" · July 2026

> Greater Industries builds AI that helps wholesalers and distributors make the smartest, most efficient, most profitable decisions across their entire business. From warehouse workers and truck drivers to sales reps and owners — Greater's portal is the cockpit that connects the people who power local economies.

---

## Table of Contents

1. [Overview](#1-overview)
2. [Brand & Logo](#2-brand--logo)
3. [Colors](#3-colors)
4. [Typography](#4-typography)
5. [Spacing](#5-spacing)
6. [Borders & Radii](#6-borders--radii)
7. [Elevation & Shadows](#7-elevation--shadows)
8. [Iconography](#8-iconography)
9. [Components](#9-components)
   - [Buttons](#buttons) (primary · secondary · warning · neutral · ghost · neo)
   - [Row Actions](#row-actions) (Menu primitive · Split button · Kebab)
   - [Inputs & Forms](#inputs--forms)
   - [Controls (Toggle, Checkbox, Radio)](#controls-toggle-checkbox-radio)
   - [Filter Chips](#filter-chips) · [Filter Menu](#filter-menu-consolidated)
   - [Tabs](#tabs)
   - [Pills (Category · Role · label)](#pills-category--role--label)
   - [Status Badge](#status-badge)
   - [Stat Cards](#stat-cards)
   - [Tables](#tables) · [Pagination](#pagination)
   - [Info Banners](#info-banners) · [Batch Actions](#batch-actions-multi-select)
   - [User Avatars](#user-avatars) · [Role Pills](#role-pills-the-pill-applied-to-roles) · [Account Type Icon](#account-type-icon)
   - [Permission Cards](#permission-cards)
   - [Modal & Drawer](#modal--drawer) (incl. the `confirm` variant — formerly Confirmation Dialog)
   - [Toast](#toast) · [Loading & Skeleton](#loading--skeleton) · [Empty States](#empty-states)
   - [Date Picker](#date-picker)
   - [Page Detail Header](#page-detail-header)
   - [App Shell & Navigation Sidebar](#app-shell--navigation-sidebar)
   - [Maps](#maps) · [Live Surfaces (Live View)](#live-surfaces-live-view--110)
   - **New in 1.1:** [Wizard (multi-step flow)](#wizard-multi-step-flow) · [Audit Log, Change Row & Restore](#audit-log-change-row--restore) · [Echo Pulse](#echo-pulse-brand-moment) · [Expandable Rows](#expandable-rows) · [Batch Actions](#batch-actions-multi-select)
   - **New in Phase 3 (Store Layouts):** [Chip](#chip-micro-status) · [Tooltip](#tooltip) · [MenuButton](#menubutton-off-table-disclosure) · [Arrangement Board](#arrangement-board-drag-and-drop) · [Meta Row](#meta-row-progressive-disclosure) · [General Stock Area](#general-stock-area-arrangement-board-sub-pattern) · [Inline Quantity Control](#inline-quantity-control) · [Add-items Picker](#add-items-picker-grouped-multi-select) · [CSV Import](#csv-import)
   - **New in 1.3 (shell + motion):** [Deep-linking (URL facets)](#deep-linking-url-facets) · StatCard count-up + informational variant (§9 Stat Cards) · `--p-shell` / `--shadow-surface` (§3 / §7) · pending-delta count cell (§9 Tables) · App Shell collapse motion (§9 App Shell)
   - **New in 1.4 (Coverage Map + unified filters):** [Inventory Conditions](#inventory-conditions-data-viz--domain-palette) · Coverage Map (§9 Maps) · [Account Type](#account-type-icon) primitives · `atrisk` Chip tone (§9 Chip) · Filter Menu `daterange` + related-record facet (§9 Filter Menu) · conditional/write-only-secret & async-uniqueness forms (§9 Inputs) · **Sharp icons** (§8) & **portal Tooltip** (§9) *supersede* prior specs
   - **New in 1.5 (Dark Mode + governed UI):** **Theming — light/dark/system** (§3) · full dark token block + flip-pairs · **Conditions → Palette A** (§9, *supersedes*) · dark Coverage-Map basemap (§9 Maps) · disabled/locked control states + capability-lock banner (§9 Inputs/Info Banners) · **Permissions & Affordances** hide-vs-disable + **Unsaved-Changes guard** (§9) · two-step **Login** + dev sign-in (§9) · 4px control radii (§6) · pending-tint unification · **Days On Hand** (*supersedes* Weeks) · `ballot`=Sales (§8) · Appendix A (RBAC vocab)
   - **New in 1.6 (Ink-Forward):** primary actions & active navigation move **blue → ink** via the new `--p-action` family (§3) — primary buttons, active nav row / tab / wizard step / pagination page, view-mode toggles · **dark-mode action inversion** (white surface, near-black text) · **blue narrowed** to selection / state / focus inside content · adaptive `--shadow-brutal` + neo press (§7 / §9 Buttons) · single **ink wizard track** (green reserved for genuine success) · **ink spinner** (§9 Loading) · illustrated **EmptyArt** empty states with state-accent dot (§9 Empty States) · neutral **row-action icon button** (§9 Row Actions) · squared **crow icon** for square slots (§2 Brand)
   - **New in 1.7 (Search · ⌘K · General Stock):** [Command Palette (⌘K)](#command-palette-k--17) + portal-wide [Search Query Grammar & Highlight](#search--highlight-17) (`AND` default · uppercase `OR` · `"phrase"` · accent-insensitive) · search-highlight token `--p-highlight` (the only sanctioned yellow) + **General Stock purple** concept tokens `--p-genstock*` (§3) · **Entity-icon canon** (§8 — POD Planner `blur_medium`, Store Promotions `award_star`) · `Input` clearable ✕ + `?` hint · `Toggle.color` · `Chip.iconRight` · `Tooltip.z` · `Modal tone="general"` (§9) · **Arrangement Board** tray kebab (Add to Section / Discontinue), `Adding` / `Discontinuing` badges, single-indicator purple General Stock, "Suggested →" + **Section Picker** (§9) · z-index ladder + the fixed-inside-`sticky`/`transform` rule (§7)
   - **New in 1.8 (Governed RBAC · Global Nav Guard · Assignment-Edit):** the unsaved-changes guard goes **global** — sidebar + programmatic + in-page tabs + hard unload under the declarative router (new `NavGuard.jsx`) *[supersedes the 1.5 data-router caveat]* · **role-derived RBAC** — one role→capability matrix in **Settings → Roles & Permissions** that re-syncs all users on save; the user page is **read-only** *[supersedes the 1.5 per-user editor]* · **Masonry** card packing (§12) · the **Assignment-Edit** modal + the **Amber = edit / Red = conflict** color law + **legend-as-mini-cell** + amber **"(preview)"** (§9 / §3 / Maps) · Maps **hover-reveal pins** + in-popup **Edit** deep-link (`.g-map-popup-edit`) · native **`title=` → portal Tooltip** · **Cancel = ghost / neutral** (retire blue links) · tokens `--p-danger-soft` / `--g-gold-04` (§6) · icon adds (§8) · `SCREENS-1.8.md`
   - **New in 1.9 (Home + shareable URLs + anchor navigation):** **AppLink** — navigation renders a real `<a href>` (open-in-new-tab / ⌘-click) while routing plain clicks through the NavGuard; the **anchor-navigation law** (§9 / §12 / §15) · **stretched-link rows** for clickable table rows (§9 Tables) · `BackLink` gains `to`; external links are real `<a target=_blank>` · **URL filter-state** (`urlFilters.js`) is the single source of truth, relative presets persist as a key *[supersedes `sessionStorage`/`filterPersist`]* (§ Deep-linking / State & URLs) · **Saved Views** + `SaveViewButton` (§9) · **Home dashboard** — role-gated drag-orderable Health Stat Cards + a Saved-Views grid + the Crow Fact easter egg (§9 / §12) · **Login → single page** *[supersedes the 1.5 two-step]* (§9) · App Shell nav **collapsed-by-default + auto-expand-active + animated** (grid-rows + stagger), landing item **Home** (`home`) (§8 / §9 / §10) · role-gating keys off **real role ids** (§15)
   - **New in 1.11 "Dusk" (dark-first · dusty palette · sharp corners · JetBrains Mono):** **dark is the default theme** — first-run pref = `dark`, previews bootstrap dark, docs author dark-first (§3 Theming) · **Dusk palette** — primary `#007CFF/#3B82F6 → #1861AF/#ADBDD1` (light link contrast 3.9→6.3:1; dark selection goes quiet steel), feedback trio dusted in both modes, all derived tints/focus rings/`::selection`/live-pulse re-based (§3) · the **`--p-pal-1…10` badge ramp** ported from the app — one fg per slot + computed 15% `color-mix` tints; role/category pill pairs are now pal-derived compat aliases; **dusty dark variants** incl. reserved slots 7–10; dark genstock aligns to pal-1 (§3 / §9 Role Pills) · **deepened dark neutrals** (near-black shell `#0F0F0F` → nav `#131316` → surface `#161618` → surface-alt `#202022`; ink stays off-white `#F2F2F4`; new `--p-surface-nav` token — the sidebar recedes a step below content) (§3) · **radii squared** — controls 4→**1px**, cards/menus/floats 6–10→**2px**, pills stay round (§6) · **0.5px hairline strokes** on fields/cards/tables + **×0.25 light shadows** (§6/§7) · **JetBrains Mono** replaces Geist Mono (self-hosted variable woff2) (§4 / `fonts/`) · page title **28px** (`--fs-28`) (§4) · **exempt by design:** the Conditions map palette (legibility) and the Intelligence gradient (brand moment) stay vivid · hardcoded old blues swept portal-wide (`BRAND_BLUE`, Toggle/Checkbox, `.g-link` dot, live-map pins, `gr-livedot` → `--p-pulse`)
   - **New in 1.12 "Cockpit" (typography — humans read Inter, the machine speaks mono):** JetBrains Mono expands from data into **titles** (`.g-h1/h2/h3`, modal/drawer titles — new `--font-display`) and **everything the user operates + machine labels + status vocabulary** (buttons, inputs, selects, filter chips, tabs, menus, pagination, table headers, stat labels, section titles/overlines, badges, toasts, liveness chips — new `--font-control`); both tokens are semantic aliases of the mono stack (§4). **Inter deliberately survives** for content humans read: account/product names, prose, helper copy, nav destinations, category/role pills, the Home greeting. **Status badges go UPPERCASE mono**; buttons keep **Title Case**; mono sizes land on an **integer scale** — 10 · 11 · 12 · 13 (no fractional sizes; caps labels used for scanning sit at 11+ for field/phone use). Config locked from the approved Cockpit mock: no route line, Title Case controls. Kit + flagship previews updated; remaining preview pages sweep as touched.
   - **New in 1.13 "Black Ops" (theme skins · governed subgrid tables · General Stock 2.0):** a second theming axis — **`data-skin`** layers a token-override block on a resolved `data-theme`, no component forks; the **skin-token contract** (`--hair`, `--r-ctl/card/nav/tgl(-knob)`, `--st-badge`, `--badge-fill/stroke`, `--tab-on`, `--font-cell`, `--font-h1`, `--tz-*/--tw-*`) with defaults equal to the old literals + THE MAINTENANCE LAW: new components consume the tokens, never shape/type literals (§3 Theming / §6) · first skin **Black Ops** — near-black ops console (teal selection `#86EAE8` promoted from pal-6, which re-slots to apricot; pastel stroke-only category badges; 0px radii + 1px hairlines; all-mono type with **IBM Plex Sans table cells**; ALL-CAPS parent/util nav with teal selection rows; 22/700 H1) — **and it is the DEFAULT THEME** (supersedes 1.11 "dark default") · **ThemeMenu popover** (`row/rail/iconbtn/login` variants) supersedes the 1.5 cycle toggle · **dark primary re-tuned `#ADBDD1` → `#A8BFDC`** (§3) · **the Badge Vocabulary Law** — outlines are for **category/type** badges only; **status** badges are always fill+dot or text-only+dot; count/delta chips go bare; new `ServicePill` (name-hash → pal slot) (§9 Pills / Status Badge) · **Tables 2.0** — content-hugging **CSS subgrid** templates (`minmax(max-content,1fr)`), the **8px gap standard**, **zebra rows** (`--p-row-alt` + `.g-zebra`, peer rows only), row dividers removed, `contain:inline-size` law for spanning items, `DataTableFooter trailing`, all footers via the shared component (§9 Tables) · **General Stock Areas 2.0** — a GSA may hold an **optional pinned, sequenced product list**; pars/Display never apply; non-destructive conversion + "Erase par levels?" confirm; glyph `inventory_2`; **"Capacity" renames to "Par Level"**; per-theme violet `--p-genstock` ramp (§9 Arrangement Board) · **maps** — dark-tile contrast filter; selection colors follow `--p-primary` (JS geometry resolves computed values, rebuilds keyed on `skin`); popups stay hardcoded light-navy by design (§9 Maps) · **The Oracle** — the Insights assistant renamed; bare crow marks, full-width responses, hairline composer (§9) · plus `--font-h1` (H1 re-humanized to Inter outside Black Ops), FilterMenu **`numrange`**, grouped `Select` headers, `dangerOutline` renames `warning`, danger-interaction tokens, greeting drops the vocative comma
   - **New in 1.12.2 (Cockpit typography clarifications — post-port, from real usage; adds the litmus test):** *is it a **destination/descriptor** a human reads → Inter; a **control, datum, or the machine addressing the operator** → mono* — with four corollaries: navigation is a **role, not a location**; page title is a **role, not a literal**; **an entity's name is content wherever it appears**; machine **speech** is mono at any length but machine **documents** are content (§4). Concretely: **Filter Menu** rail/pane-header/value rows = Inter, its trigger/overlines/counts/Select-all/footer = mono (§9 Filter Menu) · the **Home greeting reverses to mono** (`.g-h1` — it's the page title AND the machine speaking; supersedes the 1.12 Inter exception) · **two-tier titles** — new **`.g-h1-entity`** (Inter 700 28/1.1, nowrap+ellipsis) for H1s holding a *record's* name; `.g-h1` mono = system surface (§4) · **text links go mono** (`.g-link`, `BackLink`, action links — machine directions; in-sentence `.g-textlink` keeps its sentence's voice) · **content pills stay Inter Title Case** vs UPPERCASE-mono status badges — the discriminator is *vocabulary*, not shape · **`.g-body-1` 16 → 15px** (pairing under the 26px mono H1; integer rule is mono-only, odd Inter sizes fine) · **`SegmentedTabs` 13 → 600 14px mono** (scale gains a 14 step) · **split-button labels never wrap** (`white-space: nowrap`) · **conversational surfaces**: assistant reply prose = mono `14/1.7`, user bubbles = Inter, and in conversational inputs *the typed value renders in the voice of its author* (mono placeholder → Inter as you type; general form inputs unaffected).
   - **New in 1.11.3 (Intelligence gradient dusted — supersedes the 1.11 "vivid" exemption):** the gradient joins Dusk. **Light = "Dusk Rose"** `#1861AF → #4338CA → #BE185D` (primary navy → pal-9 indigo → pal-7 magenta — all existing token values); **dark = the "half-step"** `#9FB6D4 → #929ADB → #D38AAD` (the rose arc at 30% vivid — fully-dusty stops read too flat on the quiet chrome; these bespoke blends are the sanctioned middle). Applies to `--p-intel-gradient` / `--p-intel-start/mid/end` / `--p-intel-tint` (both modes) and the **Echo Pulse** conic rings (dark variant added). **`#007CFF` is now fully retired.** The Conditions map palette remains the sole vivid exemption.
   - **New in 1.11.2 (Dusk refinements — post-port, from real dark-mode usage):** **Toggle knob = `--p-surface`, never `#fff`** — solid-fill ON track, border-strong OFF track (a white knob vanished on the dusty-steel dark track; §9 Toggle, *supersedes the tinted-track/colored-knob spec*) · **check glyphs = `--p-action-fg`** on every check-on-primary-fill control (white checks "disappear" on steel in dark; §9 Checkbox) · **all checkbox-style squares → 1px radius** (drift to 3px/5px unified; radios/pills/knobs exempt by shape; §9/§6) · **Select placeholders lose the trailing `…`** (search inputs keep it; §9 Inputs / §11 Voice) · **`TableShell` radius token-bound to `--radius-lg`** + the *reference-the-token-never-the-number* rule for all surface cards (§9 Tables / §6) · stale vivid-blue hexes swept from the §9 component spec blocks
   - **New in 1.10 (Live Ops · Most-Severe · Expected Impact · Portal Overlays):** **Live View** — a new *live-surface* page archetype (auto-refreshing map + grouped table of every rep's day, a five-state stop vocabulary, a monochrome-routes map law) + an App-Shell **nav alert dot** ([Live Surfaces](#live-surfaces-live-view--110) / §9 App Shell / Maps) · Coverage-Map hexes now aggregate by **Most Severe** business severity *[supersedes the 1.4/1.5 averaging]* (§9 Maps / Inventory Conditions) · **Expected Impact** (categorical) + the **radio-card** input + `ImpactBars` *[supersedes numeric "Anticipated Lift"]* + **conditional Subtype** (§9 Inputs) · shared **DataTable** primitives (`SortHeader`/`TableShell`/`TableHeader`/`DataTableFooter`), **RowKebab** portal row-menu *[supersedes inline kebabs]*, **pinned actions column**, nested-table sorting (§9 Tables) · **Tooltip** measured viewport clamp *[supersedes the 1.4 fixed clamp]* (§9) · search-highlight **yellow-only** (§9) · relative **week selector** (§9 Filters) · nav gating **capability-per-child** *[supersedes 1.9 role-id gating]* + feature-aligned cap catalog (§9 App Shell / Appendix A) · dev sign-in **id-based, no client secrets** (§9 Login) · Help Center → **in-product Messenger** (§9 App Shell) · **Store Layout Templates** tab (§9) · tokens `gr-livedot` / `.g-live-*` / `.g-routemap*` / `.gr-sticky-actions` · `SCREENS-1.10.md`
10. [Motion](#motion)
11. [Voice & Copy](#voice--copy)
12. [Layout](#layout)
13. [CSS Token Reference](#13-css-token-reference)
14. [Fonts](#14-fonts)
15. [Working With This System](#15-working-with-this-system)

---

## 1. Overview

The Portal design system supports two coexisting visual languages:

| Layer | Where Used | Primary Color | Character |
|---|---|---|---|
| **Portal** | The entire shipping product UI (~99% of surface) | `#1861AF` (blue) + `--p-action` ink | Cool-gray neutrals, 14–16px Inter, tight headlines, ink-forward actions |
| **Brand moments** | Login + the post-auth Echo Pulse — rare, deliberate | the intelligence gradient (Dusk Rose since 1.11.3) | The neo-brutalist login button + the intelligence gradient; everything else is Portal |

**Use Portal tokens for all product work.** The neutral ramp is the ink-forward ramp (no separate gray scale) and there is a single brand blue; the only deliberately branded elements are the neo login button and the intelligence gradient — keep them rare.

The portal is information-dense — big data tables, filter chips, stat cards, comparison charts. It is designed for operators who live in the tool all day, not marketing surfaces.

---

## 2. Brand & Logo

### Assets

| Asset | File | Usage |
|---|---|---|
| Wordmark (primary) | `assets/greater-logotype.png` | Default in-product mark. Nav, auth screens, emails, documents. |
| Wordmark (knockout) | `assets/greater-logotype-ko.png` | Dark surfaces, photography overlays, dark-mode chrome. |
| Crow mark | `assets/greater-crow.png` | Tight spaces: app icon, favicon, avatar, loading states, tab icon. |
| Crow mark (knockout) | `assets/greater-crow-ko.png` | Dark-mode favicon, inverse avatars. |

### Rules

- **Do not** use the combined lockup (crow + wordmark) inside the product — that is the corporate marketing logo. In-app, use the wordmark or the crow, never both together.
- Use the wordmark at 100–300px wide. Do not skew, do not recolor.
- Brand name is always **"Greater"** or **"Greater Industries"** — never abbreviated, never all-caps, never stylized.

---

## 3. Colors

### Neutrals — the ink-forward ramp

There is **one** neutral ramp: the Portal ink-forward ramp. Use the `--p-*` names directly. The legacy `--g-*` neutral tokens are kept only as **aliases** of it, so older usages resolve to ink:

| Alias | Resolves to |
|---|---|
| `--g-black` | `--p-ink` |
| `--g-dark-gray` | `--p-text-2` |
| `--g-medium-gray` | `--p-muted` |
| `--g-light-gray` | `--p-border-strong` |
| `--g-off-white` | `--p-surface-tint` |
| `--g-white` | `#FFFFFF` (constant — inverted foreground) |

### Foundation Transparency Ladder (overlays on black)

| Token | Value | Role |
|---|---|---|
| `--g-black-100` | `rgba(0,0,0,1)` | Full opacity |
| `--g-black-25` | `rgba(0,0,0,.25)` | Inactive buttons |
| `--g-black-10` | `rgba(0,0,0,.10)` | Label-tag backgrounds |
| `--g-black-05` | `rgba(0,0,0,.05)` | Selected row backgrounds |

### Tinted Surfaces (25% / 10% / 5% of accent over white)

| Token | Value |
|---|---|
| `--g-blue-25` | `rgba(24,97,175,.25)` |
| `--g-blue-10` | `rgba(24,97,175,.10)` |
| `--g-blue-05` | `rgba(24,97,175,.05)` |
| `--g-red-10` | `rgba(201,74,78,.12)` |
| `--g-green-10` | `rgba(0,188,87,.12)` |
| `--g-gold-10` | `rgba(219,158,3,.12)` |
| `--g-purple-10` | `rgba(123,104,238,.12)` |

### Portal Neutral Ramp

| Token | Hex | Role |
|---|---|---|
| `--p-ink` | `#101828` | Headings |
| `--p-text` | `#364153` | Body text, icon defaults |
| `--p-text-2` | `#4A5565` | Body secondary |
| `--p-muted` | `#6A7282` | Metadata / captions |
| `--p-placeholder` | `#99A1AF` | Input placeholder / muted count |
| `--p-border` | `#E5E7EB` | 1px dividers, table borders |
| `--p-border-strong` | `#D1D5DC` | Input borders |
| `--p-surface` | `#FFFFFF` | Default surface (cards, tables, nav, modals) |
| `--p-surface-alt` | `#F9FAFB` | Table header / zebra rows |
| `--p-surface-tint` | `#F3F4F6` | Tab-strip background |
| `--p-shell` | `#FDFCF9` | **Page / canvas background** — warm off-white; never for cards |

### Portal Primary — "Dusk" muted navy / dusty steel (1.11 · dark re-tuned 1.13 · supersedes the vivid blues)

> **1.13 dark re-tune:** standard Dark mode's primary is **`#A8BFDC`** — a half-step bluer/cooler steel than 1.11's `#ADBDD1`, user-picked. Full derived ramp follows the same deltas (`hover #BED1E9 · soft/tint/focus-ring/pulse alphas on 168,191,220 · ink #BACDE6 · --g-blue-10 .16`). Contrast at sign-off: on surface **9.60:1** (was 9.45), surface-alt 8.64, surface-tint 7.37, `::selection` ink 11.18 — all AA+; luminance rose only +1.7%, so the existing alphas produce no extra glow. `--p-intel-start #9FB6D4` stays ("near primary steel" still holds). Black Ops overrides the whole family in its own block. ⚠ When porting: a batched edit once **silently dropped the five core declarations** while the docs already said `#A8BFDC` — after any bulk token edit, grep for BOTH hexes; the only surviving `#ADBDD1` anywhere should be historical prose.

| Token | Light | Dark | Role |
|---|---|---|---|
| `--p-primary` | `#1861AF` | `#A8BFDC` (1.13 — was `#ADBDD1`) | Links, focus, selection (state inside content) |
| `--p-primary-hover` | `#134E8C` | `#C3CFDE` | Hover state |
| `--p-primary-soft` | `#D9E3F0` | `rgba(173,189,209,.18)` | Active count badge backgrounds · `::selection` |
| `--p-primary-tint` | `#EDF2F8` | `rgba(173,189,209,.10)` | Row hover / info backgrounds |
| `--p-primary-ink` | `#1861AF` | `#BFCBDB` | Link text |

> **Blue's job narrowed in 1.6; its hue dusted in 1.11.** `--p-primary` remains reserved for **selection, state & focus _inside content_** — links, focus rings, input/field focus, selected rows, applied filters, checkboxes/toggles, calendar selection, info. The **commitment & navigation** color stays `--p-action` (below). Dusk consequences: light-mode link contrast on white rises **3.9:1 → 6.3:1** (AA for text); dark-mode selection/link chrome reads as **quiet, nearly-neutral steel** at 8.8:1 — a deliberate, signed-off tradeoff of pop for calm. **`#007CFF` is fully retired as of 1.11.3** — the Intelligence gradient (its last holdout) was dusted too.

### Portal Action (Ink-Forward)

The **commitment & active-navigation** color (1.6): primary buttons, the active nav row, the active tab, the active wizard step, the active pagination page, active view-mode toggles, and the `neo` button shadow. **Inverts to a white surface in dark mode** (the Linear/macOS treatment). Components must reference these tokens — never hardcode `#000`/`#fff` for primary actions or active nav, or dark mode breaks.

| Token | Light | Dark | Role |
|---|---|---|---|
| `--p-action` | `#101828` (= `--p-ink`) | `#FFFFFF` | Primary-action / active-nav surface |
| `--p-action-hover` | `#000000` | `#E4E4E7` | Hover / pressed |
| `--p-action-fg` | `#FFFFFF` | `#0A0A0B` | Label / icon on the action surface |
| `--p-action-disabled-bg` | `#C7CBD3` | `#3F3F46` | Disabled action surface |
| `--p-action-disabled-fg` | `#FFFFFF` | `#71717A` | Label on disabled action |

### Portal Feedback — dusted (1.11)

| Token | Light | Dark | Role |
|---|---|---|---|
| `--p-success` | `#21C06B` | `#44AB89` | Success (dots / fills; text uses the `-bg/-fg` pair) |
| `--p-warning` | `#B98A2E` | `#E2A336` | Warning / unsaved-edit amber |
| `--p-danger` | `#C94A4E` | `#D84B4B` | Danger / error (light: 4.6:1 on white, up from 4.0) |
| `--p-danger-strong` | `#DC2626` | `#E38080` | Strong danger (small text) |
| `--p-danger-soft` (1.8) | `#F8EAEA` | `rgba(216,75,75,.18)` | Red **wash** for "conflict" calendar cells / buffer flags (§Amber/Red law) — the fill under `--p-danger` text; distinct from the `--g-red-10` chip/banner tint |

The semantic **laws are unchanged** — amber = your unsaved edit, red = real-world conflict, green = genuine success — only the hues went dusty. The `--g-red/green/gold-10` tints re-base on these values in both modes.

### Portal Search Highlight (1.7)

The **only sanctioned use of yellow** in Portal. Reserved exclusively for highlighting the literal characters a search query matched (see §9 Highlight). Never use it for warnings, selection, or emphasis. Dimmed in dark.

| Token | Light | Dark | Role |
|---|---|---|---|
| `--p-highlight` | `#FDE68A` | `rgba(250,204,21,.32)` | Match fill (`mark.gr-hl` background) |
| `--p-highlight-fg` | `#4A3000` | `#FDE68A` | Match text |

### Portal General Stock (purple concept accent · 1.7 · per-theme ramp 1.13)

**`--p-genstock` is a three-token family per theme (1.13 §J — supersedes the single 1.7 purple):**

| theme | `--p-genstock` | `--p-genstock-ink` | `--p-genstock-tint` |
|---|---|---|---|
| Light | `#7C3AED` | `#6B21A8` | `rgba(124,58,237,.12)` |
| Dark | `#AF98C8` (aligns to pal-1) | `#C9B6DE` | `rgba(175,152,200,.18)` |
| **Black Ops** | **`#C0A6EC`** (pastel violet) | `#D2BEF2` | `rgba(192,166,236,.16)` |

> **[RULE]** Under Black Ops the GSA accent initially inherited a red-leaning tone and read as a *warning*; the user rejected it. **The General-Stock accent must always read as a CATEGORY hue (the violet family) — never a feedback hue.**

Concept accent for the Store-Layout **"General Stock Area"** section type only. Establishes purple as that feature's identity color, parallel to how blue = action, green = add, red = remove. Reuses the foundation purple but is exposed as **semantic** tokens so it themes and can be reused.

| Token | Light | Dark | Role |
|---|---|---|---|
| `--p-genstock` | `#7C3AED` | `#A78BFA` | Toggle fill / icon |
| `--p-genstock-ink` | `#6B21A8` | `#D8B4FE` | Label text / strong fg |
| `--p-genstock-tint` | `rgba(124,58,237,.12)` | `rgba(167,139,250,.18)` | Badge / modal icon-disc bg |

### Portal Badge Palette — `--p-pal-1…10` (1.11, ported from the app; supersedes hand-picked pill pastels)

**One theme-aware foreground per slot; a badge's background is always a computed 15% tint** (`color-mix(in oklab, var(--p-pal-N) 15%, transparent)`) — never a hand-picked pastel. Roles and product categories reference **slot numbers** (the app's `roles.py` stores the slot). Light stays vivid (Dusk Q3); **dark carries the dusty variants** from the Theme-Lab export. To expand the role/category set, take a reserved slot — don't mint new tokens.

| Slot | Light | Dark (dusty) | Assigned to |
|---|---|---|---|
| `--p-pal-1` | `#6B21A8` | `#AF98C8` | violet — Executive, Wine |
| `--p-pal-2` | `#1447E6` | `#84A8D2` | blue — Dept Manager, RTD |
| `--p-pal-3` | `#047857` | `#9CCEBA` | green — IT Admin, Non-Alc |
| `--p-pal-4` | `#BB4D00` | `#D8C997` | amber — Beer |
| `--p-pal-5` | `#4A5565` | `#B8B8C1` | slate — Sales Rep |
| `--p-pal-6` | `#C2410C` | `#E5CAAE` | orange — Supervisor, Spirits |
| `--p-pal-7` | `#BE185D` | `#C9A6B6` | pink — reserved |
| `--p-pal-8` | `#0E7490` | `#96C3CB` | cyan — reserved |
| `--p-pal-9` | `#4338CA` | `#A6AFD2` | indigo — reserved |
| `--p-pal-10` | `#57534E` | `#D6D3D1` | stone — reserved |

**Category pills** are pal-derived compat aliases (`--p-pill-{beer|wine|spirits|rtd|nonalc}-bg/fg`): fg = the slot, bg = the 15% mix. New work should reference slots directly.

### Semantic Aliases

```css
--fg-1: var(--p-ink)          /* Strongest text */
--fg-2: var(--p-text)
--fg-3: var(--p-muted)
--fg-4: var(--p-placeholder)
--fg-link: var(--p-primary)   /* links / focus / selection stay blue */
--action: var(--p-action)     /* commitment & active-nav (ink-forward) */
--action-fg: var(--p-action-fg)
--fg-invert: var(--g-white)

--bg-1: var(--p-surface)
--bg-2: var(--p-surface-alt)
--bg-3: var(--p-surface-tint)
--bg-hover: var(--p-primary-tint)

--border-1: var(--p-border)
--border-2: var(--p-border-strong)
--border-focus: var(--p-primary)
```

### Color Rules

- **Ink-forward (the core rule, 1.6).** Brand **ink** (`--p-action`) is the color of **commitment & navigation** — primary buttons, the active nav row, the active tab, the active wizard step, the active pagination page, active view-mode toggles. **Blue** (`--p-primary`) is reserved for **selection, state & focus _inside content_** — links, focus rings, input/field focus, selected rows, applied filters, checkboxes/toggles, calendar selection, info. Two tests resolve edge cases: **chrome vs content** (control chrome → ink; something inside the data → blue) and **location vs target** (a "you are here" marker → ink; a thing you select to act upon → blue). In **dark mode the action inverts** to a white surface with near-black text.
- **Concept-accent legend (1.7).** Each meaning owns a color: **blue = action / link / selection**, **green = add**, **red = remove / destructive**, **amber = warning / suggestion**, **yellow = search-highlight only**, **purple = General Stock**. When a feature needs a distinct identity, add it as **semantic tokens** (light + dark), never inline hex, and document what it means next to the token (see General Stock purple). Add concept colors sparingly.
- **Amber = your edit / Red = real-world conflict — the editing law (1.8).** On any **staged-edit surface** (the Settings role editor, the Edit Assignment modal), **amber** (`--p-warning` / `--g-gold-10`) means *"you changed this"* (staged, unsaved); **red** (`--p-danger` / `--p-danger-soft`) means *"this is a real-world conflict / warning"* (e.g. a calendar buffer or date violation). **Never mix them:** an edited-but-valid field is amber; a field that *also* violates a constraint shows the red warning. They are semantically different and must stay visually separate — staged amber also drives the §Unsaved-changes guard, while red flags a hard constraint.
- **Search highlight = the only yellow.** `--p-highlight` / `--p-highlight-fg` are reserved exclusively for the literal characters a search query matched (§9 Highlight) — never for warnings, selection, or emphasis.
- Tints are always 25% / 10% / 5% of the accent over white — never ad-hoc.
- No gradients in product surfaces. No full-bleed imagery. No repeating patterns.
- **Page canvas = `--p-shell` (#FDFCF9); surfaces = white.** The app content area, the wizard workflow area, the login screen, and the loading screens render on Shell. Cards, tables, panels, modals, popovers, the side nav, and wizard chrome stay white (`--p-surface`) so they lift off the warm canvas — never paint a full page white. (Login is the raven centered on Shell; the restraint is still the brand.)

---

### Theming — THEMES + SKINS (1.5 · dark default 1.11 · skins + Black Ops default 1.13)

The portal ships a full **light + dark theme**, toggled live with no reload — and since 1.13 a second axis: a **SKIN** is a token-override layer applied **on top of a resolved theme** (`html[data-skin="…"]` — one CSS block in the token sheet, after the dark block; **no selectors forked per-component**). **Black Ops is the default theme** (supersedes 1.11's "dark default"): a first-run user (no stored pref) gets **`blackops`**, the product's primary authored canvas. Stored preferences are never overridden; Light / Dark / System remain one click away in the ThemeMenu.

**Theme model — four preferences, two resolved themes, one optional skin:**

- **`pref`** — `"light" | "dark" | "blackops" | "system"`, persisted in `localStorage["gr-theme"]` (**default `"blackops"` since 1.13**). A retired experimental pref `"blackops-variant"` (the sandbox skin that *graduated into* Black Ops) migrates silently in `getPref()`.
- **`resolved`** — `"light" | "dark"`. **`blackops` resolves to `"dark"`** — every dark CSS rule and every `resolved === "dark"` JS check (map tiles, KO logo swaps, Material grade) keeps working untouched. `system` resolves via `window.matchMedia("(prefers-color-scheme: dark)")` and **follows OS changes live**.
- **`skin`** — `"blackops" | null`; additionally sets **`data-skin`** on `<html>` (`applyPref` sets **or removes** it).
- Applied by setting **`data-theme`** (+ `data-skin`). All dark tokens live under **`html[data-theme="dark"]`**; light is the bare `:root`; skin overrides live under **`html[data-skin="blackops"]`**.
- `useTheme()` returns `{ pref, resolved, skin, setPref, cycle }`. The module calls `applyPref(_pref)` **at init** as a safety net — a stale cached `index.html` bootstrap once left the app unthemed after reload.

> **The skin-token contract + THE MAINTENANCE LAW (1.13).** Skins re-tune shape, stroke and type purely through `:root` tokens whose **defaults equal the previous literals** (Light/Dark render pixel-identical): `--hair` (hairline width) · `--r-ctl/--r-card/--r-nav` (control/container/nav radii) · `--r-tgl/--r-tgl-knob` (switch) · `--st-badge` + the unset `--badge-fill`/`--badge-stroke` fallback pair (§9 Pills) · `--tab-on` (selected-tab ink) · `--font-cell` (table-cell prose) · `--font-h1` (§4) · `--tz-h1/-h1-m/-h1-ent/-sub/-tab/-btn` + `--tw-h1/-tab/-btn` (text sizing). **New components must consume these tokens, never shape/type literals** — a component that hardcodes `borderRadius: 2` or `"Inter"` silently refuses to reshape under a skin.

> **Single-store rule (this caused a real bug — keep it).** Theme state **must live in one module-level store** read via **`useSyncExternalStore`**, not per-component `useState`. JS-driven views (the Leaflet Coverage Map) rebuild their tiles inside an effect keyed on `resolved`; if each `useTheme()` hook held its own copy, the map would **not** re-render on toggle. Reference module: `ui_kits/portal/theme.js`.

> **No-flash bootstrap (required).** A tiny inline script in `index.html` must read `localStorage["gr-theme"]` and set `data-theme` **AND `data-skin`** before React mounts — for any stored pref beginning `blackops` it hardcodes `data-skin="blackops"` + `data-theme="dark"`; no stored pref = Black Ops (the default). (Every `preview/*.html` page carries the same bootstrap.)

**Dark token model.** The dark theme is a complete inverted-neutral set using **deep tinted blacks** (Vercel/Linear lineage) — re-based in 1.11: a **near-black shell** with clearly-lifted surfaces (shell `#0F0F0F` → nav `--p-surface-nav` `#131316` → surface `#161618` → surface-alt `#202022`, borders `#34343B`/`#45454D`) while text stays off-white (ink `#F2F2F4` — never pure white). The nav sidebar deliberately sits **between shell and surface**, so content cards lift above the nav. **Elevation in dark is expressed by surface lightening + an inset highlight + a deep shadow** — *not* the light-mode soft drop shadows (see §7). The full block is in `colors_and_type.css` under `html[data-theme="dark"]`.

> **Flip-pairs rule (the #1 authoring rule that makes dark "just work").** Any tinted **status / role / category** surface must be authored as a **bg/fg token pair** (`--p-*-bg` / `--p-*-fg`) so the dark block can flip both. **1.11 refinement:** the role + category-pill pairs are now **derived from the `--p-pal-1…10` ramp** (fg = the slot, bg = a computed 15% `color-mix` tint), so flipping the **ramp** flips every badge — the dark block no longer overrides the pairs individually. Components must **never hardcode hex** for these surfaces — always reference the token, or dark mode silently breaks. Tokens that flip: the neutral ramp, primary set, the **action set** (`--p-action*` — inverts to a white surface), the **pal ramp** (dusty in dark), 4 feedback colors, the `--g-*-10` tints, the intel gradient (Dusk Rose light / half-step dark, 1.11.3 — incl. `--p-intel-start/mid/end` + `--p-intel-tint`), the 4 shadows, 3 status pairs (`--p-success/atrisk/neutral-bg/fg`), `--p-overlay-hover`, `--p-focus-ring`, `--p-backdrop`, 2 skeleton stops, `--g-gold-30`, 2 scrollbar stops, `--p-pulse`, `--ms-grad`, and the 8 `--cond-*`.

**Brand marks.** The wordmark + crow swap to **knock-out (KO) variants** in dark (`greater-logotype-ko.png` / `greater-crow-ko.png`), keyed on `resolved`.

**Optical correction.** Material Symbols use a **negative grade in dark** (`--ms-grad: -25`, `0` in light) to counter the illusion that makes light glyphs on dark look bolder — wired through `font-variation-settings: 'FILL' …, 'GRAD' var(--ms-grad, 0)` in the `Icon` primitive.

**Motion.** Limit the theme transition to large resting surfaces only — `body, aside { transition: background-color .2s ease, color .2s ease; }`. **Never** put `transition: all` on everything (it breaks transforms and janks the map).

**ThemeMenu (1.13 — SUPERSEDES the 1.5 cycling toggle).** Theme selection is a **popover menu**: one stable component (`ThemeControl`, `ui_kits/portal/ThemeMenu.jsx`) drives every surface via `variant`:

| variant | placement | trigger anatomy |
|---|---|---|
| `row` | expanded sidebar utility area | `.gr-util`-style row: theme icon + current label ("Black Ops") + `unfold_more` chevron |
| `rail` | collapsed sidebar | 40×36 icon tile; panel opens to the right (`left: calc(100% + 10px)`) |
| `iconbtn` | mobile app bar | 44×44 icon button; panel opens below-right |
| `login` | login screen corner | bare text+icon link, muted → ink on hover, mono 12px |

Options catalog (order fixed): **Light** `light_mode` · **Dark** `dark_mode` · **Black Ops** `shield_moon` · **System** `contrast` (row labels "Light Mode / Dark Mode / Black Ops / System Theme"). Panel: min-width 176, `var(--p-surface)` on `var(--hair) solid var(--p-border)`, `var(--r-card)`, `var(--shadow-float)`, `gr-pop-in .12s`, z-index 10001; an uppercase mono overline **"Theme"** (500 10px `--font-control`, `.08em`) heads the list; the active option is marked. Test-ids: `theme-toggle` / `mobile-theme-toggle` / `login-theme-toggle` (triggers), `theme-menu` (panel), `theme-option-{id}` (items).

### The Black Ops skin (1.13 — the first skin · the default theme)

A near-black **"ops console"**, born from the Theme Lab export and iterated via a live "Variant" sandbox that **graduated into the base theme** (its deltas — teal selection, dimmed pill strokes, apricot pal-6, high-contrast zebra — were folded in; the variant pref was deleted and stored `blackops-variant` prefs migrate). It layers on dark and overrides colors, shape, stroke and type through the skin-token contract. The verbatim block lives in `colors_and_type.css` under `html[data-skin="blackops"]`. Highlights:

- **Neutrals:** shell `#0F0F0F` · surface/nav `#131316` · alt `#202022` · tint `#26262B` · zebra `#212127` (deliberately high-contrast, ~14/channel above surface — user-approved after an A/B against a subtler stripe) · ink `#FAFAFB`.
- **The teal selection story [RULE]:** `#86EAE8` was the export's **pal-6 badge color**, promoted to the selection role (`--p-primary` family + focus ring + pulse + `--g-blue-10`); pal-6 was **re-slotted to pastel apricot `#EFB08A`** so teal reads **only** as the selection signal. The 1.6 blue-law applies unchanged — in Black Ops "blue" simply *is* teal.
- **Badge ramp:** pastel ops palette (`--p-pal-1…10`); genstock goes pastel violet `#C0A6EC` (§9 General Stock).
- **Badges:** tinted fills removed — `--badge-fill: transparent`, `--st-badge: 0.5px`, `--badge-stroke: color-mix(in oklab, currentColor 45%, transparent)` (dimmed stroke, full-bright text; full-brightness strokes and a no-stroke text-only pass were both tried and rejected). **Status badges are exempt** — the Badge Vocabulary Law (§9 Status Badge).
- **Type:** `--font-sans` is overridden to the **mono stack** — the machine speaks EVERYWHERE; the Cockpit "Inter survivals" intentionally do NOT survive here. **Exception: table cells** read **IBM Plex Sans 14** via `--font-cell` and one scoped rule — `html[data-skin="blackops"] .g-tbl [style*="var(--font-sans)"] { font-family: var(--font-cell) !important; }` (`TableShell` carries `className="g-tbl"`; the attribute-selector retarget is the sanctioned skin-level re-fonting trick — brittle by design, documented where used). H1 = **22px/700** (all H1 tokens collapse to 22, incl. entity titles); subtitles 12; tabs 500 12; buttons weight 500.
- **Nav:** **ALL-CAPS** top-level parent + bottom utility rows only — child/sub items keep natural case. ⚠ Never add a nav font-size rule here: an earlier revision matched `span.material-symbols-sharp` and shrank the 22px icons (if ever needed, exclude icons with `:not(.material-symbols-sharp)` and reset their letter-spacing). **Selection rows do NOT use the ink fill in this skin** [supersedes 1.6 *for this skin only*]: teal text, weight 600, on a 10% teal fill box (hover 18% soft); flyout active child + its dot and the collapsed-rail active tile follow the same recipe; focus ring `inset 0 0 0 2px var(--p-primary)`. (A text-only pass was tried first and rejected as too subtle.) **Brand:** the sidebar shows the **crow mark**, not the wordmark, in expanded and mobile headers.
- **Shape:** flat — every radius token 0px, toggles square to 3px/2px, hairlines thicken to **1px**; shadows at 25% intensity.
- **One-offs:** Live View incomplete-banner text 13px (between the 12px subtitle and 22px H1); other themes stay 14px.
- **Deliberate non-coverage:** `theme-lab.html` (a design tool) and doc-local toggles are NOT skinned; `palette.html` / `user-guide.html` *describe* Black Ops.

---

## 4. Typography

### Font Families

| Token | Stack | Role |
|---|---|---|
| `--font-sans` | Inter stack | **Content humans read:** account/product names, prose, helper copy, nav destinations, category & role pills, **entity titles** (`.g-h1-entity`, 1.12.2) |
| `--font-h1` | → `var(--font-sans)` | **Page H1s re-humanized (1.13 — narrows Cockpit):** `.g-h1` is Inter in Light/Dark; Black Ops overrides `--font-sans` itself to mono, so its H1 resolves mono with **no skin-specific rule**. The H1 addresses the person's current place — and the H1 slot is frequently an entity/record context |
| `--font-display` | → the mono stack | **Section titles & headlines** (`.g-h2/h3`, modal & drawer titles — UNCHANGED by 1.13; only the H1 re-pointed) — Cockpit, 1.12 |
| `--font-control` | → the mono stack | **Everything the user operates** (buttons, inputs, selects, filter chips, tabs, menus, pagination) **+ machine labels** (table headers, stat labels, section titles, overlines) **+ status vocabulary** (badges, toasts, liveness chips) — Cockpit, 1.12 |
| `--font-mono` | `"JetBrains Mono", "Geist Mono", ui-monospace, "SF Mono", Menlo, monospace` | Data cells, IDs, numerals, kbd — JetBrains Mono since 1.11 (self-hosted in `fonts/`) |

> **The Cockpit law (1.12): HUMANS READ INTER; THE MACHINE SPEAKS MONO.** It sits beside the color laws (*ink = commitment, blue = selection*): anything that is a title, a control, a machine label, or a system state renders in JetBrains Mono; anything a person *reads* — names, prose, helpers — stays Inter, so reading speed is untouched where it matters. `--font-display` / `--font-control` are **semantic aliases** of the mono stack: components reference the role, never the family, so a future re-tune re-points one token. **Status badges render UPPERCASE mono** (1–2 word machine states). Buttons keep **Title Case** (the casing law survives; mono alone carries the register). Older §9 spec blocks citing Inter shorthand for controls are superseded by this mapping; the kit files are canonical.
>
> **The litmus test (1.12.2 — resolves every edge case):** *is this text a **destination or descriptor** a human reads to find their way or understand content? → Inter. Is it a **control, datum, or the machine addressing the operator**? → Mono.* Four corollaries from applied review:
> 1. **"Navigation" is a role, not a location.** Category rails inside a filter popover are navigation even though they live inside a machine control — they stay Inter (see Filter Menu).
> 2. **"Page title" is a role, not a literal.** A dynamic, personalized greeting is still a page title AND the machine speaking — it goes mono. *(Reverses the 1.12 "Home greeting stays Inter" exception.)*
> 3. **An entity's name is content wherever it appears — including the H1 slot.** The machine doesn't speak someone's name; it presents it → `.g-h1-entity` (Inter). See the two-tier title system below.
> 4. **Machine speech is mono even at paragraph length — but machine *documents* are content.** A chat reply is the machine talking (mono); a generated report/export is an artifact the machine *hands you* (Inter).
>
> **Deliberate Inter survivals (do not "fix"):** nav destination labels (place *names*), account/product names in tables, entity titles, category & role pills, all prose. **Content pill vs status badge — the discriminator is the *vocabulary*, not the shape:** if the word is machine state (ACTIVE, PENDING, DRAFT) it's a status badge → UPPERCASE mono; if it's a human-domain noun (Beer, Sales Rep, an account type) it's a content pill → Inter, Title Case.
>
> **Two-tier titles (1.12.2 §8):** `.g-h1` (system title — mono 600 26/1.25, ls −0.03em) names a *surface or tool*; `.g-h1-entity` (entity title — Inter 700 28/1.1, ls −0.02em, nowrap + ellipsis) names a *record*. The title font tells you which kind of place you're in: mono H1 = system surface, Inter H1 = you're looking at a record. Mixed surfaces switch per state (aggregate Coverage Map = "Coverage Map" → mono; scoped to one product = the product's name → Inter). Practical bonus: mono at display size is very wide and makes human names read as variables.
>
> **Text links are machine directions (1.12.2 §3):** a link that does something or navigates on click renders `500 var(--font-control)`, primary color, hover underline (`.g-link`, `BackLink`, inline action links). Links *inside running sentences* follow their sentence's voice (`.g-textlink` stays Inter). Retained link sizes of 11/12/13px are all **legal** — the size rule is *integer*, not even-only.
>
> **Conversational surfaces (1.12.2 §9):** an assistant's reply IS the machine addressing the operator — chat response prose renders **mono `400 14/1.7`** (line-height raised from 1.65: mono needs more air at length); user bubbles stay Inter (`14/1.5`); entity names inside response tables stay Inter (corollary 3); numeric cells/titles/headers mono. **In conversational inputs the typed value renders in the voice of its author:** placeholder = mono (the machine inviting you to speak), typed value = Inter (your speech — no costume change on submit). This does NOT extend to general form/search inputs — values entering records are data and stay mono per 1.12. Speech vs document: chat replies, confirmations, inline explanations = speech (mono); long-form generated artifacts (analyst reports, export previews) = documents (Inter).
>
> **Mono sizes land on an INTEGER scale (1.12.1, extended 1.12.2 — no fractional font sizes):** **10** micro badges/tags/stat labels · **11** caps labels (table headers, field labels, footers, overlines) · **12** controls (buttons, selects, filter chips, menu items) · **13** large controls (primary auth button, toasts, standalone text links) · **14** page-level tabs (`SegmentedTabs`) & chat prose. Caps labels used for *scanning* (table headers) sit at 11+ — field/phone legibility; nothing below 10. The integer rule applies to **mono only** — Inter body sizes may be odd (`.g-body-1` is 15px, 1.12.2 §5, re-paired under the 26px mono H1).

### Type Scale

| Token | px | Role |
|---|---|---|
| `--fs-10` | 10px | Legal / fine print |
| `--fs-11` | 11px | Subtitle-2, micro-labels |
| `--fs-12` | 12px | Overline, table-header caps, mono |
| `--fs-14` | 14px | Body, section title caps |
| `--fs-16` | 16px | Default page body |
| `--fs-18` | 18px | Headline 3 / sign-in heading |
| `--fs-20` | 20px | Headline 2 / stat values |
| `--fs-24` | 24px | Headline 1 (page title) |
| `--fs-32` | 32px | Headline 1 display (reporting) |
| `--fs-40` | 40px | Hero |
| `--fs-48` | 48px | Brand |

### Letter Spacing

| Token | Value | Role |
|---|---|---|
| `--tracking-tight` | `-0.02em` | Large headings |
| `--tracking-normal` | `0` | Default |
| `--tracking-wide` | `0.05em` | Buttons, 105% letter spacing |
| `--tracking-caps` | `0.05em` | All-caps labels |
| `--tracking-micro` | `0.025em` | 14px filter labels |

### Semantic Type Classes

| Class | Spec | Usage |
|---|---|---|
| `.g-h1-display` | Inter Bold 32 / 1.05, ls 0 | Reporting / detail page title (brand-tier; not cockpit chrome) |
| `.g-h1` | `var(--tw-h1) var(--tz-h1)/1.25 var(--font-h1)` → **Inter 600 26** in Light/Dark; **mono 700 22** in Black Ops (1.13 — supersedes the 1.12 all-mono H1) | **System title** — H1 naming a surface or tool (incl. dynamic greetings; **no vocative comma**: "Good evening Adam." — 1.13 §F4) |
| `.g-h1-entity` | **Inter Bold `var(--tz-h1-ent)` (28; 22 in Black Ops) / 1.1, ls −0.02em, nowrap + ellipsis** (1.12.2 · tokenized 1.13) | **Entity title** — H1 holding a record's name (account, user, product) |
| `.g-h2` | **Mono Semibold 18 / 1.25, ls −0.02em** (1.12) | Compact page title |
| `.g-h3` | **Mono Medium 17 / 1.35, ls −0.01em** (1.12) | Secondary heading, sign-in heading |
| `.g-section-title` | **Mono Medium 12 UPPERCASE, ls +0.07em, muted** (1.12) | Section title, column header |
| `.g-subtitle-1` | **Mono Medium 12 UPPERCASE, ls +0.06em, medium-gray** (1.12) | Subtitle under H1 |
| `.g-subtitle-2` | Inter Regular 11 / 1.3, medium-gray | Fine print / legal (prose — stays Inter) |
| `.g-body-1` | Inter Regular **15** / 1.4 (16 → 15, 1.12.2) | Standard page & table content / page subtitle |
| `.g-body-2` | Inter Bold 16 / 1.4 | Emphasized body |
| `.g-body-3` | Inter Regular 16 / 1.4, medium-gray | Subdued body |
| `.g-body-4` | Inter Regular 16 / 1.4, ls +0.025em | Toggle descriptions |
| `.g-overline` | **Mono Regular 11 UPPERCASE, ls +0.06em, dark-gray** (1.12) | Overline labels |
| `.g-overline-tag` | As overline, on soft-gray pill | Overline on soft-gray pill |
| `.g-link` | **Mono Medium, primary blue** (1.12.2 — links are machine directions), no underline (dotted baseline; hover color) | Standalone text hyperlinks / action links |
| `.g-textlink` | Inter Medium 14, primary blue, button-as-link (no border/bg), underline on hover | Inline links **inside sentences** — they follow the sentence's voice (stays Inter, 1.12.2) |
| `.g-error` | Inter Medium 12, danger red | Error messages below fields |
| `.g-mono` | JetBrains Mono 12 (`--font-mono`) | Code / IDs |
| `.g-info` | Inter Regular 14, blue-tint bg, 8px radius | Inline info callout |
| `.g-info.danger` | As above, red-tint bg | Inline danger callout |
| `.g-tooltip-headline` | Inter Medium 14, `--p-ink` | Tooltip heading |
| `.g-tooltip-body` | Inter Regular 14 / 1.4, dark-gray | Tooltip body |

### Inline Links

Two variants, distinguished by whether the link color alone signals interactivity.

**Primary (blue)** — the default. Blue (`#1861AF`) *is* the affordance, so there is **no underline at rest**.

```css
color: #1861AF;
font-weight: 500;
text-decoration: none;
/* hover */ color: #134E8C; text-decoration: underline; text-underline-offset: 2px; text-decoration-thickness: 1px;
```

**Subdued (neutral color)** — a link rendered in a muted/gray color (e.g. the "Show" action on stat cards, or metadata rows). With no blue cue, it **must be underlined** to read as interactive.

```css
color: var(--p-muted);
font-weight: 500;
text-decoration: underline;
text-decoration-thickness: 1px;
text-decoration-color: #C4C9D2;
text-underline-offset: 2px;
/* hover */ color: var(--p-ink); text-decoration-color: var(--p-ink);
```

**Rules**

- Never use a **dotted** underline — solid only.
- Blue links: no rest-state underline; underline on hover for affordance.
- Any non-blue (gray/neutral) link: always underlined at rest.
- Don't underline blue links inside dense UI just for emphasis — the color carries it.

### Sentence Case Rules

- **Sentence case everywhere** except:
  - Column headers: all caps, tracked (`PRODUCT`, `ACCOUNTS`, `IN MARKET`)
  - Overlines: all caps (`OVERLINE 1`)
  - Tab labels & filter chips: Title Case (`Products in Market`, `All Products`)
  - **Actions & overlay headers: Title Case** (see the rule below)

**Title Case for actions & overlay headers.** Title Case is mandatory for **all** button and link-button labels, SplitButton labels, segmented-control labels used as actions, and **Modal / Drawer / Dialog headers**. Capitalize the first and last word and every major word; keep short articles, conjunctions, and prepositions (*a, an, the, and, or, to, of, in*) lowercase unless first or last. Examples: **"Save Changes"** (not "Save changes"), **"Clear All"**, **"Copy to All"**, **"Add Report"**, **"Create Another Plan"**, **"Restore This Version"**, **"Batch Actions"**. This applies to new components too — never ship a sentence-case button label or overlay header.

Everything that is **not** an action or overlay header stays **sentence case**: body text, table cell content, helper / validation text, info banners, empty-state bodies, tooltips, and toasts.

---

## 5. Spacing

Base unit is **4px**. All spacing tokens are multiples of this base.

| Token | Value |
|---|---|
| `--space-0-5` | 2px |
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-16` | 64px |

---

## 6. Borders & Radii

### Border Styles

| Context | Value |
|---|---|
| Cards / tables | `1px solid #E5E7EB` (`--p-border`) |
| Inputs (default) | `1px solid #D1D5DC` (`--p-border-strong`) |
| Inputs (focus) | `1px solid #1861AF` + `box-shadow: 0 0 0 3px rgba(24,97,175,.15)` |
| Inputs (error) | `1px solid #C94A4E` |
| Inputs (disabled) | `1px solid #E5E7EB`, bg `#fff` (white, dimmed via uniform `#99A1AF`) |

### Border Radius Tokens — squared off (1.11 "Dusk") · skin-tunable (1.13)

> **1.13:** components consume the skin shape tokens — `--r-ctl` (controls, 1px), `--r-card` (containers/menus, 2px), `--r-nav` (nav rows, 2px), `--r-tgl`/`--r-tgl-knob` (switch, 999/50%), `--hair` (stroke width, 0.5px) — never numeric literals (THE MAINTENANCE LAW, §3 Theming). The legacy `--radius-*` scale remains for existing call sites; Black Ops zeroes both sets and thickens `--hair` to 1px. Sticky header bands inside cards use `borderRadius: "var(--r-card) var(--r-card) 0 0"`, never literal `"10px 10px 0 0"`.

| Token | Value | Usage |
|---|---|---|
| `--radius-xs` | **1px** | — |
| `--radius-sm` | **1px** | **All interactive controls** — buttons, inputs, `Select`, filter chips & Filter Menu, pagination controls, secondary toolbar buttons, nav rows |
| `--radius-md` | **2px** | Stat cards, menus, icon-button hovers |
| `--radius-lg` | **2px** | Prompt callouts, info banners, cards & panels |
| `--radius-xl` | **2px** | Cards / large surfaces, map overlay cards, elevated floating cards (TableView) |
| `--radius-pill` | 999px | Status Chips, role/category pills, count & "N selected" badges, toggle track — **pills stay fully round** |

> **Hairline strokes (1.11).** Entry fields, attention fields, cards & tables carry **0.5px** border widths (rendering as true hairlines on retina, 1px elsewhere). With the ×0.25 shadow quieting (§7), the hairline is now what carries structure.

> **Reference the token, never the number (1.11.2).** Surfaces and controls must bind `border-radius` to the token (`--radius-sm` controls · `--radius-lg` surface cards, tables, modals, popovers · `--radius-pill` pills), **never an inlined numeric value** — a hard-coded `8` on the table shell silently skipped the Dusk radius change. Checkbox-style squares are the one *named* value: **1px** (see §9 Checkbox). Circles (`50%`) and pills (`999`) are exempt by shape.

> **Dense edit surfaces use the scale, no magic numbers (reaffirmed 1.8).** In the Assignment-Edit surface: number / sequence inputs, calendar day cells, and legend cells → `--radius-sm` (4px); icon buttons (calendar prev/next, undo) → `--radius-md` (6px); the map/preview container and the changes ledger → `--radius-lg` (8px); count pills → `--radius-pill`. The scale itself is unchanged.

> **Control-radius normalization (1.5, values re-based 1.11).** Interactive **control** corners are squared to a single small radius for a crisper, more "operational" feel — **`--radius-sm`, now 1px** (form controls, filter chips/menus, `Select`, pagination, secondary toolbar buttons; standard height 36px; auth inputs 56px tall). **Pills stay fully round (`--radius-pill`)** — status Chips, role/category pills, count badges, the "N selected" pill are *labels*, not controls. **Cards / surfaces → `--radius-xl` (now 2px).** The mapping of element → step is unchanged from 1.5/1.8; Dusk only sharpened the step values.

---

## 7. Elevation & Shadows

| Token | Value (light — alphas ×0.25 since 1.11) | Usage |
|---|---|---|
| `--shadow-tooltip` | `0 2px 6px 0 rgba(0,0,0,.04)` | Tooltip popovers |
| `--shadow-card` | `0 1px 2px -1px rgba(0,0,0,.03), 0 1px 3px 0 rgba(0,0,0,.03)` | **Small** elements (stat cards, secondary buttons) |
| `--shadow-surface` | `0 1px 2px 0 rgba(16,24,40,.01), 0 6px 16px -8px rgba(16,24,40,.03)` | **Large** resting surfaces (tables, detail cards, ledgers) lifting off the shell |
| `--shadow-float` | `0 4px 6px -4px rgba(0,0,0,.03), 0 10px 15px -3px rgba(0,0,0,.03)` | Elevated floating / transient layers (menus, popovers, tooltips, toasts) |
| `--shadow-brutal` | `2px 2px 0 0 var(--p-ink)` | Adaptive (black in light / white in dark) — brand-moment "neo" buttons; a solid offset, exempt from the ×0.25 |

Cards in-table have **no shadow**.

> **Whisper shadows (1.11 "Dusk").** Light-mode shadow **alphas dropped to ×0.25** of their 1.3 values — with the new **0.5px hairline strokes** (§6) carrying structure, shadows recede to a hint of depth. The two-tier size rule is unchanged: small elements → `--shadow-card`, large resting surfaces → `--shadow-surface` (ink-tinted, softer against the warm shell), floating transient layers → `--shadow-float`. Keep the hairline `--p-border` on surfaces — **border + soft shadow together**; the shadow doesn't replace the border.

> **Dark elevation is inverted in technique (1.5 — unchanged by Dusk).** In dark mode the four shadow tokens flip to **inset highlight + deep shadow** rather than soft drop shadows — `inset 0 1px 1px rgba(255,255,255,.04–.08)` for a top-edge catch-light, a deep `rgba(0,0,0,.5–.6)` drop, and a `0 0 0 1px` border ring on floating layers. Depth in dark comes from **surface lightening** (nav `#131316` → surface `#161618` → surface-alt `#202022` lifting off the near-black `--p-shell` `#0F0F0F`) plus the inset highlight — not from a darker shadow alone. The ×0.25 quieting does **not** apply here: dark elevation is a strategy, not an alpha. Reference the tokens; they swap automatically (see §3 Theming).

### Z-index ladder (1.7)

One ladder, low → high. The **Tooltip** default (`4000`) sits above page content but **below** modals (`10000`); a tooltip fired from inside a modal or the palette overrides it via the `z` prop.

| Layer | z-index |
|---|---|
| Map overlay cards | `500` |
| Map hex tooltip | `600` |
| Sticky page / section headers | `20` (local) |
| DS **Tooltip** | `4000` (overridable via `z`) |
| **Wizard** (full-screen) | `9000` |
| **Modal / Drawer** | `10000` |
| **Command Palette (⌘K)** | `12000` |
| Palette in-field tooltip | `12001` (`Tooltip z`) |

> **`position:fixed` inside a `sticky` / `transform` ancestor is clipped (a real bug we hit, 1.7).** A `position:fixed` overlay (modal / backdrop) rendered **inside** an ancestor that establishes a containing block / stacking context — `position: sticky`, any `transform` (e.g. a dnd-kit sortable item), or `filter` — is **trapped** by that ancestor: the backdrop stops covering the viewport and sibling sticky headers bleed through. **Rules:** (1) render modals / popovers at a **non-transformed, non-sticky root** (lift state up to the board / page root) or **portal** them to `document.body` — never nest a fixed overlay inside a sticky tray or a transformed drag surface; (2) the shared `Modal` is `position:fixed` and assumes a clean ancestor — honor rule 1 when invoking it from inside boards / drag surfaces (see the Arrangement Board tray kebab, §9).

---

## 8. Iconography

Greater uses **Material Symbols (Sharp)** for all in-product iconography.

> **One icon system.** Material Symbols Sharp is the *only* icon set, delivered as the variable **font** and addressed by ligature name (e.g. `search`, `expand_more`, `unfold_more`). Lucide and Iconify have been fully removed from the kit. In React, use the shared `Icon` component (`<Icon name="expand_more" size={16} />`); in plain HTML, a `<span class="material-symbols-sharp">expand_more</span>`. The only non-glyph exceptions are CSS background marks (e.g. the native `<select>` chevron data-URI) and map illustration.

> **One optical style — Sharp.** *(Changed in 1.4: the portal moved from Material Symbols **Rounded** to **Sharp** for a crisper, more precise "operational tooling" feel that matches the data-dense tables, mono numerals, and squared cards.)* **Never load Outlined or Rounded alongside Sharp** — mixing optical styles reads as inconsistent. Glyph names are **identical** across optical styles, so every existing icon reference (`more_horiz`, `draft`, `delete`, `curtains`, `hexagon`, …) keeps working; only the rendered style changes. Because the whole app flows through one `Icon` primitive, the family is set in exactly three places: the font `@import`/`<link>`, the `.material-symbols-sharp` class, and `Icon`'s wrapping `<span>`. (All prior icon rules still hold — see §9: `more_horiz` for overflow, `more_vert` banned; `delete` for destructive, not `delete_sweep`.)

### Loading

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,400,0,0&display=block">
```

### Usage

```html
<span class="material-symbols-sharp">search</span>
```

### Defaults

- Weight: 400
- Optical size: 24
- Fill: 0 (outlined)
- Color: inherits from text

Use variable-font axes (`FILL`, `wght`, `GRAD`, `opsz`) sparingly — prefer outline 400/24 unless there is a deliberate reason to switch.

### Sizes

| Context | Size |
|---|---|
| Default | 24px |
| Dense tables / chips | 20px |
| Inside button labels | 16px |
| Tight inline-with-caption | 14px |

### Common Icons in Portal

`search`, `filter_alt`, `expand_more`, `unfold_more`, `category` (Products / In the Market — see Entity icons), `store` (Accounts), `inventory_2` (Unassigned tray), `location_on`, `more_horiz`, `close`, `check`, `info`, `arrow_outward`, `fullscreen`, `account_circle`, `bar_chart`, `settings`, `home`, `apartment`, `route`, `schedule`, `notifications`, `help`, `edit`, `delete`

**Store Layouts (Phase 3):** `dashboard_customize` (Layout Editor / Edit Layout), `drag_indicator` (drag handle), `shuffle` (General Stock Area), `curtains` (Display placement), `move_down` (drag-here empty state), `fit_width` (Set Capacity For All), `sticky_note_2` (section note), `lightbulb` (Suggested), `draft` / `edit_note` (drafts), `event_upcoming` (scheduled reset), `event_busy` (cancel reset), `publish` (Publish), `history` (History), `download` (Export), `cloud_upload` / `upload_file` / `library_add` / `add_circle` (CSV import), `format_list_bulleted` (Product List tab), `remove_shopping_cart` / `add_business` (plan chips). All outline weight (`FILL 0`).

**Account-type icons** (rendered inside the Account Type Icon avatar — see §9): `storefront` (Retail / Store), `fastfood` (Restaurant), `shopping_cart` (Grocery), `local_convenience_store` (C-Store), `local_bar` (Bar), `attach_money` (Discount Store). All outline weight (`FILL 0`).

**New in 1.5:** `ballot` (**Sales** — the nav item **and** the permissions "Sales" section; **supersedes** any earlier Sales glyph — apply in both so they match), `lock` (locked / disabled control + capability-lock banner), `compare_arrows` (replace-in-place / swap product), `route` (Route facet / column), `bolt` (dev quick sign-in button), `light_mode` / `dark_mode` / `contrast` (theme toggle — light / dark / system).

**New in 1.8:** `difference` (Changes/diff ledger header), `undo` (per-row / ledger Undo + Reset), `open_in_full` (expand map to full screen), `badge` (edit Sales Rep — row action), `calendar_today` (edit Service Date — row action), `block` (skip service — danger row action), `group` (role-permission save-confirm modal).

**New in 1.10:** `radar` (**Live View** — nav + the `SaveViewButton` section icon), `my_location` (Locate a rep's route on the live map), `refresh` (manual live refresh), `signal_cellular_alt` / `signal_cellular_alt_2_bar` / `signal_cellular_alt_1_bar` (**Expected-Impact scale** — `ImpactBars`, §9 Inputs), `help_center` (Help Center → Messenger row), `dashboard_customize` (Apply Template to Accounts).

### Entity icons (the canon · 1.7 · +GSA 1.13)

Each first-class Portal entity has exactly **one** canonical Material Symbol (Sharp). Use it everywhere the entity is *represented* — global search (⌘K) page-jumps and result rows, related-entity deep-link chips, nav, and empty-state badges. Authoritative source: the shipped `CommandPalette` `PAGES` table + the App Shell nav.

| Entity / screen | Glyph | Notes & relationships |
|---|---|---|
| Products group / **In the Market** | `category` | Product catalog. |
| **POD Planner** | `blur_medium` | Product-plan scheduling (Add / Discontinue). Relates to **Accounts** (where a plan applies) + **Products** (what is planned). ⌘K Account/Product results expose a **POD Plans** chip with this glyph. |
| **Store Promotions** | `award_star` | Promotion spanning many Accounts × many Products. ⌘K results expose a **Store Promos** chip with this glyph. |
| **Store Layouts** | `dashboard` | Per-account physical placement. |
| Accounts group / **Accounts List** | `store` | Point of distribution. |
| **Orchestration / View Plans** | `graph_7` | Routing plans. |
| **Live View** (Sales) | `radar` | Live operational surface — every rep's route today, read-only (§ Live Surfaces, 1.10). First child under Sales. |
| **Users** | `person` | People / roles. |
| **Audit Log** | `history` | Immutable ledger. |
| Settings | `settings` | — |
| **Home** (landing) | `home` | Post-login dashboard — the sidebar's first item (§ Home dashboard, 1.9). |
| **General Stock Area** | `inventory_2` (1.13 §I2 — supersedes `shuffle`) | The optionally-pinned stock section type — used **consistently** for the meta-row toggle, the in-section hint panel, and the "Erase par levels?" confirm-modal icon. See §9 General Stock Area 2.0. |

**Dual-emitter rule.** Changing an entity glyph means updating **both** emitters — the frontend `CommandPalette.js` `PAGES` table *and* the backend `search_router.py` `related` / group `icon` fields — or the deep-link chips and the page-jumps diverge.

> **History:** POD Planner moved `inventory_2 → blur_medium`; Store Promotions moved `sell → award_star`; the GSA glyph has flip-flopped — `inventory_2` (early) → `shuffle` (1.7, when "no product list" made a swap-mark apt) → **`inventory_2`** (1.13, when GSAs regained pinned product lists). POD Planner no longer uses `inventory_2`, so there is no collision.

(Row / overflow menus still use horizontal `more_horiz`, never `more_vert` — the new tray kebab follows it.)

### Special Characters

- Bullet separator: `•` (e.g. `"Thursday, Apr 23 • Kenny D'Amica"`)
- Ranges: en-dash `–`
- No arrows via unicode — always use SVG

---

## 9. Components

### Navigation & links — AppLink (1.9)

> **Anchor-navigation law.** Every element whose purpose is to **navigate to a route renders as a real `<a href>`** (via **`AppLink`**, a router `Link`, or a plain `<a>` for external) — **never** a `<button onClick={navigate}>`. A `button` gives the browser no link target, so its context menu offers only text actions — no "Open in new tab", no ⌘/Ctrl-click, no middle-click. Buttons stay buttons for **actions** (Sign Out, Save, toggles, expanders, kebab items).

**`AppLink`** — the navigation primitive. Renders a real `<a href={to}>` so the browser's "Open in new tab" / ⌘-click / middle-click all work, but intercepts a **plain left-click** and routes it through the **NavGuard** `useGuardedNavigate` (§ Unsaved-changes guard) — instant SPA routing **and** the unsaved-changes prompt. Modifier / non-left clicks fall through to the browser untouched. Reference: `ui_kits/portal/primitives.jsx`.

- Default style **resets** `text-decoration: none; color: inherit`, so an anchor looks like the element it replaced (no stray blue underline).
- `to` is a same-origin path, query string allowed (e.g. `/accounts?market=…`); `to={undefined}` renders no `href`.
- **Applies to:** the sidebar (expanded leaf, nested children, **collapsed flyout** children), the bottom utility rows (Audit Log / Settings / Account), **Saved-View cards**, **list rows** (see Stretched-link rows under Tables), **back links** (`BackLink`), **⌘K results**, and the pending **count-delta chips** (`+N`/`−N` → `/pod-planner?account=…`).

**`BackLink` gains `to` (1.9).** With a `to` prop it renders a real `<a href>` (modifier-click opens a new tab; plain left-click runs the guarded `onClick`); it falls back to a `<button>` when only `onClick` is given. Call sites pass **both** — the `onClick` carries any query-preserving logic (e.g. `to={`/in-the-market${backQS}`}`). The anchor sets `text-decoration: none` and the ink/blue link color.

**External links** (e.g. Help Center) are a **real** `<a href="…" target="_blank" rel="noopener noreferrer">` — *not* `onClick={() => window.open(...)}`. Because shared wrappers (e.g. the bottom nav rows) set the link reset, that wrapper style **must** include `text-decoration: none; color: inherit` or the external anchor inherits the default blue underline. *(Learning: a plain `<a>` that doesn't go through `AppLink` doesn't get the reset for free.)*

### Buttons

> **1.13 §M4 — `warning` → `dangerOutline`.** The red-outline destructive variant is named for what it *is*. The `warning` name no longer maps to destructive red (it was a footgun — a "warning" that rendered danger-red, with its hover/disabled styles orphaned under the other key); the rename fixed both. Destructive interaction states are token-driven (1.13 §M5): hover `--p-danger-hover`, disabled `--p-danger-dim` / `--p-danger-dim-bg` — no destructive control hardcodes its hover/dim.

All buttons share a base: `height: 36px`, `border-radius: 4px`, `font: 500 14px/1 Inter` (no extra letter-spacing — only the Neo variant is tracked), `padding: 0 20px`, `min-width: 88px`, `transition: background .12s`.

#### Variants

> **Ink-forward (1.6).** Primary, Secondary, Ghost, and Neo moved off blue: Primary is now **ink** (`--p-action`, inverting to a white surface in dark), Secondary is an **ink stroke**, and Ghost is **neutral text** (blue is reserved for true links). Warning/Danger stay **red**; Neutral stays **gray**. The **focus ring stays blue** and keyboard-only — `box-shadow: 0 0 0 2px var(--p-surface), 0 0 0 4px var(--p-primary)` — because focus is state _inside content_; only the resting/active chrome went ink.

**Primary** — ink fill, white text (inverts to a white surface in dark via `--p-action`)

```css
background: var(--p-action);
color: var(--p-action-fg);
/* hover */ background: var(--p-action-hover);
/* disabled */ background: var(--p-action-disabled-bg); color: var(--p-action-disabled-fg);
```

**Secondary** — white fill, ink stroke, ink text

```css
background: var(--p-surface);
color: var(--p-ink);
border: 1px solid var(--p-ink);
/* hover */ background: var(--p-surface-tint);
/* disabled */ color: var(--p-placeholder); border-color: var(--p-border);
```

**Secondary · Warning** — white fill, red stroke, red text

```css
background: #fff;
color: #C94A4E;
border: 1px solid #C94A4E;
/* hover */ background: rgba(201,74,78,.05);
/* disabled */ color: rgba(201,74,78,.25); border-color: rgba(201,74,78,.25);
```

**Danger (solid)** — red fill, white text; for an **already-confirmed, terminal** destructive action. **The rule:** an at-rest destructive button in a **table or header** uses outline **Secondary · Warning** — it *opens* a `confirm`; only the **terminal commit inside that confirm** uses **solid Danger**. Never use solid danger for a button that merely opens a dialog.

```css
background: #C94A4E;
color: #fff;
/* hover */ background: #C93B40;
/* disabled */ background: rgba(201,74,78,.45); color: #fff;
```

**Neutral** — white fill, gray stroke, dark text; use alongside a primary for secondary page-level actions (e.g. "Batch Actions")

```css
background: #fff;
color: #364153;
border: 1px solid #D1D5DC;
/* hover */ background: #F3F4F6;
/* disabled */ color: #99A1AF; border-color: #E5E7EB;
```

**Tertiary (Ghost)** — no fill, no stroke, neutral text (blue reserved for true links)

```css
background: transparent;
color: var(--p-text);
padding: 0 12px;
min-width: 0;          /* ghost hugs its label */
/* hover */ background: var(--p-surface-tint);
/* disabled */ color: var(--p-placeholder);
```

> **Cancel / dismiss = ghost or neutral, never a blue link (1.8).** A modal / dialog **Cancel** (or any "dismiss without committing") is a **`ghost`** button — or **`neutral`** when it needs a visible resting outline beside a filled primary in a footer (e.g. "Cancel" next to "Apply Changes"). **Ghost** is the lowest-emphasis dismiss (e.g. "Keep Editing" in the discard modal). **Never** style a dismiss as a blue text-link (`.linkBtn`): blue is reserved for true in-content links (the ink/blue law), and a blue "Cancel" reads like navigation and fights the ink primary beside it. Retire any `.linkBtn` / blue-text "Cancel". *(The "Reset all" text-button in the §Assignment-Edit ledger follows the same rule — neutral, not blue.)*

**Foundation Neo** — brand moments only (e.g. login Next button)

```css
height: 39px;
padding: 0 30px;
min-width: 120px;
border-radius: 4px;
background: var(--p-surface);
color: var(--p-ink);
border: 1px solid var(--p-ink);
box-shadow: var(--shadow-brutal);          /* adaptive: black in light, white in dark */
font: 500 16px/1 Inter;
letter-spacing: .05em;
/* hover */   background: var(--p-surface-tint);
/* pressed */ transform: translate(2px,2px); box-shadow: 0 0 0 0 var(--p-ink);  /* collapses onto its shadow */
```

#### Sizes

| Size | Height | Padding | Min-width |
|---|---|---|---|
| `sm` | 30px | `0 16px` | 64px |
| `md` (default) | 36px | `0 20px` | 88px |
| `lg` | 40px | `0 28px` | 120px |
| `ghost` | 36px | `0 12px` | 0 (hugs label) |

#### Button Examples

```
Primary:    Confirm  /  Save Changes  /  Finalize for Simulation (disabled)
Secondary:  Edit Section  /  Save as Draft  /  Next (disabled)
Warning:    Delete  /  Discontinue
Ghost:      Go Back  /  Show More
Neo:        Next  (login screen only)
```

---

### Row Actions (in-table: Menu, Split button, Kebab)

Actions attached to a table row. There is **one primitive and two triggers** — do not add anything beyond these. Reference: `preview/components-buttons.html`.

- **Menu popover** — *the primitive.* A floating list of actions. Both triggers below open this exact surface; it is never duplicated per-trigger.
- **Split button** — *a trigger.* A labeled button + a caret; the button performs one action, the caret opens the Menu. It is **not limited to the last table column** — it may also be the **primary action inside an expanded / disclosure panel** (see [Expandable Rows](#expandable-rows)), with `menuAlign="right"`. Its label is **always Title Case** (the component enforces it).
- **Kebab** — *a trigger.* A single `more_horiz` icon button that opens the Menu.
- A plain **slim button** (the existing button at 28px) covers the one-action / no-menu case.

#### When to use which — decision rules (apply in order)

1. **Default to no control.** If a row exists to be opened, make the **whole row** navigate to its detail / drawer — and do **not** add a "View"/"Open" button, which only duplicates the row click. A *genuine* action (Reassign, Export, Duplicate) is different and may still appear. Action controls stop the row click (they perform their action; they don't also navigate).
2. **If a row needs actions, they live in a Menu.** Decide only *how the Menu opens*:
   - Use a **Kebab** (`more_horiz`, pinned to the right of the row, **always visible** — never hover-only) when the actions are **peers with no single one worth encouraging**, or the row is space-constrained.
   - Use a **Split button** (labeled button + caret) when **one action is worth encouraging**: the button performs it in one click; the caret opens the Menu of its *related* alternatives.
3. **Button intent** = the visible button's color. Use **primary** for the encouraged happy-path action; use **error** *only* when that action resolves a problem (clicking it opens the fix). **Never use a red button merely to signal a bad state — that is a Status Badge, not a button.**
4. **One trigger per row.** Row actions are **28px** tall and right-aligned in the last column. Unrelated extra actions go **inside the Menu**, never as a second button. Never hide a row's single most important action behind a kebab alone.
5. **Always visible — never hover-only.** Row actions render at rest. Do **not** reveal them on hover (it fails discoverability, touch, and keyboard); hover may *tint* the row but must not change which controls are present.

#### Specs

- **Split button:** `height: 28px`, `border-radius: var(--radius-md)`, `font: 500 12px var(--font-control)`, **`white-space: nowrap`** — a split button grows to fit its label and the label **never wraps** (1.12.2 §7); if space genuinely can't fit the button, shorten the label. Main area `padding: 0 11px`; caret area `26px` wide with a `1px` **neutral** divider (`rgba(127,127,127,.32)` — survives both the ink fill and the white dark-mode action surface; a white divider would vanish on the latter). Intents: **primary** (`--p-action` fill / `--p-action-fg` text — ink, inverts in dark) and **error** (`#E5484D` fill, white — unchanged). Optional leading icon (`report` for error, `check_circle` for confirm-style).
- **Kebab:** `28×28px`, `border-radius: 6px`, `more_horiz` at 20px, `--p-muted`; hover `rgba(0,0,0,.05)`.
- **Menu popover:** `border-radius: 8px`, `--shadow-float`, 1px `--p-border`, `padding: 4px`, `min-width: ~208px`. Items `34px`, `padding: 0 10px`, `400 14px Inter`, optional 18px `--p-muted` leading icon. Group with an uppercase label + `1px --p-border` divider when there are more than ~5 items; destructive items go **last**, in `--p-danger`. Opens on click; closes on outside-click, `Escape`, or selection.

#### RowKebab — the portal row-action menu (1.10)

**Portal law (restated, broadened).** *Any floating UI born inside a scrolling or transformed container — tooltips, row-action menus, popovers, hover cards — must render into `document.body` via `createPortal`, position `fixed`, and re-measure on scroll/resize.* Never rely on `position: absolute` inside a table: the scroll container's `overflow` clips it (a bug reported twice, fixed twice). This generalizes the 1.4 Tooltip-to-portal rule to the whole overlay layer.

**`RowKebab`** (`RowKebab.jsx`) is the canonical **row-action** trigger and supersedes the inline `Kebab` for rows. The `.g-kebab` `more_horiz` trigger opens the shared `Menu` **portaled to `<body>`** (`position: fixed; width: 200; z-index: 10002`, right-aligned to the trigger — `right: innerWidth − rect.right` — with a 6px gap), **flips up** when `spaceBelow < 220px` and there's more room above, re-measures the trigger rect on **capture-phase scroll + resize** while open, and closes on outside `mousedown` / `Escape`. Open state paints `--p-overlay-hover` + `--p-text`; the trigger `stopPropagation`s so a row-click never fires behind it. API: `RowKebab({ items, testid })` (items are `Menu` items). **Adoption:** every table / list row-action menu uses `RowKebab` (Planned Assignments, POD Planner, Route Assignments, Home saved-view cards, Store-Layout Templates); any remaining inline `Menu`-in-a-span kebab is a latent clipping bug — sweep it. The inline `Kebab` stays valid **only** for toolbars / headers that live *outside* a scroll container.

#### MenuButton (off-table disclosure)

SplitButton and Kebab are tuned for **28px table rows**. In a page header, detail action bar, or toolbar you often want the same "primary action + a menu of alternatives" but at **full button height** so it lines up with its neighbors — that's **MenuButton**: a normal `Button` (any variant) with a trailing `expand_more` that opens the **identical Menu popover**.

- **Inside a data-table row →** SplitButton or Kebab (28px).
- **Outside tables (header / action bar / toolbar) →** MenuButton (36px `Button` + chevron). Choose `variant` by intent (primary for the encouraged action); default `menuAlign="right"`. Never a second menu style — it opens the same `Menu`.

Example (`StoreLayoutEditor` action bar): `Publish ▾` → `[Publish Now · Schedule For Later]`, aligned with the adjacent Save / Discard buttons.

#### Do not

- **Never use the vertical `more_vert` ("⋮") kebab.** The overflow / kebab trigger is **always** the horizontal `more_horiz` — in list rows, cards, panel headers, and menus alike. `more_vert` is **banned portal-wide** (the `.g-kebab` class renders `more_horiz`).
- Do not ship a "secondary" split button as a repeated table column — if viewing is the row's job, make the row clickable and put extras in a kebab.
- Do not treat "button + kebab" as a distinct component — it is simply a slim button beside a kebab.

---

### Tooltip

A dark popover (`--p-ink` bg, white text) anchored to its trigger; hover-only, `pointer-events: none`. Pairs naturally with a 14px `info` glyph (`cursor: help`). Default is a single nowrap line (`font: 500 11px/1.3 Inter; padding: 4px 8px; border-radius: 6px; box-shadow: var(--shadow-float)`). Reference: `preview/components-tooltip.html`.

> **Portal-rendered (changed in 1.4).** The `Tooltip` now renders into `document.body` via `ReactDOM.createPortal` with **`position: fixed`** and **`z-index: 4000`** — it is **not** an absolutely-positioned child of its anchor anymore. On hover it measures the anchor with `getBoundingClientRect()` and **clamps its center by the bubble's own measured half-width** against a 12px viewport margin (1.10 — see the Measured-clamp bullet below; supersedes the 1.4 fixed `[90, innerWidth − 90]` center clamp). The upshot: it never clips inside `overflow:hidden` / transformed / stacking-context containers — scrolling tables, transformed cards, **map overlays (Leaflet panes)** — and it floats above page content and the map overlay. *(1.7 ladder, §7: the default `4000` sits below modals (`10000`) and the ⌘K palette (`12000`) — a tooltip fired from inside one of those passes a higher `z` to clear it.)* *(Supersedes the 1.2 absolutely-positioned, `z-index: 200` implementation; the `maxWidth` wrapping behavior is preserved, just re-homed.)*

- **`maxWidth` (px)** — for multi-line / educational copy. Switches to `white-space: normal`, sets `width: {maxWidth}`, caps at `min({maxWidth}px, calc(100vw − 24px))`, `line-height: 1.5`, `padding: 7px 10px`, left-aligned. **Required** whenever the body runs longer than ~6 words — otherwise it shrink-wraps to one nowrap line.
- **`side`** — `"top"` (default) or `"bottom"`. Controls vertical placement (the horizontal center-clamp handles left/right overflow on its own, so `"bottom"` is now only about which way the bubble opens, not an anti-clipping workaround).
- **Measured viewport clamp (1.10 — supersedes the 1.4 fixed `[90, iw−90]` center clamp).** After the bubble renders, a `useLayoutEffect` measures its real width and clamps the center by its own half-width against a 12px margin (before paint). The old fixed margin failed for wide bubbles — a `maxWidth: 300` bubble's 150px half still hung ~60px off-screen. A hard CSS backstop remains: `maxWidth: min({maxWidth}px, calc(100vw − 24px))` (and `calc(100vw − 24px)` for the no-`maxWidth` nowrap variant).
- **Re-measures on each open.** Positions from `getBoundingClientRect` at hover time; for an anchor that moves *while* the tooltip is shown, re-open to re-measure.
- **`z` (1.7)** — z-index override, default `4000`. Raise it when a tooltip is triggered from inside a higher-z overlay (e.g. the ⌘K palette backdrop is `12000`, so its in-field `?` hint passes `z={12001}`). See the z-index ladder in §7. Signature: `Tooltip({ text, children, side = "top", maxWidth, z = 4000 })`.
- **Never native `title=` for interactive affordances (1.8).** Use the component `Tooltip` for any **interactive control** whose meaning isn't obvious (icon-only buttons, kebab actions, undo/reset glyphs, map controls) — native `title` is inconsistent across OSes, slow to appear, un-styleable, and invisible on touch. **Native `title` is acceptable only** for (a) **non-interactive** decorative marks where a tooltip would be overkill (a 7px "unsaved" status dot, a map delivery-dot), and (b) strings inside **raw HTML injected into Leaflet popups** where a React component can't mount. Everything a user can click / operate gets the component. Tooltip copy is **terse, sentence-case, verb-first** for actions (*"Open full map"*, *"Undo date change"*).

---

### Inputs & Forms

> **Grouped `Select` headers (1.13 §M3).** The shared `Select`/menu supports `{header: 'LABEL'}` options as **prominent category bands** — tinted `--p-surface-alt` background, uppercase mono `600 10px` with `.09em` tracking, full-width band (−6px margins), and a top divider between consecutive groups; items pass `{grouped: true}` to indent 22px and nest under their band; ungrouped items (e.g. "Custom…") stay flush-left. Canonical use: the section-name preset picker (Customer Facing / Stock Areas — §9 General Stock Area 2.0).

All form inputs use the **floating-label** pattern — one canonical style across all pages.

#### Field

```css
height: 36px;
border-radius: 4px;          /* --radius-sm */
padding: 0 14px;
font: 400 14px Inter;
border: 1px solid #D1D5DC;   /* --p-border-strong */
background: #fff;
```

#### Clearable ✕ + search-syntax hint (1.7)

Two additive props on the shared `Input`, sharing the field's right slot:

- **`clearable` / `onClear`** — a one-click clear **✕** (`close` @15px, right-aligned). **Auto-enabled whenever `icon === "search"`** (every search field gets it free); otherwise opt-in via `clearable`. Renders only when the field has a value. Click calls `onClear`, else synthesizes `onChange({ target: { value: "" } })`. `data-testid="input-clear"`.
- **`hint`** — a subtle `?` (`help` glyph) shown when the field is **empty**; on hover, a bottom `Tooltip` lists the query grammar (§9 Search). `hint={true}` uses the exported **`SEARCH_HINT`** node. Once the user types, the ✕ replaces it. Wire `hint` onto every primary list/search field and the ⌘K palette. `data-testid="input-hint"`.
- The input's right padding bumps to **32px** when either is showing.

Full signature: `Input({ icon, value, onChange, placeholder, type, error, style, inputStyle, onKeyDown, autoFocus, name, clearable, onClear, hint, ...rest })`.

#### States

| State | Border | Background | Other |
|---|---|---|---|
| Default | `1px solid #D1D5DC` | `#fff` | — |
| Focus | `1px solid #1861AF` | `#fff` | `box-shadow: 0 0 0 3px rgba(24,97,175,.15)` |
| Error | `1px solid #C94A4E` | `#fff` | Error message below: 12px 500 Inter, `#C94A4E` |
| Soft-required (unset) | `1px solid var(--p-warning)` | `var(--g-gold-10)` | Encouraged-but-optional field left empty — **amber, not red**. It's a nudge ("adding one is encouraged"), not an error. E.g. an unset Capacity. |
| Disabled | `1px solid #E5E7EB` | `#fff` | `color: #99A1AF; -webkit-text-fill-color: #99A1AF; opacity: 1; cursor: not-allowed` — label, value, border &amp; chevron all use one gray |

#### Floating label

```css
position: absolute;
top: -7px; left: 10px;
padding: 0 4px;
background: #fff;       /* clips over the border — stays #fff even when disabled */
font: 400 12px/1 Inter;
color: #6A7282;         /* focus: #1861AF; error: #C94A4E; disabled: #99A1AF */
```

Label sits at `z-index: 2` so it clips cleanly over a styled `<select>` box.

Required fields append ` *` to the label string.

#### Disabled / locked state (1.5)

Three form primitives — **`Select`**, **`Checkbox`**, **`FloatingField`/`Input`** — share one first-class **`disabled`** language, so read-only forms (RBAC, self-edit, view-only cards — see §Permissions & Affordances) render consistently:

- **Shared:** background `--p-surface-tint`, text `--p-placeholder`, `cursor: not-allowed`, **no focus ring**, inner marks slightly muted.
- **`Select`** swaps its trailing `expand_more` chevron for a **`lock` glyph** when disabled and is **non-interactive** (native `disabled` — does not open). This `lock`-chevron is the at-a-glance signal that a dropdown is capability-locked.
- **`Checkbox`** renders muted (tinted box, placeholder-grey check) and ignores clicks.
- **`FloatingField`/`Input`** set the native input to `readOnly + disabled`, tinted bg, `cursor: not-allowed`.
- **`Toggle`** already supported `disabled` (1.2) — keep.

(Pair a locked surface with the amber **capability-lock banner**, §Info Banners, to explain *why* it's read-only.)

#### Variants

- **Text field** — standard floating-label, `padding: 0 14px`
- **Monospace field** — same shell, `font-family: 'Geist Mono', monospace` — used for PIN, Route ID, codes
- **Select / Dropdown** — same shell, `appearance: none`; trailing `expand_more` chevron — **or a `lock` glyph when `disabled`** (§1.5).

#### Field props (`FloatingField` / `Input`)

| Prop | Effect |
|---|---|
| `mono` | Switches the value to `'Geist Mono'` (PIN, Route ID, codes). |
| `required` | Appends ` *` after the label string. |
| `error` | Boolean → red border only; string → red border **+** a `.g-error` message below (`500 12px/1.4`, `--p-danger`). |
| **`onBlur(value)`** *(§1.4)* | Fires the field's **value** (not the DOM event) on blur — used by the async field-level uniqueness check (§Forms / Patterns). |
| **`helper`** *(§1.4)* | Muted sub-label text rendered **under** the field (`400 13px/1.4 Inter`, `--p-muted`); **suppressed while an `error` shows** (error wins). For "leave blank to keep current PIN", format hints, etc. |
| **`disabled`** *(§1.5)* | `readOnly + disabled`; tinted `--p-surface-tint` bg, `--p-placeholder` text, `not-allowed`, no focus ring. On `Select`, also swaps the chevron for a `lock` glyph. |

#### Search Bar (list pages)

Taller search input used at the top of list views (Users, Products).

```css
height: 48px;
border-radius: 4px;          /* --radius-sm — matches the shared Input primitive + the §6 control-radius normalization (was 8px) */
padding: 0 14px 0 44px;      /* 44px accommodates the 18px icon + gutter */
font: 400 15px Inter;

/* Search icon: 18px SVG, stroke #6A7282, left 14px, vertically centered */
```

Floating "Search" label sits at `top: -7px; left: 12px`.

#### Select placeholders — no trailing ellipsis (1.11.2)

`Select` placeholders are **`<verb + article + noun>` with no trailing `…`** — *"Select a type"*, *"Choose a warehouse"*. The control's caret already implies "more to come"; the ellipsis is visual noise inside a closed control. **Search inputs keep the ellipsis** (*"Search accounts…"*) — search feels progressive, a select does not. Sweep rule: any `placeholder="Select …"` ending in `…` inside a `Select` gets trimmed.

#### Conditional (dependent) fields & write-only secrets (§1.4)

Some fields exist only in a particular state, and some hold credentials that must never come back from the server. Reference: the Users form's **Mobile PIN** (gated by "Allow PIN Login for Mobile App").

**Conditional (dependent) required field.**
- **Visibility is bound to a controlling input** (a `Toggle`). Render the field only when the controller is on; on toggling **off**, also clear that field's error.
- **Conditional requirement** — required *only while shown*. Validate in the **submit handler**: if the controller is on and the value is missing/invalid, set a field error and keep focus on that tab.
- **Mask at the boundary.** `FloatingField` forwards no native `inputMode`/`maxLength`, so sanitize in `onChange` — e.g. a numeric PIN: `onChange={(v) => patch({ pin: v.replace(/\D/g, "").slice(0, 5) })}`.
- **Validation copy is specific:** `"PIN must be exactly 5 digits"` (format) vs `"Enter a 5-digit PIN"` (required-but-empty).

**Write-only secret with an "isSet" flag (the credential rule).**
- The server **never returns** the secret; it returns a **boolean** (`pinSet`, mirroring how passwords already work). Strip the hash from list/detail/create/update responses.
- The field is **masked** (`type="password"`, dots). When a secret is already set (`pinSet === true`), it shows a **`•••••` placeholder** + `helper` *"A PIN is set. Leave blank to keep the current PIN."*
- **On create / first set:** the field is **required** (when the controller is on).
- **On edit of a record that already has it** (`pinSet === true`): the field is **not** required — a blank submit preserves the value; a non-blank submit replaces it.
- Persist by hashing with the existing password-hash utility; expose only the boolean.
- **Authoring caution (1.5):** if seed/demo data *enables* the login method but stores **no** secret hash, `pinSet` reads `false` and the field **forces re-entry on every edit** — confusing. Seed a real secret for accounts whose login method is enabled so the "leave blank to keep" path works as designed.

> **Rule.** **Conditional fields** appear only when their controlling input enables them, are **required only while shown**, and validate in the submit handler (clear their error when hidden). **Mask** input at the boundary (`onChange` sanitize). **Secrets are write-only:** the API returns a `*Set` boolean, never the value; when set, the field is optional and shows "leave blank to keep current," and a blank submit preserves it.

**Conditional subtype (1.10 §F).** A dependent *select* follows the same law: render a type's **Subtype** field **only when that type actually has subtypes** (`step1ok` requires subtype only when `subtypesFor(type).length > 0`); otherwise it is hidden **and** not required. Generalize it: *never render a disabled/placeholder dependent field — conditionally mount it.* (Store Promotions: Multibuy → "Buy N for $X"; Buy-X-Get-Y → the X/Y matrix; TPR / % Off / $ Off / Bundle / Spend-Save have none. The retired "Minor/Significant Discount" depth subtypes moved into **Expected Impact**, §E below.) A list row with no subtype shows **nothing**, not an em-dash.

#### Async field-level uniqueness check (§1.4)

On the New/Edit User form, the email must be unique. Rather than only failing on submit, check on **blur** and branch the UI on the *state* of any existing match — turning a dead-end error into a recovery path.

- **On blur** (`FloatingField`'s `onBlur(value)`, §Field props), POST the value to a lightweight check endpoint.
- **Branch on the match:**
  - **No match** → clear any inline notice; proceed.
  - **Match is a *deactivated* user** → an **amber** inline callout offering **"Reactivate"** (recover the record instead of blocking).
  - **Match is an *active* user** → a **red** field error ("This email is already in use") with a **"View profile"** deep-link to that user.
- **On submit**, the server still enforces uniqueness and returns a **structured `409`** (status + the conflicting record's id/state) so the client renders the same branch even without the blur check.

> **Rule.** Validate unique fields **on blur** against a check endpoint and **branch the UI on the match's state** — **Reactivate** for a deactivated match (amber), **View profile** for an active one (red) — rather than a generic "already exists." Back it with a **structured `409`** on submit so the recovery branch also appears for race conditions.

---

### Search & Highlight (1.7)

Portal-wide search is **one grammar + one matcher + one highlight**, used identically in every list's search field, in each list endpoint, and in the ⌘K palette (§ Command Palette).

#### Query grammar (`searchQuery`)

Implemented once on the frontend (`lib/searchQuery.js`) and **mirrored** on the backend (`search_utils.py`) — the two must stay in sync.

1. **Whitespace splits tokens; default is AND** — every token must appear in the record's searchable text.
2. **A bare, exactly-uppercase `OR`** flips the whole query to OR (any token may match). Lowercase `or` is a literal token; `OR` inside quotes is literal.
3. **`"double quotes"`** = one token matched as an exact substring (phrase) — spaces and `OR` inside stay literal.
4. Matching is **case- and accent/diacritic-insensitive** (NFKD + strip combining marks), so `pina` matches `Piña`.

API: `parseQuery(q) → { mode, tokens }` · `matchesQuery(q, text) → bool` · `matchRanges(text, q) → [[start,end), …]` (merged ranges in **original-string** coords, via a per-char fold + index map). Surface the grammar only through the subtle `?` hint on search fields (§ Inputs) — never as chrome.

#### `<Highlight text query />`

Wraps the substrings of `text` that satisfy `query` in `<mark class="gr-hl">` (token `--p-highlight` / `--p-highlight-fg` — the only sanctioned yellow). Diacritic-folds per character with an index map back to the original string, so highlights land on the **un-normalized** characters (`pina` highlights `Piña`); mirrors the backend matcher. Returns the plain string when nothing matches.

**Usage:** wrap the *searched* fields of every result row/card (names, ids, and any field the backend matches on) and the ⌘K result titles/subtitles. Pass the same **debounced** query that drove the fetch, so highlights stay consistent with the visible rows. Reference: `preview/components-search-highlight.html`.

> **Rule (1.10 §K).** **Match painting is always `<mark class="gr-hl">`** — the theme-aware `--p-highlight` / `--p-highlight-fg` yellow (the only sanctioned yellow, 1.7) — **never a local color.** A portal-wide sweep found local `Hi` helpers tinting matches blue (`--p-primary-soft`); those are bugs. Blue never marks a text match; blue marks selection / state.

---

### Command Palette (⌘K · 1.7)

Global launcher opened with **⌘K / Ctrl-K** (or the sidebar "Search" button) — grouped, deep-linked results across Accounts, Products, Promotions, Plans, Users, plus page-jumps. Reference: `preview/components-command-palette.html`.

- **Backdrop z-index `12000`** — top of the ladder (§7), above modals (`10000`).
- Runs on the **Search Query Grammar** (§ Search & Highlight) and renders **`<Highlight>`** on result titles / subtitles and page-jump labels.
- Each result row carries the **entity icon** (§8 canon); Account / Product rows expose related **POD Plans** (`blur_medium`) and **Store Promos** (`award_star`) deep-link chips. The active row (keyboard ↑↓ / hover) is the **ink** cursor (`--p-action`).
- In-field **clear ✕** (`data-testid="command-palette-clear"`) mirrors the `Input` clear; the in-field **`?` hint** (`SEARCH_HINT`) renders its `Tooltip` at `z={12001}` so it floats above the backdrop.
- Test ids: `command-palette` / `command-palette-input`.

---

### Controls (Toggle, Checkbox, Radio)

#### Toggle (re-specced 1.11.2)

```
Track: 37×20px (29×14px visible), border-radius 999px (a pill — exempt from the squared radii)
Knob:  20×20px circle, background var(--p-surface) — NEVER #fff (1.11.2)
       box-shadow: 0 1px 2px rgba(0,0,0,.25)

Off: track var(--p-border-strong), knob left 0, knob border .5px var(--p-border-strong)
On:  track = the fill, SOLID (default var(--p-primary)), knob left 17px, knob border .5px fill
Disabled: knob var(--p-surface-tint), 50% opacity, inert
color (1.7): optional "on"-fill override (default --p-primary). The General Stock toggle
             passes color="var(--p-genstock)" for a purple switch.
Transition: left .15s, border-color .15s
```

> **Knob = `--p-surface`, never `#fff` (1.11.2 — supersedes the tinted-track + colored-knob spec).** Dusk's dark ON-track is the *light* dusty steel (`#ADBDD1`); a white knob on it has almost no contrast — the toggle read as "unbroken". Binding the knob to `--p-surface` keeps it white in light (`#FFFFFF`) and near-ink in dark (`#161618`), so it always contrasts with the track in both states (an inverted-ink read on steel; still distinct on the `--p-border-strong` OFF track). The ON track is now the **solid** fill and the knob never takes the fill.

#### Checkbox (re-specced 1.11.2)

```
18×18px, border-radius 1px   // 1.11.2 — was 3px (and 5px on some pickers)
Off: border 1.5px solid var(--p-border-strong), bg var(--p-surface)
On:  border 1.5px solid var(--p-primary), bg var(--p-primary),
     check glyph var(--p-action-fg) (14px)   // 1.11.2 — was hardcoded white
Disabled (1.5): bg --p-surface-tint, placeholder-grey check, cursor not-allowed, inert
```

> **Every checkbox-style square: 1px radius + `--p-action-fg` glyph (1.11.2).** These rules apply to **any** box that flips unchecked → checked with a drawn check — the Foundation checkbox, table select-all / row-select checks, multi-select list rows (Filter Menu options), radio-style "picked" indicators drawn as ticked pills, and custom picker overlays that draw their own tick. The glyph binds to `--p-action-fg` (white in light, near-ink in dark) so the check stays legible on the dusty-steel primary fill — a hardcoded white check *disappears* in dark. The 1px radius is universal (implementations had drifted to 3px and 5px). **Deliberately not squared:** true single-select radios (50% circles), the Toggle knob (a circle, not a checkbox), and pills/chips/badges (999).

#### Radio

```
18×18px circle
Off: border 1.5px solid #D1D5DC, bg #fff
On:  border 1.5px solid #1861AF, inner 8px circle bg #1861AF
```

#### Radio-card group (single choice among rich options · 1.10)

The canonical input for **one choice among 2–4 options that each deserve a glyph + blurb** — an alternative to `Select` when the options merit explanation. Shipped for **Expected Impact** (Store Promotions), which replaced the numeric "Anticipated Lift".

- Container `role="radiogroup"`; a label row above (e.g. "Expected Impact" + red `*`) and a helper sentence below. Grid `repeat(N, 1fr)`, `gap: 10`.
- Each card = `<button role="radio" aria-checked>`, `padding: 12px 14px; border-radius: 8; text-align: left`, a column (`gap: 6`) of **glyph → value → blurb** (value `600 14px/1`, blurb `400 12px/1.35` `--p-muted`).
- **Selected** = `border: 1px solid var(--p-primary)` + `background: var(--p-primary-tint)` + `box-shadow: inset 0 0 0 1px var(--p-primary)` (a **doubled inner ring**, not a thicker border — no layout shift); the value flips to `--p-primary-ink`. Unselected = `--p-border-strong` on `--p-surface`. Transition `border-color / background / box-shadow .12s ease`.
- Selection is **blue** — a choice living *inside content* (the ink/blue law), never ink. testids `promo-impact-group`, `promo-impact-{minor|moderate|significant}`.

**Expected Impact** (`primitives.jsx`): `EXPECTED_IMPACTS` = Minor / Moderate / Significant; `IMPACT_RANK` = {Minor:1, Moderate:2, Significant:3}. **`ImpactBars`** is the shared magnitude glyph — the active `signal_cellular_alt` bar-count layered over a faint full-scale base so "N of 3" reads clearly; `active` paints it blue. Downstream: the list "Lift" column becomes **"Impact"** (`ImpactBars` + label) and **sorts by `IMPACT_RANK`**, not alphabetically; the "Avg Anticipated Lift" stat card is removed; CSV header is "Expected Impact"; audit diffs the categorical value (legacy `anticipatedLift` still renders "2x"). Reference: `preview/components-expected-impact.html`.

#### Chip Toggle

A pill that toggles a single **boolean attribute** on a dense row — when a `Toggle` is too big and a checkbox would read as *selection* (e.g. "is this a Display?" on a placement row).

```css
display: inline-flex; align-items: center; gap: 4px;
height: 26px; padding: 0 9px; border-radius: 999px;
font: 500 12px/1 Inter; cursor: pointer;
/* off */ border: 1px solid var(--p-border-strong); background: #fff; color: var(--p-muted);
/* on  */ border: 1px solid var(--p-primary); background: var(--p-primary-tint); color: var(--p-primary-ink);
/* leading icon 13px: --p-placeholder off / --p-primary on */
```

Distinct from the **Filter Chip** (32px, opens a filter) and from **Chip** (status, non-interactive) — use only for an always-visible label + icon boolean.

---

### Filter Chips

```css
height: 32px;
padding: 0 12px;
border-radius: 6px;
font: 500 14px/1 Inter;
border: 1px solid var(--p-border-strong);
color: var(--p-ink);
background: #fff;
gap: 6px;
```

**Active state:**
```css
border-color: #1861AF;
color: #1861AF;
/* count badge */ background: rgba(24,97,175,.12); color: #1861AF;
```

**Inactive count badge:**
```css
background: var(--g-off-white);
color: var(--p-muted);
font: 500 11px Geist Mono, monospace;
padding: 1px 6px;
border-radius: 999px;
```

Chips always include a filter icon (left) and chevron-down icon (right). Count badge appears between label and chevron when a filter is active.

> **When to use a single Filter Chip vs. the consolidated Filter Menu:** a standalone chip is fine for **one or two** filterable attributes. The moment a table can be filtered on **three or more** columns — or any attribute has a large value set (hundreds–thousands of options) — switch to the **Filter Menu** below. Do not line up a separate dropdown per column; the bar runs out of room and large option sets can't be browsed in a plain dropdown.

---

### Filter Menu (consolidated)

The canonical pattern for filtering tables. **One** "Filters" button opens a two-pane popover that holds every filterable attribute, so the bar stays compact no matter how many columns are filterable. Reference implementation: `ui_kits/portal/FilterMenu.jsx`.

**Fonts (1.12.2 §1) — the Inter ↔ mono boundary drawn inside one control.** "Navigation is a role, not a location": the rail categories and pane header are *wayfinding* (same role as side-nav labels) and the value rows hold *entity names* (content) — all Inter — while the trigger, overlines, counts, and bulk actions are machine vocabulary — mono:

| Element | Spec | Voice |
|---|---|---|
| Trigger button ("Filters") | `500 12px var(--font-control)` | control |
| Rail category item | `400 14px Inter` (active `600`) | navigation destination |
| Pane header (active category name) | `600 14px Inter` | navigation destination |
| Value row (entity names) | `400 14px Inter` | content |
| Value sub-label / helper notes | `400 12–13px Inter` | content |
| Group overline (`SELECTED · N`, `N matches`) | `500 10px var(--font-control)`, uppercase, ls .08em | machine label |
| Count pill (trigger + rail) | `500 11px var(--font-control)` | datum |
| "Select all N matches" row | `500 12px var(--font-control)` | control |
| Footer result count | `400 11px var(--font-control)` | datum |
| "Clear all" | `500 13px var(--font-control)` | action link (§3) |

**Anatomy**

- **Trigger** — a single button styled like a Filter Chip: `sliders-horizontal` icon + "Filters" + total-active-count badge + chevron. Turns primary (`border`/`text` `#1861AF`, `background: var(--p-primary-tint)`) whenever any filter is active or the menu is open.
- **Popover** — `540px` wide, `border-radius: 10px`, `box-shadow: var(--shadow-float)`, anchored `8px` below the trigger. Two panes over a fixed `360px` height, plus a footer.
  - **Left rail** (`184px`, `background: var(--p-surface-alt)`) — one row per attribute (icon + label + per-attribute count badge). The active row gets a solid `var(--p-primary-tint)` fill with primary-colored, semibold label (no border accent).
  - **Right pane** — the value selector for the active attribute (see value types below). List area scrolls; rows are `34px`, checkbox + label, hover `var(--p-surface-alt)`.
  - **Footer** (`var(--p-surface-alt)`) — live result count on the left; `Clear all` (ghost) + `Done` (primary) on the right. Filters apply live; `Done` only closes.

**Value-selector types**

| Attribute size | Selector |
|---|---|
| Small enumerable (Category, Coverage, Status) | Plain checkbox list of all options. |
| Large (Account, Brand, Product — hundreds–thousands) | `type: 'search'` — a search `Input` at the top of the pane filters the list live (placeholder names the count, e.g. "Search 3,600 accounts…"). A **Select all N matches** row sits at the very top of the results (primary blue) — it selects/deselects the *entire* current match set, not just the rendered rows, so a search-then-select-all flow works even past the render cap. Currently-selected items pin to the top under a **`SELECTED · N`** group; results render under an **`N matches`** group, **capped at 50** with a "keep typing to narrow" note. Each row may show a secondary value (e.g. account type) right-aligned in `--p-muted`. |
| Date range (`type: 'daterange'`) | Embedded **`DateRangeCalendar`** (preset rail + calendar) — see below. The pane widens to **640px** (vs 540) because the calendar is wider than a facet list. |
| Numeric range (`type: 'numrange'` · 1.13 §M1) | Two numeric inputs (**≥ min / ≤ max**); value is `{ min, max }` (numbers or `''`). Participates in `attrCount` (1 when either bound is set), the applied-token summary (`5 – 12`, `≥ 5`, `≤ 12`) and clear-token handling (reset `{ min:'', max:'' }`). Test-ids `filter-numrange-min\|max-<slug>`. First use: "Units per Case" on the inventory-flow report. |

**Date-range attribute (`daterange`) — §1.4.** A date range is a **first-class Filter Menu attribute**, not a separate toolbar button. Declare it as `{ id: "GoLive", label: "Go-Live Date", icon: "date_range", type: "daterange" }`. Its **value is an object `{ from, to }`** (ISO date strings) — *not* a `Set` like checkbox/search facets — so the component handles it specially without breaking existing attrs:

- **Count helper.** Generalize the per-attr active count so Sets and date ranges both work, and route **every** count read (total "N filters" badge, rail-item badge, applied-token visibility) through it:
  ```js
  function attrCount(a) {
    const v = value[a.id];
    if (!v) return 0;
    if (a.type === "daterange") return (v.from || v.to) ? 1 : 0;
    return v.size || 0;          // Set-valued facets unchanged
  }
  ```
- **Right pane** renders the `DateRangeCalendar` (preset rail + grid) instead of the checkbox/search list; selecting days or a preset writes `{ from, to }`.
- **Applied token** summarizes the range (`"Jun 10 – Jun 16"`, `…` for an open end) instead of "N selected".
- **Clear** a date-range token resets to `{ from: "", to: "" }` (not an empty `Set`); "Clear all" (`onChange({})`) clears it with everything else.
- **Host integration:** the host stores the range *inside* its filter value object (`filters.GoLive = { from, to }`); helpers that iterate Set-valued facets must skip the date-range key. The old standalone "Date" toolbar button is removed.

> **Rule.** The Filter Menu supports a **`daterange`** attribute type alongside checkbox and `search` facets. A date range is a first-class facet: it shows in the rail, contributes to the "N filters" count, and appears as a removable applied token summarizing the range. **Don't ship one-off "Date" toolbar buttons** beside the Filter Menu — add a `daterange` attribute instead, so all filtering is unified in one control with one applied-token row.

**Relative week selector — plan-scoped views (1.10 §N).** Plan-scoped assignment views (Visualize Impact → Route Assignments) don't want calendar ranges — they want *plan-relative* weeks. The date-range control is **replaced** by a single `Select` (`data-testid="ra-week"`, width 250, `menuMaxHeight: 440`):

- Options: **"All Assignments"** (default) + **Week 1..n**, anchored strictly at the plan's **Start Date**. Monday start → Weeks 1–8; non-Monday start → a **partial Week 1** (start → that Sunday) + 8 full Mon–Sun weeks. Option label = `"Week N"` + a muted `"{Mon d} – {Mon d}"` range, with a `"· partial"` suffix where applicable.
- The week list is **per-plan** (`GET /api/orchestration/plans/{id}/weeks`); a stale selection (Week 9 after switching to an 8-week plan) **snaps back to All**.
- Persists to the URL as `?week=` — `urlFilters` `PARAM_LABELS` gains `week: "Week"` so Saved-View chips humanize it.
- This tab **shows past stops**; the `≥ today` clamp applies ONLY to Sales → Planned Assignments.
- ⚠️ A per-week workload summary strip (stops/rep-days/avg tiles) was prototyped and **removed at the user's explicit request** — do not reintroduce one. The week dropdown is the only week control.

**Applied-filter tokens**

Every attribute with a selection renders a removable token in the bar, right of the Filters button:

```css
/* token shell */ height: 32px; border-radius: 6px; border: 1px solid var(--p-border-strong); background: #fff; overflow: hidden;
/* body (click to reopen that attribute in the menu) */ padding: 0 4px 0 10px; white-space: nowrap;
/*   "Label:" in --p-muted, value in 500 weight */
/* ✕ (clears just that attribute) */ width: 26px; border-left: 1px solid var(--p-border); color: var(--p-placeholder);
```

Token summary text: list the values when ≤2 are selected (`Category: Wine`), otherwise `N selected` (`Account: 12 selected`). A `Clear all` text button (primary) follows the last token when any filter is active.

**Rules**

- Filters apply live — the table and result count update on each toggle; never gate behind an Apply step (the `Done` button only dismisses the popover).
- Every filterable column lives in the menu — do **not** mix per-column dropdowns with the menu.
- Clicking a token body reopens the menu focused on that attribute; the ✕ clears only that attribute.
- For large search sets, **Select all** operates on the full match set (every item matching the query), not just the rows currently rendered under the 50-item cap — so "search → select all" reliably captures everything that matched.
- Close on outside-click and on `Escape`.

**Clarifications**

- **Per-attribute icons.** Each left-rail attribute row carries an icon matching its column — e.g. Chain → `account_tree`, Account → `storefront`, plus Brand / Category / Size / Supplier.
- **Leading scope chip.** A filter step may begin with a **scope** chip that changes the *candidate set* rather than filtering it — e.g. Store Promotions' product step toggles "All Products" vs "Carried at Selected Accounts" (defaults to carried). It sits to the left of the attribute filters.
- **Searchable single-chip (`ChipFilter`).** When exactly one high-cardinality attribute is filtered standalone (e.g. a Chain with hundreds of values), a single searchable chip is acceptable instead of opening the full menu — the bridge between "one Filter Chip" and "the consolidated menu".
- **Related-record facet (§1.4).** A facet may filter on an attribute of a *related* record, not the row itself — e.g. In-the-Market's **Warehouse** filters the *product* list by the `market` (warehouse) of the *accounts* that carry each product (there's no "warehouse" field on a product; the **Chain** facet works the same way). Resolve the option list from the related collection (distinct `market`s across accounts, surfaced via the page's filter-meta endpoint), then filter rows by **set intersection**: compute the set of related-record IDs matching the selected values (accounts in those warehouses) and keep a product iff its `accountIds` intersect that set.
  > **Rule.** Implement a related-record facet as a set-intersection against the related IDs, and apply the **same** guard across the list, the (filter-responsive) stat cards, and any map/aggregate view, so every surface reflects the identical filtered population.
- **Facet order mirrors column order (§1.5).** A column that is filterable gets a facet, and **the facet order in the rail mirrors the table's visible column order** (e.g. Users: *Role · Warehouse · Route · Reports To*) so the menu is predictable. **Consolidate** redundant one-off toolbar filter buttons into the unified Filter Menu (continuing the 1.4 retirement of standalone "Date" buttons). New facet this cycle: **Route** (`route` icon, options = distinct route **numbers**, **numeric** sort); the Warehouse related-record facet is now applied consistently across surfaces.

---

### Tabs

#### Page-Level Tabs (Underlined)

```css
/* Container */
display: flex;
gap: 12px;
border-bottom: 1px solid var(--p-border);
padding: 0 4px;

/* Tab */
padding: 14px 16px;
font: 600 15px/1 Inter;
letter-spacing: -0.005em;
color: #4A5565;
border-bottom: 2px solid transparent;
margin-bottom: -1px;

/* Active tab — ink (wayfinding, same family as the active nav row) */
color: var(--p-ink);
border-bottom-color: var(--p-ink);
```

#### Segmented Tabs (In-page)

```css
/* Strip container */
display: inline-flex;
gap: 2px;
padding: 3px;
background: var(--p-surface-tint);   /* #F3F4F6 */
border-radius: 6px;

/* Segment */
padding: 5px 10px;
border-radius: 4px;
font: 500 14px/1 Inter;
color: var(--p-text-2);

/* Active segment — text is ink (wayfinding); the lifted pill uses --p-surface so it adapts in dark */
background: var(--p-surface);
color: var(--p-ink);
box-shadow: var(--shadow-card);

/* Count badge (active) — NEUTRAL (filter badges stay blue) */
font: 500 11px Geist Mono, monospace;
color: var(--p-text);
background: var(--p-surface-tint);
padding: 1px 6px;
border-radius: 999px;
```

> **Tabs are wayfinding → ink.** Both the page-level underline and the segmented active text use ink, the same family as the active nav row. The active count badge is **neutral** — don't confuse it with **filter** chips/badges, which are applied-filter _state_ and **stay blue**.

**Font (1.12.2 §6 · tokenized 1.13).** `SegmentedTabs` labels render `var(--tw-tab) var(--tz-tab)/1 var(--font-control)` — **600 14** in Light/Dark (page-level tabs sit one step above the 13px large-control tier); Black Ops compresses to 500 12. The count badge stays `500 11px` mono.

**Selected-tab color = `var(--tab-on)` (1.13).** Default `var(--p-ink)` — the 1.6 ink-forward law unchanged; Black Ops overrides it to `var(--p-primary)` so selected tabs speak the teal selection color.

---

### Pills (Category · Role · label)

> **THE BADGE VOCABULARY LAW (1.13 §G — user-mandated, portal-wide).** Stroke-outline + no-fill styling is **RESERVED for category/type badges** (product-category Pill, RolePill, AccountTypePill, ServicePill — *what kind of thing is this*). **STATUS badges** (*what state is it in*) must be either **fill + dot** or **text-only + dot** — they **never** take the outline treatment, in any theme.
>
> **The recipe (every category/type badge renders):** `background: var(--badge-fill, <its tint>)` + `border: var(--st-badge) solid var(--badge-stroke, currentColor)`. In Light/Dark this computes to the classic tinted fill with a 0-width border — nothing changes. In Black Ops it computes to a transparent-fill, 0.5px dimmed-stroke badge (text at full pastel brightness inside a stroke at 45% alpha of that same color — quiet outlines, loud text). Status badges do **not** reference these tokens.
>
> **Corollaries:** count/delta chips (`+N` / `−N` / `~N` on Accounts / Store Layouts / In the Market) went **bare** — no fill, padding, or radius; just colored mono text (tooltips + deep-links unchanged). **`ServicePill`** (Planned Assignments / Live View / Visualize Impact / edit rows) is category-class: the recipe, with color = a **deterministic hash of the service name → pal slot 1–10** ("Default" hashes to slot 6) — a service keeps its hue everywhere without a registry.

One flat **tinted-label** component — used for product categories, user roles, and any short label. Tinted background + deep text only, **no dot** (the dot is reserved for the Status Badge). The shell is the shared `.g-role-pill` class in `colors_and_type.css` (single source of truth); colors are passed inline per palette entry. Sizes `md` (default) and `sm` (11px).

```css
display: inline-flex;
align-items: center;
padding: 2px 10px;          /* sm: 1px 8px */
border-radius: var(--radius-pill);
font: 500 12px/1.5 Inter;   /* sm: 11px */
letter-spacing: .02em;
white-space: nowrap;
```

**The 10-color pill palette** (tint background / deep text). Map any category, role, or label to the nearest entry — never invent a per-feature color.

| Color | Background | Text | Used for (examples) |
|---|---|---|---|
| Amber | `#FFFBEB` | `#BB4D00` | Beer |
| Purple | `#F5F3FF` | `#6B21A8` | Wine · Executive |
| Orange | `#FFF7ED` | `#C2410C` | Spirits · Supervisor |
| Blue | `#EDF2F8` | `#1447E6` | RTD · Department Manager |
| Green | `#ECFDF5` | `#047857` | Non-Alcoholic · IT / Admin |
| Red | `#FEECEC` | `#C8252B` | Cider |
| Gold | `rgba(219,158,3,.12)` | `#92610A` | Mead |
| Teal | `rgba(20,184,166,.12)` | `#0D9488` | Sake |
| Sky | `rgba(85,167,255,.12)` | `#0369A1` | Seltzer |
| Neutral | `#F3F4F6` | `#4A5565` | Sales Rep · Other |

The user **Avatar** draws from the same palette — tinted background + deep-text initials — via the shared `.g-avatar` class; its ring variant uses the role's **text** color. (See Role Pills and Avatar.)

---

### Status Badge

A lifecycle-state indicator: a **soft tinted pill + a leading dot**. The dot is what separates it from Pills — Pills never carry a dot, Status Badges always do. Reference: `preview/components-status-badge.html`.

```css
display: inline-flex;
align-items: center;
gap: 6px;
padding: 2px 10px;          /* sm: 1px 8px */
border-radius: 999px;
font: 500 12px/1.5 Inter;
/* dot */ width: 6px; height: 6px; border-radius: 50%;
```

**Six tones, two forms.** The standard is a soft tinted pill + dot; the **borderless variant** (below) drops the fill for rows that already carry a pill. The *tone* carries both meaning and how much it draws the eye (amber leans in, gray recedes); the single in-progress state earns a **live, pulsing dot**.

> **1.13 — Status badges are EXEMPT from the Black Ops stroke treatment** (the Badge Vocabulary Law, §9 Pills): they never reference `--badge-fill`/`--st-badge` and always render **fill + dot** or **text-only + dot**, UPPERCASE mono per 1.12, in every theme. The outline register is reserved for *category/type* vocabulary — if a badge answers "what state is it in", it keeps its fill and dot.

| Tone | Background | Text | Dot | Typical states |
|---|---|---|---|---|
| Neutral | `#F3F4F6` | `#4A5565` | `#99A1AF` | Draft · Past · Archived · Inactive · Deactivated |
| Info | `#EDF2F8` | `#1447E6` | `#1861AF` | Active · In progress · New *(live dot)* |
| Pending (amber) | `#FFFBEB` | `#B45309` | `#B98A2E` | Pending · Invited · Scheduled |
| Success | `#ECFDF5` | `#047857` | `#21C06B` | Complete · Approved · Paid · In market |
| At-risk (orange) | `#FFF7ED` | `#C2410C` | `#C2410C` | At risk · Draining · Expiring |
| Danger | `#FEECEC` | `#C8252B` | `#C94A4E` | Failed · Overdue · Rejected · Discontinued |

**Borderless variant** — when a row already shows a Role/Category Pill, drop the pill fill and keep the dot + colored label, so the two don't read as twins.

**Rules**

- **Tone = meaning, not feature.** Map a status to the nearest of the six tones; never mint a per-feature color. Pending (amber) and At-risk (orange) are deliberately distinct hues so “awaiting” never reads as “problem”.
- **Attention is built in** — loudness comes from the tone + the live dot (reserved for genuinely in-progress states; respects `prefers-reduced-motion`).
- **Copy:** one or two words, Title Case. No icons by default — color + dot carry it.

**Lifecycle mappings (examples — reuse a tone, don't re-mint one).**
- **Store Promotion:** Active → **Info** (blue, live dot) · Upcoming → **Pending** (amber) · Past → **Neutral** (gray).
- **User:** Active → **Success** (green) "Active" · Deactivated → **Neutral** (gray) "Deactivated".

---

### Chip (micro status)

The smallest inline indicator: a **soft tinted pill (~19px tall) with an optional 12px leading icon**. Use on dense rows where a Status Badge (with its dot) or a category Pill would be too heavy — a plan flag ("Adds Aug 1"), a presence marker ("1 Display"), a soft warning ("Draft exists"). This is the single spec for these micro-chips; do **not** hand-roll new ones. Reference: `preview/components-chip.html`.

```css
display: inline-flex; align-items: center; gap: 3px;
height: 19px; padding: 0 7px; border-radius: 999px;
font: 600 10px/1 var(--font-control); white-space: nowrap; flex-shrink: 0;
/* optional leading icon (`icon`) and/or trailing icon (`iconRight`, 1.7): 12px, currentColor */
```

`iconRight` (1.7) renders a Material Symbol **after** the label (mirrors the leading `icon`) — used for the directional "Suggested →" nudge (`iconRight="arrow_forward"`), where the arrow points at the control it recommends. Signature: `Chip({ tone, icon, iconRight, children, title, testid, style })`.

| Tone | Background | Text | Typical use |
|---|---|---|---|
| `neutral` | `--p-surface-tint` | `--p-text-2` | Generic / count tags |
| `info` | `--p-primary-tint` | `--p-primary-ink` | Plan add ("Adds Aug 1"), presence ("1 Display") |
| `amber` | `--g-gold-10` | `--p-warning` | Soft warning ("New to store", "Draft exists", "Suggested") |
| `atrisk` | `--g-orange-10` (`#FFF7ED`) | `--p-atrisk-strong` (`#C2410C`) | **"At Risk", "~N draining"** — a soft orange between `amber` and `danger` (§1.4) |
| `danger` | `--g-red-10` | `--p-danger-strong` | Removal / discontinue ("Disc. Sep 1") |
| `success` | `#ECFDF5` | `#047857` | Positive confirmation |

> **`atrisk` vs the Condition palette.** `atrisk` is the **chip tint** for the At-Risk *condition* (tinted pill on white/dark rows). The **map/legend** swatch for At Risk uses the Inventory Condition palette's `--cond-at_risk` (Palette A — light `#AD7300`, dark `#FFC940`; see §Maps / Inventory Conditions). These are intentionally different surfaces (tinted chip vs. saturated fill on the basemap) — keep both.

**Rules**

- **Tone = meaning.** Map to the nearest tone; never mint a per-feature color. (Six tones now: neutral · info · amber · **atrisk** · danger · success.)
- **Chip vs Status Badge vs Pill:** Chip = micro flag / marker (icon, **no dot**, 10px mono). Status Badge = lifecycle state (**dot**, no icon, 12px). Pill = category / role tag (12px, no dot / icon).
- **Copy:** one to three words; an icon is optional and only when it adds clarity.

**Canonical icon + tone + copy map** (battle-tested — adopt verbatim):

| Meaning | Tone | Icon | Copy template |
|---|---|---|---|
| Pending add (future) | `info` | `schedule` | `Adds {Mon D}` |
| Pending discontinue | `danger` | `remove_shopping_cart` | `Disc. {Mon D}` |
| Not yet at store | `amber` | `add_business` | `New to store` |
| Display presence (count) | `info` | `curtains` | `{n} Display` |
| Existing draft warning | `amber` | *(none)* | `Draft exists` |
| Suggested setting | `amber` | (trailing) `arrow_forward` | `Suggested →` (1.7 — dropped the leading `lightbulb`; the arrow points at the control it nudges) |

**Clickable status pills.** A row may carry a Chip that is *interactive* — e.g. amber "Reset {Mon D, YYYY}" (`event_upcoming`) or gray "Draft" (`edit_note`) that deep-links into a version's editor. It uses the Chip visual but is a `<button>`: it must `stopPropagation` from the row's own click and expose a `title` / aria-label.

---

### Stat Cards

```css
background: #fff;
border: 1px solid var(--p-border);
border-radius: 6px;
padding: 14px 16px;
display: flex;
gap: 10px;
align-items: center;
box-shadow: var(--shadow-card);
```

> **Numeric summary values are Geist Mono (§1.4).** *Every* headline / summary numeric value renders in **Geist Mono** — the tabular feel keeps the digits a stable width while a count-up ticks. The exact weight/size is **contextual**: `StatCard` = `700 20px`, the map's `SummaryStat` = `600 22px`. Label + unit copy follows the §Voice conventions: spell out **"Average"** (not "Avg."), **unit-suffix the value** (`12.5 cs/wk`, `45 days`, `471 cs`) while the label names the metric, and let the **headline metric follow the viz encoding** (surface the magnitude a map's fill encodes; "Accounts" not "Stores" when the dot is an account; "In Market" for total cases).

**Value:** `font: 700 20px/1 'Geist Mono', monospace` — color varies by semantic meaning:

| Color | Token | Use case |
|---|---|---|
| Blue | `var(--p-primary)` | Hero metric (e.g. Cases in Market) |
| Ink | `var(--p-ink)` | Neutral metrics |
| Green | `var(--p-success)` | Positive pending (Pending Additions) |
| Red | `var(--p-danger)` | Negative pending (Pending Discontinue) |
| Gold | `var(--p-warning)` | Draining / warning (Discontinued & Draining) |

**Label:** `font: 400 14px/1.3 Inter; color: var(--p-text-2)`

**Action link** (optional, e.g. "Show"): subdued-link style — `font: 500 12px/1 Inter; color: var(--p-muted); text-decoration: underline; text-decoration-color: #C4C9D2; text-decoration-thickness: 1px; text-underline-offset: 2px` (hover → `--p-ink`). Solid underline, never dotted — see Inline Links.

Numbers use abbreviations: `21.1k`, `$482.7k`, `1,258`.

Stat cards are laid out in 3-up rows.

#### Examples

```
21.1k   Cases in Market
1,258   Active Placements
50      Points of Distribution
1       Pending Additions          Show
1       Pending Discontinue        Show
4       Discontinued & Draining    Show
```

#### Count-up animation

Every StatCard **value counts up from 0** on mount and whenever the value changes (e.g. a filter narrows the set), using **ease-out-quart** (`1 − (1−t)⁴`, ~760ms, no bounce) with a **coupled opacity ramp** (`opacity = min(1, 0.15 + t·1.9)`) so the number is faint exactly while the digits churn fastest — a graceful fade-in, not a flicker. The component owns this, so **don't reimplement per screen**. Prefix / suffix are preserved so formats survive (`30%`, `15.1k`, `2.5x`, `$1,234`, `4.9`; grouping + decimals re-applied each frame); non-numeric values (`—`, `N/A`) render as-is. Respects `prefers-reduced-motion` (snaps to final). The value stays **Geist Mono 700/20** so tabular digits don't jitter width. Reference: `useCountUp` / `parseStatValue` / `formatStat` in `primitives.jsx`.

#### Drill-in & active state

A stat card can act as a **filter shortcut**: clicking its value (or the "Show" link) applies the matching table filter — e.g. "Pending Additions" toggles the Action filter; "Ending ≤ 7 Days" applies a `today..+7` date range. When a stat is the **live drill target** it takes an **`active` state** — its border, an inset `1px` ring, and the action link all adopt the card's semantic color (`box-shadow: inset 0 0 0 1px {color}, var(--shadow-card)`).

#### Informational vs drill-in

`action` is **optional**. Omit `action` / `onClick` for an **informational** StatCard — a pure KPI with no clean 1:1 filter to drill into (e.g. "Layout Coverage", "Avg. Placements"). It shows `value` + `label` only (still count-up animated, still elevated), with no link styling. Use a **drill-in** StatCard when clicking it filters the list to that subset (the `active` state mirrors whether that filter is on). **Don't duplicate the tabs:** if a card would be 1:1 with a segmented tab's count, prefer a derived KPI instead. (Store Layouts dropped its tab-mirroring cards for Layout Coverage / Avg. Sections / Avg. Placements — all informational.)

#### Filter-responsive

**Stat cards reflect the page's active search + facet filters, and are tab-independent.** Compute stats over the *filtered* population (before the tab split) and fold them into the **list response** (`{ items, counts, stats }`) so they update in lockstep with the list on every filter change — never a separate, unfiltered `/stats` request. The segmented tab does **not** change the stat values (only search + facets do); the tab counts live on the tabs. Initialize with zero defaults so first paint is clean (the count-up then animates 0 → real value).

#### Show / Hide Stats

A **Neutral** Button toggles the whole stat row's visibility, **persisted per page** in `localStorage` under `gr-stats-visible:{key}`. Labels are **"Show Stats" / "Hide Stats"** (Title Case) with `visibility` / `visibility_off` icons.

---

### Tables

> ## Tables 2.0 — content-hugging SUBGRID (1.13 §H; SUPERSEDES the 1.10 fixed templates)
>
> Four user complaints about inconsistent column padding led to a complete re-architecture. **All portal tables** (Planned Assignments, In the Market, Accounts, Users, Store Layouts + Templates, POD Planner, Promotions, Live View, Route Assignments, Orchestration, Audit Log) share one recipe:
>
> ```
> TableShell  — `template` prop → the scroll container's inner div becomes the grid:
>               display:grid; gridTemplateColumns:<template>; columnGap:8;
>               alignContent:start; minWidth:'min-content'
>               (min-content floor = intrinsic track minimums → natural h-scroll
>               threshold; row backgrounds span the full scrollWidth)
> TableHeader — cols="subgrid" → spans 1/-1, inherits the parent gap, owns sticky z-index
> Rows/skeletons — gridTemplateColumns:'subgrid'; gridColumn:'1 / -1' (no per-row gap)
> ```
>
> **Template rule (final form):** every data column = `minmax(max-content, 1fr)` (hugs the widest *visible* value, shares extra width proportionally) · the primary text column = `minmax(<px-min>, 2fr)` (e.g. 160–180px) with ellipsis — **the one column allowed to truncate** · control columns (checkbox / skip / drag / kebab / chevron / map button) = fixed px or `max-content` — they never inflate.
>
> **The 8px gap standard [RULE]:** `columnGap: 8` on the header (TableHeader's default) **and** every row/skeleton grid. The gap **is** the buffer — never bake padding into column widths, never pad a `minmax()` minimum.
>
> **Zebra rows (`--p-row-alt` + `.g-zebra`):** light `#F7F8FA` · dark `#1B1B1E` · blackops `#212127` (deliberately high-contrast, user-approved). Every data row AND skeleton row carries `g-zebra` (loading stripes match loaded); `:nth-child(even of .g-zebra)` skips non-row siblings. Rows must NOT hardcode `background: var(--p-surface)` inline (inline wins over zebra); conditional inline backgrounds (selected / dirty) are allowed — they *should* win. Hover rules keep priority via `!important`; `.gr-sticky-actions` uses `background: inherit` to match its row's stripe. **[RULE — §N2] zebra is for PEER rows only** — never nested/child rows inside an expanded parent (alternating stripes on Orchestration's revision rows read as "not part of the parent row"; they stay flat `--p-surface-alt` with a divider).
>
> **Row dividers are REMOVED [RULE §H2]:** zebra carries row separation ("stripes + dividers" was A/B'd and rejected even under the stronger Black Ops stripe). Kept borders: the table header (1px), GroupHead section rows, Orchestration revision rows (consecutive revisions share a flat bg and need the separator), and nested sub-panels.
>
> **Subgrid laws (§H5 — hard-won):**
> 1. **Full-width spanning items** (empty states, GroupHead rows, group wrappers, expansion panels) span `gridColumn: '1 / -1'` — and if their content is wide or nowrap they **must carry `contain: 'inline-size'`** (+ `minWidth: 0`, `overflow: hidden`). A spanning item's *max-content contribution* distributes into `max-content`-min tracks and can inflate the table to thousands of px — `overflow: hidden` only zeroes the MIN contribution, not the MAX. (Found live: a promotions expansion panel inflated tracks to 10,065px.)
> 2. **Edge tracks absorb the row padding.** A subgrid row's own `padding: 0 16px` is *subtracted from its edge tracks* — a leading checkbox column must be sized `16 (padding) + 18 (checkbox) + 10 (slack) = 44px`. Standard: **leading checkbox track 44px; trailing kebab track 44px (36px small)**. The first column *measuring* 16px narrower at cell level is expected, not a bug.
> 3. Group wrappers containing rows are themselves **nested subgrids** spanning 1/-1; skeleton wrappers can use `display: contents`.
> 4. Accepted known minors: a header's sort icon inflates a hugging column ~16px; skeletons can cause a small track reflow on first data paint.
>
> **Assorted (§H6):** disabled `SortHeader` = `--p-muted`, not placeholder (unsortable headers must not read as faint/broken — they just lose the arrows) · **all table footers route through the shared `DataTableFooter`** (mono 11 control; hand-rolled Inter-13 footers are retired; it gains a **`trailing`** prop — right-side custom content before pageSize/pager) · header label abbreviations for hugging columns: **"Service Time" → "Est Time"** (renders EST TIME), **"SEQUENCE" → "SEQ"** — CSV exports keep the long words · sticky header bands inside cards use `borderRadius: "var(--r-card) var(--r-card) 0 0"`, never a numeric literal.

```css
/* Wrapper (large surface — border + soft shadow on shell, see §7) */
border: 1px solid var(--p-border);
border-radius: 8px;
box-shadow: var(--shadow-surface);
overflow: hidden;

/* Header row */
background: #F9FAFB;
font: 500 11px/1 Inter;
letter-spacing: .08em;
text-transform: uppercase;
color: var(--p-muted);
padding: 10px 16px;
height: 40px;

/* Body rows */
font: 400 14px Inter;
color: var(--p-ink);
padding: 10px 16px;
height: 45px;
border-bottom: 1px solid var(--p-border);

/* Row hover */
background: var(--p-primary-tint);   /* #EDF2F8 */

/* ID cells */
font-family: 'Geist Mono', monospace;
font-size: 12px;
color: var(--p-muted);

/* Numeric cells */
font-family: 'Geist Mono', monospace;
font-size: 13px;
color: var(--p-text);

/* Product name */
font-weight: 500;
```

**Column conventions (1.5).**
1. **Identifier / code columns render in Geist Mono, value only.** A "Route" column shows the **bare number** (`83`), not a prefixed phrase ("Route 83"). Pull identifiers out of the name subtitle into their own mono column.
2. **Empty cells use an em-dash `—`** in `--p-border-strong` (a consistent "no value" glyph) — never blank.
3. **Filter↔column parity** (also §Filter Menu): a filterable column gets a Filter Menu facet, and the **facet order mirrors the visible column order**.
4. **The name-cell subtitle is the most identifying *human* attribute** (e.g. job title) — codes get their own column, not the subtitle.

**Grid-row tables (read-only feeds).** Ultra-dense, fixed-schema, read-only ledgers (e.g. the Audit Log) may be built from CSS-grid `div` rows instead of a real `<table>`, to control 7–8 fixed/elastic columns precisely. Allowed **only** for read-only data feeds, and only if it keeps the standard chrome: the `#F9FAFB` / `11px` caps / `.08em` header, 1px row borders, the hover tint, and the standard footer. Anything interactive or selectable (e.g. the wizard `SelectionTable`) stays a real `<table>`.

Columns auto-size to content with a `max-width: 300px` cap. Headers support column-resize via a drag handle (6px, highlights `--p-primary` on hover).

#### DataTable primitives — the shared skeleton (1.10 §H)

Every list screen builds on four shared primitives (`DataTable.jsx`); reference these as the canonical implementations.

- **`SortHeader({ label, k, sort, onSort, idPrefix, align, disabled })`** — the sortable column header: `500 11px/1` uppercase, `.07em` tracking; idle `--p-muted` + `unfold_more`; hover `--p-ink`; active `--p-primary` + `arrow_upward|arrow_downward` (**sort state is blue = the state law**). The **`disabled`** variant renders a non-interactive `--p-placeholder` span with `title="Sorting is disabled while grouped"` — used when a grouped view only lets the group-defining columns re-order groups (§L). testid `{idPrefix}-sort-{k}`.
- **`TableShell({ minWidth, footer, radius='var(--radius-lg)', … })`** — the list-table card: `--p-surface` + hairline + `--shadow-surface`, an inner `overflow:auto` scroll region wrapping a `minWidth` div, and a footer slot. This **"one scroll container + minWidth wrapper"** is the **required skeleton** — the prerequisite for sticky headers and the pinned actions column (§M). A header placed *outside* the scroll container clips a pinned cell. **The default radius is token-bound (1.11.2):** `var(--radius-lg)` — the *same* token as Home Health tiles and every other surface card, so tables and cards stay in lock-step through any radii change. **Never hard-code a numeric `border-radius` on a card or table** — a hard-coded `8` silently skipped the Dusk radius update; don't pass per-caller `radius=` overrides either.
- **`TableHeader({ cols, columnGap, muted })`** — the sticky header row: 40px, `0 16px`, `--p-surface-alt`, bottom hairline, `position: sticky; top: 0; z-index: 3`. It **owns the z-index**, fixing the whole "rows scroll up through the header" class of bugs in one place.
- **`DataTableFooter({ page, pageCount, pageSize, total, shown, onPage, onPageSize, noun, leading, pageSizeLabel, pageSizeOptions, … })`** — "Showing **X–Y** of **Z** {noun}" + optional rows-per-page `Select` + `Pagination`, `10px 16px` on `--p-surface-alt` with a top hairline (`data-testid="dt-summary"`).

> **Group pagination.** `pageSizeLabel` / `pageSizeOptions` let a **grouped** table paginate **by group** so a group never splits across a page boundary — e.g. "Rep-days per page" (options 10/15/25), summary *"Showing 1–15 of 38 rep-days · 254 assignments"* (`noun="rep-days"`, `leading` for the row count, `shown` for this page's visible group count).

#### Pinned right-hand actions column (1.10 §M)

When a table scrolls horizontally, its rightmost **action** column (kebab, or the row-navigation chevron) stays pinned to the visible right edge via `.gr-sticky-actions` (`position: sticky; right: 0; background: inherit`) + `.gr-sticky-actions-head` (`z-index: 3`) on the header cell. Rules learned shipping it across six tables:
- Requires the §H `TableShell` skeleton (one `overflow:auto` container + a `minWidth` div, sticky header **inside** it) — a header outside the scroll container clips the pinned cell.
- Row backgrounds must be **opaque** (`--p-surface`, not transparent) — the pinned cell uses `background: inherit` to mask content scrolling beneath it.
- The wrapper `minWidth` must be ≥ the grid's true minimum (sum of `minmax` floors), or data rows overflow the wrapper while full-width group headers obey it and the two visibly disagree.
- **No divider/shadow** on the pinned column — a left hairline was tried and removed (it only showed on tables that actually overflow, reading as inconsistency). The column pins silently.
- In grouped tables, the group-header identity cluster pins `left: 16` and any trailing button `right: 16`, so both stay at the viewport edges as the row scrolls under.

#### Pending-delta count cell

A count of items at a record, followed by clickable **`+N` (green)** / **`−N` (red)** mono chips for pending changes (additions / discontinues coming via Product Plans) — each a **deep-link** (see Navigation → deep-linking). Reference: `CountDeltaCell` in `primitives.jsx`.

`[ count ]  [ +N ]  [ −N ]` → renders `—` (`--p-placeholder`) when all are zero.
- **Count** — `Geist Mono 500/13`, `--p-text` (or `--p-placeholder` at 0), with a Tooltip ("N products carried at this store"); not clickable.
- **`+N` chip** — `Geist Mono 500/11`, `padding: 2px 7px`, `radius 999`, **no border**, `color: --p-success` on `--g-green-10`. Tooltip: "N pending addition(s) — view in POD Planner".
- **`−N` chip** — same shape, `color: --p-danger` on `--g-red-10`, using a **minus sign `−` (U+2212)**, never a hyphen.
- **Counts are never netted** — `+5` and `−2` show independently (never collapse to `+3`). Chips `stopPropagation` so the row's own click doesn't also fire.

Distinct from **Chip** (status flags): this is a fixed green/red **signed-delta** with mono numerals.

> **Pending-change tint language — unified (1.5).** All "pending change" cues share **one** visual language so the `CountDeltaCell`, the PlanBadge ("Adds Aug 1" / "Disc."), the "New to store" badge, and the map pending pin read the same: **Add = green, Remove/Discontinue = red, Soft-required/attention = amber** — always a **soft tint pill** with a `+`/`−` prefix and **Geist Mono** numerals, **never bold black strokes**. (The PlanBadge pills were redrawn to match the POD Planner action pills + the CountDeltaCell; "New to store" uses the same green soft-tint.) The **pending-add map pin** is a **hollow dashed ring + center dot** (`.g-cov-pin.is-pending`, `stroke-dasharray: 2 2`), colored `--cond-pending` — distinct from a solid placed pin.

#### Stretched-link rows — clickable rows that open in a new tab (1.9)

A data-table row often must both **navigate to a detail page on click** *and* hold its own interactive controls (selection checkbox, count-delta chips). You can't nest those inside an `<a>` (invalid + click hijacking), so use the **stretched-link overlay**:

- The row stays a `div` with `position: relative` and keeps its existing `onClick` navigate (the fallback for clicks on raised cells).
- Insert an absolutely-positioned **`AppLink` overlay as the first child** — `position: absolute; inset: 0; zIndex: 1`, `tabIndex={-1}`, `aria-label={rowTitle}`, `onClick={(e) => e.stopPropagation()}` (so a left-click doesn't double-navigate via the row's own handler), `data-testid="…-row-link-{id}"`.
- Raise every **interactive** cell above the overlay with `position: relative; zIndex: 2` (the selection checkbox, the count-delta cell, layout pills). Plain text cells stay **below** the overlay so right-click anywhere on them offers "Open in new tab".

Result: right-click / ⌘-click anywhere on the row → new tab; the checkbox & chips still work. Shipped on Accounts, Users, and Store-Layouts rows.

---

### Info Banners

```css
/* Info (blue tint) */
background: var(--p-primary-tint);   /* #EDF2F8 */
color: var(--p-ink);
border-radius: 8px;
padding: 10px 12px;
font: 400 14px/1.4 Inter;

/* Amber (warning tint) — e.g. "editing a scheduled reset", CSV import warnings */
background: var(--g-gold-10);
color: var(--p-ink);

/* Danger (red tint) */
background: rgba(255,107,107,.12);
color: var(--p-danger-strong);
```

**Three tones:** **info** (blue), **amber** (warning / "heads-up" context), **danger** (red). Amber is for non-blocking context an operator should notice (cross-version editing banners, partial-import warnings) — not an error.

Example usage:
> "Select one or more products below, then press 'Continue' to choose a desired action for each product. (Step 1 of 4)"

#### Capability-lock banner (1.5)

A reusable variant: an **amber `InfoBanner` with a leading `lock` icon** that explains *why* a surface is read-only. Place it at the top of any form section the user can **see but not edit** (pairs with the §Disabled/locked control states and the §Permissions & Affordances pattern).

```jsx
<InfoBanner tone="amber" style={{ display:'flex', alignItems:'center', gap:10 }}>
  <Icon name="lock" size={18} />
  <span>{reason}</span>
</InfoBanner>
```

**Copy conventions** — sentence case, actionable, **role-neutral** (the viewer may not be an admin, so say *"Ask an administrator,"* **not** *"another administrator"*):

| Situation | Copy |
|---|---|
| Editing your own privileged settings | "You can't change your own role, permissions, or warehouse access. Ask an administrator to update these for you." |
| View-only on a record you can open but not edit | "You have view-only access to users, so these settings can't be changed." |
| Partial permission | "You don't have permission to manage roles & permissions. You can still edit this user's other details." |

---

### Permissions & Affordances — hide vs disable (updated 1.8)

> **New in 1.8 — permissions are strictly role-derived (supersedes the 1.5 per-user model).** There are **no per-user permission overrides.** A single **role → capability matrix** is the source of truth, edited **only** in **Settings → Roles & Permissions** (§ Settings · Roles & Permissions); saving a role **re-syncs every user holding it**, so a user's `permissions` array is always a **mirror** of its role's caps. The user-detail page is **read-only** about permissions (§ Users). *This replaces the 1.5 model that edited a per-user, disabled-by-capability Role + Permission matrix on the user-detail page.*

A consistent rule governs *how the UI reflects what you can and can't do*. (The capability ids themselves are product logic — see Appendix A.)

1. **HIDE** an affordance the user has **no capability to use at all**:
   - **Nav destinations** — e.g. the **Users** nav item disappears without `users.view`; the **Accounts** group without `acct.view`.
   - **Page-level create / destructive actions** — **New**, **Batch Actions**, **Save**, **Deactivate / Reactivate**.
   - The **Settings → Roles & Permissions** tab requires **`users.roles`**; without it, render a **locked empty state** (*"Roles & Permissions are restricted… Ask an administrator if you need access."*).
2. **DISABLE + lock-state** a control inside a surface the user *can* see but not change *in that dimension* (use the §Disabled/locked states + a §capability-lock banner explaining why). Example: a Department Manager can edit a user's profile fields but not their warehouse access. *(Permissions are no longer an example here — they aren't editable on the user page at all; see rule 6.)*
3. **"View only" surface label.** A whole card the user can read but not edit shows a muted **"View only"** label where its save/status indicator would be (e.g. the Account *App Requirements* card without `acct.edit`).
4. **Self-guard.** Users can **never** perform destructive self-actions / edit their **own** warehouse access (anti privilege-escalation), even if they hold the capability; surface it with the self-variant capability-lock banner.
5. **Backend is the source of truth.** Hiding / disabling is **UX only**; the API still enforces (`require_cap` → 403 / silently drops locked fields). **Never rely on the UI alone.**
6. **Permissions are role-level, edited only in Settings (1.8).** The user-detail *Access* tab shows a **read-only** permission matrix (a mirror of the role) + a Settings pointer; there is **no** editable permission control on the user page for anyone. Editing happens once, on the role, in Settings → Roles & Permissions, and propagates to every user of that role.

> **Rule of thumb.** *No capability at all → hide. Capability but not in this dimension (or self-guarded) → show it disabled + locked, and say why. Permissions → role-level, edited only in Settings; the user page mirrors them read-only.*

---

### Settings · Roles & Permissions (1.8)

The **single source of truth** for permissions: a **role → capability matrix** edited here, nowhere else. Saving a role **re-syncs every user holding it**. Requires the **`users.roles`** capability (else a locked empty state). Reference: `ui_kits/portal/SCREENS-1.8.md`.

**Layout.** A **272px role rail** (left) + a **permission editor** (right), under a blue `InfoBanner tone="info"`:
> *"Select a role, then edit the permissions associated with that role. Changes will be applied to all users with that role."*

**Role rail** — one selectable card per role:
- Card: a `RolePill` + a muted "N users" line. Selected = `--p-primary` border + `--p-primary-tint` bg + a trailing `chevron_right` (`--p-primary`).
- **Per-role unsaved dot:** a 7px `--p-warning` dot on any role whose draft differs from saved — so switching roles never hides pending edits elsewhere.
- testids: `role-select-<role>`, `role-dirty-dot-<role>`.

**Permission editor** — a header (role label + an **"Unsaved changes"** amber pill when dirty) over a **Masonry card grid** (§ Masonry card packing) of capability sections:
- Each section card: header (icon chip + section name + a mono `granted/total` count) over capability rows; each row = label + `Toggle`.
- **A toggled-but-unsaved row tints `--g-gold-10`** (amber = pending edit — the §Amber/Red editing law). Header buttons: **`Reset`** (ghost, `sm`) · **`Save Changes`** (primary, `sm`, Title Case).
- testids: `role-section-<key>`, `role-cap-<capId>`, `roles-save-btn`, `roles-reset-btn`, `roles-dirty`, `roles-info`.

**Per-role drafts (state rule — document it).** Keep a `drafts` map (`roleId → Set(caps)`); a role enters it only once touched. Switching roles **must not** wipe another role's in-progress edits. "Any dirty across all roles" drives the §Unsaved-changes guard. Re-baseline (drop the role's draft) after a successful save.

**Save confirmation** (`variant="confirm" tone="warning" icon="group"`): title *"Update {Role} permissions?"*; body explains it updates **all N users** with that role; confirm label **"Apply to N users"**. testids: `roles-confirm-modal`, `roles-confirm-save`.

**Backend contract:** see Appendix A (`role_permissions` collection + `GET /api/roles` + `PUT /api/roles/{role}/permissions`) — a user's `permissions` is always a mirror of its role's caps.

---

### Batch Actions (multi-select)

The multi-select pattern for operator list / table pages. Batch Actions live in a persistent **header control**, sitting with the table footer (count + pager) instead of floating over the data. Reference: `screens/PodPlanner.js`, `screens/Promotions.js`, `screens/Users.js`, `screens/StoreLayouts.js`.

- A **Neutral** Button labeled **"Batch Actions"** with a trailing `expand_more`, placed in the page header **to the left of the primary "New …" CTA**.
- **Always present**, but **disabled** until `selected > 0`. When active it opens the standard **Menu** popover of batch actions (e.g. *Edit Dates*, *Edit Qty*, *Delete*); destructive items go **last**, in `--p-danger`.
- Pairs with a **header-checkbox select-all (visible page)** and the standard table footer (`Showing X–Y of Z` + `RowsSelect` + Pagination).

**Row-checkbox tables (the full pattern).** Store Layouts is the reference (`screens/StoreLayouts.js`): a header **select-all** + a per-row checkbox whose cell **stops propagation** (ticking it never triggers the row's navigate-to-detail). A **"{n} selected" chip** (`--p-primary-tint` pill, hidden at 0) sits left of the Batch Actions button.

- **Tab-conditional menu:** the action list depends on the active tab (e.g. Active → *Apply Template*; Scheduled → *Edit Effective Date · Cancel to Draft · Cancel & Discard (danger)*; Drafts → *Publish Now · Schedule…*). Keep the trigger identical; vary only the Menu items. **Selection clears on tab switch** (selections aren't valid across different record sets).
- **Shared date modal (`BatchDateModal`):** for any "apply one future date to N records" action (Schedule…, Edit Effective Date) — a `Modal` with a Date Picker (`fromDate = tomorrow`), confirm disabled until a date is picked. Reuse it; don't build per-action date modals.
- **Partial results = two toasts:** a green success for the converted count *and* a separate red toast naming blocked records (e.g. "1 skipped — a draft already exists for: Bluewater Bistro"). Document this success+warning convention for partial batch outcomes.

Role-colored initials circle used wherever a user is represented (tables, detail headers, team rosters).

```css
/* Base */
display: inline-flex;
align-items: center;
justify-content: center;
border-radius: 50%;
font: 600 {size * 0.38}px/1 Inter;
letter-spacing: .01em;

/* Background + foreground = role colors (see Role Pill token table) */
```

#### Sizes

| Size | Use case |
|---|---|
| 22px | Inline in table cells alongside a name |
| 32px | Table body rows |
| 40px | Cards, team rosters |
| 52px | Page detail header |

#### Ring variant

Used on avatar stacks and in identity headers to visually separate overlapping avatars:

```css
box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px {role.dot};
```

---

### Role Pills (the Pill, applied to roles)

A user's role rendered as a **Pill** — the *same component* as a Category Pill, just assigned a color from the shared pill palette. **There is no separate Role Pill component or token set**: to add or change a role, map it to a palette color and give its avatar a matching ring. No dot (that is reserved for the Status Badge, which keeps pills and status visually distinct).

The Pill is a flat tinted label: tinted background + deep colored text only.

```css
display: inline-flex;
align-items: center;
gap: 6px;
padding: 2px 10px;   /* sm: 1px 8px */
border-radius: 999px;
font: 500 12px/1.5 Inter;   /* sm: 11px */
letter-spacing: .02em;
white-space: nowrap;
```

#### Role → palette mapping (pal-slot based since 1.11)

Roles draw from the **`--p-pal-1…10` badge palette** (§3): text/ring = the slot's foreground; background = the computed 15% `color-mix` tint. The **ring** column is the role's avatar ring — always the *same* color as the Pill's text. Because the pairs are pal-derived, they flip to the dusty dark variants automatically.

| Role | Slot | Text / Ring (light → dark) |
|---|---|---|
| Executive | `--p-pal-1` (violet) | `#6B21A8` → `#AF98C8` |
| Department Manager | `--p-pal-2` (blue) | `#1447E6` → `#84A8D2` |
| Supervisor | `--p-pal-6` (orange) | `#C2410C` → `#E5CAAE` |
| Sales Representative | `--p-pal-5` (slate) | `#4A5565` → `#B8B8C1` |
| IT / Admin | `--p-pal-3` (green) | `#047857` → `#9CCEBA` |

Sizes: `md` (default, 12px) and `sm` (11px, 1px vertical padding). To expand the role set, take a **reserved slot** (`pal-7…10`) — don't mint new tokens.

---

### Account Type Icon

White circle with a thin **neutral** ring and a dark **outline** Material Symbols Sharp glyph inside. The canonical mark for an Account anywhere it's represented compactly — table leading cell, detail-header avatar slot, map callouts, search results. Shipped as the **`AccountTypeIcon`** primitive (with a sibling **`AccountTypePill`** and the **`ACCOUNT_TYPE_ICONS`** name→glyph map).

```css
/* Shell */
display: inline-flex;
align-items: center;
justify-content: center;
border-radius: 50%;
background: #fff;
border: 1.5px solid #DDE1E6;   /* thin neutral ring (ring={false} to omit) */
color: #1C1C1E;

/* Icon size = container × 0.5  (e.g. 52px container → 26px icon) */
/* Material Symbols Sharp, outline (FILL 0) — glyph color #1C1C1E */
```

- **`AccountTypeIcon({ type, icon, size = 32, ring = true })`** — resolves the glyph from `ACCOUNT_TYPE_ICONS[type]` (default `storefront`). Pass an explicit `icon` to override the map; `ring={false}` inside a container that already provides one.
- **Tokenization:** the shipped literals are ring `#DDE1E6` and glyph `#1C1C1E`. Map to the nearest existing token (`--p-border` / `--p-ink`) only after confirming against the live app — the shipped values are these exact hexes.

#### Account types & icons

| Account Type | Material Symbol |
|---|---|
| Retail / Store | `storefront` |
| Restaurant | `fastfood` |
| Grocery | `shopping_cart` |
| C-Store | `local_convenience_store` |
| Bar | `local_bar` |
| Discount Store | `attach_money` |

#### Sizes

Shares the same 4-step scale as User Avatars:

| Size | Use case |
|---|---|
| 22px | Inline in table cells |
| 32px | Table body rows |
| 40px | Cards, list rows |
| 52px | Page detail header |

#### Account Type Pill

In page headers and prose/rows, pair the icon with an **`AccountTypePill`** — a **neutral** category pill that names the type (text only; the glyph lives in the sibling `AccountTypeIcon`). Distinct from the colorful category `Pill` and from the dotted lifecycle `StatusBadge` — use it specifically to label an account's *type*.

```css
display: inline-flex; align-items: center;
padding: 2px 10px;
border-radius: 999px;
background: #F3F4F6;          /* neutral — no role/category color */
color: #4A5565;
font: 500 12px/1.5 Inter;
letter-spacing: .02em;
white-space: nowrap;
```

#### In the Page Detail Header

The Account type icon (52px) replaces the initials avatar. The Account Type Pill sits inline with the account name. Back nav reads "Accounts".

---

### Permission Cards

The shared **capability-section card** of the role → capability matrix, used in **two modes**: **editable** (toggles) in **Settings → Roles & Permissions** (§), and **read-only** (static checkmarks) on the **Users → Access** tab (§ Users). Both pack with **Masonry** (§ Masonry card packing) so the two screens read as one system.

> **1.8 — no per-user overrides (supersedes 1.5).** Permissions are role-derived, so there is **no "deviation from role baseline" badge / status** anymore. The old per-user *override badge* + *N overrides* indicator were removed; the editable mode now uses the **amber pending-edit** tint (§Amber/Red editing law), and the user page is purely read-only.

```css
/* Card shell */
border: 1px solid var(--p-border);
border-radius: 10px;
overflow: hidden;

/* Section header — 28×28 icon chip (radius 7, bg #F3F4F6) + section name + a mono granted/total count */
padding: 11px 14px;
background: #FBFCFD;
border-bottom: 1px solid #F0F1F3;

/* Row */
padding: 9px 14px;
border-top: 1px solid #F4F5F7;
```

**Row content by mode:**
- **Editable (Settings):** `label` + a **`Toggle`**. A **toggled-but-unsaved** row tints **`--g-gold-10`** (amber = pending edit); the header shows the live `granted/total`, and an **"Unsaved changes"** amber pill drives the §Unsaved-changes guard.
- **Read-only (Users → Access):** `label` + a static **`check`** (granted) or muted dash (not granted) — no toggle, no edit — plus a one-line pointer: *roles are managed in Settings → Roles & Permissions.*

#### Empty state (no role selected)

Dashed border card with lock icon and instructional copy:

```css
border: 1px dashed var(--p-border-strong);
border-radius: 10px;
padding: 48px 24px;
background: #FBFCFD;
text-align: center;
```

---

### Confirmation Dialog → see Modal (`confirm` variant)

The Confirmation Dialog is no longer a separate component — it is the **`confirm` variant of Modal**: the same centered card, with an icon chip, no close ✕ (the user must make an explicit choice), an optional warning callout, and a destructive footer. Full spec under **Modal & Drawer** below.

---

### Page Detail Header

Full-width header above the tab body on user (and similar entity) detail pages.

**Structure:**

1. **Back nav** (optional) — `chevron_left` + section name, 13px 500, `--p-muted`. Omit on new-entity forms.
2. **Identity row** — Avatar (52px) · Name (700 28px, `letter-spacing: -.02em`) · Role Pill · Subtitle (14px, `--p-muted`) — then actions flush right.
3. **Actions** — Existing entity: Warning Secondary ("Deactivate") + Primary ("Save"). New entity: both buttons disabled until required fields are complete.
4. **Tab strip** — Page-level underlined tabs (Profile · Role & Permissions · Team), sits at the bottom of the header padding with `margin-bottom: -1px` to merge with the divider.

New-entity state: Avatar placeholder is a 52px gray circle (`#F3F4F6`) with `person_add` icon; no role pill; "New User" headline.

---

### App Shell & Navigation Sidebar

> **1.13:** the utility-area theme control is the **ThemeMenu popover** (`ThemeControl variant="row"` expanded / `variant="rail"` collapsed — §3 Theming); the 1.5 cycle toggle is retired. Under **Black Ops**: parent + utility rows render ALL-CAPS (children keep natural case); active rows take the **teal selection recipe** instead of the ink fill (this skin only); and the sidebar brand is the **crow mark**, not the wordmark, in expanded and mobile headers. Nav rows consume `--r-nav`.

The portal frame: a persistent left navigation sidebar + a scrolling content area. Reference: `ui_kits/portal/AppShell.jsx`.

> **New in 1.8 — the sidebar navigates through the guard.** The sidebar calls `navigate()` **programmatically** (not via `<a>`/`<Link>`); swap that one hook for **`useGuardedNavigate()`** (`ui_kits/portal/NavGuard.jsx`) and every nav routes through the global unsaved-changes guard (§ Unsaved-changes guard). No other App Shell change is needed.

#### Shell layout

The shell is locked to the viewport so the nav stays put and only content scrolls:

```css
/* wrapper */ height: 100vh; display: flex; overflow: hidden;
/* sidebar (aside) */ width: 248px /* or 72px collapsed */; flex-shrink: 0; height: 100vh;
/* main */ flex: 1; min-width: 0; min-height: 0; display: flex; flex-direction: column;
/* scroll region (main > div) */ flex: 1; min-height: 0; overflow-y: auto; padding: 24px;
```

The sidebar must sit **outside** the scroll region (a sibling of `main`), never inside it — that is what keeps it fixed while the table/content scrolls.

#### Sidebar dimensions & chrome

| Property | Value |
|---|---|
| Width — expanded | `248px` |
| Width — collapsed | `72px` |
| Width transition | `width 180ms ease` |
| Background | `var(--p-surface-nav)` — white in light; **`#131316` in dark, one step darker than content surfaces (`#161618`)** so the nav reads recessed (1.11.1) |
| Right divider | `1px solid var(--p-border)` on the **`<aside>` itself** (full height — must NOT live on an inner top-nav container, or it stops above the bottom utility nav) |
| Collapse toggle | 26×26px circle, `right: -13px`, `top: 28px`, floats on the divider edge; chevron icon flips |

- **Org header** — wordmark (collapsed: crow mark) + company name + a global **Search** field (`search` icon + "Search…" placeholder + a `⌘K` hint) that opens the **Command Palette** (see §Command Palette). When the rail is collapsed the field becomes a single search-icon button. *(Replaces the former city/location selector, which has been removed.)*
- **Primary nav** — parent rows (40px, icon + 15px label + `expand_more` chevron when it has children) with expandable child lists. The first row is **Home** (`home` glyph, the landing leaf). **Active leaf** row: solid `--p-action` fill with `--p-action-fg` label + icon (ink — inverts to white-on-near-black in dark). **Open group** (parent of an active child): neutral `--p-surface-tint`. **Hover** (any row): neutral `--p-surface-tint` — never blue. Active **child** row: solid `--p-action`, `--p-action-fg`, `30px` min-height. Keyboard focus-visible outlines stay `--p-primary` (blue). Every navigating row is an **`AppLink`** (incl. flyout children) — see § Navigation & links.
- **Nav groups start collapsed; only the active group auto-expands (1.9).** On load **all** parent groups are **collapsed** (the fully-expanded default overflowed the viewport and hid the scope of sections); the group owning the current route **auto-expands** so a deep-link / reload still reveals your location. Nothing is auto-closed — manual toggles persist for the session; on `/home` (a leaf) everything is collapsed. Open / close is **animated** (grid-rows `0fr ↔ 1fr` + a staggered child reveal — see §10 Motion); collapsed children stay mounted but get `tabIndex={-1}`. Implementation: initialize the open-map to `{}` and, on path change, `const active = NAV.find(it => it.children && routeActive(it)); if (active) setExpanded(s => s[active.id] ? s : {...s, [active.id]: true});`.
- **Navigation IA (groups → routes).** Parent groups expand to child routes; **Users** navigates directly. Entity glyphs follow the §8 canon:
  - **Insights** (`line_axis`) · **Sales** (`ballot`) — analytics & planning groups.
  - **Orchestration** (`graph_7`) → View Plans · Visualize Impact.
  - **Products** (`category`) → In the Market · POD Planner.
  - **Accounts** (`store`) → Accounts List · Store Layouts · Store Promotions.
  - **Users** (`person`) — direct leaf, no children.
- **Bottom utility nav** — pinned to the bottom. Top → bottom: **Help Center** (`help_center`) [toggles the in-product Messenger — §Q below], **Audit Log** (`history`), **Settings** (`settings`), a **theme toggle** (cycles Light → Dark → System; icon `light_mode` / `dark_mode` / `contrast`, "Auto" hint on System), **Account** (`person_raised_hand`, the signed-in user's name), **Sign Out** (`logout`). "Audit Log" (`/audit-log`), "Settings" (`/settings`), and the Account row (own profile) are real routes and carry an **active/selected** state (solid `--p-action` fill + `--p-action-fg` icon, like the primary nav); Help Center toggles the Messenger when configured (§Q), else opens externally; Sign Out is a utility. (The former "Ops Tools" toggle has been removed.)

#### Nav gating — capability-per-child (1.10 §O · supersedes the 1.9 role-id gating)

Every nav **child carries its own `cap`** (e.g. `{ id: "live-view", label: "Live View", path: "/sales/live-view", cap: "sales.view" }`); leaf items carry a top-level `cap` (**Home** carries none — everyone lands somewhere). Filtering: **drop children the user lacks, then hide any group left empty.** Never render an empty parent group or a **disabled** nav row — nav is **hide-not-disable** (wayfinding, not a capability lesson; consistent with the 1.5 affordance model). The capability catalog is **feature-aligned** (22 caps across 7 sections — see Appendix A) and **versioned** (`CAPS_VERSION`) so defaults can be re-seeded once per catalog rev while preserving per-role customization. Backend enforcement is unchanged law: hiding is UX; every endpoint still `require_cap`s.

#### Nav alert dot — Live View (1.10 §B)

A tiny **static** (non-pulsing, no count) **7px `--p-danger` dot** (`data-testid="lv-nav-alert-dot"`, native `title="Incomplete stops need attention in Live View"`) that appears when Live View has ≥1 Incomplete stop today. It renders in **all four sidebar states**: (1) beside the **Live View child** row (Sales expanded), (2) beside the **Sales parent** row (group collapsed), (3) **top-right of the Sales rail icon** (sidebar collapsed), (4) in the **collapsed-rail flyout** row. Contract: `GET /api/assignments/live/alerts → {incomplete}` — the **same pipeline** as the live feed, so the dot and the page can never disagree. Polled every **60s**, visibility-gated, cap-gated `sales.view`, honoring the `?at=` override (captured in a ref at render — SCREENS-1.10 §A4). **Red**, matching the Incomplete escalation — never amber for a nav "needs attention" dot.

#### Help Center → in-product Messenger (1.10 §Q)

When an in-product messenger (Intercom) is configured, the bottom **Help Center** row **toggles the Messenger** instead of opening `help.greater.co` in a new tab. The row carries an **active state** while the messenger is open (subscribe to its show/hide events — the same active treatment as routed bottom rows) and an **unread badge** (`min-width:18; height:18; padding:0 5px; border-radius:999; background:var(--p-danger); color:#fff; font:600 11px/18px Inter`, capped at "99+", `data-testid="help-center-unread"`). There is **no floating launcher bubble** — the sidebar row is the single entry point, and closing the messenger leaves nothing on screen. SPA navigations ping the messenger's `update()` so in-app messages can target routes; identity is signed **server-side** (short-lived JWT from `GET /api/intercom/config`) — never boot with raw client-side user ids. **Fallback:** with no messenger configured, the row reverts to the external `<a target="_blank">` Help Center link (the 1.9 anchor law).

#### Collapse / expand motion

The collapsible nav (72px ↔ 248px, `transition: width 180ms ease`) animates two things rather than snapping:

- **Logo crossfade.** Don't swap the brand mark's `src`. Stack the **wordmark** and the **crow** absolutely in a width-animating container and **dissolve** between them (`opacity` over 160ms).
- **Company-name reveal (wrap-safe).** The name **wraps freely** at full width — **never** `nowrap` / ellipsis-truncate it (that permanently clips a long customer name). Reveal it with **`grid-template-rows: 0fr ↔ 1fr`** so it animates to its **natural** (possibly multi-line) height, plus **asymmetric opacity timing** so the temporary reflow is never seen: on **collapse**, fade out fast (110ms) *then* close the row (60ms delay); on **expand**, open the row with the drawer *then* fade in after the width settles (220ms delay). The grid child needs `overflow: hidden; min-height: 0`.

**Content region = `--p-shell`** (see §3 Color); the `aside` sits on **`--p-surface-nav`** (white in light; in dark, a step *below* the content surfaces so the nav recedes while cards lift — 1.11.1). **Loading screens** — `FullScreenLoader` (initial auth) and the post-auth **Echo Pulse** overlay ("Entering Greater Portal…") — also sit on `--p-shell`, so entering and leaving the portal is continuous with the shelled app (the Echo Pulse mark is transparent, so no component change).

#### Collapsed Flyout

When collapsed (72px), hovering a nav icon opens a flyout so users navigate without expanding the rail.

| Property | Value |
|---|---|
| Width | `208px` |
| Border-radius | `8px` |
| Shadow | `var(--shadow-float)` |
| Positioning | `position: fixed` (escapes the sidebar's `overflow: hidden`) — `left = iconRect.right + 6`, `top = iconRect.top − 6` |
| Trigger | `mouseenter` on a collapsed icon |
| Close delay | **150ms grace period** (lets the cursor travel icon → panel without closing); cancels on panel `mouseenter` |
| Entrance | slide `translateX(−7px) → 0`, 120ms ease-out |

- **Parent icon** → panel with an uppercase group-label header (`500 11px`, `--p-muted`, `letter-spacing: .06em`) + a list of all sub-items. The active sub-item is a solid `--p-action` row with `--p-action-fg` text and a small dot; others are `--p-ink`, hover neutral `--p-surface-tint`. Clicking a sub-item navigates and closes the flyout.
- **Leaf icon** (no children, e.g. Accounts, Users) → same panel shell showing **only the label** (a tooltip); clicking the icon navigates directly.
- The hovered icon tints blue (`--p-primary`) while its flyout is open. The flyout closes automatically when the rail is expanded.

> **Entrance animation caveat:** animate the flyout's entrance with **transform only**, not opacity. Backgrounded/throttled iframes pause `requestAnimationFrame`, which can freeze an `opacity: 0 → 1` keyframe at 0 and leave the panel invisible. A transform-only slide always rests fully opaque.

#### In-shell detail editor

A **full-page editor that stays inside the App Shell** (left nav visible) — not a modal, drawer, or separate chrome. Reference: `screens/StoreLayoutEditor.js`.

- **Sticky page header** (`position: sticky; top: 0; z-index: 20; background: #fff; border-bottom`). Because the shell's scroll region has 24–32px padding, add an **opaque backing `<div>`** behind the header content (`absolute; left: -12; right: -12; top: -28; bottom: 0; background: #fff; z-index: -1; pointer-events: none`) so card shadows don't peek at the edges. The backing **must** be `z-index: -1`, or it paints over the title / tabs.
- **Measure the header height** (`ref` + `ResizeObserver` → `headerH`) and thread `stickyTop = headerH − 1` into the board's sticky section headers and the Unassigned tray, so each sub-header pins flush under the page header. Re-measure on tab change.
- **Scroll-to-top on open:** route changes don't reset the shell's scroll container — walk up to the nearest scrollable ancestor and set `scrollTop = 0` on load. **Never `autoFocus` an input on mount inside a scroll container** (it yanks scroll); gate autofocus to freshly-created items.
- **Tabs over shared editable state must not unmount.** When a page tabs over the *same* model (Layout Editor ⇄ Product List), keep both mounted (`display: none`) — unmounting wipes in-progress edits.
- **Header action bar** (right): a **dirty indicator** ("● Unsaved changes", `--p-warning`) + `History` + `Export` (neutral) + the version-specific Save / Publish controls (a **MenuButton**).
- **Cross-version banners:** `InfoBanner tone="amber"` for "editing a scheduled reset" and `tone="info"` for "this is a draft", each with an inline `.g-textlink` to jump to the sibling version.
- **Exit guard:** leaving with unsaved edits opens a `confirm` Modal ("Discard Unsaved Changes?").

---

### Deep-linking (URL facets)

Cross-page affordances (a chip, a "View all", a stat) should land the user on the destination list **already filtered** — and that state should be a real, shareable URL.

- **List filters are URL-addressable.** A list's search + facet state serializes to query params (`?q=…&account=A0011&chain=Pelican%20Grocers`). The list reads them on mount via the shared `readUrlFacets(search, mapping)` helper (`lib/urlFilters.js`), which maps query keys → facet groups.
- **Cross-page links navigate with a facet query.** The pending-delta chips (see Tables) and the Accounts "Products" cell deep-link to `/pod-planner?account=<id>`; the account-detail "Products in Market" link goes to `/in-the-market?account=<id>`.
- **Link to the record facet, not a sub-filter.** The `+N` and `−N` chips both link to the **same** account-filtered view (no `action=Add/Discontinue` param) — the user wants to see *that store's* pending plans; pre-filtering to only adds or only discontinues hides half the picture. Keep deep-links to the **stable record facet** only.
- **Renamed routes redirect, preserving the query string.** When a route is renamed, the old path **301s** to the new one with `location.search` intact, so existing `…?account=…` deep-links keep working:

```jsx
function LegacyProductsRedirect() {
  const { search } = useLocation();
  return <Navigate to={`/in-the-market${search}`} replace />;
}
```

**IA note — `/in-the-market`.** The "In the Market" catalog page route is **`/in-the-market`** (was `/products`); the home, post-login, and catch-all redirects point to it, and `/products` 301s to it (query preserved). **Back-end API paths are unchanged** — only the front-end route was renamed; calls like `GET /api/products…` stay as-is.

#### State & URLs — `urlFilters.js` (expanded, 1.9)

> **URL search params are the single source of truth — supersedes `sessionStorage` / `filterPersist`.** A list's full view state — search text, facet selections, sort, date range, group-by, pagination — lives in the **URL query string**, so any view is copy-paste shareable, reload-safe, and captured verbatim by **Save View** (§ Saved Views). `sessionStorage` is retained **only** for genuinely ephemeral, non-shareable state (e.g. a list's scroll position across a full-screen-map round-trip) — **never** for filters.

A shared helper module, **`lib/urlFilters.js`**:

| Helper | Purpose |
|---|---|
| `readUrlParam(search, key, fallback)` | scalar param read |
| `readUrlSort(search, defaultKey, defaultDir)` | `?sort=key:dir` |
| `readUrlRange(search, key)` | `{from,to}` from `?{key}From` / `{key}To` |
| `readUrlFacets(search, map)` | `{FacetLabel: Set(values)}` from short param names |
| `readUrlFilterMap(search)` | every non-reserved param → `Set` (generic facets) |
| `syncUrl(obj)` | writes the object to the URL via `history.replaceState` (omits empty / default; serializes `{from,to}` → `*From` / `*To`) |
| `humanizeSearch(search)` | turns the query string into labeled chips (for the Save-View modal) |

**Authoring rules:**
- Seed state once from `location.search` in the `useState` initializers; drive a `syncUrl(...)` effect on the state deps. **Omit defaults** (only write `range` when ≠ the page default; only write a tab when ≠ the first tab).
- `PARAM_LABELS` maps short param keys → human labels for `humanizeSearch` — extend it when you add a facet (`rep`, `chain`, `account`, `warehouse`, `source`, `reportsTo`, `tasks`, `license`, `accountType`, `range`, `groupBy`, `date`, …).
- **Relative date presets persist as a KEY, not resolved dates (C2).** When a relative preset is chosen ("Last Week", "This Month"), persist the **preset key** (`?range=last-week`) rather than the absolute `…From` / `…To` it resolves to. On load a known `range` key **re-resolves live** to the current period — so a saved "Last Week" still means *last week* — while a truly custom calendar selection persists as absolute `…From` / `…To`. Reverse-match `{from,to}` against the preset table (`matchPresetKey`) at `syncUrl` time.
- **Filter-less pages must not inherit carried facet params (C3).** A multi-page screen that keeps one component mounted across sub-routes (e.g. Insights, where filters carry across report pages) must **not** serialize date / facet params onto a sub-page that declares **no** filters (e.g. the *Explore* chat page). Gate serialization on `const hasFacets = (cfg.filters||[]).length > 0;` and pass facet values to `syncUrl` only when `hasFacets`. State is preserved (filters reappear on a filterable page); the filter-less page's URL stays clean.

---

### Saved Views (1.9)

A **Saved View** bookmarks the current page path **+ its exact URL query string** (hence the URL-state requirement above), so a user can jump straight back to a configured list / report. Persisted per-user; surfaced as cards on the **Home** dashboard (§ Home dashboard).

- **`SaveViewButton`** sits in the page header (`section`, `icon`, `defaultName` props). It captures `window.location.search` and opens a modal showing the captured filters as labeled chips (via `humanizeSearch`, `data-testid="save-view-chip"`), a name, and an optional note. Modal copy points the user home: *"Find this anytime under **Home** in the sidebar."*
- Persisted to a per-user `favorites` store: `{ id, user_id, name, note, section, icon, path, search, snapshot }`. Each Home **ViewCard** is an **`AppLink`** to `path + search` (open-in-new-tab friendly) with a `more_horiz` kebab (Rename / Delete).
- Testids: `save-view-btn`, `save-view-chip`, `fav-card-{id}`, `fav-open-{id}`, `fav-open-link-{id}`, `fav-menu-{id}`.

---

### Home dashboard (1.9)

The post-login landing route (`/home`, sidebar label **Home**). The container matches every other screen — `maxWidth: 1600; margin: 0 auto` inside the shell's `24px 32px` padding (don't special-case its padding). Reference: `ui_kits/portal/HomeDashboard.jsx`.

**Structure (top → bottom):**
1. **Header row** — a time-of-day greeting (`Good morning, {firstName}.`) + a one-line subtitle on the left; the **Customize** control on the **right** — a **Neutral**, square secondary `Button` with the `tune` icon (*not* a ghost / text button).
2. **Health Stat Card grid** (below).
3. **Saved Views grid** (§ Saved Views) with an inline help `Tooltip` on the section title; the empty state mirrors that copy.
4. **Crow Fact** easter egg pinned to the bottom (§10 Motion).

**Health Stat Card grid** (a variant of §Stat Cards) — a responsive grid of small status tiles: `display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 12`. **320px is deliberate** — it caps the row at ~4 cards on the standard width so labels like "Out for Delivery Today" don't wrap (220px produced 6-up and frequent two-line labels). Each tile = label + big value + a status **dot** (`green` / `yellow` / `red` / `neutral`) + a one-line explanation. Tiles are **role-gated** (§Governed UI — real role ids) and **persisted / orderable**.
- **"sample" label rule:** demo / sample tiles do **not** show a "SAMPLE" badge on the dashboard tile itself. Instead the **Customizer list** shows a small `sample` label on **every** row (a blanket reminder that the Home metrics are illustrative), keeping the live tiles clean.

**Stat Card Customizer** — the **Customize** button opens a dropdown of all role-permitted cards. Each row: a **drag handle** (`drag_indicator`, `cursor: grab`, `touchAction: none`), a checkbox to toggle visibility, the label, and the blanket `sample` label. Built on the existing `@dnd-kit` stack (§Arrangement Board): `DndContext` + `SortableContext` (vertical), `useSortable` per row, `arrayMove` on drop. **Menu order = tile render order.** Both reorder and toggle **persist immediately** to a per-user prefs store (`user_prefs → { cards: [orderedEnabledIds] }`). Testids: `customize-cards-btn`, `customize-cards-menu`, `card-row-{id}`, `card-drag-{id}`, `card-toggle-{id}`, `tile-{id}`.

**Crow Fact easter egg** — see §10 Motion (a hover-swap micro-delight pinned to the bottom).

---

### Live Surfaces (Live View · 1.10)

A new **operational page archetype**: an auto-refreshing "what is happening right now" surface. Its first instance is **Live View** (`Sales → Live View`, `/sales/live-view`, cap `sales.view`, **read-only**) — a joint **map + table** of every rep's route for **today**. A live surface answers *now*, so it deliberately has **no date filter**. Full screen spec: `SCREENS-1.10.md §A`; map law: § Maps → Live map (§C); nav dot: § App Shell → Nav alert dot (§B).

**Anatomy (top → bottom):** page header + `SaveViewButton` (section "Sales", `radar`) · a conditional **red alert banner** (`--p-danger-soft`) when any of today's stops is *Incomplete* (`lv-incomplete-banner` + a "Show incomplete tasks" link) · a **filter row** with the **Status `Select` leftmost** + role-aware team quick-filters (supervisor "My Team" chip / manager Supervisor dropdown) + the standard `FilterMenu` (all URL-synced, 1.9 `urlFilters`) · a **collapsible map strip** (persist `localStorage["lv_map_collapsed"]`) with a summary + the liveness chip *"Live · Updated Xs ago"* + refresh · the **table, always grouped by Rep & Date** (grouping is the point — no group-by control).

**Five live stop statuses (closed vocabulary — compose existing tokens, no new colors):** **Planned** (borderless muted dot; the un-started status is "Planned", never "Upcoming") · **In Progress** (`--p-primary-tint`/`--p-primary-ink` + a pulsing `gr-livedot`) · **Complete** (`--p-success-bg`/`--p-success-fg`) · **Incomplete** (`--p-danger-soft`/`--p-danger` — *started, never submitted, and a following stop already began*; tooltip *"Not submitted and following task was started."*) · **Skipped** (deliberately quiet, `--p-text-2`; tooltip *"Not worked in sequence — the rep may still return to this stop today."*). **Color-law ruling (user-decided, reversed once):** Incomplete is **RED** — an abandoned, unsubmitted task IS the real-world problem this surface exists to surface. Amber stays "your unsaved edit"; Skipped is not a warning at all.

**Liveness mechanics (the pattern rules):** **auto-refresh every 60s, paused while the tab is hidden** (`document.hidden`), with a visible *"Live · Updated Xs ago"* chip + manual refresh; refreshes **preserve map center/zoom** (a `viewRef` of `{center, zoom}`). A dev/demo clock override `?at=10:15am` is stripped from the URL after mount — so any chrome that also needs it (the nav alert dot) must capture it into a ref **at render**, not lazily.

**Status filter = table-only lens (general rule for joint map+table surfaces).** The Status `Select` filters **the table only**; the **map keeps every facet-filtered stop** regardless of status (a live map that hid "Complete" pins would misrepresent the day). Identity facets (rep/chain/warehouse/…) scope **both**. Rule: *state filters lens the table; identity facets scope both.*

---

### Inventory Conditions (data-viz / domain palette)

**Condition** is Greater's SKU-level health verdict for on-hand stock at a store (from a depletion simulation). It appears as a **column** in the In-the-Market coverage panel and as the **color dimension** of the Coverage Map (§Maps). To keep those surfaces identical, the scale — its ordinal **severity** (`level`) and its **palette** — is defined **once** in `lib/conditions` and imported everywhere; never hand-pick condition colors at a call site.

**Palette A (1.5) — supersedes the 1.4 scale.** The 1.4 Conditions colors were audited for **colour-blindness (deuteranopia / protanopia)** and **WCAG ≥3:1 contrast against both CARTO basemaps**, and replaced with **"Palette A" — a colour-blind-safe diverging ramp Orange → Gold → Teal → Blue → Purple.** The values were swapped **in place**; the **token names, the 6-level ordinal severity, and the `conditions.js` helper API are unchanged**, so call sites keep working.

**Single source of truth:** the JS table in `conditions.js` is canonical and returns **`var(--cond-…)` token strings** (never hex — so they stay theme-aware); the `--cond-*` CSS tokens in `colors_and_type.css` carry the actual values, defined in **both** the light `:root` and the `html[data-theme="dark"]` block.

| `level` | `key` | Label | Token | Light (map-tuned) | Dark |
|---|---|---|---|---|---|
| 0 | `out_of_stock` | Out of Stock | `--cond-out_of_stock` | `#C83214` | `#FF6B4A` |
| 1 | `high_risk` | High Risk of OOS | `--cond-high_risk` | `#E65C00` | `#FF9933` |
| 2 | `at_risk` | At Risk of OOS | `--cond-at_risk` | `#AD7300` | `#FFC940` |
| 3 | `optimal` | Optimal | `--cond-optimal` | `#007A66` | `#2EE6C3` |
| 4 | `slight_overstock` | Slight Overstock | `--cond-slight_overstock` | `#2D6BBA` | `#66A3FF` |
| 5 | `heavy_overstock` | Heavy Overstock | `--cond-heavy_overstock` | `#6B3D99` | `#C299EB` |
| — | (no data) | — | `--cond-empty` | `#C9CDD2` | `#2A2A30` |
| — | (pending change) | — | `--cond-pending` | `#171717` | `#F5F5F5` |

- **Diverging, not sequential:** the two "bad" ends (OOS orange-red / Heavy-overstock purple) are maximally distinct; **Optimal (teal) is the calm middle.** A viewer must read "orange/gold = under, teal = good, blue/purple = over."
- **`level` is the ordinal position** on the diverging scale (0 = worst stockout → 5 = worst overstock; 3 = healthy middle). **Aggregation (1.10 §D) — two reducers, do not confuse them:** a multi-product **store dot** = the rounded *average* of its products' `level`s (`averageCondition`); a **map hexbin** = its **most severe** member by business pain (`SEVERITY_RANK_BY_LEVEL` / `mostSevereCondition`), **not** the average — averaging a *diverging* scale lands a mixed bin near level 3, reading falsely "Optimal". See § Maps → Coverage Map.
- The same ordered scale drives **both** the In-the-Market Condition column and the map hexbin color; magnitude is encoded as **fill area** (not opacity) per the §Maps rule.
- **Map-legibility values** (the hexes above) are *map-tuned* (light vs CARTO `light_all` ~#ededed; dark vs `dark_all` ~#262626); chip/table contexts may sit on `--p-surface` and are still legible.
- **`--cond-empty`** = no-data; **`--cond-pending`** = pending-change (matches the map pending pin, §Maps / §pending-change tint).
- **Helpers in `conditions.js`:** `COND_BY_KEY`, `COND_BY_LEVEL` (index === level), `conditionColor(key)` (fallback `--cond-empty`), `averageCondition(levels)` (the **store-dot** reducer), `mostSevereCondition(levels)` + `SEVERITY_RANK_BY_LEVEL` (the **hexbin** reducer, 1.10 §D), `conditionTint(key, pct=14)` (a `color-mix` badge fill), and `CONDITIONS_TOOLTIP` (the canonical education copy) — colors all return `var(--cond-…)`, **not** hex.

> **Canonical education copy** (reused verbatim in the In-the-Market "What are Conditions?" info tooltip and on the map):
> *"Greater's algorithm understands SKU-level demand and its variance for every product in every store. We take the current inventory-on-hand for a SKU and run it through a simulation of projected depletion to determine whether the product is at risk of out-of-stock, overstocked in excess, or at the optimal level."*

> **Rule.** Inventory Condition is a **fixed 6-level colour-blind-safe diverging scale (Palette A)** with theme-aware tokens and an ordinal severity. Define it once and import it (`var(--cond-…)`, never hex); the same palette drives the table's Condition cell, the coverage-panel legend, and the map's hexbin color + legend swatches.

---

### Maps

> **1.13 §K — theme-aware maps.**
> - **Dark basemap contrast filter (K1):** CARTO `dark_all` tiles are too one-note — labels (~`#6B`) sit *below* mid-gray, so `contrast()` alone darkens them; brightness-lift first, then a light contrast clamp: `html[data-theme="dark"] .g-map .leaflet-tile-pane { filter: brightness(2.1) contrast(1.08) saturate(1.15); }`. **Tile pane ONLY** — pins, polylines, popups and hexbins live in separate Leaflet panes. Covers Dark + Black Ops automatically (both resolve `data-theme="dark"`).
> - **Selection colors tokenized (K2 — supersedes hardcoded map blues):** `.g-map-pin.is-active` (+ halo rings via `color-mix(in srgb, var(--p-primary) N%, transparent)`), `.g-live-pin.is-in_progress`, `.g-live-rep .core/.ping` all follow **`var(--p-primary)`** — dusty navy in light · steel in dark · teal in Black Ops. **JS-drawn geometry can't consume CSS vars** — polylines resolve the concrete value at map build via `getComputedStyle(document.documentElement).getPropertyValue("--p-primary")`, and the build effects must include **`skin`** in their dependency arrays (a blackops↔dark toggle keeps `resolved === "dark"` and would not retrigger).
> - **Deliberate exception:** Leaflet **popups keep hardcoded light-navy `#1861AF`** — popups are always white surfaces regardless of theme; the steel/teal primaries would fail contrast on white. Do not tokenize.

Maps use **Leaflet 1.9.x** with **CARTO @2x retina tiles** (muted neutral — never satellite): **`light_all`** in light, **`dark_all`** in dark.

> **Dark basemap (1.5).** The tile layer swaps `light_all`↔`dark_all` on the **resolved theme** and is **rebuilt inside an effect keyed on `resolved`** — which is exactly why theme state must live in one shared `useSyncExternalStore` store (§3 Theming): a per-component copy wouldn't re-fire the map's effect, and the tiles would stay light after a toggle. The overlay cards/legend/tooltip already use DS tokens (they theme for free); only the basemap, the Leaflet chrome, and the raw SVG overlay layers (`.g-hex-*`, `.g-cov-pin`) need the dark overrides in `maps.css`.
>
> ```js
> L.tileLayer(dark
>   ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
>   : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
>   { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>' });
> ```

#### Map Tokens

```css
--map-bg:           #DDDDDD      /* fallback while tiles load */
--map-route-stroke: #1861AF      /* = --p-primary */
--map-route-opacity: 0.7
--map-route-width:  3px
--map-radius:       var(--radius-xl)   /* 10px floating card */
--map-border:       1px solid var(--p-border)
--map-shadow:       var(--shadow-float)
```

#### Container Classes

```css
.g-map          /* floating popover — 10px radius, border, shadow-float */
.g-map.is-inline /* inline card — 6px radius, no shadow */
```

#### Pin Types

**Default numbered stop pin** — 28px, ink ring, white core:
```html
<div class="g-map-pin"><div>{N}</div></div>
```
```css
width: 28px; height: 28px; border-radius: 50%;
background: #282838;
/* inner */ width: 22px; height: 22px; background: #ffffff;
font: 600 11px/1 Inter; color: #282838;
```

**Active / focused pin** — blue fill + halo ring:
```css
.g-map-pin.is-active {
  background: #1861AF;
  box-shadow: 0 0 0 4px rgba(24,97,175,.18),
              0 0 0 8px rgba(24,97,175,.10),
              0 4px 10px rgba(24,97,175,.35);
  transform: scale(1.07);
}
```

**Unassigned pin** — 32px, red ring:
```css
.g-map-pin.is-unassigned {
  width: 32px; height: 32px;
  background: #DA1010;
  box-shadow: 0 2px 8px rgba(218,16,16,.35);
}
/* inner fill: #FFF8F8 */
```

#### Map Title Overlay

```css
.g-map-title {
  position: absolute; top: 16px; left: 16px; z-index: 400;
  background: var(--p-surface);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-float);
  padding: 10px 14px;
  font: 500 14px/1.2 Inter;
  color: var(--p-ink);
}
/* Sub-label */ font: 400 12px/1.2 Inter; color: var(--p-muted);
```

Example: `"Thursday, Apr 23 · Kenny D'Amica · 5 stops"`

#### Coverage Map — D3 multivariate hexbin overlay (§1.4)

A full-bleed geographic view of store coverage, in two scopes: **single product** (`/in-the-market/:productId/map`) and **all products / aggregate** (`/in-the-market/coverage-map`). Built on a **Leaflet basemap** + a **D3 `d3-hexbin` SVG overlay** (the analytic layer). Ships as `maps.css`; screen specifics in `ui_kits/portal/SCREENS-1.4.md`.

**The analytic layer encodes two dimensions at once:**
- **Color = the MOST SEVERE Condition in the bin (1.10 §D — supersedes the 1.4/1.5 averaging).** A hex takes the condition of its worst member ranked by *business pain* (`SEVERITY_RANK_BY_LEVEL`: OOS > High Risk > Heavy Overstock > At Risk > Slight Overstock > Optimal — understock outranks overstock at equal intensity). Averaging a *diverging* scale made mixed hexes read "Optimal"; after an A/B the user chose Most Severe and **removed Average entirely — do not re-add a toggle.** **Scope guard:** Most-Severe aggregates only **the values the map plots** (the rounded per-store dots), never underlying per-product data — a hex must never assert a condition its constituent pins can't reveal on zoom (the *zoom-reveals-granularity* contract; a worst-*product* drill-through was built and deliberately reverted). Kind = color; magnitude = fill area; velocity never influences color.
- **Fill *area* = a magnitude** — currently average **Demand velocity** (cs/wk). The colored inner hex is scaled `prop = max(0.34, sqrt(avgMetric / maxMetric))` inside a fixed outline hex (`HEX_R = 20`). **Area, not opacity, encodes magnitude** (see the encoding rule below).
- A **full hex lattice** (`.g-hex-grid`) is laid across the whole viewport, so empty cells read as "no coverage here," not "missing map." Each bin adds a faint **outline hex** (`.g-hex-outline`) + the scaled **fill hex** (`.g-hex-fill`).
- **Hover** raises the outline (`--p-ink`, 1.5px) and shows a custom **`.g-hex-tooltip`** (store count, avg condition, magnitude).

> **⚠ Leaflet overlay pointer-events.** Leaflet sets `pointer-events: none` on its overlay pane, which kills hover on SVG children. Interactive overlay elements **must force it back on** — `.g-hex-outline { pointer-events: all !important; }` (and keep non-interactive layers — `.g-hex-fill`, `.g-hex-grid`, pin labels — at `none`). Without the `!important`, the rich hex tooltip silently never fires.

**Pins mode.** A `Stores` mode swaps hexbins for individual **store pins** (`.g-cov-pin`: circle, white 1.5px stroke, color = that store's condition; `.is-pending` uses `stroke-dasharray`). A segmented **`ModeBtn`** (Hexbin ⇄ Stores) toggles modes; the overlay re-renders on toggle **and on any filter/spotlight change**.

**Floating overlay cards (the reusable map UI language).** All map UI sits in floating white cards over the basemap (`.g-map-card`: `--p-surface`, `--p-border`, `--radius-xl`, `--shadow-float`, absolutely positioned, `z-index: 500`):
- **Title card** (`.g-map-title`, top-left, `max-width: 340`): screen title + a subtitle that states scope and **explicitly tells the user the page filters apply here** — e.g. *"Average inventory health across N products at M stores. Filters set on In the Market will apply here."*
- **Controls card** (`.g-map-controls`, top-right): the Hexbin/Stores `ModeBtn`.
- **Legend card** (`.g-map-legend`, bottom-left): the Condition palette as `.g-legend-swatch` rows, leading **"Color = stock condition"** (`palette` icon) + **"Fill size = demand velocity (cs/wk)"** (`hexagon` icon) via `.g-legend-note`; **in hexbin mode always show** the left-aligned note *"Hex reflects the most severe condition contained within"* (`data-testid="cov-legend-severe-note"`, no info icon) — 1.10 §D.

**Legend spotlight (single-category focus).** Clicking a condition row in the legend **spotlights** just that condition (dims the rest via `.is-dimmed`); the row label toggles **"Only" → "Showing"** and a **"Show all"** link (`.cov-only-link`) clears it (`condFilter` state). This is the map analogue of a facet filter — a fast "where are my out-of-stocks?".

**Summary stats above the map (`SummaryStat`).** A row of headline metrics: **values are Geist Mono** (`600 22px`), labels Inter, values **unit-suffixed** (§Stats/Voice). Aggregate: `Accounts` · `Products` · `Average Demand` (`12.5 cs/wk`) · `Average On Hand` (`45 days`). Single product: `Accounts` · `In Market` (`471 cs`) · `Average Demand` · `Average On Hand`. The page also renders the active In-the-Market facets as **removable chips** (carried via the deep-link query, §Deep-linking), so the map's scope is explicit and adjustable.

> **Maps pattern (publish).** Maps are a **Leaflet basemap (CARTO Light @2x) + a D3 SVG analytic overlay**, wrapped in a rounded `.g-map` card. All map UI lives in floating `.g-map-card` panels (title top-left, controls top-right, legend bottom-left). Leaflet's own chrome (zoom, attribution) is restyled to the DS. Interactive overlay SVG must set `pointer-events: all !important` to beat Leaflet's `none` on the overlay pane. Re-render the overlay on every mode/filter/spotlight change and on map `move`/`zoom`/`resize`; **rebuild the tile layer on theme change** (`light_all`↔`dark_all`). **Deps:** `leaflet` 1.9.x, `d3-hexbin`, `d3-scale`, `d3-array`; basemap tiles **CARTO "Light All" / "Dark All" @2x** with the required OpenStreetMap + CARTO attribution.

> **Multivariate choropleth encoding rule (publish).** When a map/visualization shows **two** variables per cell, encode the **categorical / health** variable as **color** (from a fixed semantic palette) and a **magnitude** variable as **fill *area*** (scale the inner shape by `sqrt(value/max)` so area ≈ value) — **not** as opacity (opacity reads as uncertainty and muddies the color). The legend must explain **both** channels. Allow **spotlighting a single category** (click-to-isolate) as a lightweight filter, with a "Show all" reset. The **headline metric follows the encoding** — surface the same magnitude the fill encodes as a top `SummaryStat`.

#### Live preview of staged edits (1.8)

Edit surfaces that affect a map/route **render a live preview that reflects the staged (unsaved) edits in real time**, clearly labelled. In the Edit Assignment modal the right pane recomputes as date / rep / sequence change — the edited stop is inserted at `seq`, the day renumbered `1..n`, and the edited pin highlighted (`activeId`). The preview header shows `{date} · {rep}` and, **while dirty, an amber `(preview)`** suffix (`--p-warning`, weight 600); a pop-out rep-day map shows a **"· Preview"** amber chip in its subtitle.

**Rule:** a preview must (1) be **visually distinct** from the committed state via the amber preview label (the §Color Rules amber = "unsaved" law — here it means "unsaved *view*"), and (2) be **non-destructive** — it only renders staged state; nothing persists until the user applies.

#### Pin interaction — hover-to-reveal + in-popup deep-link (1.8)

Route-map pins use **hover-to-reveal**, not click-to-edit: hovering a pin opens its popup; the popup **stays open while the cursor is over it** (so its action link is clickable) and closes after a **~180ms grace timer** on leave. The popup carries an **"Edit Assignment"** text link (`.g-map-popup-edit`) that **deep-links back to the list and opens that stop's edit modal** — the canonical **map → list → modal** hand-off, so a map never embeds a second copy of an editor.

- **Rule:** for **map markers** that also need a click target for selection, prefer **hover-to-reveal** over click-to-open, and always add a **grace timer** so the popup's actions are reachable.
- In-popup actions that **navigate** are **links (blue)** — `.g-map-popup-edit` stays `--p-primary` per the ink/blue law; in-popup actions that **commit** would be buttons.

#### Live map — monochrome routes + focus (1.10 §C)

The all-reps **Live View** map (§ Live Surfaces) deliberately avoids per-rep rainbow coloring. Every route polyline is **muted gray** (light `#A9B2BE` / dark `#50565F`, `weight 2.5, opacity .7`); only **sequenced** stops (`sequence > 0`) join the polyline (Skipped stops get a pin, no segment). **Focus** (hover a route/pin/group header, or press **Locate**) recolors just that route DS-blue (light `#1861AF` / dark `#ADBDD1`), scales its pins (`.g-live-pin.is-focus`, `scale(1.18)` + shadow), and **fades every other route** (`.is-dim`, pins `.18`, rep dots `.25`). Each rep gets one pulsing current-location dot (`.g-live-rep`: a 14px blue core + expanding `g-live-ping` ring, **disabled under `prefers-reduced-motion`**) — on-site at the current stop, or interpolated along the segment en route. Pins are 20px numbered `DivIcon`s (`.g-live-pin`) whose fill/border encode the five stop statuses (§ Live Surfaces); hover opens the popup with the same ~160ms grace timer as the 1.8 hover-pins. CSS: the `.g-live-*` family in `maps.css`.

#### Route-map pop-out (RepDayMap — classes ported 1.10 §S)

The rep-day **Route Map pop-out** (`SCREENS-1.8.md` RepDayMap) is a fixed floating map card: `.g-routemap` (`z-index: 10001`, hairline, `--radius-xl`, `--shadow-float`, `--p-surface`, `gr-pop-in` entrance) with `.is-pop { bottom: 24; right: 24; width: 480; height: 460 }`, a `.g-routemap-head` bar, and a 30px neutral `.g-routemap-btn` (reused by Live View's refresh/collapse controls). On phones (`≤767px`) the pop-out becomes a full-screen sheet (`inset: 0; border-radius: 0`). These classes shipped in the app since 1.8 but were missing from the repo's `maps.css` until 1.10 (a `[FIX]`).

---

### Toast

Transient confirmation of an action. Solid-fill pill, top-center, floating above all content. Confirmations and failures **only** — anything richer belongs in an Info Banner or Dialog. Reference: `preview/components-toast.html`.

```css
display: inline-flex;
align-items: center;
gap: 10px;
padding: 13px 22px 13px 18px;
border-radius: 12px;
color: #fff;
font: 500 16px/1.2 Inter;
letter-spacing: -.005em;
box-shadow: 0 6px 16px rgba(0,0,0,.14), 0 2px 4px rgba(0,0,0,.08);
```

| Tone | Background | Icon (22px, leading) |
|---|---|---|
| Success | `var(--p-success)` (`#21C06B`) | `check` (outline) |
| Error | `var(--p-danger)` (`#C94A4E`) | `error` (FILL 1 — reads clearer on a solid fill) |

**Rules**

- **Position:** `position: fixed`, top-center, `top: 18px`, above all content. Stack downward with a 10px gap when more than one is live.
- **Behavior:** auto-dismiss ~4s (success) / ~6s (error); pause on hover. A trailing dismiss **`✕`** (22px, 6px radius, 80% opacity) is **always present**, so a user can clear a toast — or a whole stack — without waiting it out. (It's the same affordance on every toast; no `persistent`/`actionable` flag needed.)
- **Motion:** slide in with a 180ms ease-out translate (transform-only, never opacity-only — backgrounded iframes can freeze an opacity keyframe at 0).
- Two tones only. No info/warning toasts — use an Info Banner inline.

---

### Modal & Drawer

All overlays sit on one invisible **Overlay** primitive — scrim, focus-trap, `Escape`, return-focus, and ARIA `role="dialog"` / `aria-modal`. Two visible surfaces build on it: the centered **Modal** (with `default` and `confirm` variants) and the edge-anchored **Drawer**. Reference: `preview/components-modal-drawer.html`.

```
Overlay              ← scrim · focus-trap · Esc · return-focus · a11y
├─ Modal             ← centered card
│   ├─ default       (form / content — has ✕; sm/md/lg)
│   └─ confirm       (icon chip · no ✕ · optional warning callout · destructive footer)
└─ Drawer            ← edge-anchored sheet
```

> Naming: the surface is called **Modal** (ARIA role `dialog`). The old "Confirmation Dialog" is now `Modal variant="confirm"`.

> **`tone` (confirm icon-badge, 1.7 adds `general`).** The confirm variant's icon-disc tone maps to a semantic color pair: `danger` (red) · `warning` (gold) · `success` (green) · **`general`** (purple — `--p-genstock` on `--p-genstock-tint`) · default `primary` (blue). The "Mark as General Stock Area" confirm uses `tone="general"` + `icon="shuffle"`.

#### Modal — default

Short, self-contained tasks (invite a user, rename).

```css
border-radius: 12px;
border: 1px solid var(--p-border);
box-shadow: 0 8px 28px rgba(0,0,0,.18), 0 2px 6px rgba(0,0,0,.08);
overflow: hidden;
```

| Size | Width |
|---|---|
| `sm` | 420px |
| `md` (default) | 520px |
| `lg` | 640px |

Custom widths are allowed for dense content — e.g. **560px** for the Audit Log timeline modal.

- **Header** — title (`600 18px`, `-.01em`, **Title Case**) with an optional **`subtitle`** beneath (`400 13px --p-muted`, single-line ellipsized — e.g. the record name on the Audit Log modal) + `close` icon button, padding `18px 20px 14px 24px`.
- **Body** — padding `4px 24px 8px`; 20px gap between fields.
- **Footer** — `border-top: 1px solid #F0F1F3`, right-aligned, Ghost/Neutral cancel + Primary confirm.

#### Modal — `confirm` (was "Confirmation Dialog")

For destructive or consequential decisions. Same shell, fixed at `sm`/`md` width, with four differences from `default`:

- **No close ✕** — the user must make an explicit choice; Cancel is the only escape (plus `Escape`).
- **Icon chip** (34×34px, `border-radius: 8px`): background is the 12% tint of the action tone (e.g. `rgba(201,74,78,.12)` for danger), icon in the tone color.
- **Footer** is Ghost (Cancel) + a tone-matched action button (Warning for destructive), right-aligned, `padding: 14px 24px`, `border-top: 1px solid #F0F1F3`.
- **Warning callout** (optional): when the action has downstream consequences (e.g. deactivating a user who manages a team) — `background: #FFF7ED`, `border-radius: 8px`, orange text + warning icon. When present, the action button relabels to "Continue" (a confirmation step follows) rather than the terminal verb.

Uses the softer shadow `0 8px 28px rgba(0,0,0,.12), 0 2px 6px rgba(0,0,0,.06)`.

#### Drawer (side sheet)

Right-anchored, full content-height. Use to view/edit a record in context without leaving the table.

```css
border-left: 1px solid var(--p-border);
box-shadow: var(--shadow-float);
```

| Size | Width |
|---|---|
| `sm` | 400px |
| `md` (default) | 460px |
| `lg` | 560px |

- **Header** — overline (`500 11px` caps, `--p-muted`) + title (`600 20px`, **Title Case**) + optional **`subtitle`** (`400 13px --p-muted`, ellipsized), `border-bottom: 1px --p-border`.
- **Body** — scrolls (`flex: 1; overflow-y: auto`).
- **Footer** — pinned, `border-top: 1px --p-border`, typically two full-width actions.

#### Shared rules (Overlay)

- **Scrim:** `rgba(16,24,40,.45)`, no blur.
- **Motion:** modal — 180ms ease-out, scale `0.98 → 1` + scrim fade. Drawer — 180ms ease-out `translateX(16px → 0)` (transform-only). Honor `prefers-reduced-motion`.
- **Behavior:** trap focus while open; restore focus to the trigger on close. `default` and `Drawer` close on scrim-click, `✕`, and `Escape`. `confirm` closes on **Cancel** or `Escape` only — never scrim-click — to prevent accidental dismissal of a consequential choice.

#### Unsaved-changes "Discard" guard — global (1.8)

> **New in 1.8 — supersedes the 1.5 data-router caveat.** The guard now covers **every in-app navigation** — sidebar links, programmatic `navigate()`, in-page tab switches, hard reload, and tab close — **under the existing declarative `<BrowserRouter>`, with no data router.** Reference kit: `ui_kits/portal/NavGuard.jsx`.

Any **edit surface** (detail editor, wizard step, settings tab with local edits) guards navigation away when there are unsaved changes.

**Why it works without `useBlocker`.** React Router's `useBlocker` needs `createBrowserRouter`. Instead of blocking *router transitions*, we **gate the navigation call itself**: the sidebar navigates programmatically (not via `<a>`/`<Link>`), so wrapping that one call site is enough. A dirty screen **registers a predicate**; the guard consults it before proceeding.

**Pattern (a tiny `register` / `guard` context):**
- Track **dirty** = a JSON snapshot of the editable fields differs from the loaded / last-saved snapshot; **re-baseline** after a successful save so it doesn't false-trigger.
- **`NavGuardProvider`** wraps the authenticated `<AppShell>` subtree (inside the router, outside the routed screens); it renders the discard Modal **and** a live `window` `beforeunload` handler.
- **Three adopter obligations:**
  1. **Wrap the shell** — `<NavGuardProvider>` around `<AppShell>`.
  2. **Sidebar uses the guarded navigate** — `const navigate = useGuardedNavigate()` (drop-in for `useNavigate`); every existing `navigate(path)` now auto-prompts.
  3. **A dirty screen registers + guards its own in-page leaves** — `useEffect(() => register(() => dirty), [register, dirty])` (covers sidebar + unload) and wrap in-page tab switches with `guard(() => setTab(t))`.
- `useNavGuard()` returns a **safe no-op** when rendered outside the provider.

**Modal contract (danger `confirm`; Title-Case header, sentence-case body):**
- **Title:** "Discard Unsaved Changes?"
- **Body:** *"You have unsaved changes that haven't been saved yet. Leave this page anyway?"*
- **Footer:** **Keep Editing** (ghost) · **Discard & Leave** (warning).
- testids: `discard-changes-modal`, `discard-cancel`, `discard-confirm`.

**Adopted by:** Settings (Roles tab + tab-switch), Users detail editor, Planned Assignments edit mode, and the Store Layout editor.

---

### Loading & Skeleton

Prefer **skeletons** over spinners for any layout whose shape is known (tables, stat rows, cards) — they hold page geometry so content doesn't jump. Reserve the bare spinner for unknown-shape or sub-second waits. Reference: `preview/components-loading.html`.

#### Spinner

```css
border-radius: 50%;
border: 2.5px solid var(--p-border);
border-top-color: var(--p-ink);   /* ink head — near-black in light, white in dark, matching the ink primary */
animation: rot .7s linear infinite;
/* @keyframes rot { to { transform: rotate(360deg); } } */
```

Sizes 16 / 20 / 24px. Inside a filled button, use the **on-fill** variant — the head inherits the button's foreground via `currentColor` (`border-top-color: currentColor`), so it's `--p-action-fg` on the primary and white on danger, always contrasting the fill in both themes. A busy button swaps its label for an on-fill spinner + verb ("Saving…").

#### Skeleton

```css
background: #EDEFF2;
border-radius: 4px;      /* mirror the real element's radius */
/* shimmer: a left→right white sweep, 1.3s ease-in-out infinite */
```

- Each block mirrors the real element's size & radius (text lines ~12–13px tall, pills 18px/999px, avatars circular).
- Render 3–6 placeholder rows, never a full page of them.
- **Motion:** under `prefers-reduced-motion`, drop the shimmer to a static tint and the spinner to a 1s step rotation.

---

### Empty States

The illustrated **`EmptyArt` badge** — one composition, several causes. Reference: `preview/components-empty-states.html`.

**Anatomy.** A soft depth-stack of two faintly-rotated record cards (`±7°`) behind a front card with three faux content lines (`--p-surface-tint`); a floating **60px** circular badge (`--p-surface`, `1px --p-border`, `--shadow-float`) housing the surface's **contextual glyph** (28px, `--p-text-2`), gently floating via `gr-emptyfloat` (the `.gr-emptybadge` class; off under reduced-motion); and a small **accent dot** (+ a fainter echo) whose **color encodes state**. It's a pure HTML/CSS composition — no SVG asset.

```css
/* container */
display: flex; flex-direction: column; align-items: center; text-align: center;
padding: 64px 24px;          /* in-table: 48px 24px */
/* title */ font: 600 15px/1.3 Inter; color: var(--p-ink);
/* body */  font: 400 13px/1.5 Inter; color: var(--p-muted); max-width: 340px;
```

**Accent = state** (auto-selected from the glyph — `error|warning|report|block|cancel` → red; `check|task_alt|done|verified|celebration` → green; otherwise blue — overridable via an `accent` prop): blue `--p-primary` (info, default) · red `--p-danger` (error) · green `--p-success` (success) · gold `--p-warning`. Blue still means state — the accent dot reuses the rule.

| Cause | Glyph (in badge) | Accent | Action |
|---|---|---|---|
| **No results** (search / filter) | `search_off` / `filter_alt_off` | blue | Ghost **Clear filters** — never a create CTA |
| **Empty set** (nothing yet) | surface nav icon (`inventory_2`, `group`, `route`) | blue | Primary create CTA |
| **First-run / import** | `upload_file` | blue | Dashed dropzone (`1px dashed --p-border-strong`) + primary + helper |
| **Error** | `error` / `warning` | red | Retry (Neutral) |
| **Done / success** | `task_alt` / `check` | green | — |

- **In-table variant:** compact (smaller cards + 50px badge); drop the border/background and render inside the existing table card, keeping the header row so the page doesn't collapse (`padding: 48px 24px`).
- **Restraint:** one framed contextual glyph, plain second-person copy, and **no emoji**. (This **replaces** the old "no illustrations, one glyph only" rule — the contextual glyph now lives _inside_ the illustration.)

---

### Pagination

For information-dense tables. Reference: `preview/components-pagination.html`.

#### Footer bar

Attaches to the table's bottom edge (shares its border), `background: var(--p-surface-alt)`, `border-radius: 0 0 8px 8px`, padding `10px 16px`.

- **Left:** result range — `Showing 1–50 of 3,600`, `--p-muted` with bold figures. Counts read as prose (not mono).
- **Right:** rows-per-page select + pager.

#### Pager

```css
/* cell */ min-width: 30px; height: 30px; border-radius: 6px; font: 500 13px/1 Inter;
/* active — ink: you navigate TO a page (wayfinding, like the active tab). The rows-per-page select keeps its blue focus. */
background: var(--p-action); color: var(--p-action-fg);
/* default */ background: transparent; color: var(--p-text);  /* hover: --p-surface-tint */
/* prev/next */ border: 1px solid var(--p-border-strong); background: #fff; color: --p-muted;  /* disabled at ends */
```

Collapse long ranges with an ellipsis, always keeping first, last, and current ±1.

#### Page size & Load more

- **Page size:** options are **25 / 50 / 100**. **50 is the canonical default on every operator table** — it matches the Filter Menu's 50-row search cap so the two never disagree. Drop to **25** only when rows are exceptionally tall; otherwise always default to 50.
- **Load More:** a centered Neutral button + `N of M loaded` caption — for feed-like / append-only lists where position doesn't matter. Use numbered paging for tables operators scan and jump around. Never both on one surface.

---

### Date Picker

> **1.13 §M2 — preset additions.** `reportRange` gains a **"Yesterday"** preset, and page-specific preset rails are first-class config (`cfg.ranges` / `defaultRange`) — e.g. a flow report ships Last 30 / 60 / 120 Days · This Quarter · Last Quarter with a 60-day default. **Rule:** navigating between report pages snaps the range to the new page's default.

Single-date and range, both built on the floating-label field. Reference: `preview/components-datepicker.html`.

#### Trigger

Two trigger variants:
- **Field** — the standard 36px floating-label field with a leading icon — `calendar_today` (single) / `date_range` (range). Value formats as `Jun 11, 2026` / `Apr 20 – Apr 26, 2026` (en-dash range).
- **Filter chip** — a **36px** filter-chip-style trigger for table **range filters**: reads `Date: {from – to}` and tints `--p-primary-tint` when active (matches the Filter Chip pattern).

#### Calendar popover

```css
width: 280px;
border: 1px solid var(--p-border);
border-radius: 10px;
box-shadow: var(--shadow-float);
padding: 14px;          /* anchored 8px below the field */
```

- Week starts **Sunday**. Weekday header `500 11px --p-muted`. Day cells 36px with a 32px circular hit target (`500 13px`).
- **States:** today = 1.5px inset `--p-primary` ring + primary text; selected = solid `--p-primary` circle, white text; adjacent-month days = `--p-placeholder`; hover = `--p-surface-tint`; disabled = `--p-placeholder`, no hover.

#### Range

Endpoints are solid primary circles; the span between fills a `--p-primary-tint` band, rounded only at the two ends. Apply on second click (start → end). Operators pick presets far more than exact dates.

**Context-aware preset rails.** A range picker carries a left preset rail, and **the rail must match the field's temporal direction:**
- **Forward-looking** (go-live / start dates): Today · Tomorrow · Next 7 Days · Next 30 Days · This Month · Next Month.
- **Backward-looking** (audit / history): Today · Yesterday · Last 7 Days · Last 14 Days · Last 30 Days.

**Rail styling.** Two-pane layout filled on `--p-surface-alt`; the active preset is a raised white row with a `--p-primary` semibold label; a `Clear` (danger text) is pinned to the rail bottom.

#### Bounds (min / max)

`fromDate` / `min` disables earlier days; `max` disables later days. Future-only fields (e.g. anything created in a wizard) enforce **`min = today`**; the Audit Log enforces **`max = today`** so you can't pick the future. Disabled days render `--p-placeholder`, with no hover and `cursor: default`.

#### Positioning (portaled + auto-flip)

The calendar is **portaled to `<body>`** with `position: fixed`, so it escapes `overflow: hidden` on modals and table cells, and it **opens upward (`dropUp`)** when there isn't room below — so an in-modal picker never covers the modal's Save button. Treat portaled + auto-flip as **required** for any picker used inside a modal.

- **Behavior:** close on outside-click and `Escape`.

#### Legend — legend-as-mini-cell (1.8)

When a calendar (or any chart) carries a legend, **each legend swatch must be a literal miniature of the thing it labels**, not an abstract dot. The Assignment-Edit calendar legend renders **22px mini calendar cells** with the **same radius, fill token, and dot** as the grid:
- **Delivery** → a cell with the same center dot as a delivery day.
- **Buffer violation** → a `--p-danger-soft` cell (matches the red-warning day, §Color Rules).
- **Unavailable** → a faded cell (`opacity: .45`).

**Rule:** the key always mirrors the grid — same radius, same fill token, same dot — so a user maps legend ↔ grid at a glance. Don't draw legends as generic color chips when the real mark has structure (a dot, a strike, a fade).

---

### Assignment-Edit (staged-edit surface · 1.8)

The canonical **wide split-pane editor**: a `Modal width={1040}` with a 5-column grid — **detail / controls · divider · month calendar · divider · live route preview** — and a bottom **"Changes to save"** ledger. It is the reference example of the **Amber = edit / Red = conflict** law (§Color Rules). Reference: `ui_kits/portal/SCREENS-1.8.md`.

**Amber = staged edit:**
- A changed **Service Date** flips to `--p-warning` weight 600.
- The **Sales Rep** `Select` and the **Sequence** input take a `--p-warning` border + `--g-gold-10` fill when their value differs from the loaded stop.
- A changed cell in a table row tints `--g-gold-10` (same as the §Settings permission rows).

**Red = real-world conflict:**
- A calendar day that **violates the delivery buffer** renders `--p-danger-soft` bg + `--p-danger` text (selectable but flagged).
- A **buffer-violation callout** (`3px var(--p-danger)` left border) explains the conflict in words.

**"Changes to save" ledger** (only when ≥1 field changed):
- Header: `difference` icon + "Changes to save" + a mono count pill + a neutral **"Reset all"** text-button (**not** blue — § Buttons / Cancel rule).
- One **`ChangeRow`** per changed field (`from → to`) with a per-row **Undo** icon button wrapped in a portal `Tooltip` (§Tooltip), e.g. *"Undo date change"*.
- testids: `ea-modal`, `ea-changes`, `ea-revert-<key>`, `ea-reset-all`, `ea-cancel`, `ea-apply`.

**Live route preview + map hand-off:** the right pane reflects staged edits in real time with an amber **`(preview)`** label (§Maps · Live preview of staged edits); the full-screen map's in-popup **"Edit Assignment"** deep-links back here (§Maps · hover-reveal pins). Radii follow the scale (§Foundations → Radii); the modal is `position:fixed` and must be invoked from a clean (non-`sticky` / non-`transform`) ancestor (§7 z-index ladder).

---

### Wizard (multi-step flow)

A **full-screen, position-fixed** multi-step creation / editing flow that renders over the App Shell (`position: fixed; inset: 0; z-index: 9000`) while its route stays inside the protected layout. Introduced for POD Planner and Store Promotions. Reference: `ui_kits/portal/wizard.jsx` (live: `components/Wizard.js`).

**Anatomy (top → bottom)**

1. **Top bar** — `height: 60px`, white, `1px --p-border` bottom. Greater logotype + `1px` divider + flow **title** (`600 16px Inter`, `-.01em`). Right side: a **Neutral** Button "Exit" with a `close` icon.
2. **Step indicator** — white strip, `12px 32px` padding, centered to `max-width: 1320px`. Each step is a clickable chip: a `24px` circular badge + label.
   - **Active:** badge `--p-action` fill, `--p-action-fg` number (`600 12px Geist Mono`); label `600 14px --p-ink`. (Inverts to a white surface in dark.)
   - **Complete (not current):** badge `--p-action` fill, `--p-action-fg` `check`; label `500 14px --p-text` (de-greened); **clickable to jump back**.
   - **Upcoming:** badge `--p-surface-tint`, `--p-placeholder` number; label `500 14px --p-placeholder`; not clickable. Connector lines are `1px --p-border`, and **fill `--p-action`** once the preceding step is complete (`transition: background-color .2s ease`).
   - **Completion rule:** a step counts as *complete* only when `n < current` **and** it is valid. The stepper is a **single ink track** (wayfinding) — completed steps are **ink, not green**; **green is reserved for genuine success** (toasts, the final success screen).
3. **Body** — scroll-contained, centered `max-width: 1320px`, padding `20px 32px 24px`; per-step arrival animation `gr-tab-in` (`key={current}`).
4. **Footer nav** — `height: 72px`, white, top border + soft top shadow `0 -2px 12px rgba(16,24,40,.05)`.
   - Left: **Neutral** Button "Back" (`arrow_back`, `size=lg`), disabled on step 1.
   - Right: `Step N of M` caption (`500 13px --p-muted`) + **Primary** Button (`size=lg`, `min-width: 160`) whose label / icon switch on the last step (`arrow_forward` → `check`; e.g. "Continue" → "Create Store Promo"). Disabled until the step's `canNext` is satisfied; shows an inline spinner when `busy`.

**Rules / learnings**

- The Wizard renders **over** the shell (`z-index: 9000`); the route stays inside the protected layout.
- **Edit = wizard, not modal.** Editing an existing record reuses the same wizard, prefilled at step 1 (with a fetch fallback on hard refresh); the final CTA relabels to "Update …". The Review step shows a **change-diff summary** (the **Change Row** primitive, documented under Audit Log below).
- Prev / Next live **only** in the bottom footer — no duplicate inline controls.
- Date inputs inside a wizard enforce `min = today`.

**Sub-components** (all in `wizard.jsx`)

- **`SelectionTable`** — the reusable selection step: search `Input` + optional filter slot + sortable column headers (`unfold_more` / `arrow_upward` / `arrow_downward`, active head `--p-primary`) + a `44px` checkbox column with **select-all (filtered set)** + per-row `Check`. Row click toggles selection; selected rows tint `--p-primary-tint` (`.wz-row-selected`). Built on a CSS `<table>` with sticky `thead`. Inline footer: `Showing X of Y {noun}s · N selected`. Skeleton rows while loading. Testids: `selection-row-{id}`, `selection-checkbox-{id}`, `selection-select-all`, `selection-sort-{key}`, `selection-search`.
- **`SelectedPopover`** — a pill trigger "**N selected**" (rounded, `--p-primary-tint` / `--p-primary-soft` border / `--p-primary-ink`) opening a 300px review list with per-item remove + "Clear All". Lets you trim a large multi-select without leaving the step.
- **`Check`** — table-tuned binary checkbox: `18px`, `radius 4`, `1.5px` border; on = `--p-primary` fill + white `check`.
- **`CopyToAllChip`** — inline action pill ("Copy to All", `content_copy`, `26px`, pill, `--p-primary-tint`) that propagates one row's configured value to every selected row (POD Planner "Configure Actions" step).
- **`ActionSegment`** — a 2-option segmented control (Add / Discontinue) where **Add = `--p-success`** and **Discontinue = `--p-danger`** when active (`30px`, `radius 4`, `600 13px`) — an example of semantic-colored segments.
- **`StepHeader`** — step title (`600 20px --p-ink`, `-.01em`) + optional **helper banner** (`--p-primary-tint` bg, `--p-text`, `radius 8`, `10px 14px`, `400 14px`). The canonical home for the "Select one or more… (Step 1 of 4)" info copy.

CSS used: `.wz-row`, `.wz-row-selected`, `.wz-num` focus ring, `gr-tab-in` (see §10 / §13).

---

### Audit Log, Change Row & Restore

A first-class, cross-portal capability with three surfaces, backed by per-entity immutable audit collections. The UI is fully reusable. Reference: `ui_kits/portal/audit.jsx` (live: `components/AuditLog.js`, `components/ChangeLog.js`, `screens/AuditLog.js`).

**Action accents (new semantic taxonomy):** Created = `--p-primary` (`flag` / `add_circle`), Updated = **gold `#B7791F`** (`edit`), Restored = **teal `--p-restore` `#0D9488`** (`settings_backup_restore`), Deleted = `--p-danger` (`delete`). Tokens: `--p-audit-created` / `-updated` / `-restored` / `-deleted` (§13).

#### Audit Log timeline modal (`AuditLogModal`)

A vertical **timeline** of one record's history. Each node:
- A `26px` circular icon chip outlined in the action accent + a vertical connector to the next node.
- Header line: action label (`600 13px`), a **"Current"** chip on the newest node, "by {actor}", and a right-aligned mono timestamp.
- Body: the change set rendered as **Change Rows** (below). A `created` node labels its rows **"Initial values"** and lists every starting field (nothing → value).
- **Restore control:** every non-current node with a snapshot shows a **"Restore This Version"** button (teal) with an inline confirm ("Restore to this version?") → Cancel / Restore.
- Driven by props (`auditUrl`, `restoreUrl(id)`, `formatValue(field, value)`, `createdMessage`, `restoredNoun`, `title`, `subtitle`), so any entity reuses it. Rendered in a Modal at the 560px custom width.

#### Audit Log ledger page (`/audit-log`)

A **single, generic, immutable ledger table** that flattens every entity's audit events into **one row per changed attribute**:

`When · Record Type · Record · Action · Attribute · Removed · Added · Changed By`

- The value columns are **"Removed" / "Added"**, not "Old Value / New Value" — this reads correctly for every change kind: a scalar edit (Name "A"→"B") is Removed:A / Added:B; a multi-select edit is literally what was removed vs added; a Created row is Removed:— / Added:value. Removed values render struck-through in `--p-muted`; Added values render in `--p-ink`.
- **Record Type** is a **plain-text** column (e.g. "Store Promotion", "POD Plan", "User") — **no icon, no color pill**.
- **Toolbar:** search · date-range filter (backward-looking preset rail — see Date Picker) · "All Record Types" · "All Actions" · "All Users" (actor) filters.
- **Footer:** standard data-table footer (`Showing X–Y of Z changes` + `RowsSelect` + Pagination, default 50).
- Built as a **grid-row table** (read-only feed — see Tables). Deletions are recorded as **tombstones** (the record's name persists as the label after the record itself is gone).

#### Change Row (`ChangeRow`)

The shared diff primitive used by the audit modal **and** the wizard Review step. Two modes:
- **Scalar:** `<label> oldValue → newValue` — old struck-through `--p-muted`, `arrow_forward` glyph, new `--p-ink 500`. When `from` is null/undefined (creation) it shows only the new value.
- **Membership:** `+ name` chips (green success text on `--g-green-10`) and `− name` chips (`--p-danger`, struck-through, on `--g-red-10`).
- Label is an uppercase micro-caps tag (`600 11px`, `.04em`, `--p-text-2`, min-width 84).

> **Granular, name-resolved change records (1.5).** Audit / Change-Row entries must be **human-legible and minimally scoped, using resolved real names** — never placeholder ids or whole-object diffs. Store-Layout edits, for example, emit **product + section scoped** rows:
>
> | Field | Value |
> |---|---|
> | **Record** | `"{Account} · {Product}"` — e.g. *"Harris Teeter · Barefoot Rosé"* |
> | **Attribute** | the scoped dimension — e.g. *"Section"* |
> | **Removed** | prior value by name — e.g. *"Section A"* |
> | **Added** | new value by name — e.g. *"Section B"* |
>
> **Rule:** each change row resolves IDs → names, names the **smallest meaningful scope** (account · product · section), and reads as a sentence-fragment a human can audit at a glance.

---

### Login (single page) (updated 1.9 · 1.10 · 1.13 theme menu)

> **1.13:** the bottom-left theme control is `ThemeControl variant="login"` — a bare text+icon link (muted → ink on hover, mono 12) opening the standard theme panel; testid `login-theme-toggle`.

The authentication screen: the raven centered on `--p-shell` (the restraint *is* the brand — see §3 Color Rules).

> **New in 1.9 — single page; supersedes the 1.5 two-step (email → Next → password).** The lookup / greeting step is removed; the per-user greeting now lives on the **Home** dashboard (§ Home dashboard).

- **One screen.** Logo, "Sign in to your account", an **email** field (`autoComplete="email"`) and a **password** field (`autoComplete="current-password"`) shown **together**, a full-width **Sign In** button, and the legal line. Submitting posts both to the existing login endpoint. (The backend `lookup` endpoint may remain but is no longer used by the UI.)
- **Auth inputs** are **56px tall, `--radius-sm` (4px)** (§6) — taller than in-app 36px controls. Staggered entrance via `gr-rise`.
- **Error handling:** a single **generic** message — *"Incorrect email or password."* — never revealing which field was wrong (don't leak account existence).
- **Dev quick sign-in (development only) — id-based, no client-side secrets (1.10 §P; supersedes the 1.9/1.5 prefill-and-submit spec).** Below the form, **one dashed secondary button per dev account**, labelled **"Sign in as {Role} ({email})"** with a leading **`bolt`** icon. Passwords **never reach the client**: `GET /auth/config` returns `{ devLoginEnabled, devAccounts: [{ id, label, email }] }` (**no password field**), and each button calls `POST /auth/dev-login { userId }`, which mints the session **server-side**. Hardening: `DEV_LOGIN_ENABLED` defaults **false** (fail-closed), the endpoint **allow-lists** specific demo user ids, and `/auth/config` must never emit credentials. Adding a role is still a config/data change, not a UI change.
- **Theme toggle** sits **flat, bottom-left**, no card chrome (the same control as the App-Shell utility nav, §3 Theming).
- Testids: `login-email`, `login-password`, `login-signin-btn`, `dev-login-{slug}`, `login-theme-toggle`.

---

### Echo Pulse (brand moment)

A brand-forward loading mark shown on the post-auth transition into the portal: the Greater raven with two expanding **Intelligence-gradient** rings (conic — light `#1861AF → #4338CA → #BE185D`, dark `#9FB6D4 → #929ADB → #D38AAD` since 1.11.3). A **Foundation-tier** moment — the one place the Intelligence gradient (see §3) animates. Reference: `.echo-pulse` + the `ep-echo` keyframes in `colors_and_type.css` (live: `components/EchoPulse.js`).

- Markup: `.echo-pulse` wraps the raven `<img>`; two `::before` / `::after` rings, conic-gradient masked to a 2px stroke, animated by `ep-echo` (scale .55 → 1.9, fading out) and offset by half the cycle.
- Respects `prefers-reduced-motion` (rings disabled). Use it **only** for the auth → portal transition — not as a general spinner (that's the Spinner in Loading & Skeleton).

---

### The Oracle (conversational surface · 1.13, renames the Insights "Explore" assistant)

The Insights assistant is **"The Oracle"** (route `/insights/the-oracle`; the old `/insights/explore` redirects; nav child label "The Oracle").

- **The brand mark goes bare.** No more circled avatar: the new-chat hero shows a bare **32px crow**; each response row floats a bare **20px crow in the left margin** (`position:absolute; left:-34; top:4` on a relative full-width row). The thinking state runs the sonar **echo-pulse directly around the bare 20px crow** in the same margin position, with cycling `gr-shimmer-text` phrases starting at the column edge.
- **Responses span the full column width**, edge-aligned with the composer — no bubble for the assistant; the user's message stays an ink bubble on the right. Voice split per 1.12.2: assistant prose = mono, user bubble = Inter, composer typed value = Inter with a mono placeholder.
- **New Chat is a primary button** (was neutral — design reviewers couldn't find how to start a new conversation).
- **Copy [VERBATIM]:** page subtitle **"Ask and your data shall answer."** (no comma — later ruling) · hero headline **"What would you like to know?"** · hero subline **"A 30K foot view of your business. Down to the smallest detail."** (supersedes "Answers drawn from an all-seeing view of your business." — grammar note preserved: *"all-seeing" must modify a perceiving noun (view/eye), never "answers"*).
- **Composer:** the **"Hairline" variant** ships — no box; a hairline underline sweeps into the intelligence gradient on focus (`.xc-hairline::after`, `scaleX` 0→1, `.35s cubic-bezier(.22,.8,.36,1)`, 35% opacity gradient). The terminal caret (`.explore-caret`, 8×14 ink block, `steps(2)` blink) marks the thinking state; reduced-motion stills it at 60% opacity. The `?composerPreview` terminal variant (`.xc-term`) keeps its deliberately theme-fixed mono input — its literals are scoped as component-local vars (`--xc-term-key-bg/-fg`) with a comment marking the fixation intentional (the **console-fixed palette pattern**, distinguishable from un-tokenized debt).
- Evaluated and dropped: a per-tab route line under the Oracle title (reconfirms the 1.12 ruling); a `>` caret prompt for the composer is **deferred** ("wait and see").

---

### Expandable Rows

A table row can **expand in place** to reveal related detail — Store Promotions reveals its Accounts and Products via a lazy `GET /promotions/{id}`. Reference: `screens/Promotions.js`.

- **Affordance:** an accessible chevron button at the row's lead toggles the panel (`expand_more`, rotated when open).
- **Animation:** a **`grid-rows` disclosure** — animate `grid-template-rows: 0fr → 1fr` over a `min-height: 0` inner wrapper, so the panel height-animates without measuring.
- **Lazy-load:** fetch the detail on first expand; show a skeleton until it resolves.
- **The expanded panel — not a new column — is the correct home for in-context detail.** *(1.10 narrows the old "panel primary action" guidance — see the conventions below.)*

#### Expanded-row conventions (1.10 §G)

Two rulings from the Promotions expanded-row cleanup:

1. **The row kebab is the SINGLE actions surface.** The expanded panel must not duplicate actions — the inline "Edit Store Promo" SplitButton inside expanded rows was **removed**. *An expanded row is for reading; the kebab is for acting.* (Supersedes the earlier "Split button as the panel's primary action" allowance for row-detail panels; SplitButton remains valid in non-row disclosure panels.)
2. **Provenance goes last.** The "Created {date} by {name} · View Audit Log" line renders **below** the expanded panels (accounts/products), not above them — metadata trails content.

#### Nested-table sorting (1.10 §L)

Expanded-row detail panels that render a mini-table (e.g. In-the-Market's coverage panel: Account · Chain/City · On Hand · Avg. Demand · Condition) get **sortable headers** via the shared `SortHeader` (§Tables → DataTable) with a distinct `idPrefix` (e.g. `coverage`) so testids stay unambiguous. Rules:

- Client-side sort; **null/absent values always sink to the bottom** regardless of direction (e.g. pending-add rows with no On-Hand yet).
- **Condition sorts by `SEVERITY_RANK_BY_LEVEL`** (§Inventory Conditions) — ascending = most severe first (OOS → High Risk → Heavy Overstock → At Risk → Slight Overstock → Optimal), *not* by scale level.
- A column's explainer must not live on the sort button: the "What are Conditions?" affordance is a **standalone `info` icon (13px, `--p-placeholder`) beside the `SortHeader`**, wrapped in the portal `Tooltip` (`maxWidth: 300`, bold lead-in + body). Clicking sort never fights the tooltip.

---

### Arrangement Board (drag-and-drop)

A direct-manipulation board for arranging **sections** and the **product placements** within them, with an **Unassigned tray** of unplaced SKUs. Built on **`@dnd-kit`** (core + sortable + utilities) for accessible, keyboard-operable drag-and-drop — the only new runtime dependency. Reference: `ui_kits/portal/layout-board.jsx` (structural; live: `components/layout/LayoutBoard.js`).

**Layout.** Two-column grid: `grid-template-columns: minmax(0,1fr) 340px; gap: 20px; align-items: start` — editor column (left) + a sticky Unassigned tray (right).

**Section card.**

```css
border: 1px solid var(--p-border); border-radius: 10px; background: #fff; box-shadow: var(--shadow-card);
/* header (sticky): */ position: sticky; top: {headerH}; z-index: 6;
  display: flex; align-items: center; gap: 10px; padding: 10px 12px;
  background: var(--p-surface-alt); border-radius: 10px 10px 0 0;
  border-bottom: 1px solid var(--p-border);   /* none + radius 10px when collapsed */
```

Header L→R: **drag handle** (`drag_indicator` 20px, `cursor: grab`, `touch-action: none`), **Section Name control** (preset `Select` + "Custom…"), an **item-count** (`{n} items`, mono) *or* a **"General Stock" badge**, a **collapse** chevron (rotates −90° when collapsed), and a **Kebab** → `[Add Product · Set Capacity For All · Delete Section (danger)]`.

**Section name control.** A `Select` of canonical presets **+ a trailing "Custom…"** entry; choosing Custom reveals an inline free-text input (168px). Presets come from the backend (`/meta.sectionTypes`). Document the pattern: **"preset dropdown + Custom… escape hatch"** for any constrained-but-extensible name field.

**Placement row.**

```css
display: flex; align-items: center; gap: 10px; padding: 8px 10px;
border: 1px solid var(--p-border); border-radius: 8px; background: #fff;
/* dragging: opacity .4 */
```

Contents: drag handle (`drag_indicator` 18px) · **sequence chip** (mono `{n}` in a `--p-surface-alt` 6px box) · product name (500 14px) + category **Pill** + plan **Chip** + `brand · size` sub-line · **Inline Quantity Control** · **Chip Toggle "Display"** (`curtains`) · a **Replace** button (`compare_arrows`) · a `close` remove button (hover → `--g-red-10` / `--p-danger`).

> **Replace-in-place (1.5).** A placement gains a **"Replace with another product"** action (icon **`compare_arrows`**) that **swaps the product while preserving the placement's position and display settings** (sequence, capacity, capacity type, display flags). It is distinct from remove-then-add, which loses the position — reach for Replace when the *slot* should stay put and only the product changes.

**Empty section drop-zone.** `1px dashed --p-border; radius 8; min-height 52px`, centered "Drag products here" with a `move_down` glyph.

**Unassigned tray.**

```css
/* sticky at top: {headerH}; label row: inventory_2 + "Unassigned" + mono count pill */
border: 1px dashed var(--p-border-strong); border-radius: 10px;
background: var(--p-surface-alt); padding: 10px; min-height: 120px;
/* active drop target: border-color --p-primary; background --p-primary-tint */
```

Tray chips are compact (name 13px + `category · size` + plan Chip). Helper: *"Products at this store that aren't placed in any section appear here. Drag one into a section to place it."* Empty: *"Every authorized product is placed."*

**Tray product kebab (1.7).** Every tray chip carries a `more_horiz` kebab (`g-kebab`):
- **Add to Section…** → opens the multi-select **Section Picker** (below); adds the product as an instance into each chosen real shelf section at once (General Stock sections are excluded as targets). Placing a product **clears** any discontinue flag.
- **Discontinue from Store** (danger; only for products currently carried — `carried && pendingAction !== "add"`) → flags the product; toggles to **Keep at Store** to undo. It stages a pending **Discontinue** product-plan that resolves on publish — the exact inverse of how placing a not-yet-carried product stages a pending **Add**.
- **Implementation rule (see §7 ladder):** render the Add-to-Section modal at the **board root**, never inside the tray chip — the tray is `position: sticky` (a stacking context) and a nested `position:fixed` modal gets clipped.
- Test ids: `lb-tray-menu-{iid}`, `lb-tray-addsection-{iid}`, `lb-tray-discontinue-{iid}`, `lb-tray-keep-{iid}`.

**Pending-action badges (standardized gerund pair, 1.7).** The two "happens on publish, no date yet" markers are a symmetric pair — identical pill styling, color-coded, full context in the tooltip:
- **Adding** — `add` icon, green (`--g-green-10` / `--p-success-fg`), tooltip *"Will be added when the layout is published"* (staged add: an out-of-store product placed).
- **Discontinuing** — `remove` icon, red (`--g-red-10` / `--p-danger-strong`), tooltip *"Will be discontinued when the layout is published"* (tray-flagged).
- Dated/scheduled badges are **unchanged**: **`Adds {M/D}`** / **`Disc. {M/D}`** (these carry a real go-live date). Rationale: "Adding/Discontinuing" is compact and the +/− icon already signals direction; "When Published" is redundant in the editor and moves to the tooltip. (Prior copy "Adds When Published" → **"Adding"**.)

**Drag overlay.** Use `@dnd-kit` `DragOverlay` (no drop animation): a product ghost (white card, 1px `--p-primary` border, `--shadow-float`) or a section-name ghost — keeps the dragged item legible above sticky headers.

**Drag / drop rules (real product rules — document them):**

1. A product **may live in multiple sections**, so **dragging a placement into the tray is forbidden** (ambiguous "remove from where?"). The tray only *emits* unplaced SKUs; it never *accepts* placements.
2. A **General Stock Area** section rejects all drops.
3. After any move, **self-heal tray membership** (unplaced = full catalog − placed).
4. **Keyboard:** `KeyboardSensor` + `sortableKeyboardCoordinates`; `PointerSensor` with a 6px activation distance so clicks aren't swallowed.

**A11y / motion:** honor `prefers-reduced-motion`; drag handles get `aria-label`; collapse / menu are real buttons. No springy drop animations — motion is garnish.

---

### Meta Row (progressive disclosure)

Condenses a section's secondary config into one ~28px row: a rep **Note** (left, progressive disclosure) + a compact **General Stock** control (right).

- **Row:** `display: flex; align-items: center; justify-content: space-between; gap: 12px; min-height: 28px`.
- **Note (left) — three states:**
  - *empty* → ghost button: `sticky_note_2` 14px + muted "Add a note about this section" (`cursor: text`).
  - *click* → inline input (28px, `1px --p-primary`, `box-shadow 0 0 0 3px rgba(24,97,175,.12)`, autofocus); commit on Enter / blur, cancel on Esc.
  - *filled* → the ghost button showing the truncated note (`--p-text-2`).
  - **Rule:** for optional, rarely-set free text on a dense row, prefer this **ghost → inline → text** disclosure over an always-present empty input.
- **General Stock control (right · purple concept · 1.7):** optional amber **Chip "Suggested →"** (trailing `arrow_forward` pointing at the toggle; only when off *and* the section name implies variable stock) · a `shuffle` 14px glyph + "General Stock Area" label (turns **`--p-genstock-ink`** when on) · an `info` glyph carrying the educational **Tooltip** (`side="bottom" maxWidth={340}`) · a `Toggle` with **`color="var(--p-genstock)"`** (purple switch).

---

### General Stock Area (Arrangement Board sub-pattern) — 2.0, THE MODEL REVERSED (1.13 §I; supersedes 1.7 + the Phase-3 "no product list" rule)

> **The new law.** A General Stock Area (GSA) **may optionally hold a pinned product list with an arranged sequence** — a convenience for counting, not a merchandising plan. **Par levels and Display flags are customer-facing concepts and never apply inside a GSA.** (The old "no product list, no sequence, no drops" law is retired — it came from the mobile-app handoff spec evolving.)

**Behavior contract (§I1):**

- **Drag-and-drop into a GSA is allowed** (the old drop-block is removed). Reordering works; each row shows its **sequence chip** (min 22×22, `--r-card`, `--p-surface-alt` bg, `600 12px` mono position number).
- GSA rows **hide** the Par Level control and the Display chip.
- Section kebab in a GSA: **"Add Product" shows**, **"Set Par Level For All" hides**.
- The Unassigned-tray "Add to Section…" picker **includes** GSAs (old exclusion removed).
- **Section → Area conversion is NON-destructive** — products stay pinned. A confirm appears **only** when a member actually carries a par level or Display flag, and it confirms only the erasure: `Modal variant="confirm" tone="general" icon="inventory_2"`; buttons neutral **Cancel** / danger **Erase Par Levels** — **[VERBATIM]** title **"Erase par levels?"**, body *"Par levels only apply to customer-facing locations. The par levels on this section's products will be erased — the products stay pinned here."* Area → Section is silent and keeps membership.
- Serialization/API: GSA instances are stripped to `parLevel: null` / `displayRelated: false` at **both** the frontend serializer and the API boundary.

**Iconography (§I2) [RULE]:** the GSA glyph is **`inventory_2`** — the toggle label, the in-section hint panel, and the confirm-modal icon (supersedes the earlier `shuffle`/⇄ mark; see the entity-icon canon, §8). The **Unassigned-tray header icon was removed entirely** — the tray is a plain "Unassigned" label (600 14px Inter); it is a place, not an entity.

**Components (§I3):**

- **`GsaBadge`** — replaces the old "General Stock" header badge: an UPPERCASE mono pill in the genstock tint (`600 10px/1.5 --font-control`, `.05em`, `--p-genstock-tint` bg, `--p-genstock-ink` fg), shown in the section header next to the name and in template detail views. Status-badge-adjacent in tone but *categorical* in meaning; **it takes no stroke anywhere**.
- **`GeneralStockToggle`** — the section-meta-row control: label `500 12px var(--font-control)` + `inventory_2` 14px (ON: `--p-genstock` icon / `--p-genstock-ink` label · OFF: `--p-muted` / `--p-text-2`), an info `ⓘ` tooltip (`maxWidth 340`, `side="bottom"`), and `Toggle color="var(--p-genstock)"` — the switch fills **violet** when on, never primary blue. An amber `Chip tone="amber" iconRight="arrow_forward"` reading **"Suggested"** appears when the section's preset name is a stock-area name and the toggle is off.
- **Section name presets** (grouped `Select`, §M3) — the groups drive GSA nudging: **Customer Facing** (Item Cooler · Warm Shelves · Walk-in Cooler · Checkout · Display · End Cap · Tap / Fountain Lines) · **Stock Areas** (Backstock · Floor Overstock · Top Stock · Cold Storage) · + Custom…. Picking a Stock-Area name on an empty non-GSA section nudges (or auto-enables) General Stock; the "Suggested" chip keys off the same set.

**Copy deck (§I4) [VERBATIM — user-approved, do not edit]:**

- Toggle explainer (tooltip): *"General stock areas are not customer-facing or merchandised to a set plan. Inventory often changes with each delivery, so arranging a set product list is optional and for convenience of pinning products commonly found in this area. Par levels cannot be set."*
- In-section hint panel (violet-tint band, `inventory_2` 15px, `400 12.5px/1.5` Inter): *"Any product can be found and counted in a general stock area. Add products commonly found here to pin them for convenience while counting."*
- Empty drop target (dashed border, `move_down` — same as normal sections; testid `lb-gsa-empty-*`): *"Drag products here"*

---

### Inline Par Level Control (renamed from "Inline Quantity Control" · 1.13 §I5)

> **Vocabulary rename [RULE]:** the per-placement quantity is a **"Par Level"** (`parLevel` / `parLevelUnit`), not "Capacity" — control label "Par Level" (morphing to "Display Size" when the placement's Display chip is on), kebab action **"Set Par Level For All"**. The kit exports `ParLevelControl` (`CapacityControl` remains a deprecated alias).

A dense, encouraged-but-optional **par level + unit** control for a placement row.

```css
display: inline-flex; align-items: center; height: 30px; border-radius: 6px; overflow: hidden;
border: 1px solid var(--p-border-strong);   /* unset → 1px solid var(--p-warning) */
background: #fff;                            /* unset → var(--g-gold-10) */
```

- A muted **label** ("Par Level"), a right-aligned `<input type=number>` (46px), and a **unit toggle** ("units" ⇄ "cases") separated by a 1px divider.
- **Unset cue:** when empty, the control takes the amber border + `--g-gold-10` fill + `title="No par level set — adding one is encouraged"` — the canonical **"soft-required"** affordance (amber, *not* red; see Inputs & Forms).
- **Animated label swap:** when the placement's **Display** toggle is on, the label morphs "Par Level" → "Display Size" via the `gr-label-swap` keyframe (keyed span so React re-mounts).
- **Bulk apply:** a section kebab action **"Set Par Level For All"** opens a small modal (number + units / cases) that writes one value to every placement — the pattern: *per-row control + a "set for all" bulk shortcut in the container's menu*. Hidden in GSAs (§I1).

---

### Add-items Picker (grouped multi-select)

A centered overlay (480px, max-height 82vh) for adding several items to a destination at once — prioritizing what's already in scope while still allowing out-of-scope picks. Built on the `Modal` primitive. (Store Layouts: add products to a section.)

- **Header:** title + "Into **{section}** · select one or more", then a search input.
- **Scroll body — two groups separated by a divider:**
  - **"At This Store · N"** (carried + pending) on top.
  - **"Not At This Store · M"** as a **collapsible** group (chevron). When expanded it shows an **amber note** — *"Any products selected will be added to the account when this layout is published."* — then its rows.
- **Rows** are multi-select (custom 18px `PickCheck`, primary fill when checked; selected row tints `--p-primary-tint`). An item already in *this* section renders disabled with a green `check_circle` + "Placed".
- **Footer:** "{n} selected" (left); **Cancel** + **Done** (disabled at 0) on the right — adds all at once, no reopening.
- **Rule:** selection **survives search-filtering** — resolve picks against a full-source `byId` map, not the rendered subset. Group labels: `600 11px Inter; letter-spacing: .06em; uppercase; --p-muted`.

This mirrors the **Filter Menu** search pattern (SELECTED-on-top, capped results) but for *adding* rather than *filtering* — see Filter Menu.

#### Section Picker (multi-select variant · 1.7)

A focused variant of the Add-items Picker for the **inverse** job — *"add this one product into N sections at once"* (from the Unassigned-tray kebab, above):
- Built on the shared **`Modal`** (title + subtitle + footer), **not** a bespoke overlay — so it inherits the backdrop, portal/stacking behavior, and theming.
- Lists **real shelf sections only** (excludes General Stock) as checkbox rows; confirm reads **"Add to {n} section{s}"**, disabled at 0.
- Empty state: *"No shelf sections yet. Add a section first."*
- Test ids: `lb-tray-sectionpicker`, `…-opt-{sid}`, `…-confirm`, `…-cancel`.

---

### CSV Import

A two-step **upload / paste → validate → preview → commit** flow — the canonical bulk-import pattern (it also fulfills the Empty States "first-run / import" cause). Built on the `Modal` primitive (540px step 1, 760px preview). Reference: `preview/components-csv-import.html`.

**Step 1 — input.** A **dashed dropzone** button (`cloud_upload` 30px, primary; hover → `--p-primary-tint`) reading "Choose a CSV file" + a one-line schema hint, an **"or paste rows"** divider, and a **monospace textarea**. Footer: **Download Template** (neutral, `download`) + **Validate** (primary, disabled until input). Selecting a file auto-validates.

**Step 2 — preview.** Four mini **stat tiles** (Accounts / Sections / Placements / **New to Store** highlighted blue); conditional **InfoBanners** (amber "*N rows will be skipped*", info "*N accounts have an existing draft*"); a scrollable **per-account list** — each row shows id + name + an amber **Chip "Draft exists"** on conflict, with a **Replace / Skip** segmented control (one draft per account); non-conflicts show a green "New draft" marker. A collapsible **`<details>` of skipped rows** ("Row {n} — {message}"). Footer: **Back** + **Import {N} Draft(s)** (count reflects skips). On commit → success toast → land on the **Drafts** tab.

**Rules**

- **Validate-then-commit, always** — never import blind. Show totals, skipped rows (with reasons), and conflicts up front; resolve conflicts inline before committing.
- **Partial success is fine:** invalid rows are listed and skipped; valid rows still import.
- Pair every import with a **Download Template** and a round-trippable **Export** (the editor emits the same CSV shape).
- **CSV shape** (one row per placement; section fields repeat per row): `account_id, section_name, section_note, general_stock, product_id, capacity, capacity_unit, display, sequence`.

---

### Known debt & open questions (1.13 §O — recorded honestly; don't silently "fix")

1. **[DEBT]** Light-mode `--p-focus-ring` is still `rgba(0,124,255,.15)` — the last derivative of retired vivid `#007CFF`. Deliberately left matching on both sides (app + repo); decide once, change both.
2. **[DEBT]** Black Ops `--p-success-fg #34D399` / `--p-atrisk-fg #E7B45C` are literals that break the pal-derived chain (`var(--p-pal-3)` / `var(--p-pal-6)`) used by Light/Dark.
3. **[DEBT]** Portal-side: four tokens are referenced in app code but never defined, silently rendering their hex fallbacks (`--g-gold-50`, `--g-gold-60`, `--g-green-60`, `--p-success-ink`, `--p-restore-fg`). Define them or inline the fallbacks.
4. **[DEBT]** Portal-side: `Skeleton` radius 6 and `.g-kebab` radius 2px don't square under Black Ops (pre-token literals).
5. **[RESOLVED DS-side]** The 1.12.2 "odd-sized mono links (13/11px) vs the even-size rule" open question: **there is no even-only rule** — the 1.12.1 scale is *integer*, so 11/12/13px links are legal as shipped. (Recorded here because the portal still lists it as open.)
6. **[OPEN]** The "bare-text-plus-icon" tag pattern (the GSA toggle label, several inline icon+label tags) has inline copies across the app — planned to formalize as a `TextTag` primitive; the repo may pre-empt with a spec.
7. **[DEBT]** Portal-side: `Drawer` / `MobileSheet` exist but are unused; Tailwind + shadcn/ui files are installed but never imported. Kept here so the repo stays honest about what the kit actually exercises.

### Engineering gotchas (1.13 §P — for the kit's notes)

- **CSS vars don't resolve in SVG presentation attributes** — set `element.style.fill` (Coverage-Map hexes) or resolve via `getComputedStyle` for JS-drawn geometry (§9 Maps).
- **`:nth-child(even of .g-zebra)`** — the `of S` selector-list syntax is what lets zebra skip non-row siblings (headers, group heads) without JS.
- **Subgrid:** spanning items need `contain: inline-size`; edge tracks absorb row padding (the 44px checkbox rule) — §9 Tables 2.0.
- **Duplicate `class` attributes are dropped by the browser (first wins)** — when adding classes to markup that may already carry `class` after `data-*` attributes, merge instead of prepending.
- **Inline styles beat class-based zebra/hover — that's load-bearing** (selected/dirty states must win); don't "clean up" inline conditional backgrounds into classes without re-establishing priority.
- **Attribute-selector retargeting** (`[style*="var(--font-sans)"]`) is the sanctioned trick for skin-level re-fonting of inline-styled cells without touching call sites — brittle by design; document it where used.
- **Theme-driven Leaflet layers must key rebuild effects on `skin`**, not just `resolved` (§9 Maps).
- **Workflow:** batched parallel edits to the *same file* can drop changes while reporting success (three incidents portal-side, incl. the §3 primary-ramp transcription) — after any bulk token edit, **grep-verify both the old and new values**.

---

## 10. Motion

Animation is minimal — the portal reads as mostly static.

| Interaction | Duration | Easing |
|---|---|---|
| Hover states (buttons, rows) | 120ms | ease-out |
| Panels opening | 180ms | ease-out |
| Toggle knob slide | 150ms | ease |

Rules: no bounces, no springs. Treat motion as a garnish, not a feature.

### Keyframes

These named keyframes ship in `colors_and_type.css` and back every entrance / loading animation:

| Keyframe | Used for |
|---|---|
| `gr-fade-in` | simple opacity reveals |
| `gr-pop-in` | menus / popovers / tooltips |
| `gr-flyout-in` | collapsed-nav flyout |
| `gr-toast-in` | toast entrance (top-center) |
| `gr-spin` | spinner |
| `gr-shimmer` | skeleton shimmer |
| `gr-rise-in` | login / staggered entrance (`--i` index delay) |
| `gr-slide-fwd` / `gr-slide-back` | directional step transitions |
| `gr-tab-in` | tab-panel & wizard-step arrival |
| `gr-bar-in` | bottom-anchored bar (keeps `translate(-50%, …)` centering) |
| `ep-echo` | Echo Pulse rings (see §9 Echo Pulse) |
| `gr-label-swap` | inline label morph (Capacity → Display Size) — fade + 5px rise + slight blur |
| `gr-drawer-in` | drawer / side-sheet entrance |

**Transform-first rule.** Entrance animations must animate a transform, not opacity alone. A backgrounded iframe can freeze an opacity-only keyframe at `0`, leaving content permanently invisible — always pair opacity with a `translate`/`scale`. Honor `prefers-reduced-motion`: the stylesheet collapses durations and disables the Echo Pulse rings.

### JS animations (count-ups, asymmetric timing)

- **JS count-ups use ease-out-quart** (`1 − (1−t)⁴`), ~720–760ms, no bounce/elastic — the JS sibling of the CSS `cubic-bezier(0.22, 1, 0.36, 1)` family (`.gr-rise` / `.gr-step-*` / `.gr-tab-in`). The StatCard value count-up (see §9 Stat Cards) is the canonical example.
- **Asymmetric enter/exit timing is an approved technique.** When an element should *leave* quickly but *arrive* gently (or arrive only after a sibling settles), set different transition delays / durations per state (read the `transition` string from the current state). Documented examples: the StatCard opacity ramp and the sidebar company-name reveal (§9 App Shell).
- **Reduced motion covers JS too.** The global `prefers-reduced-motion` rule neutralizes CSS transitions; JS animations additionally **check `matchMedia` and snap to the final value** (see `useCountUp`). New motion must keep both safeties.

### Navigation & micro-delight motion (1.9)

- **Nav-group expand / collapse — the grid-rows trick.** The children wrapper uses `display: grid; grid-template-rows: {open ? "1fr" : "0fr"}; transition: grid-template-rows 280ms cubic-bezier(.32,.72,0,1)` with an inner `<ul style="overflow:hidden; min-height:0">`. Each child link **staggers** in: `opacity 0→1` + `translateY(-6px)→0`, `transition: opacity 240ms ease {delay}ms, transform 300ms cubic-bezier(.32,.72,0,1) {delay}ms`, with `delay = open ? 50 + i*38 : 0` (cascade on open, collapse together). Children stay **mounted** (the grid collapses to height 0); set `tabIndex={isOpen ? 0 : -1}` so collapsed children aren't keyboard-focusable. The chevron keeps its 200ms rotation. (See §App Shell.)
- **Crow Fact (easter egg).** A subtle brand micro-delight pinned to the bottom of Home (`margin-top: auto`). By default it shows only the small, low-opacity **`raven`** glyph (weight 300, `--p-placeholder`). The bird and the fact share **one centered "stage"**; on `:hover` the bird **fades out** and a randomized "Crow Fact" **fades in *in its place*** (absolutely centered, so the layout never grows and the fact can't clip below the fold). Each hover rolls a fresh fact (never repeating the current one). Honor `prefers-reduced-motion` (bird bob off). Intent to record: *an easter egg should be discoverable but not load-bearing — miss the bird and you miss nothing; hover, and you reliably get the payoff in the same spot.* Testid `crow-fact`.

---

## 11. Voice & Copy

### Principles

- **Plainspoken, operational, slightly wry.** Product copy is literal and straightforward.
- **Second-person, sparingly.** "Sign in to your account." Never cutesy ("Hey! Let's get you signed in 👋"). No first-person.
- **Sentence case** for prose; **Title Case** for actions & overlay headers. Sentence case everywhere except column headers, overlines, tab/chip labels, and — per §4 — every button / link-button / SplitButton label and Modal·Drawer·Dialog header (see Typography → Sentence Case Rules).
- **Numbers carry weight.** Stat cards lead with large bold numbers, always in **Geist Mono** (§9 Stat Cards). Use abbreviations: `21.1k`, `$482.7k`, `1,258`.
- **Spell out "Average" in metric labels (§1.4).** "Average Demand", "Average On Hand" — *not* "Avg." The extra characters read as more deliberate / credible in a sparse metric row.
- **Unit-suffix the value, not the label (§1.4).** The label names the metric ("Average Demand"); the **value** carries the unit: `12.5 cs/wk`, `45 days`, `471 cs` (`cs` = cases). And the **headline metric follows the viz encoding** — when a map encodes a magnitude as hex-fill area, surface that same magnitude as a top metric, and rename stale labels to match ("Accounts," not "Stores," when the dot is an account; "In Market" for total cases).
- **"Days On Hand," not "Weeks On Hand" (§1.5, supersedes).** The inventory on-hand metric is **"Days On Hand"** — unit `days`, formatted `45 days`. Rename every "Weeks On Hand" reference (the metric was re-based to days). On-hand **values are un-bolded** (regular weight, Geist Mono) in the Store Layouts product list — the number reads without competing with the row's primary text.
- **Verb-first** for actions, in Title Case: "Save Changes", "Finalize for Simulation", "Go Back".
- **No emoji in product.** Emoji-free.
- **Inline status words are colored** — not bolded, not badged. The color conveys the meaning.

### Home, Saved-Views & auth copy (1.9)

- **Greeting (Home):** time-of-day + first name, period — `Good morning, {first}.`
- **Save View modal:** "Find this anytime under **Home** in the sidebar."
- **Saved Views help / empty state:** *"On any report or list in the Portal, apply the filters you like and press 'Save View' to create a card here."* (tooltip) / *"…and tap 'Save View'. It'll show up here so you can quickly jump straight to the things you care about."* (empty state).
- **Login error:** the single, non-disclosive **"Incorrect email or password."** — never name which field was wrong.
- **Stat-card explanations:** one plain, unit-aware line (e.g. "Cases shipped from the warehouse so far this week"; "X of Y service stops this week have a layout set" — when a coverage metric is framed around service stops, compute X/Y from stops so the headline % and the sentence agree).

### Live-surface & 1.10 copy (§T)

- **"Planned"**, not "Upcoming", for a scheduled-but-unstarted stop on live surfaces (§Live Surfaces).
- **Incomplete** — canonical definition, verbatim tooltip: *"Not submitted and following task was started."* Banner copy: *"N stops today were started but not submitted before the rep moved on."*
- **Skipped** tooltip — reassuring, not alarming: *"Not worked in sequence — the rep may still return to this stop today."*
- **Liveness chip:** *"Live · Updated Xs ago"*. **Progress text:** *"{n}/{m} complete"* (mono).
- **Coverage-Map legend lines (exact):** *"Color = stock condition"* · *"Fill size = demand velocity (cs/wk)"* · hexbin note *"Hex reflects the most severe condition contained within"*.
- **Expected-Impact blurbs (exact — they are spec, not filler):** Minor *"A modest bump in demand"* · Moderate *"A clear, noticeable increase"* · Significant *"A major surge in demand"*.
- **Sort-disabled tooltip:** *"Sorting is disabled while grouped"* (§Tables → DataTable).

### Search & staged-action copy (1.7)

- **Search operators:** `OR` is the only operator word and must be **uppercase**; `"…"` denotes an exact phrase. Surface the grammar only via the subtle `?` hint (§9 Inputs / Search & Highlight), never as chrome.
- **Placeholders (1.11.2):** `Select` placeholders carry **no trailing ellipsis** ("Select a type", "Choose a level"); **search** inputs keep it ("Search accounts…") — search streams, a select doesn't.
- **Staged layout actions:** prefer compact gerunds — **"Adding" / "Discontinuing"** — with the "when the layout is published" detail in the **tooltip**, not the pill. Dated actions keep **"Adds {M/D}" / "Disc. {M/D}"**.
- **Section Picker confirm:** "Add to {n} section{s}".
- **General Stock empty-state / tray helper:** keep the existing plain-spoken voice — *"Products at this store that aren't placed in any section appear here…"*

### Error & Feedback Copy

- Errors: `#C94A4E` (danger red), 12px Inter Medium, placed below the field.
- Info prompts: soft blue pill, 14px, sentence case.

### Examples (verbatim)

```
"Sign in to your account"
"By clicking 'Next' you are agreeing to the Greater Industries User Terms of Service and Privacy Policy"
"Track products and their availability across your accounts."
"Select one or more products below, then press 'Continue' to choose a desired action for each product. (Step 1 of 4)"
"64 of 71 products"
"Thursday, Apr 23 • Kenny D'Amica   ·   5 stops"
"Pending Additions"  /  "Pending Discontinue"  /  "Discontinued & Draining"

— Store Layouts (Phase 3) —
"Manage where products exist in each store — arrange sections and placements, publish or schedule resets."
"Products at this store that aren't placed in any section appear here. Drag one into a section to place it."
"Every authorized product is placed."
"Add a note about this section"  /  "Add a note for reps — where to find it, inventory tips…"
"General Stock Area"  /  "Products can't be placed here. Use this section to track variable inventory."
"You're editing an upcoming reset (goes live {date}). Changes here do not affect the current live layout."
"This is a draft with no go-live date yet. Publish it to make it live, or schedule it for a future date."
"Any products selected will be added to the account when this layout is published."
"N rows will be skipped due to errors below — the rest import normally."
"1 skipped — a draft already exists for: Bluewater Bistro"
```

**Phase-3 actions stay Title Case** — "Save as Draft", "Publish Now", "Schedule For Later", "Set Capacity For All", "Mark As General Stock Area", "Import N Drafts"; the helper / banner / tooltip strings above remain sentence case.

---

## 12. Layout

| Property | Value |
|---|---|
| Max content width | ~1320px, centered |
| Page gutter | 32px |
| Card gap | 16px |
| Stat card row | 3-up grid |
| Table header height | 40px |
| Table body row height | 45px |
| Table cell padding | `10px 16px` |

No gradients on surfaces. No full-bleed imagery. Backgrounds are flat white with `#F9FAFB` for table headers and `#F3F4F6` for tab-strip wells.

### Masonry card packing (1.8)

For a set of **read-mostly, variable-height cards** that don't need to align row-by-row (permission sections, summary cards), pack them with **CSS multi-column masonry** instead of a fixed grid, so short and tall cards interleave with no stretched dead space.

```css
/* container */            column-count: 2; column-gap: 14px;
/* EVERY child card */     break-inside: avoid; margin-bottom: 14px;  /* or it splits across the gap */
```

- **Only** for read-mostly, variable-height cards. **Do not** use it for tables, ordered lists, or anything drag-reorderable — column flow is top-to-bottom-then-wrap, which breaks logical order.
- **Every** child needs `break-inside: avoid` (and avoid fixed heights).
- `column-gap` is the horizontal gutter; per-card `margin-bottom` is the vertical gutter (there is no `row-gap` in column layout).
- Used by the Settings role editor and the Users read-only matrix (§ Permission Cards) so the two read as one system.

---

## 13. CSS Token Reference

All tokens are defined in `colors_and_type.css`. Load it first, then optionally `fonts/fonts.css` (Google Fonts), then optionally `maps.css`.

```html
<link rel="stylesheet" href="colors_and_type.css">
<link rel="stylesheet" href="fonts/fonts.css">
<link rel="stylesheet" href="maps.css"> <!-- only if map views are needed -->
```

### Full `:root` block (abbreviated)

```css
:root {
  /* Neutrals — alias the ink-forward ramp (no separate gray scale) */
  --g-black: var(--p-ink);
  --g-dark-gray: var(--p-text-2);
  --g-medium-gray: var(--p-muted);
  --g-light-gray: var(--p-border-strong);
  --g-off-white: var(--p-surface-tint);
  --g-white: #FFFFFF;

  /* Transparency ladder — subtle overlays */
  --g-black-100: rgba(0,0,0,1);
  --g-black-25: rgba(0,0,0,.25);
  --g-black-10: rgba(0,0,0,.10);
  --g-black-05: rgba(0,0,0,.05);

  /* Accent tints */
  --g-blue-25: rgba(24,97,175,.25);
  --g-blue-10: rgba(24,97,175,.10);
  --g-blue-05: rgba(24,97,175,.05);
  --g-red-10: rgba(201,74,78,.12);
  --g-green-10: rgba(0,188,87,.12);
  --g-gold-10: rgba(219,158,3,.12);
  --g-purple-10: rgba(123,104,238,.12);

  /* Portal neutrals */
  --p-ink: #101828;
  --p-text: #364153;
  --p-text-2: #4A5565;
  --p-muted: #6A7282;
  --p-placeholder: #99A1AF;
  --p-border: #E5E7EB;
  --p-border-strong: #D1D5DC;
  --p-surface: #FFFFFF;
  --p-surface-alt: #F9FAFB;
  --p-surface-tint: #F3F4F6;
  --p-shell: #FDFCF9;          /* page / canvas background */

  /* Portal primary */
  --p-primary: #1861AF;
  --p-primary-hover: #134E8C;
  --p-primary-soft: #D9E3F0;
  --p-primary-tint: #EDF2F8;
  --p-primary-ink: #007CFF;   /* consolidated to the single brand blue (was #155DFC) */

  /* Portal action (ink-forward) — primary actions & active nav; inverts to a white surface in dark */
  --p-action: var(--p-ink);
  --p-action-hover: #000000;
  --p-action-fg: #FFFFFF;
  --p-action-disabled-bg: #C7CBD3;
  --p-action-disabled-fg: #FFFFFF;

  /* Portal search-highlight (the only sanctioned yellow) — dark: rgba(250,204,21,.32) / #FDE68A */
  --p-highlight: #FDE68A;
  --p-highlight-fg: #4A3000;

  /* Portal General Stock (purple concept accent) — dark: #A78BFA / #D8B4FE / rgba(167,139,250,.18) */
  --p-genstock: #7C3AED;
  --p-genstock-ink: #6B21A8;
  --p-genstock-tint: rgba(124,58,237,.12);

  /* Portal category pills */
  --p-pill-beer-bg: #FFFBEB;    --p-pill-beer-fg: #BB4D00;
  --p-pill-wine-bg: #F5F3FF;    --p-pill-wine-fg: #6B21A8;
  --p-pill-spirits-bg: #FFF7ED; --p-pill-spirits-fg: #C2410C;
  --p-pill-rtd-bg: #EDF2F8;     --p-pill-rtd-fg: #1447E6;
  --p-pill-nonalc-bg: #ECFDF5;  --p-pill-nonalc-fg: #047857;

  /* Portal feedback */
  --p-success: #21C06B;
  --p-warning: #B98A2E;
  --p-danger: #C94A4E;
  --p-danger-strong: #DC2626;
  --p-danger-soft: #FCEBEC;            /* 1.8 — red wash for conflict cells (dark: rgba(216,75,75,.16)) */
  --g-gold-04: rgba(219,158,3,.05);    /* 1.8 — faintest amber row tint (dark: rgba(245,158,11,.08)) */

  /* Intelligence gradient — AI / confidence / predictive (Dusk Rose, 1.11.3;
     dark flips to the bespoke "half-step" stops #9FB6D4 → #929ADB → #D38AAD) */
  --p-intel-gradient: linear-gradient(90deg, #1861AF 0%, #4338CA 50%, #BE185D 100%);

  /* Restore / audit action accents */
  --p-restore: #0D9488;             /* teal — restore / revert + `restored` audit state */
  --g-teal-10: rgba(20,184,166,.12);
  --p-audit-created: var(--p-primary);
  --p-audit-updated: #B7791F;
  --p-audit-restored: var(--p-restore);
  --p-audit-deleted: var(--p-danger);

  /* Radii */
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 10px;
  --radius-pill: 999px;

  /* Elevation */
  --shadow-tooltip: 0 2px 6px 0 rgba(0,0,0,.15);
  --shadow-card: 0 1px 2px -1px rgba(0,0,0,.10), 0 1px 3px 0 rgba(0,0,0,.10);
  --shadow-surface: 0 1px 2px 0 rgba(16,24,40,.04), 0 6px 16px -8px rgba(16,24,40,.10);
  --shadow-float: 0 4px 6px -4px rgba(0,0,0,.10), 0 10px 15px -3px rgba(0,0,0,.10);
  --shadow-brutal: 2px 2px 0 0 var(--p-ink);  /* adaptive: black in light, white in dark */

  /* Spacing (4px base) */
  --space-0-5: 2px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;

  /* Type families */
  --font-sans: "Inter", "Inter Fallback", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  --font-mono: "Geist Mono", ui-monospace, "SF Mono", Menlo, monospace;

  /* Type scale */
  --fs-10: 10px;  --fs-11: 11px;  --fs-12: 12px;
  --fs-14: 14px;  --fs-16: 16px;  --fs-18: 18px;
  --fs-20: 20px;  --fs-24: 24px;  --fs-32: 32px;
  --fs-40: 40px;  --fs-48: 48px;

  /* Letter spacing */
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.05em;
  --tracking-caps: 0.05em;
  --tracking-micro: 0.025em;

  /* Semantic aliases */
  --fg-1: var(--p-ink);
  --fg-2: var(--p-text);
  --fg-3: var(--p-muted);
  --fg-4: var(--p-placeholder);
  --fg-link: var(--p-primary);
  --fg-invert: var(--g-white);

  --bg-1: var(--p-surface);
  --bg-2: var(--p-surface-alt);
  --bg-3: var(--p-surface-tint);
  --bg-hover: var(--p-primary-tint);

  --border-1: var(--p-border);
  --border-2: var(--p-border-strong);
  --border-focus: var(--p-primary);
}
```

---

## 14. Fonts

Both fonts are loaded from Google Fonts. Self-hosting is recommended for production.

```html
<!-- fonts/fonts.css -->
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap');
```

Or directly in HTML:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap">
```

---

## 15. Working With This System

### For new components

- Match the 4px spacing base.
- Use `--p-border` / `--p-primary` / `--p-ink` for borders, accents, and text.
- Prefer `14px Inter Medium` for interactive labels.
- Use `Geist Mono` for any numeric / tabular / ID data.
- **Concept-accent principle (1.7).** When a feature needs a distinct identity (like General Stock purple), introduce it as **semantic tokens** (light + dark), never inline hex — so it themes and can be reused. Keep the palette legible: **blue = action / link / selection**, **green = add**, **red = remove / destructive**, **amber = warning / suggestion**, **yellow = search-highlight only**, **purple = General Stock**. Add concept colors **sparingly**, and document what each means next to the token (§3).
- **Role-gating keys off real role ids (1.9).** When gating a component by role (e.g. which Home stat cards a user sees), the `roles` whitelist must use the **actual role ids the auth layer emits — `exec` · `deptmgr` · `itadmin` · `supervisor` · `rep`** — **never** invented friendly names like `admin` / `manager`. (Bug we hit: cards keyed to `["admin","manager"]` silently never rendered for the executive account.) This is the canonical role-id list; reference it from any role-gated component (and see §Permissions & Affordances / Appendix A). **1.10 update:** *navigation* gating no longer keys off role ids at all — nav children carry their own capability (`cap`) and filter by the user's caps (§App Shell → Nav gating, §O). Role-id gating remains for **content** (e.g. Home tiles); caps gate **wayfinding + endpoints**.
- **Navigate with anchors (1.9).** Anything whose job is to go to a route renders as a real `<a href>` (via `AppLink` / router `Link` / external `<a>`), never a `<button onClick={navigate}>` — so "Open in new tab" / ⌘-click / middle-click work (see § Navigation & links). Buttons stay buttons for *actions*.

### For production code

Lift tokens from `colors_and_type.css`. Consume components from `ui_kits/portal/*.jsx` as hi-fi reference implementations — the canonical patterns, not a published npm package.

### For prototypes and mocks

Import `colors_and_type.css`, copy the logo assets, load Material Symbols from Google Fonts. Stick to Portal tokens unless you are designing a brand-forward moment (then use the Foundation quintet and `--shadow-brutal`).

### Portal everywhere; brand moments are the exception

| Scenario | Use |
|---|---|
| Everything in the product — tables, filters, stat cards, forms, app shell | Portal tokens |
| The login "Next" / "Sign In" CTA | the neo button (`--shadow-brutal`) |
| Post-auth Echo Pulse + AI / predictive moments | the intelligence gradient (`--p-intel-gradient`) |
| Any doubt | Portal tokens |

### Substitution notes

- **Fonts:** Inter + Geist Mono from Google Fonts. Some references to "Helvetica Neue" in map attribution are acceptable as system-font fallback.
- **Icon set:** Material Symbols (Sharp), one system everywhere — the variable font, addressed by ligature name. Lucide and Iconify have been fully removed.
- **Portal chrome (global nav, user menu):** designed from first principles and shipped as the **App Shell + Navigation Sidebar** (see §9).
- **Map tiles:** CARTO `light_all` (light) / `dark_all` (dark) — `https://{s}.basemaps.cartocdn.com/{light_all|dark_all}/{z}/{x}/{y}{r}.png` (§Maps).

---

## Appendix A — RBAC capability vocabulary (product logic, *not* design tokens)

So the affordance rules in §Permissions & Affordances have a shared vocabulary, this appendix lists the capability ids the UI keys off and the role baseline. **This is application/product logic, not a design token** — designers/implementers need it only to know *which* affordances are gated. The canonical definition is the app's roles config.

**Capability catalog — feature-aligned (1.10 §O; supersedes the ad-hoc list).** The catalog is now **22 capabilities in 7 sections**, aligned to product features: `insights.*` · `sales.*` · `orch.*` (incl. `orch.approve`) · `market.view` · `pod.*` · `acct.*` · `layouts.*` · `promos.*` · `users.*` (incl. `users.roles`) · `audit.view`. It is **versioned** (`CAPS_VERSION`) so defaults can be re-seeded once per catalog revision while preserving per-role customization. Nav consumes it **per child** (§App Shell → Nav gating): every nav child carries its own `cap`; drop children the user lacks, then hide any group left empty.

**Role → capability baseline (seed):**

| Role | Has (relevant to affordances) |
|------|-------------------------------|
| Executive / IT Admin | all (incl. `users.edit`, `users.roles`, `acct.edit`) |
| Department Manager | `users.view`, `users.edit`, `acct.view`, `acct.edit` — **not** `users.roles` |
| Supervisor | `users.view`, `acct.view` (view-only on Users) |
| Sales Rep | `acct.view`, `sales.*` — **no** `users.*` (no Users nav) |

**Role-derived model (1.8 — supersedes the 1.5 per-user model).** Permissions are **strictly role-derived**; there are **no per-user overrides**. A `role_permissions` collection (`{ id: role, roleId, caps: [...], updatedAt }`) is **idempotently seeded** from `ROLE_CAPS` defaults and is the editable, DB-backed source of truth; a user's `permissions` array is always a **mirror** of its role's caps. `CAPS` groups capabilities into **sections** (`{ key, section, icon, items: [{ id, label }] }`) — this is what renders the matrix.
- `GET /api/roles` → `{ roles, roleOrder, caps, allCaps, roleCaps, counts }` (gated by `users.roles`).
- `PUT /api/roles/{role}/permissions` body `{ caps: [...] }` → validates caps against the catalog, writes the role row, **`update_many({role}, {permissions: caps})`** to re-sync users, writes a `role_audit` record, returns `{ roleCaps, counts, usersUpdated }`.

**Mapping to §Permissions & Affordances (updated 1.8):**
- No `users.view` → Users nav **hidden** (Reps); own profile still reachable via the user menu.
- `users.view` only → Users list visible, **no** New / Batch / Save / Deactivate.
- No `users.roles` → **Settings → Roles & Permissions** is a **locked empty state**.
- Permissions are **never editable on the user page** for anyone — it's a **read-only matrix** (§Users), a mirror of the role. Editing happens **only** in Settings → Roles & Permissions.
- No `acct.edit` → Account *App Requirements* card is **"View only."**
- **Backend is still the source of truth** — UI gating is UX only; the API enforces `require_cap`.

*(Informational only — it lives here to give the visual affordance rules a vocabulary.)*

---

*Greater Design System · Portal 1.13 "Black Ops" · Exported July 2026*
