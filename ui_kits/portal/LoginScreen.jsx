// Login screen — SINGLE PAGE (since 1.9; supersedes the 1.5 two-step lookup→password
// flow). Email + password on one page, a single GENERIC "Incorrect email or password."
// error (never reveal which field was wrong), a full-width ink Sign In, dev quick
// sign-in, and a flat theme toggle bottom-left. Auth inputs are 56px tall / 4px radius (§H).

// Dev quick sign-in (1.10 §P) — ID-BASED, no client-side secrets. In production the list
// comes from a public GET /auth/config → { devLoginEnabled, devAccounts: [{ id, label,
// email }] } (NO password field), and each button POSTs { userId } to /auth/dev-login,
// which mints the session SERVER-SIDE. Hardening: DEV_LOGIN_ENABLED defaults false
// (fail-closed), the endpoint allow-lists specific demo user ids, and /auth/config must
// never emit credentials.
const DEV_ACCOUNTS = [
  { id: 'u_exec',       label: 'Executive',          email: 'exec@coastalbev.com' },
  { id: 'u_deptmgr',    label: 'Department Manager',  email: 'manager@coastalbev.com' },
  { id: 'u_supervisor', label: 'Supervisor',          email: 'supervisor@coastalbev.com' },
  { id: 'u_rep',        label: 'Sales Rep',           email: 'rep@coastalbev.com' },
];
const DEV_LOGIN_ENABLED = true;   // production: from /auth/config; defaults FALSE server-side

const authField = {
  width: '100%', height: 56, padding: '0 16px', boxSizing: 'border-box',
  border: '1px solid var(--p-border-strong)', borderRadius: 4,  // §H: 4px on auth
  font: '400 16px Inter', color: 'var(--p-ink)', background: 'var(--p-surface)', outline: 'none',
};

function LoginScreen({ onSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // Inline theme toggle (mirrors theme.js; flat, bottom-left on Login).
  const [pref, setPref] = useState(() => { try { const v = localStorage.getItem('gr-theme'); return v === 'light' || v === 'dark' || v === 'system' ? v : 'system'; } catch { return 'system'; } });
  const resolve = (p) => p === 'dark' ? 'dark' : p === 'light' ? 'light' : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  useEffect(() => { document.documentElement.setAttribute('data-theme', resolve(pref)); try { localStorage.setItem('gr-theme', pref); } catch {} }, [pref]);
  const tMeta = { light: { icon: 'light_mode', label: 'Light' }, dark: { icon: 'dark_mode', label: 'Dark' }, system: { icon: 'contrast', label: 'System' } }[pref];
  const cycle = () => setPref((p) => (p === 'light' ? 'dark' : p === 'dark' ? 'system' : 'light'));

  // One generic error — never reveal which field was wrong (auth voice / §P hardening).
  const finish = () => { if (!email.includes('@') || !password) { setError(true); return; } onSignIn?.(email); };
  // Demo shortcut. Production: POST /auth/dev-login { userId: acct.id } → session minted server-side.
  const devSignIn = (acct) => { setError(false); onSignIn?.(acct.email); };

  return (
    <div style={{ minHeight: '100vh', position: 'relative', background: 'var(--p-shell)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: 360, display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }} className="gr-rise" data-i="0">
          <Logo width={130} />
        </div>
        <div style={{ textAlign: 'center' }} className="gr-rise" data-i="1">
          <div className="g-h3" style={{ color: 'var(--p-ink)', margin: 0 }}>Sign in to your account</div>
        </div>

        {error && (
          <div className="gr-rise" style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'var(--g-red-10)', color: 'var(--p-danger-strong)', borderRadius: 6, padding: '9px 12px', font: '500 13px Inter' }}>
            <Icon name="error" size={16} color="currentColor" /> Incorrect email or password.
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }} className="gr-rise" data-i="2">
          <label style={{ font: '500 12px/1.2 Inter', color: 'var(--p-text)', letterSpacing: '.04em', textTransform: 'uppercase' }}>Email</label>
          <input type="email" value={email} autoComplete="email" placeholder="you@company.com" data-testid="login-email"
            style={{ ...authField, borderColor: error ? 'var(--p-danger)' : 'var(--p-border-strong)' }}
            onChange={(e) => { setEmail(e.target.value); setError(false); }}
            onKeyDown={(e) => e.key === 'Enter' && finish()} autoFocus />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }} className="gr-rise" data-i="3">
          <label style={{ font: '500 12px/1.2 Inter', color: 'var(--p-text)', letterSpacing: '.04em', textTransform: 'uppercase' }}>Password</label>
          <input type="password" value={password} autoComplete="current-password" placeholder="••••••••" data-testid="login-password"
            style={{ ...authField, borderColor: error ? 'var(--p-danger)' : 'var(--p-border-strong)' }}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            onKeyDown={(e) => e.key === 'Enter' && finish()} />
        </div>

        <button data-testid="login-signin-btn" onClick={finish} className="gr-rise" data-i="4"
          style={{ width: '100%', height: 48, border: 'none', borderRadius: 4, background: 'var(--p-action)', color: 'var(--p-action-fg)', font: '600 15px/1 Inter', cursor: 'pointer' }}>
          Sign In
        </button>

        <div className="g-subtitle-2" style={{ textAlign: 'center', lineHeight: 1.5 }}>
          By signing in you agree to the Greater Industries <a href="#" style={{ color: 'var(--p-primary)', textDecoration: 'none' }}>User Terms of Service</a> and <a href="#" style={{ color: 'var(--p-primary)', textDecoration: 'none' }}>Privacy Policy</a>.
        </div>

        {/* Dev quick sign-in (development only) — id-based, no client-side secrets (§P) */}
        {DEV_LOGIN_ENABLED && (
          <div style={{ marginTop: 4, paddingTop: 16, borderTop: '1px dashed var(--p-border-strong)', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ font: '500 11px/1.2 Inter', color: 'var(--p-placeholder)', letterSpacing: '.04em', textTransform: 'uppercase', textAlign: 'center' }}>Dev quick sign-in</span>
            {DEV_ACCOUNTS.map((a) => (
              <button key={a.id} data-testid={`dev-login-${a.label.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => devSignIn(a)}
                style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', width: '100%', height: 38, padding: '0 12px', borderRadius: 4, cursor: 'pointer',
                  border: '1px dashed var(--p-border-strong)', background: 'transparent', color: 'var(--p-text-2)', font: '500 13px Inter' }}>
                <Icon name="bolt" size={15} color="var(--p-muted)" />
                Sign in as {a.label} ({a.email})
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Theme toggle — flat, bottom-left, no card chrome */}
      <button data-testid="theme-toggle" onClick={cycle}
        style={{ position: 'absolute', left: 20, bottom: 20, display: 'inline-flex', alignItems: 'center', gap: 8,
          border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--p-muted)', font: '500 13px Inter' }}>
        <Icon name={tMeta.icon} size={18} color="currentColor" /> {tMeta.label}
      </button>
    </div>
  );
}

Object.assign(window, { LoginScreen });
