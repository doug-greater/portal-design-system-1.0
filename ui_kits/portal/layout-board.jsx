// Portal UI Kit — Arrangement Board (Store Layouts)
// STRUCTURAL reference for the drag-and-drop merchandising board. The live portal
// wires drag with @dnd-kit (core + sortable + utilities, the only new runtime dep);
// this kit reference shows the layout, section card, placement row, inline par-level
// control, and the Unassigned tray — interactive where it doesn't need DnD (drag is
// omitted, since the kit has no bundler). See "Greater Design System.md" §9
// "Arrangement Board (drag-and-drop)". Load AFTER primitives.jsx + overlays.jsx.
//
// GENERAL STOCK AREAS 2.0 (1.13 §I — THE MODEL REVERSED; supersedes 1.7 "General
// Stock" + the Phase-3 "no product list" rule): a GSA MAY optionally hold a pinned
// product list with an arranged sequence — a convenience for counting, not a
// merchandising plan. Par levels and Display flags are customer-facing concepts and
// NEVER apply inside a GSA. Behavior contract:
//   • drag-and-drop INTO a GSA is allowed (the old drop-block is removed); reordering
//     works; each row shows its sequence chip
//   • GSA rows HIDE the Par Level control and the Display chip
//   • GSA kebab: "Add Product" SHOWS, "Set Par Level For All" HIDES
//   • the Unassigned-tray "Add to Section…" picker INCLUDES GSAs
//   • Section → Area conversion is NON-destructive — products stay pinned. A confirm
//     appears ONLY when a member actually carries a par level or Display flag, and it
//     confirms only the erasure:
//         Modal variant="confirm" tone="general" icon="inventory_2"
//         title:  "Erase par levels?"                    [VERBATIM §I4]
//         body:   "Par levels only apply to customer-facing locations. The par levels
//                  on this section's products will be erased — the products stay
//                  pinned here."
//         footer: neutral "Cancel" / danger "Erase Par Levels"
//     Area → Section is silent and keeps membership.
//   • serialization/API: GSA instances are stripped to parLevel:null /
//     displayRelated:false at BOTH the frontend serializer and the API boundary.
// Iconography (§I2): the GSA glyph is `inventory_2` — toggle label, in-section hint
// panel, and the confirm-modal icon. (Supersedes the earlier shuffle/⇄ mark.)

/* Section name presets (1.13 §I3) — grouped Select options; the groups drive GSA
   nudging: picking a Stock-Area name on an empty non-GSA section nudges (or
   auto-enables) General Stock, and the "Suggested" chip keys off the same set. */
const SECTION_NAME_PRESETS = [
  { header: 'Customer Facing' },
  ...['Item Cooler', 'Warm Shelves', 'Walk-in Cooler', 'Checkout', 'Display', 'End Cap', 'Tap / Fountain Lines'].map((l) => ({ label: l, grouped: true })),
  { header: 'Stock Areas' },
  ...['Backstock', 'Floor Overstock', 'Top Stock', 'Cold Storage'].map((l) => ({ label: l, grouped: true })),
  { label: 'Custom…' },
];
const STOCK_AREA_NAMES = new Set(['Backstock', 'Back Stock', 'Floor Overstock', 'Top Stock', 'Cold Storage']);

/* GsaBadge (1.13 §I3) — replaces the old "General Stock" header badge. An UPPERCASE
   mono pill in the genstock tint; shown in the section header next to the name and in
   template detail views. Status-badge-adjacent in tone but CATEGORICAL in meaning —
   it takes NO stroke anywhere (it does not consume --badge-fill/--st-badge). */
function GsaBadge() {
  return (
    <span data-testid="gsa-badge" style={{ padding: '2px 8px', borderRadius: 999, background: 'var(--p-genstock-tint)',
      color: 'var(--p-genstock-ink)', font: '600 10px/1.5 var(--font-control)',
      letterSpacing: '.05em', textTransform: 'uppercase', whiteSpace: 'nowrap', flexShrink: 0 }}>General Stock Area</span>
  );
}

/* Inline Par Level control (1.13 §I5 — renames 1.4/Phase-3 "Capacity"): value + unit;
   amber "soft-required" cue when unset; label morphs to "Display Size" when the
   placement's Display chip is on (gr-label-swap keyframe retained). */
