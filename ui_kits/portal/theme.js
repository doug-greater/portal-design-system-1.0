// Portal UI Kit — Theme store (1.5 · dark-first 1.11 · SKINS + Black Ops default 1.13)
// ---------------------------------------------------------------------------
// TWO AXES since 1.13. A *theme* is the resolved light/dark token set; a *skin*
// is a token-override layer applied ON TOP of a resolved theme (one CSS block,
// html[data-skin="…"] — no component forks).
//
//   pref     : "light" | "dark" | "blackops" | "system"   (localStorage["gr-theme"])
//   resolved : "light" | "dark"    — "blackops" RESOLVES TO "dark", so every dark
//              CSS rule and every `resolved === "dark"` JS check (map tiles, KO
//              logo swaps, Material grade) keeps working untouched
//   skin     : "blackops" | null   — additionally sets data-skin on <html>
//
// BLACK OPS IS THE DEFAULT (1.13; supersedes 1.11 "dark is the default"): a
// first-run user (no stored pref) gets "blackops". Stored preferences are never
// overridden; Light / Dark / System remain one click away in the ThemeMenu.
//
// CRITICAL: theme state MUST live in ONE module-level store (not per-component
// useState) and be read via useSyncExternalStore. JS-driven views (the Leaflet
// maps) resolve concrete colors via getComputedStyle and rebuild in an effect —
// that effect must be keyed on `skin` AS WELL AS `resolved`: a blackops↔dark
// toggle keeps resolved === "dark" and would not retrigger on its own.
//
// (The rest of this kit is Babel-in-browser UMD; this file is shown as the
// real ESM module the app ships. A no-flash inline bootstrap in index.html
// must read localStorage["gr-theme"] and set data-theme AND data-skin BEFORE
// React mounts — for any stored pref beginning "blackops" it hardcodes
// data-skin="blackops" + data-theme="dark".)
// ---------------------------------------------------------------------------
import { useCallback, useSyncExternalStore } from "react";
const STORAGE_KEY = "gr-theme";
const mql = () => window.matchMedia("(prefers-color-scheme: dark)");

export function getPref() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === "blackops-variant") return "blackops";   // retired sandbox skin that GRADUATED into Black Ops (1.13 §N1) — migrate silently
    return v === "light" || v === "dark" || v === "blackops" || v === "system" ? v : "blackops";   // first-run default = blackops (1.13)
  } catch { return "blackops"; }
}
export function resolveTheme(pref) {
  if (pref === "dark" || pref.startsWith("blackops")) return "dark";   // blackops = dark + skin
  if (pref === "light") return "light";
  return mql().matches ? "dark" : "light";
}
export function resolveSkin(pref) {
  return pref.startsWith("blackops") ? pref : null;
}
export function applyPref(pref) {
  const resolved = resolveTheme(pref);
  const skin = resolveSkin(pref);
  document.documentElement.setAttribute("data-theme", resolved);
  if (skin) document.documentElement.setAttribute("data-skin", skin);
  else document.documentElement.removeAttribute("data-skin");
  return resolved;
}
let _pref = getPref(), _resolved = resolveTheme(_pref);
applyPref(_pref);   // module-init safety net — a stale cached index.html bootstrap once left the app unthemed after reload
const listeners = new Set();
const emit = () => listeners.forEach((l) => l());
function setPrefGlobal(p) {
  if (p === _pref) return;
  _pref = p; _resolved = applyPref(p);
  try { localStorage.setItem(STORAGE_KEY, p); } catch {}
  emit();
}
let _systemBound = false;
function ensureSystemListener() {
  if (_systemBound) return; _systemBound = true;
  mql().addEventListener("change", () => {
    if (_pref !== "system") return;
    const next = resolveTheme("system");
    if (next !== _resolved) { _resolved = applyPref("system"); emit(); }
  });
}
function subscribe(cb) { ensureSystemListener(); listeners.add(cb); return () => listeners.delete(cb); }
export function useTheme() {
  const pref = useSyncExternalStore(subscribe, () => _pref);
  const resolved = useSyncExternalStore(subscribe, () => _resolved);
  const skin = resolveSkin(pref);
  const setPref = useCallback((p) => setPrefGlobal(p), []);
  // `cycle` is legacy (the 1.5 toggle is retired — theme selection is the ThemeMenu
  // popover since 1.13); kept for compatibility with older embeds.
  const cycle = useCallback(
    () => setPrefGlobal(_pref === "light" ? "dark" : _pref === "dark" ? "blackops" : _pref === "blackops" ? "system" : "light"), []);
  return { pref, resolved, skin, setPref, cycle };
}
