// Portal UI Kit — DataTable primitives (1.10 §H)
// The shared table skeleton every list screen now builds on. Four pieces:
//   SortHeader       — a sortable column header (+ a disabled/grouped variant)
//   TableShell       — the list-table card: ONE scroll container + a minWidth wrapper
//   TableHeader      — the sticky header row; it OWNS the z-index
//   DataTableFooter  — "Showing X–Y of Z" + rows-per-page + Pagination
// Load AFTER primitives.jsx (Icon, Select), overlays.jsx (MIcon), tables.jsx (Pagination).

/* ---------------- SortHeader ----------------
   Idle = muted label + unfold_more (placeholder). Hover = ink. Active = blue label +
   arrow_upward|arrow_downward (sort STATE is blue, per the ink/blue law). `sort` is the
   current { key, dir:'asc'|'desc' }; `onSort(k)` toggles it. The `disabled` variant is
   a non-interactive placeholder-grey span carrying title="Sorting is disabled while
   grouped" — used when a grouped view only lets the group-defining columns re-order
   groups (§L). testid = `{idPrefix}-sort-{k}`. */
function SortHeader({ label, k, sort, onSort, idPrefix = 'dt', align = 'left', disabled }) {
  const [hover, setHover] = useState(false);
  const active = sort && sort.key === k;
  const dir = active ? sort.dir : null;
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 4,
    font: '500 11px/1 var(--font-control)', letterSpacing: '.08em', textTransform: 'uppercase',   // Cockpit: 11px floor for field/phone use
    justifyContent: align === 'right' ? 'flex-end' : 'flex-start', width: align === 'right' ? '100%' : undefined,
  };
  if (disabled) {
    return (
      <span data-testid={`${idPrefix}-sort-${k}`} title="Sorting is disabled while grouped"
        style={{ ...base, color: 'var(--p-muted)', cursor: 'default' }}>{label}</span>   /* 1.13 §H6: muted, NOT placeholder — an unsortable header must not read as faint/broken; it just loses the arrows */
    );
  }
  const color = active ? 'var(--p-primary)' : hover ? 'var(--p-ink)' : 'var(--p-muted)';
  return (
    <span role="button" data-testid={`${idPrefix}-sort-${k}`} aria-sort={active ? (dir === 'asc' ? 'ascending' : 'descending') : 'none'}
      onClick={() => onSort && onSort(k)}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ ...base, color, cursor: 'pointer', userSelect: 'none' }}>
      {label}
      <Icon name={active ? (dir === 'asc' ? 'arrow_upward' : 'arrow_downward') : 'unfold_more'}
        size={12} color={active ? 'var(--p-primary)' : 'var(--p-placeholder)'} />
    </span>
  );
}

/* ---------------- TableShell ----------------
   The list-table card: --p-surface + hairline + --shadow-surface, with ONE inner
   overflow:auto scroll region, plus a footer slot. This "one scroll container"
   shape is the REQUIRED skeleton — it is what makes sticky headers (TableHeader)
   and the pinned actions column (§M) work. A header placed OUTSIDE this scroll
   container will clip a pinned cell.

   TABLES 2.0 (1.13 §H — content-hugging SUBGRID; supersedes the 1.10 fixed
   templates): pass `template` and the scroll container's inner div becomes the
   grid — every row/skeleton then uses gridTemplateColumns:'subgrid' +
   gridColumn:'1 / -1' and inherits the ONE column-gap defined here.

   Template rule (final form):
     • every data column        = minmax(max-content, 1fr)  — hugs the widest
       visible value at minimum, shares extra width proportionally when wide
     • the primary text column  = minmax(<px-min>, 2fr) (e.g. 160–180px) with
       ellipsis — the ONE column allowed to truncate
     • control columns (checkbox/skip/drag/kebab/chevron) = fixed px or
       max-content — they never inflate. Leading checkbox track = 44px, trailing
       kebab = 44px (36 small): a subgrid row's own `padding: 0 16px` is
       SUBTRACTED from its edge tracks (§H5.2), so edge tracks absorb it.

   THE 8PX GAP STANDARD (§H3): the gap IS the buffer — never bake padding into
   column widths, never pad a minmax() minimum.

   SUBGRID LAWS (§H5, hard-won):
     1. Full-width spanning items (empty states, GroupHead rows, group wrappers,
        expansion panels) span gridColumn:'1 / -1' — and if their content is wide
        or nowrap they MUST carry contain:'inline-size' (+ minWidth:0,
        overflow:'hidden'). A spanning item's MAX-content contribution distributes
        into max-content-min tracks and can inflate the table to thousands of px —
        overflow:hidden only zeroes the MIN contribution. (Found live: an expansion
        panel inflated tracks to 10,065px.)
     3. Group wrappers containing rows are themselves nested subgrids spanning
        1/-1; skeleton wrappers can use display:contents.
     4. Accepted known minors: a header's sort icon inflates a hugging column
        ~16px; skeletons can cause a small track reflow on first data paint.

   ZEBRA (§H1): every data row AND skeleton row carries className="g-zebra"
   (loading stripes match loaded); row dividers are REMOVED (§H2 — zebra carries
   separation; keep borders only on the header, GroupHead section rows, revision
   rows sharing a flat bg, and nested sub-panels). Rows must NOT hardcode an
   inline `background: var(--p-surface)` (inline beats zebra); conditional inline
   backgrounds (selected/dirty) are allowed — they SHOULD win. Pinned kebab cells
   (.gr-sticky-actions) use background:inherit to match their row's stripe.

   `className="g-tbl"` on the card is load-bearing: Black Ops re-fonts table
   cells (IBM Plex Sans) via `html[data-skin="blackops"] .g-tbl [style*=…]`. */