function ParLevelControl({ display }) {
  const [val, setVal] = useState('');
  const [unit, setUnit] = useState('units');
  const unset = val === '';
  return (
    <span title={unset ? 'No par level set — adding one is encouraged' : undefined}
      style={{ display: 'inline-flex', alignItems: 'center', height: 30, borderRadius: 'var(--r-card)', overflow: 'hidden', flexShrink: 0,
      border: `1px solid ${unset ? 'var(--p-warning)' : 'var(--p-border-strong)'}`, background: unset ? 'var(--g-gold-10)' : '#fff' }}>
      <span key={display ? 'd' : 'c'} className="gr-label-swap" style={{ font: '500 11px/1 var(--font-sans)', color: 'var(--p-muted)', padding: '0 8px', whiteSpace: 'nowrap' }}>{display ? 'Display Size' : 'Par Level'}</span>
      <input type="number" value={val} onChange={(e) => setVal(e.target.value)} placeholder="—"
        style={{ width: 46, height: 28, border: 'none', outline: 'none', background: 'transparent', font: '500 13px var(--font-sans)', color: 'var(--p-ink)', textAlign: 'right' }} />
      <button onClick={() => setUnit((u) => (u === 'units' ? 'cases' : 'units'))}
        style={{ height: 30, padding: '0 8px', border: 'none', borderLeft: `1px solid ${unset ? 'rgba(185,138,46,.3)' : 'var(--p-border)'}`, background: 'transparent', font: '500 12px var(--font-sans)', color: 'var(--p-text-2)', cursor: 'pointer' }}>{unit}</button>
    </span>
  );
}
const CapacityControl = ParLevelControl;   // deprecated alias (pre-1.13 name) — new code says Par Level

/* Placement row — the draggable item (drag handle is decorative here).
   `general`: rows inside a GSA keep the sequence chip but HIDE Par Level + Display. */
