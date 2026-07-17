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
    font: '500 11px/1 Inter, sans-serif', letterSpacing: '.07em', textTransform: 'uppercase',
    justifyContent: align === 'right' ? 'flex-end' : 'flex-start', width: align === 'right' ? '100%' : undefined,
  };
  if (disabled) {
    return (
      <span data-testid={`${idPrefix}-sort-${k}`} title="Sorting is disabled while grouped"
        style={{ ...base, color: 'var(--p-placeholder)', cursor: 'default' }}>{label}</span>
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
   overflow:auto scroll region wrapping a `minWidth` div, plus a footer slot. This
   "one scroll container + minWidth wrapper" shape is the REQUIRED skeleton — it is
   what makes sticky headers (TableHeader) and the pinned actions column (§M) work.
   A header placed OUTSIDE this scroll container will clip a pinned cell. */
function TableShell({ minWidth = 720, radius = 2, footer, children, style }) {
  return (
    <div style={{ background: 'var(--p-surface)', border: '0.5px solid var(--p-border)', borderRadius: radius, boxShadow: 'var(--shadow-surface)', overflow: 'hidden', ...style }}>
      <div style={{ overflow: 'auto' }}>
        <div style={{ minWidth }}>{children}</div>
      </div>
      {footer}
    </div>
  );
}

/* ---------------- TableHeader ----------------
   The sticky header row. 40px tall, --p-surface-alt, bottom hairline, and it OWNS
   the z-index (position:sticky; top:0; z-index:3) so the whole class of "rows scroll
   up through the header" bugs is fixed in ONE place. `cols` is a grid-template-columns
   string that data rows must mirror; children are the header cells (e.g. <SortHeader>). */
function TableHeader({ cols, columnGap = 0, muted = true, children, style }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: cols, columnGap, alignItems: 'center',
      height: 40, padding: '0 16px', background: 'var(--p-surface-alt)',
      borderBottom: '0.5px solid var(--p-border)', position: 'sticky', top: 0, zIndex: 3,
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
   `shown` when this page's visible count isn't page×pageSize (the last/grouped page). */
function DataTableFooter({ page = 1, pageCount = 1, pageSize, total = 0, shown, onPage, onPageSize, noun = 'rows', leading, pageSizeLabel = 'Rows per page', pageSizeOptions = [10, 25, 50] }) {
  const per = pageSize || total || 1;
  const start = total === 0 ? 0 : (page - 1) * per + 1;
  const end = shown != null ? start + shown - 1 : Math.min(page * per, total);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '10px 16px', background: 'var(--p-surface-alt)', borderTop: '0.5px solid var(--p-border)', flexWrap: 'wrap' }}>
      <span data-testid="dt-summary" style={{ font: '400 13px/1 Inter, sans-serif', color: 'var(--p-muted)' }}>
        Showing <b style={{ color: 'var(--p-text)', fontWeight: 600 }}>{start}–{end}</b> of{' '}
        <b style={{ color: 'var(--p-text)', fontWeight: 600 }}>{total.toLocaleString('en-US')}</b> {noun}
        {leading ? ` · ${leading}` : ''}
      </span>
      {onPageSize && pageSize != null && (
        <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginLeft: 'auto', font: '400 13px/1 Inter, sans-serif', color: 'var(--p-muted)' }}>
          {pageSizeLabel}
          <Select value={String(pageSize)} onChange={(v) => onPageSize(Number(v))}
            options={pageSizeOptions.map((n) => ({ value: String(n), label: String(n) }))}
            style={{ width: 84 }} />
        </label>
      )}
      <div style={{ marginLeft: onPageSize ? 0 : 'auto' }}>
        <Pagination page={page} pageCount={pageCount} onPage={onPage} />
      </div>
    </div>
  );
}

Object.assign(window, { SortHeader, TableShell, TableHeader, DataTableFooter });
