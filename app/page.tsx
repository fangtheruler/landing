import "./globals.css";

const TWITTER_URL = "https://twitter.com/your_handle"; // замени на свой Twitter

export default function Home() {
  return (
    <main className="main-shell">
      <div className="glow-orbit" aria-hidden="true" />

      <section className="card">
        <div className="card-grid">
          <div>
            <div className="card-header">
              <span className="pill">
                <span className="pill-dot" />
                LIVE ON VERCEL
              </span>
              <span className="badge-beta">Tech preview</span>
            </div>

            <h1 className="title">
              Технологичный микролендинг
              <br />
              с выходом в <span className="accent">Twitter</span>.
            </h1>

            <p className="subtitle">
              Лёгкий GitHub‑репозиторий, который разворачивается на Vercel за пару
              кликов. Минималистичный интерфейс, неоновый акцент и маленькая
              кнопка для быстрого перехода в твой Twitter.
            </p>

            <div className="meta-row">
              <div className="meta-chip">
                <span className="meta-dot" />
                Next.js • Edge‑ready
              </div>
              <div className="meta-chip">
                <span className="meta-dot" />
                Zero backend • 100% static
              </div>
            </div>

            <div className="actions">
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noreferrer"
                className="twitter-button"
              >
                <span className="twitter-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.23 3H20.09L13.98 9.98L21.17 21H15.66L11.23 14.25L6.06 21H3.19L9.76 13.52L2.83 3H8.47L12.45 9.12L17.23 3ZM16.27 19.1H17.79L7.82 4.8H6.18L16.27 19.1Z" />
                  </svg>
                </span>
                <span className="twitter-label">Twitter</span>
                <span className="twitter-sub">open profile</span>
              </a>
            </div>

            <p className="caption">
              Кнопка намеренно{" "}
              <span style={{ opacity: 0.9 }}>крошечная, но заметная</span>.
              Идеально для био‑ссылок и персональных лендингов.
            </p>
          </div>

          <aside className="visual-panel" aria-hidden="true">
            <div className="visual-header">
              <div className="visual-dots">
                <span className="visual-dot" />
                <span className="visual-dot" />
                <span className="visual-dot" />
              </div>
              <span className="visual-badge">deploy · vercel</span>
            </div>

            <div className="visual-body">
              <div className="visual-metrics">
                <div className="metric-box">
                  <div className="metric-label">Cold start</div>
                  <div className="metric-value">23 ms</div>
                  <div className="metric-spark" />
                </div>
                <div className="metric-box">
                  <div className="metric-label">Bundle size</div>
                  <div className="metric-value">12.4 kB</div>
                  <div className="metric-spark" />
                </div>
                <div className="metric-box">
                  <div className="metric-label">FPS</div>
                  <div className="metric-value">144</div>
                  <div className="metric-spark" />
                </div>
                <div className="metric-box">
                  <div className="metric-label">Uptime</div>
                  <div className="metric-value">99.99%</div>
                  <div className="metric-spark" />
                </div>
              </div>

              <div className="visual-footer">
                <span className="visual-tag">/twitter-bridge</span>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span className="visual-ping" />
                  edge ready
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