function PlacementRow({ seq, name, brand, size, category, plan, general }) {
  const [display, setDisplay] = useState(false);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', border: 'var(--hair) solid var(--p-border)', borderRadius: 'var(--r-card)', background: '#fff' }}>
      <Icon name="drag_indicator" size={18} color="var(--p-placeholder)" style={{ cursor: 'grab' }} />
      <span style={{ font: '600 12px/1 var(--font-control)', color: 'var(--p-muted)', background: 'var(--p-surface-alt)', borderRadius: 'var(--r-card)', minWidth: 22, height: 22, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{seq}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
          <span style={{ font: '500 14px var(--font-sans)', color: 'var(--p-ink)' }}>{name}</span>
          <Pill kind={category}>{category}</Pill>
          {plan && <Chip tone={plan.tone} icon={plan.icon}>{plan.label}</Chip>}
        </div>
        <div style={{ font: '400 12px var(--font-sans)', color: 'var(--p-muted)' }}>{brand} · {size}</div>
      </div>
      {!general && <ParLevelControl display={display} />}
      {!general && <ChipToggle on={display} onClick={() => setDisplay((v) => !v)} icon="curtains" label="Display" />}
      <button title="Remove" style={{ width: 28, height: 28, borderRadius: 'var(--r-card)', border: 'none', background: 'transparent', color: 'var(--p-placeholder)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name="close" size={18} /></button>
    </div>
  );
}

/* Section card — sticky header (drag handle · name · GsaBadge? · count · collapse ·
   kebab) + meta row + rows. GSA kebab: "Add Product" shows, "Set Par Level For All"
   hides (§I1). */
function SectionCard({ name, count, children, general }) {
  const [open, setOpen] = useState(true);
  const kebab = [
    { label: 'Add Product', icon: 'add' },
    ...(general ? [] : [{ label: 'Set Par Level For All', icon: 'fit_width' }]),
    { divider: true },
    { label: 'Delete Section', icon: 'delete', danger: true },
  ];
  return (
    <div style={{ border: 'var(--hair) solid var(--p-border)', borderRadius: 'var(--r-card)', background: '#fff', boxShadow: 'var(--shadow-card)', marginBottom: 16 }}>
      {/* sticky band radius is TOKEN-BOUND (1.13 §H6 — never literal "10px 10px 0 0"; Black Ops squares it) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: 'var(--p-surface-alt)', borderRadius: open ? 'var(--r-card) var(--r-card) 0 0' : 'var(--r-card)', borderBottom: open ? 'var(--hair) solid var(--p-border)' : 'none' }}>
        <Icon name="drag_indicator" size={20} color="var(--p-placeholder)" style={{ cursor: 'grab' }} />
        <span style={{ font: '600 14px var(--font-sans)', color: 'var(--p-ink)' }}>{name}</span>
        {general && <GsaBadge />}
        <span style={{ font: '500 12px/1 var(--font-control)', color: 'var(--p-muted)' }}>{count} items</span>
        <div style={{ flex: 1 }} />
        <button onClick={() => setOpen((o) => !o)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--p-muted)', display: 'inline-flex' }}><Icon name="expand_more" size={20} style={{ transform: open ? 'none' : 'rotate(-90deg)', transition: 'transform .15s' }} /></button>
        <Kebab items={kebab} />
      </div>
      {open && <div style={{ padding: 12 }}>{children}</div>}
    </div>
  );
}

/* GeneralStockToggle (1.13 §I3) — the section-meta-row control. Label 500 12px mono +
   inventory_2 14px (ON: --p-genstock icon / --p-genstock-ink label · OFF: --p-muted /
   --p-text-2); ⓘ tooltip carries the §I4 explainer VERBATIM; the switch fills VIOLET
   when on (color="var(--p-genstock)"), not the primary blue. An amber "Suggested" chip
   appears when the section's preset name is a stock-area name and the toggle is off. */
function GeneralStockToggle({ on, onChange, sectionName }) {
  const suggested = !on && STOCK_AREA_NAMES.has(sectionName);
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      {suggested && <Chip tone="amber" iconRight="arrow_forward" testid="gsa-suggested">Suggested</Chip>}
      <Icon name="inventory_2" size={14} color={on ? 'var(--p-genstock)' : 'var(--p-muted)'} />
      <span style={{ font: '500 12px var(--font-control)', color: on ? 'var(--p-genstock-ink)' : 'var(--p-text-2)' }}>General Stock Area</span>
      <Tooltip side="bottom" maxWidth={340} text="General stock areas are not customer-facing or merchandised to a set plan. Inventory often changes with each delivery, so arranging a set product list is optional and for convenience of pinning products commonly found in this area. Par levels cannot be set.">
        <Icon name="info" size={14} color="var(--p-placeholder)" style={{ cursor: 'help' }} />
      </Tooltip>
      <Toggle on={on} onChange={onChange} color="var(--p-genstock)" />
    </span>
  );
}

/* Section meta row — progressive-disclosure note + the GeneralStockToggle. */
function MetaRow({ sectionName, general, onGeneral }) {
  const [editing, setEditing] = useState(false);
  const [note, setNote] = useState('');
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, minHeight: 28, marginBottom: 10 }}>
      {editing ? (
        <input autoFocus value={note} onChange={(e) => setNote(e.target.value)} onBlur={() => setEditing(false)}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === 'Escape') setEditing(false); }}
          placeholder="Add a note for reps — where to find it, inventory tips…"
          style={{ flex: 1, height: 28, border: '1px solid var(--p-primary)', borderRadius: 'var(--r-card)', padding: '0 8px', font: '400 13px var(--font-sans)', outline: 'none', boxShadow: '0 0 0 3px var(--p-focus-ring)' }} />
      ) : (
        <button onClick={() => setEditing(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, border: 'none', background: 'transparent', cursor: 'text', font: '400 13px var(--font-sans)', color: note ? 'var(--p-text-2)' : 'var(--p-muted)' }}>
          <Icon name="sticky_note_2" size={14} /> {note || 'Add a note about this section'}
        </button>
      )}
      <GeneralStockToggle on={general} onChange={onGeneral} sectionName={sectionName} />
    </div>
  );
}

/* GSA in-section hint panel (§I4 VERBATIM copy) — violet-tint band, inventory_2. */
function GsaHintPanel() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '9px 12px', marginBottom: 10,
      background: 'var(--p-genstock-tint)', borderRadius: 'var(--r-card)' }}>
      <Icon name="inventory_2" size={15} color="var(--p-genstock)" style={{ marginTop: 1 }} />
      <span style={{ font: '400 12.5px/1.5 var(--font-sans)', color: 'var(--p-text-2)' }}>{/* 12.5 per the shipped 1.13 spec (Inter — the integer rule is mono-only) */}
        Any product can be found and counted in a general stock area. Add products commonly found here to pin them for convenience while counting.
      </span>
    </div>
  );
}

/* Unassigned tray (sticky, right column). Emits unplaced SKUs. 1.13 §I1: the
   "Add to Section…" picker INCLUDES GSAs (old exclusion removed). §I2: the header
   icon was REMOVED — the tray is a place, not an entity (and inventory_2 now
   belongs to the GSA). Plain "Unassigned" label, 600 14px Inter. */
