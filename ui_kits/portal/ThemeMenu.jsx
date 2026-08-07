// ThemeMenu (1.13) — the theme picker. SUPERSEDES the 1.5 three-state cycle button.
//
// Theme selection is a POPOVER MENU: one stable component (`ThemeControl`) drives
// every surface via `variant`. Four options, order fixed (see THEME_OPTIONS).
// Production wires `pref`/`onSelect` to theme.js's useTheme() store; this kit
// keeps it controlled so demos can inline their own state.
//
//   variant   placement                     trigger anatomy
//   row       expanded sidebar utility area .gr-util-style row: icon + current label + unfold_more
//   rail      collapsed sidebar             40×36 icon tile; panel opens to the RIGHT
//   iconbtn   mobile app bar                44×44 icon button; panel opens below-right
//   login     login screen corner           bare text+icon link, muted → ink on hover, mono 12px
//
// Panel: min-width 176, --p-surface on var(--hair) solid --p-border, var(--r-card),
// --shadow-float, gr-pop-in .12s, z-index 10001. An uppercase mono overline "Theme"
// (500 10px --font-control, .08em) heads the list; the active option is marked.
// Test-ids: theme-toggle / mobile-theme-toggle / login-theme-toggle (triggers),
// theme-menu (panel), theme-option-{id} (items).

const THEME_OPTIONS = [
  { id: 'light',    label: 'Light',     rowLabel: 'Light Mode',   icon: 'light_mode' },
  { id: 'dark',     label: 'Dark',      rowLabel: 'Dark Mode',    icon: 'dark_mode' },
  { id: 'blackops', label: 'Black Ops', rowLabel: 'Black Ops',    icon: 'shield_moon' },
  { id: 'system',   label: 'System',    rowLabel: 'System Theme', icon: 'contrast' },
];

function ThemeControl({ variant = 'row', pref = 'blackops', onSelect }) {
  const [open, setOpen] = React.useState(false);
  const wrapRef = React.useRef(null);
  const current = THEME_OPTIONS.find((o) => o.id === pref) || THEME_OPTIONS[2];

  React.useEffect(() => {
    if (!open) return;
    const away = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', away); document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('mousedown', away); document.removeEventListener('keydown', esc); };
  }, [open]);

  const pick = (id) => { onSelect?.(id); setOpen(false); };

  // Panel anchor per variant (row/login open upward — they live at the bottom of their surface)
  const panelPos = {
    row:     { bottom: 'calc(100% + 8px)', left: 0 },
    rail:    { bottom: 0, left: 'calc(100% + 10px)' },
    iconbtn: { top: 'calc(100% + 8px)', right: 0 },
    login:   { bottom: 'calc(100% + 8px)', left: 0 },
  }[variant];

  const panel = open && (
    <div data-testid="theme-menu" style={{
      position: 'absolute', ...panelPos, zIndex: 10001, minWidth: 176,
      background: 'var(--p-surface)', border: 'var(--hair) solid var(--p-border)',
      borderRadius: 'var(--r-card)', boxShadow: 'var(--shadow-float)',
      padding: 4, animation: 'gr-pop-in .12s ease',
    }}>
      <div style={{ font: '500 10px/1 var(--font-control)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--p-muted)', padding: '8px 10px 6px' }}>Theme</div>
      {THEME_OPTIONS.map((o) => {
        const on = o.id === pref;
        return (
          <div key={o.id} role="menuitemradio" aria-checked={on} data-testid={`theme-option-${o.id}`}
            onClick={() => pick(o.id)} className="g-menu-item"
            style={{ display: 'flex', alignItems: 'center', gap: 10, height: 34, padding: '0 10px',
              borderRadius: 'var(--r-ctl)', cursor: 'pointer', whiteSpace: 'nowrap',
              color: on ? 'var(--p-primary-ink)' : 'var(--p-ink)',
              background: on ? 'var(--p-primary-tint)' : 'transparent',
              font: '500 12px/1 var(--font-control)' }}>
            <Icon name={o.icon} size={16} color={on ? 'var(--p-primary)' : 'var(--p-muted)'} />
            <span style={{ flex: 1 }}>{o.rowLabel}</span>
            {on && <Icon name="check" size={14} color="var(--p-primary)" />}
          </div>
        );
      })}
    </div>
  );

  if (variant === 'rail') {
    return (
      <div ref={wrapRef} style={{ position: 'relative' }}>
        <button data-testid="theme-toggle" title={`Theme: ${current.label}`} onClick={() => setOpen((o) => !o)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 36, margin: '0 auto',
            border: 'none', borderRadius: 'var(--r-nav)', cursor: 'pointer',
            background: open ? 'var(--p-surface-tint)' : 'transparent', color: 'var(--p-muted)' }}>
          <Icon name={current.icon} size={20} color="currentColor" />
        </button>
        {panel}
      </div>
    );
  }

  if (variant === 'iconbtn') {
    return (
      <div ref={wrapRef} style={{ position: 'relative' }}>
        <button data-testid="mobile-theme-toggle" title={`Theme: ${current.label}`} onClick={() => setOpen((o) => !o)}
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44,
            border: 'none', borderRadius: 'var(--r-ctl)', cursor: 'pointer',
            background: open ? 'var(--p-surface-tint)' : 'transparent', color: 'var(--p-text-2)' }}>
          <Icon name={current.icon} size={20} color="currentColor" />
        </button>
        {panel}
      </div>
    );
  }

  if (variant === 'login') {
    return (
      <div ref={wrapRef} style={{ position: 'relative', display: 'inline-block' }}>
        <button data-testid="login-theme-toggle" onClick={() => setOpen((o) => !o)}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--p-ink)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--p-muted)'; }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: 'none', background: 'transparent',
            cursor: 'pointer', color: 'var(--p-muted)', font: '500 12px var(--font-control)' }}>
          <Icon name={current.icon} size={18} color="currentColor" /> {current.label}
        </button>
        {panel}
      </div>
    );
  }

  // Default: 'row' — the expanded-sidebar utility row
  return (
    <li ref={wrapRef} style={{ listStyle: 'none', position: 'relative' }}>
      <button data-testid="theme-toggle" onClick={() => setOpen((o) => !o)}
        style={{ width: '100%', border: 'none', background: 'transparent', padding: 0, cursor: 'pointer' }}>
        <div className="gr-util" style={{
          display: 'flex', alignItems: 'center', padding: '0 8px', minHeight: 34,
          borderRadius: 'var(--r-nav)', background: open ? 'var(--p-surface-tint)' : 'transparent',
          color: 'var(--p-text-2)', gap: 12, font: '400 14px/20px var(--font-sans)' }}>
          <Icon name={current.icon} size={20} color="currentColor" />
          <span style={{ flex: 1, textAlign: 'left' }}>{current.label}</span>
          <Icon name="unfold_more" size={14} color="var(--p-placeholder)" />
        </div>
      </button>
      {panel}
    </li>
  );
}

Object.assign(window, { ThemeControl, THEME_OPTIONS });
