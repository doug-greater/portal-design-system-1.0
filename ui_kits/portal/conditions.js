// Portal UI Kit — Inventory Conditions scale (source-of-truth mirror)
// ---------------------------------------------------------------------------
// Greater's fixed 6-level SKU-health scale (depletion simulation verdict).
// "Palette A" (1.5): a colour-blind-safe diverging ramp Orange → Gold → Teal →
// Blue → Purple, WCAG ≥3:1 against both CARTO basemaps. Supersedes the 1.4 scale.
//
// Define the scale ONCE and import it everywhere (the In-the-Market Condition
// column AND the Coverage-Map). `level` is the ordinal position on the DIVERGING
// scale (0 = worst stockout → 5 = worst overstock; 3 = the healthy middle).
//
// AGGREGATION (1.10 §D) — two different reducers; do not confuse them:
//   • Coverage-Map HEX color = the MOST SEVERE member, ranked by business pain
//     (SEVERITY_RANK_BY_LEVEL / mostSevereCondition) — NOT the average. Averaging a
//     diverging scale lands a mixed hex near level 3 → it reads "Optimal", which is
//     exactly wrong. (Supersedes the 1.4/1.5 "average the levels" hexbin rule.)
//   • Per-STORE dot on a multi-product map = the rounded AVERAGE across that store's
//     products (averageCondition). A store dot is ONE place; a hex is many stores.
//
// IMPORTANT: colors return `var(--cond-…)` token strings, NOT hex — so they stay
// theme-aware (light :root vs html[data-theme="dark"]). Never resolve to hex in JS.
// ---------------------------------------------------------------------------
export const CONDITIONS = [
  { level: 0, key: "out_of_stock",     label: "Out of Stock",     short: "Out of Stock", color: "var(--cond-out_of_stock)" },
  { level: 1, key: "high_risk",        label: "High Risk of OOS", short: "High Risk",    color: "var(--cond-high_risk)" },
  { level: 2, key: "at_risk",          label: "At Risk of OOS",   short: "At Risk",      color: "var(--cond-at_risk)" },
  { level: 3, key: "optimal",          label: "Optimal",          short: "Optimal",      color: "var(--cond-optimal)" },
  { level: 4, key: "slight_overstock", label: "Slight Overstock", short: "Slight Over",  color: "var(--cond-slight_overstock)" },
  { level: 5, key: "heavy_overstock",  label: "Heavy Overstock",  short: "Heavy Over",   color: "var(--cond-heavy_overstock)" },
];

export const COND_BY_KEY = Object.fromEntries(CONDITIONS.map((c) => [c.key, c]));
export const COND_BY_LEVEL = CONDITIONS.slice();   // index === level

// Token strings for the two non-scale states.
export const CONDITION_EMPTY = "var(--cond-empty)";       // no data
export const CONDITION_PENDING = "var(--cond-pending)";   // pending-change pin

// Color for a key; falls back to the no-data token for unknown keys.
export function conditionColor(key) {
  return (COND_BY_KEY[key] || { color: CONDITION_EMPTY }).color;
}

// STORE-DOT reducer — average a store's per-product levels → the representative
// condition for that ONE store's dot (rounds to nearest index). NOT the hex reducer.
export function averageCondition(levels) {
  if (!levels || !levels.length) return null;
  const avg = levels.reduce((s, n) => s + n, 0) / levels.length;
  return COND_BY_LEVEL[Math.max(0, Math.min(5, Math.round(avg)))];
}

// Business-pain rank of each condition level (index = level, value = rank; 0 = worst).
// Understock outranks overstock at equal intensity — a stockout costs sales TODAY;
// overstock is capital / spoilage risk. Order: OOS > High Risk > Heavy Overstock >
// At Risk > Slight Overstock > Optimal. (User-confirmed business rule, 1.10 §D.)
// Use this ANYWHERE conditions are ranked — the hex reducer AND Condition-column sorts (§L).
export const SEVERITY_RANK_BY_LEVEL = [0, 1, 3, 5, 4, 2];

// HEX reducer — a hex takes the condition of its most severe member (lowest rank).
// Aggregates the VALUES THE MAP PLOTS (the rounded per-store dots), never underlying
// per-product data: a hex must never assert a condition its constituent pins can't
// reveal on zoom (the zoom-reveals-granularity contract, 1.10 §D).
export function mostSevereCondition(levels) {
  if (!levels || !levels.length) return null;
  let worst = levels[0];
  for (const l of levels) if (SEVERITY_RANK_BY_LEVEL[l] < SEVERITY_RANK_BY_LEVEL[worst]) worst = l;
  return COND_BY_LEVEL[worst];
}

// Soft fill for a Condition badge — pct% of the (theme-aware) condition color over
// transparent. Stays a token via color-mix, so it flips with the scale in dark.
export function conditionTint(key, pct = 14) {
  return `color-mix(in srgb, ${conditionColor(key)} ${pct}%, transparent)`;
}

// Canonical explainer copy for the "What are Conditions?" (i) tooltip — bold lead-in
// (rendered by the caller) + this body. One string, imported wherever it appears.
export const CONDITIONS_TOOLTIP =
  "Greater's algorithm understands SKU-level demand and its variance to project each " +
  "product's stock health days ahead — from out-of-stock risk through overstock — so a " +
  "store's condition reflects where it's actually heading, not just today's shelf count.";