function UnassignedTray({ items }) {
  return (
    <div style={{ border: '1px dashed var(--p-border-strong)', borderRadius: 'var(--r-card)', background: 'var(--p-surface-alt)', padding: 10, minHeight: 120 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
        <span style={{ font: '600 14px var(--font-sans)', color: 'var(--p-ink)' }}>Unassigned</span>
        <span style={{ font: '500 11px/1 var(--font-control)', color: 'var(--p-muted)', background: '#fff', border: 'var(--hair) solid var(--p-border)', borderRadius: 999, padding: '2px 7px' }}>{items.length}</span>
      </div>
      {items.map((p) => (
        <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 8px', background: '#fff', border: 'var(--hair) solid var(--p-border)', borderRadius: 'var(--r-card)', marginBottom: 6, cursor: 'grab' }}>
          <Icon name="drag_indicator" size={16} color="var(--p-placeholder)" />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ font: '500 13px var(--font-sans)', color: 'var(--p-ink)' }}>{p.name}</div>
            <div style={{ font: '400 11px var(--font-sans)', color: 'var(--p-muted)' }}>{p.category} · {p.size}</div>
          </div>
          {p.plan && <Chip tone={p.plan.tone} icon={p.plan.icon}>{p.plan.label}</Chip>}
        </div>
      ))}
      <p style={{ font: '400 12px/1.4 var(--font-sans)', color: 'var(--p-muted)', margin: '8px 4px 0' }}>Products at this store that aren't placed in any section appear here. Drag one into a section to place it.</p>
    </div>
  );
}

/* Composed board — two columns: editor (left) + sticky tray (right).
   Backstock demos GSA 2.0: pinned+sequenced rows, the hint panel, and a live
   drop target (drag INTO a GSA is allowed since 1.13). */
function LayoutBoard() {
  const [csGeneral, setCsGeneral] = useState(false);
  const [bsGeneral, setBsGeneral] = useState(true);
  const tray = [
    { name: 'Hazy IPA 6pk', category: 'Beer', size: '6×12oz', plan: { tone: 'amber', icon: 'add_business', label: 'New to store' } },
    { name: 'Cold Brew 4pk', category: 'Non-Alcoholic', size: '4×11oz' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 340px', gap: 20, alignItems: 'start', padding: 24, background: 'var(--p-surface-alt)' }}>
      <div>
        <SectionCard name="Cold Shelves" count={2}>
          <MetaRow sectionName="Cold Shelves" general={csGeneral} onGeneral={setCsGeneral} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <PlacementRow seq={1} name="Pilsner 12pk" brand="North Coast" size="12×12oz" category="Beer" plan={{ tone: 'info', icon: 'schedule', label: 'Adds Aug 1' }} />
            <PlacementRow seq={2} name="Rosé 750ml" brand="Maison" size="750ml" category="Wine" plan={{ tone: 'danger', icon: 'remove_shopping_cart', label: 'Disc. Sep 1' }} />
          </div>
          <div style={{ marginTop: 8, border: '1px dashed var(--p-border)', borderRadius: 'var(--r-card)', minHeight: 52, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, color: 'var(--p-placeholder)', font: '400 13px var(--font-sans)' }}>
            <Icon name="move_down" size={18} /> Drag products here
          </div>
        </SectionCard>

        <SectionCard name="Backstock" count={1} general>
          <MetaRow sectionName="Backstock" general={bsGeneral} onGeneral={setBsGeneral} />
          <GsaHintPanel />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {/* GSA rows: sequence chip kept; Par Level + Display hidden (§I1) */}
            <PlacementRow seq={1} name="Dune Lager 6pk" brand="Dune" size="6×12oz" category="Beer" general />
          </div>
          <div data-testid="lb-gsa-empty-backstock" style={{ marginTop: 8, border: '1px dashed var(--p-border)', borderRadius: 'var(--r-card)', minHeight: 52, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, color: 'var(--p-placeholder)', font: '400 13px var(--font-sans)' }}>
            <Icon name="move_down" size={18} /> Drag products here
          </div>
        </SectionCard>
      </div>
      <div style={{ position: 'sticky', top: 0 }}><UnassignedTray items={tray} /></div>
    </div>
  );
}

Object.assign(window, { LayoutBoard, SectionCard, PlacementRow, ParLevelControl, CapacityControl, MetaRow, GeneralStockToggle, GsaBadge, GsaHintPanel, UnassignedTray, SECTION_NAME_PRESETS });
