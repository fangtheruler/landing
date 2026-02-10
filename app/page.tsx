import Image from "next/image";
import "./globals.css";

const TWITTER_URL = "https://twitter.com/your_handle"; // замени на свой Twitter

export default function Home() {
  return (
    <main className="main-shell">
      <div className="glow-orbit" aria-hidden="true" />

      <section className="card">
        <div className="card-grid">
          <div>
            <div className="brand">
              <div className="brand-logo">
                <Image
                  src="/logo.jpg"
                  alt="ClawdSearcher logo"
                  width={56}
                  height={56}
                  priority
                />
              </div>
              <div className="brand-title">ClawdSearcher</div>
            </div>

            <div className="actions">
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noreferrer"
                className="twitter-button twitter-button--icon-only"
                aria-label="Open Twitter profile"
              >
                <span className="twitter-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.23 3H20.09L13.98 9.98L21.17 21H15.66L11.23 14.25L6.06 21H3.19L9.76 13.52L2.83 3H8.47L12.45 9.12L17.23 3ZM16.27 19.1H17.79L7.82 4.8H6.18L16.27 19.1Z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <aside className="visual-panel" aria-hidden="true">
            <div className="visual-body">
              <div className="visual-metrics" />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
