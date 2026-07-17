// Portal UI Kit — RowKebab (1.10 §I): the portal row-action menu
// ---------------------------------------------------------------------------
// PORTAL LAW (restated, broadened for 1.10): ANY floating UI born inside a scrolling
// or transformed container — tooltips, row-action menus, popovers, hover cards — must
// render into document.body via createPortal, position:fixed, and re-measure on
// scroll/resize. Never rely on position:absolute inside a table: the scroll container's
// overflow clips it (the bug class this component kills, reported twice, fixed twice).
//
// The canonical ROW-ACTION trigger: a .g-kebab (more_horiz — the more_vert ban from 1.1
// stands) that opens the shared Menu, portaled to <body>, right-aligned to the trigger,
// flipping UP near the viewport bottom. Supersedes inline <Menu>-in-a-span kebabs (e.g.
// the overlays.jsx Kebab) for row actions. API: RowKebab({ items, testid }) where `items`
// are Menu items. Load AFTER primitives.jsx and overlays.jsx (uses Menu, MIcon, the
// shared React hooks declared in primitives.jsx).

const ROWKEBAB_Z = 10002;

function RowKebab({ items = [], testid }) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState(null);   // viewport coords: { right, top } OR { right, bottom }
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  const measure = () => {
    const el = btnRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const right = window.innerWidth - r.right;          // right-align the 200px menu to the trigger
    const spaceBelow = window.innerHeight - r.bottom;
    // Flip up when there isn't room below (<220px) and there's more room above.
    if (spaceBelow < 220 && r.top > spaceBelow) setPos({ right, bottom: window.innerHeight - r.top + 6 });
    else setPos({ right, top: r.bottom + 6 });
  };

  const toggle = (e) => {
    e.stopPropagation();                                 // never let a row-click fire behind the kebab
    if (open) { setOpen(false); return; }
    measure();
    setOpen(true);
  };

  useLayoutEffect(() => { if (open) measure(); }, [open]);

  // While open: re-measure the trigger rect on CAPTURE-phase scroll (any ancestor
  // container, not just window) + resize; close on outside mousedown + Escape.
  useEffect(() => {
    if (!open) return;
    const reflow = () => measure();
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onDown = (e) => {
      if (btnRef.current && btnRef.current.contains(e.target)) return;
      if (menuRef.current && menuRef.current.contains(e.target)) return;
      setOpen(false);
    };
    window.addEventListener('scroll', reflow, true);     // capture: catch scrolls in ANY container
    window.addEventListener('resize', reflow);
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    return () => {
      window.removeEventListener('scroll', reflow, true);
      window.removeEventListener('resize', reflow);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDown);
    };
  }, [open]);

  return (
    <React.Fragment>
      <button ref={btnRef} className="g-kebab" data-testid={testid}
        aria-haspopup="menu" aria-expanded={open} onClick={toggle}
        style={open ? { background: 'var(--p-overlay-hover)', color: 'var(--p-text)' } : undefined}>
        <MIcon name="more_horiz" size={20} />
      </button>
      {open && pos && ReactDOM.createPortal(
        <div ref={menuRef} style={{
          position: 'fixed', right: pos.right, top: pos.top, bottom: pos.bottom,
          width: 200, zIndex: ROWKEBAB_Z,
        }}>
          <Menu items={items} onSelect={() => setOpen(false)} style={{ minWidth: 200 }} />
        </div>,
        document.body
      )}
    </React.Fragment>
  );
}

Object.assign(window, { RowKebab });