function TableShell({ minWidth = 720, template, radius = 'var(--radius-lg)', footer, children, style }) {   // 1.11.2: token-bound — never a numeric radius on a surface card
  return (
    <div className="g-tbl" style={{ background: 'var(--p-surface)', border: 'var(--hair) solid var(--p-border)', borderRadius: radius, boxShadow: 'var(--shadow-surface)', overflow: 'hidden', ...style }}>
      <div style={{ overflow: 'auto' }}>
        {template ? (
          /* subgrid host: min-content floor = intrinsic track minimums → natural
             h-scroll threshold; row backgrounds span the full scrollWidth */
          <div style={{ display: 'grid', gridTemplateColumns: template, columnGap: 8, alignContent: 'start', minWidth: 'min-content' }}>{children}</div>
        ) : (
          <div style={{ minWidth }}>{children}</div>
        )}
      </div>
      {footer}
    </div>
  );
}

/* ---------------- TableHeader ----------------
   The sticky header row. 40px tall, --p-surface-alt, bottom hairline, and it OWNS
   the z-index (position:sticky; top:0; z-index:3) so the whole class of "rows scroll
   up through the header" bugs is fixed in ONE place. Since 1.13, in a subgrid table
   pass cols="subgrid" — the header spans 1/-1 and inherits the parent's tracks and
   gap. (Legacy fixed-template tables keep passing their template string.)
   Default columnGap = 8 — the §H3 standard, on the header AND every row grid. */
function TableHeader({ cols, columnGap = 8, muted = true, children, style }) {
  const sub = cols === 'subgrid';
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: sub ? 'subgrid' : cols, columnGap: sub ? undefined : columnGap,
      ...(sub ? { gridColumn: '1 / -1' } : {}), alignItems: 'center',
      height: 40, padding: '0 16px', background: 'var(--p-surface-alt)',
      borderBottom: '1px solid var(--p-border)', position: 'sticky', top: 0, zIndex: 3,
      color: muted ? 'var(--p-muted)' : 'var(--p-text-2)', ...style,
    }}>{children}</div>
  );
}

/* ---------------- DataTableFooter ----------------
   "Showing X–Y of Z {noun}" + an optional rows-per-page selector + Pagination, at
   10px 16px on --p-surface-alt with a top hairline. `pageSizeLabel` / `pageSizeOptions`
   exist so a GROUPED table can paginate BY GROUP without splitting a group across a page
   boundary (e.g. noun="rep-days", pageSizeLabel="Rep-days per page", options [10,15,25],
   leading="254 assignments" → "Showing 1–15 of 38 rep-days · 254 assignments"). Pass
   `shown` when this page's visible count isn't page×pageSize (the last/grouped page).
   `trailing` (1.13) — right-side custom content rendered BEFORE pageSize/pager.
   ALL table footers route through this component (1.13 §H6 — hand-rolled Inter-13
   footers are retired). */
function DataTableFooter({ page = 1, pageCount = 1, pageSize, total = 0, shown, onPage, onPageSize, noun = 'rows', leading, trailing, pageSizeLabel = 'Rows per page', pageSizeOptions = [10, 25, 50] }) {
  const per = pageSize || total || 1;
  const start = total === 0 ? 0 : (page - 1) * per + 1;
  const end = shown != null ? start + shown - 1 : Math.min(page * per, total);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '10px 16px', background: 'var(--p-surface-alt)', borderTop: 'var(--hair) solid var(--p-border)', flexWrap: 'wrap' }}>
      <span data-testid="dt-summary" style={{ font: '400 11px/1 var(--font-control)', color: 'var(--p-muted)' }}>
        Showing <b style={{ color: 'var(--p-text)', fontWeight: 600 }}>{start}–{end}</b> of{' '}
        <b style={{ color: 'var(--p-text)', fontWeight: 600 }}>{total.toLocaleString('en-US')}</b> {noun}
        {leading ? ` · ${leading}` : ''}
      </span>
      {trailing && <div style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8 }}>{trailing}</div>}
      {onPageSize && pageSize != null && (
        <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginLeft: trailing ? 0 : 'auto', font: '400 11px/1 var(--font-control)', color: 'var(--p-muted)' }}>
          {pageSizeLabel}
          <Select value={String(pageSize)} onChange={(v) => onPageSize(Number(v))}
            options={pageSizeOptions.map((n) => ({ value: String(n), label: String(n) }))}
            style={{ width: 84 }} />
        </label>
      )}
      <div style={{ marginLeft: (onPageSize || trailing) ? 0 : 'auto' }}>
        <Pagination page={page} pageCount={pageCount} onPage={onPage} />
      </div>
    </div>
  );
}

Object.assign(window, { SortHeader, TableShell, TableHeader, DataTableFooter });
