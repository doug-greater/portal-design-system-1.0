// App shell — persistent left nav + content area.
// Mirrors the real Greater portal side navigation: org header with global
// search, expandable nav with ink active state, bottom utility
// rows. Supports a collapsed (icon-only) state.

function AppShell({ currentRoute = 'route-assignments', onNavigate, userName = 'Greater CBC', children }) {
  const [expanded, setExpanded] = React.useState({ products: true });
  const [collapsed, setCollapsed] = React.useState(() => localStorage.getItem('gr-nav-collapsed') === '1');
  React.useEffect(() => { localStorage.setItem('gr-nav-collapsed', collapsed ? '1' : '0'); }, [collapsed]);

  // Theme (§A · 1.13 SKINS). Production reads ui_kits/portal/theme.js (useSyncExternalStore
  // store); this kit inlines an equivalent so the demo flips live. Four preferences —
  // light | dark | blackops | system; "blackops" resolves to data-theme="dark" AND sets
  // data-skin="blackops". BLACK OPS IS THE DEFAULT (1.13). Selection is the ThemeControl
  // popover (ThemeMenu.jsx) — the 1.5 cycle toggle is retired.
  const [themePref, setThemePref] = React.useState(() => {
    try {
      const v = localStorage.getItem('gr-theme');
      if (v === 'blackops-variant') return 'blackops';   // graduated sandbox skin — migrate (1.13 §N1)
      return v === 'light' || v === 'dark' || v === 'blackops' || v === 'system' ? v : 'blackops';
    } catch { return 'blackops'; }
  });
  const resolveTheme = (p) => (p === 'dark' || p.startsWith('blackops')) ? 'dark' : p === 'light' ? 'light' : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const skin = themePref.startsWith('blackops') ? 'blackops' : null;
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolveTheme(themePref));
    if (skin) document.documentElement.setAttribute('data-skin', skin);
    else document.documentElement.removeAttribute('data-skin');
    try { localStorage.setItem('gr-theme', themePref); } catch {}
  }, [themePref, skin]);
  const isDark = resolveTheme(themePref) === 'dark';   // brand marks swap to KO in dark (§A)
  const logotypeSrc = isDark ? '../../assets/greater-logotype-ko.png' : '../../assets/greater-logotype.png';
  const crowSrc = isDark ? '../../assets/greater-crow-ko.png' : '../../assets/greater-crow.png';
  // Black Ops brand rule (§C4): the sidebar shows the CROW MARK, not the wordmark,
  // in both expanded and mobile headers.
  const crowOnly = skin === 'blackops';

  const toggle = (id) => setExpanded((s) => ({ ...s, [id]: !s[id] }));

  // ── Collapsed flyout: hover a collapsed icon → floating panel (sub-items, or just a label for leaves) ──
  const [flyout, setFlyout] = React.useState(null); // { item, x, y }
  const closeRef = React.useRef(null);
  const openFlyout = (item, e) => {
    if (!collapsed) return;
    clearTimeout(closeRef.current);
    const rect = e.currentTarget.getBoundingClientRect();
    setFlyout({ item, x: rect.right + 6, y: rect.top - 6 });
  };
  const scheduleClose = () => { closeRef.current = setTimeout(() => setFlyout(null), 150); };
  const cancelClose = () => clearTimeout(closeRef.current);
  React.useEffect(() => { if (!collapsed) { clearTimeout(closeRef.current); setFlyout(null); } }, [collapsed]);

  // Live View nav alert (1.10 §B) — a static (non-pulsing, no count) red dot shown when
  // today's Live View has ≥1 Incomplete stop. Production: poll GET /api/assignments/live/alerts
  // every 60s (paused while the tab is hidden, cap-gated sales.view, honoring the ?at= override
  // captured in a ref at render) → { incomplete }; the dot runs the SAME pipeline as the page so
  // they can never disagree. Red, matching the Incomplete escalation (§A2) — never amber. Demo: on.
  const [liveIncomplete] = React.useState(3);
  const liveAlert = liveIncomplete > 0;
  const groupHasAlert = (item) => liveAlert && !!item.children && item.children.some((c) => c.alert);
  const AlertDot = ({ style }) => (
    <span data-testid="lv-nav-alert-dot" title="Incomplete stops need attention in Live View"
      style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--p-danger)', flexShrink: 0, display: 'inline-block', ...style }} />
  );

  // Help Center → in-product Messenger (1.10 §Q). Demo toggles a mock panel; production toggles
  // Intercom (identity signed server-side via a short-lived JWT), carries an active state while
  // open, shows an unread badge, pings update() on SPA navigations, has NO floating launcher, and
  // reverts to an external help.greater.co link when no messenger is configured.
  const MESSENGER_CONFIGURED = true;
  const [msgrOpen, setMsgrOpen] = React.useState(false);
  const [unread] = React.useState(3);

  const BRAND_BLUE = 'var(--p-primary)';   // token-driven since 1.11 (Dusk)
  const INK = 'var(--p-ink)';
  const GRAY_600 = 'var(--p-text-2)';
  const GRAY_800 = 'var(--p-text)';
  const BORDER_LIGHT = 'var(--p-border)';

  // Capability-per-child nav (1.10 §O). Every child carries its own `cap`; leaf items carry
  // a top-level `cap` (Home carries none — everyone lands somewhere). Production filters this
  // tree by the signed-in user's caps: DROP children the user lacks, THEN hide any group left
  // empty — never render an empty parent group or a DISABLED nav row (nav is hide-not-disable:
  // wayfinding, not a capability lesson). The backend still require_cap's every endpoint —
  // hiding is only UX. The `disabled` entries below are demo placeholders ("not built in this
  // kit"), NOT the capability model.
  const USER_CAPS = null;                       // demo: null = show everything. Production: a Set of the user's caps.
  const hasCap = (cap) => !cap || !USER_CAPS || USER_CAPS.has(cap);

  const NAV = [
    { id: 'insights', label: 'Insights', icon: 'line_axis', disabled: true, children: null },
    { id: 'sales', label: 'Sales', icon: 'ballot', children: [
      { id: 'live-view', label: 'Live View', cap: 'sales.view', alert: true },
    ]},
    { id: 'orchestration', label: 'Orchestration', icon: 'graph_7', disabled: true, children: null },
    { id: 'products', label: 'Products', icon: 'category', children: [
      { id: 'in-the-market', label: 'In the Market', cap: 'market.view' },
    ]},
    { id: 'accounts', label: 'Accounts', icon: 'store', disabled: true, children: null },
    { id: 'users', label: 'Users', icon: 'person', cap: 'users.view', children: null },
  ];
  // Drop children the user lacks, then hide any now-empty group. Disabled demo items pass through.
  const nav = NAV
    .map((n) => (n.children ? { ...n, children: n.children.filter((c) => hasCap(c.cap)) } : n))
    .filter((n) => n.disabled ? true : n.children ? n.children.length > 0 : hasCap(n.cap));

  const MS = (name, size = 20, color = 'currentColor') => (
    <span className="material-symbols-sharp" style={{
      fontFamily: '"Material Symbols Sharp"',
      fontWeight: 'normal', fontStyle: 'normal',
      fontSize: size, lineHeight: 1, color,
      letterSpacing: 'normal', textTransform: 'none', whiteSpace: 'nowrap',
      wordWrap: 'normal', direction: 'ltr',
      fontFeatureSettings: "'liga'",
      WebkitFontFeatureSettings: "'liga'",
      WebkitFontSmoothing: 'antialiased',
      fontVariationSettings: `'FILL' 0,'wght' 400,'GRAD' 0,'opsz' ${size}`,
      display: 'inline-block', flexShrink: 0,
    }}>{name}</span>
  );

  const ParentRow = ({ item }) => {
    const isOpen = expanded[item.id];
    const hasChildren = !!item.children;
    const groupActive = hasChildren && item.children.some((c) => c.id === currentRoute);
    const isActiveLeaf = !hasChildren && currentRoute === item.id;
    const onClick = () => hasChildren ? toggle(item.id) : onNavigate?.(item.id);

    // Inactive items (not part of this preview) render grayed-out and non-interactive.
    if (item.disabled) {
      return (
        <li style={{ listStyle: 'none' }}>
          <div style={collapsed
            ? { display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, margin: '0 auto', borderRadius: 'var(--r-card)', opacity: .4, cursor: 'default' }
            : { display: 'flex', alignItems: 'center', padding: 8, gap: 12, borderRadius: 'var(--r-card)', opacity: .45, cursor: 'default' }}>
            {MS(item.icon, 22, 'var(--p-placeholder)')}
            {!collapsed && <span style={{ flex: 1, textAlign: 'left', font: '400 15px/1.25 var(--font-sans)', color: 'var(--p-placeholder)' }}>{item.label}</span>}
          </div>
        </li>
      );
    }

    if (collapsed) {
      const isFlyoutOpen = flyout?.item?.id === item.id;
      const tint = isActiveLeaf || groupActive || isFlyoutOpen;
      return (
        <li style={{ listStyle: 'none' }}>
          <button
            onClick={() => { if (!hasChildren) onNavigate?.(item.id); }}
            onMouseEnter={(e) => openFlyout(item, e)}
            onMouseLeave={scheduleClose}
            style={{
              width: '100%', border: 'none', background: 'transparent', padding: 0, cursor: 'pointer',
            }}>
            <div className={tint ? 'gr-rowactive' : 'gr-row'} style={{
              position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 40, height: 40, margin: '0 auto', borderRadius: 'var(--r-card)',
              background: tint ? 'var(--p-surface-tint)' : 'transparent',
              color: tint ? BRAND_BLUE : INK,
              transition: 'background-color 50ms',
            }}>
              {MS(item.icon, 22, tint ? BRAND_BLUE : INK)}
              {/* §B state 3 — rail icon (whole sidebar collapsed) */}
              {groupHasAlert(item) && <AlertDot style={{ position: 'absolute', top: 6, right: 6 }} />}
            </div>
          </button>
        </li>
      );
    }

    return (
      <li style={{ listStyle: 'none' }}>
        <button onClick={onClick} style={{
          width: '100%', border: 'none', background: 'transparent', padding: 0, cursor: 'pointer',
        }}>
          <div className={isActiveLeaf ? 'gr-rowactive' : 'gr-row'} style={{
            display: 'flex', alignItems: 'center', padding: 8, borderRadius: 'var(--r-card)',
            background: isActiveLeaf ? 'var(--p-action)' : (groupActive ? 'var(--p-surface-tint)' : 'transparent'),
            color: isActiveLeaf ? 'var(--p-action-fg)' : (groupActive ? BRAND_BLUE : INK), gap: 12, transition: 'background-color 50ms',
          }}>
            {MS(item.icon, 22, isActiveLeaf ? 'var(--p-action-fg)' : (groupActive ? BRAND_BLUE : INK))}
            <span style={{ flex: 1, textAlign: 'left', font: `${isActiveLeaf || groupActive ? 500 : 400} 15px/1.25 var(--font-sans)`, color: isActiveLeaf ? 'var(--p-action-fg)' : (groupActive ? BRAND_BLUE : INK) }}>{item.label}</span>
            {/* §B state 2 — parent row when the group is collapsed (child dot not visible) */}
            {!isOpen && groupHasAlert(item) && <AlertDot style={{ marginRight: 2 }} />}
            {hasChildren && (
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 22, height: 22, borderRadius: 999, color: GRAY_800,
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 200ms',
              }}>
                {MS('expand_more', 16, GRAY_800)}
              </span>
            )}
          </div>
        </button>
        {hasChildren && isOpen && (
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {item.children.map((c) => {
              const on = currentRoute === c.id;
              return (
                <li key={c.id}>
                  <button onClick={() => onNavigate?.(c.id)} style={{
                    width: '100%', border: 'none', padding: 0, cursor: 'pointer', background: 'transparent',
                  }}>
                    <div className={on ? 'gr-sub gr-subactive' : 'gr-sub'} data-on={on ? '1' : '0'} style={{
                      display: 'flex', alignItems: 'center', padding: '6px 8px 6px 36px',
                      borderRadius: 'var(--r-card)',
                      background: on ? 'var(--p-action)' : 'transparent',
                      color: on ? 'var(--p-action-fg)' : GRAY_800,
                      font: `${on ? 500 : 400} 14px/20px var(--font-sans)`,
                      transition: 'background-color 50ms',
                      minHeight: 32,
                    }}>
                      {c.label}
                      {/* §B state 1 — beside the Live View child row (group expanded) */}
                      {c.alert && liveAlert && <AlertDot style={{ marginLeft: 8 }} />}
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    );
  };

  const BottomRow = ({ icon, label, external, onClick, trailing, testid, active }) => {
    if (collapsed) {
      return (
        <li style={{ listStyle: 'none' }}>
          <button onClick={onClick} data-testid={testid}
            onMouseEnter={(e) => openFlyout({ label, children: null }, e)}
            onMouseLeave={scheduleClose}
            style={{
              width: '100%', border: 'none', background: 'transparent', padding: 0, cursor: 'pointer',
            }}>
            <div className="gr-util" style={{
              position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 40, height: 36, margin: '0 auto', borderRadius: 'var(--r-card)',
              background: active ? 'rgba(24,97,175,0.10)' : undefined,
              color: active ? BRAND_BLUE : GRAY_600,
            }}>
              {MS(icon, 20, active ? BRAND_BLUE : GRAY_600)}
              {trailing && <span style={{ position: 'absolute', top: 3, right: 3 }}>{trailing}</span>}
            </div>
          </button>
        </li>
      );
    }
    return (
      <li style={{ listStyle: 'none' }}>
        <button onClick={onClick} data-testid={testid} style={{
          width: '100%', border: 'none', background: 'transparent', padding: 0, cursor: 'pointer',
        }}>
          <div className="gr-util" style={{
            display: 'flex', alignItems: 'center', padding: '0 8px', minHeight: 34,
            borderRadius: 'var(--r-card)', background: active ? 'var(--p-surface-tint)' : 'transparent',
            color: active ? BRAND_BLUE : GRAY_600, gap: 12,
            font: '400 14px/20px var(--font-sans)',
          }}>
            {MS(icon, 20, active ? BRAND_BLUE : GRAY_600)}
            <span style={{ flex: 1, textAlign: 'left' }}>{label}</span>
            {external && MS('open_in_new', 14, 'var(--p-placeholder)')}
            {trailing}
          </div>
        </button>
      </li>
    );
  };

  // Flyout panel — parent shows label header + children; leaf shows just the label (tooltip).
  const FlyoutPanel = ({ item }) => {
    if (!item) return null;
    return (
      <div style={{
        width: 208, background: 'var(--p-surface)', border: `var(--hair) solid ${BORDER_LIGHT}`,
        borderRadius: 'var(--r-card)', boxShadow: 'var(--shadow-float)', overflow: 'hidden',
      }}>
        <div style={{
          padding: '9px 14px 8px', font: '500 11px/1 var(--font-sans)', letterSpacing: '0.06em',
          textTransform: 'uppercase', color: 'var(--p-muted)',
          borderBottom: item.children ? `1px solid ${BORDER_LIGHT}` : 'none',
        }}>{item.label}</div>
        {item.children && (
          <ul style={{ margin: 0, padding: '4px 0', listStyle: 'none' }}>
            {item.children.map((c) => {
              const on = currentRoute === c.id;
              return (
                <li key={c.id}>
                  <button
                    className={on ? 'gr-subactive' : 'flyout-child'}
                    onClick={() => { onNavigate?.(c.id); clearTimeout(closeRef.current); setFlyout(null); }}
                    style={{
                      width: '100%', border: 'none', padding: '7px 14px',
                      background: on ? 'var(--p-action)' : 'transparent', color: on ? 'var(--p-action-fg)' : INK,
                      font: `${on ? 600 : 400} 13px/20px var(--font-sans)`, cursor: 'pointer', textAlign: 'left',
                      transition: 'background 100ms', display: 'flex', alignItems: 'center', gap: 8,
                    }}>
                    {on && <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'currentColor', opacity: .7, flexShrink: 0 }} />}   {/* currentColor: white on ink, teal under Black Ops (§C4) */}
                    {c.label}
                    {/* §B state 4 — collapsed-rail flyout row */}
                    {c.alert && liveAlert && <AlertDot style={{ marginLeft: 'auto' }} />}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  };

  const W = collapsed ? 72 : 248;

  return (
    <div style={{ height: '100vh', display: 'flex', background: 'var(--p-shell)', overflow: 'hidden' }}>
      <style>{`
        .gr-row:hover { background: var(--p-surface-tint) !important; }
        .gr-sub:hover[data-on="0"] { background: var(--p-surface-tint) !important; }
        .gr-util:hover { background: var(--p-surface-tint) !important; }
        .gr-collapse-btn:hover { background: var(--p-surface-tint) !important; color: ${INK} !important; }
        .flyout-child:hover { background: var(--p-surface-tint) !important; }
        @keyframes flyout-in { from { transform: translateX(-7px); } to { transform: translateX(0); } }
      `}</style>
      <aside style={{
        position: 'relative',
        width: W, flexShrink: 0, background: 'var(--p-surface-nav)',
        display: 'block', height: '100vh', overflow: 'visible',
        borderRight: `1px solid ${BORDER_LIGHT}`,
        font: '400 16px/24px var(--font-sans)', color: 'rgba(0,0,0,0.87)',
        transition: 'width 180ms ease',
      }}>
        {/* Collapse/expand button — floats on the right edge */}
        <button
          onClick={() => setCollapsed((c) => !c)}
          className="gr-collapse-btn"
          title={collapsed ? 'Expand menu' : 'Collapse menu'}
          style={{
            position: 'absolute', top: 28, right: -13,
            width: 26, height: 26, borderRadius: '50%',
            border: `var(--hair) solid ${BORDER_LIGHT}`, background: 'var(--p-surface-nav)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: GRAY_600, cursor: 'pointer', zIndex: 10,
            boxShadow: '0 1px 3px rgba(0,0,0,0.10)',
            transition: 'background 120ms, color 120ms',
            clipPath: 'none', overflow: 'visible',
          }}>
          {MS(collapsed ? 'chevron_right' : 'chevron_left', 18, GRAY_600)}
        </button>

        {/* TOP: header + primary nav — absolutely positioned, no internal scroll */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          padding: collapsed ? '28px 12px 16px' : '28px 16px 16px 24px',
          overflow: 'hidden',
          display: 'flex', flexDirection: 'column', gap: 0,
        }}>
          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, paddingBottom: 20, alignItems: collapsed ? 'center' : 'stretch' }}>
            {/* Logo crossfade — wordmark ↔ crow dissolve (no instant src swap) */}
            <a href="#" onClick={(e)=>e.preventDefault()} style={{ display: 'inline-flex' }}>
              <div style={{ position: 'relative', height: 30, width: collapsed ? 34 : 132, transition: 'width 180ms ease', flexShrink: 0 }}>
                <img src={logotypeSrc} alt="Greater"
                  style={{ position: 'absolute', top: 0, left: 0, height: 30, width: 'auto', maxWidth: 132, objectFit: 'contain', opacity: (collapsed || crowOnly) ? 0 : 1, transition: 'opacity 160ms ease', pointerEvents: 'none' }} />
                <img src={crowSrc} alt="" aria-hidden="true"
                  style={{ position: 'absolute', top: 0, left: collapsed ? '50%' : 0, transform: collapsed ? 'translateX(-50%)' : 'none', height: 30, width: 'auto', objectFit: 'contain', opacity: (collapsed || crowOnly) ? 1 : 0, transition: 'opacity 160ms ease', pointerEvents: 'none' }} />
              </div>
            </a>
            {/* Company name — wrap-safe grid-rows reveal: wraps freely, hidden during the transition (never nowrap/ellipsis) */}
            <div style={{
              display: 'grid', gridTemplateRows: collapsed ? '0fr' : '1fr',
              marginTop: collapsed ? 0 : 16, opacity: collapsed ? 0 : 1,
              transition: collapsed
                ? 'opacity 110ms ease, grid-template-rows 180ms ease 60ms, margin-top 180ms ease 60ms'
                : 'opacity 200ms ease 220ms, grid-template-rows 200ms ease, margin-top 200ms ease',
            }}>
              <p style={{ margin: 0, minHeight: 0, overflow: 'hidden', font: '400 14px/20px var(--font-sans)', color: INK }}>Coastal Beverage Company</p>
            </div>
            {!collapsed && (
              <div style={{ marginTop: 8, width: '100%' }}>
                <button type="button" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  width: '100%', minHeight: 28, padding: '4px 4px 4px 8px', gap: 8,
                  borderRadius: 'var(--r-card)', border: 'var(--hair) solid var(--p-border-strong)', background: 'var(--p-surface)',
                  font: '500 13px/20px var(--font-sans)', color: INK, cursor: 'pointer',
                }}>
                  <span>Elizabeth City</span>
                  {MS('arrow_drop_down', 18, GRAY_800)}
                </button>
              </div>
            )}
          </div>

          {/* Primary nav */}
          <nav data-testid="side-navigation" style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 2 }}>
              {nav.map((n) => <ParentRow key={n.id} item={n} />)}
            </ul>
          </nav>
        </div>

        {/* BOTTOM: utility nav — pinned to the bottom, always visible, occludes content under it */}
        <nav style={{
          position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 2,
          padding: collapsed ? '8px 12px 16px' : '8px 16px 16px 24px',
          background: 'var(--p-surface-nav)',
          boxShadow: '0 -1px 0 var(--p-border)',
        }}>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {/* Help Center → in-product Messenger when configured; else external link (§Q) */}
            {MESSENGER_CONFIGURED ? (
              <BottomRow icon="help_center" label="Help Center" active={msgrOpen}
                onClick={() => setMsgrOpen((o) => !o)}
                trailing={unread > 0 && (
                  <span data-testid="help-center-unread" style={{
                    minWidth: 18, height: 18, padding: '0 5px', borderRadius: 999,
                    background: 'var(--p-danger)', color: '#fff', font: '600 11px/18px var(--font-sans)',
                    textAlign: 'center', display: 'inline-block', boxSizing: 'border-box',
                  }}>{unread > 99 ? '99+' : unread}</span>
                )} />
            ) : (
              <BottomRow icon="help_center" label="Help Center" external onClick={() => window.open('https://help.greater.co', '_blank')} />
            )}
            <BottomRow icon="history" label="Audit Log" onClick={() => onNavigate?.('audit-log')} />
            <BottomRow icon="settings" label="Settings" onClick={() => onNavigate?.('settings')} />
            {/* Theme picker — popover menu (1.13 §D; supersedes the cycle toggle) */}
            <ThemeControl variant={collapsed ? 'rail' : 'row'} pref={themePref} onSelect={setThemePref} />
            <BottomRow icon="person_raised_hand" label={userName} />
            <BottomRow icon="logout" label="Sign Out" />
          </ul>
        </nav>
      </aside>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, minHeight: 0 }}>
        <div style={{ flex: 1, minHeight: 0, padding: 24, overflowY: 'auto', background: 'var(--p-shell)' }}>{children}</div>
      </main>

      {/* Collapsed flyout — fixed-positioned so it escapes the sidebar's overflow clipping */}
      {flyout && collapsed && (
        <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose}
          style={{ position: 'fixed', left: flyout.x, top: flyout.y, zIndex: 9999, animation: 'flyout-in 120ms ease-out' }}>
          <FlyoutPanel item={flyout.item} />
        </div>
      )}

      {/* In-product Messenger (1.10 §Q) — toggled by the Help Center row; NO floating launcher,
          so closing it leaves nothing on screen. Production embeds Intercom here. */}
      {msgrOpen && (
        <div data-testid="help-messenger" style={{
          position: 'fixed', right: 20, bottom: 20, width: 340, height: 420, zIndex: 10001,
          background: 'var(--p-surface)', border: 'var(--hair) solid var(--p-border)', borderRadius: 'var(--r-card)',
          boxShadow: 'var(--shadow-float)', display: 'flex', flexDirection: 'column', overflow: 'hidden',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', borderBottom: 'var(--hair) solid var(--p-border)' }}>
            <span style={{ font: '600 14px/1 var(--font-sans)', color: 'var(--p-ink)' }}>Messenger</span>
            <button onClick={() => setMsgrOpen(false)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--p-muted)', display: 'flex' }}>{MS('close', 18, 'var(--p-muted)')}</button>
          </div>
          <div style={{ flex: 1, padding: 16, font: '400 13px/1.5 var(--font-sans)', color: 'var(--p-muted)' }}>
            In-product messenger (Intercom). The sidebar Help Center row is the single entry point — there's no floating launcher bubble, and closing this leaves nothing on screen.
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { AppShell });
