"use client";

import Image from "next/image";
import "./globals.css";

const TWITTER_URL = "https://twitter.com/your_handle"; // замени на свой Twitter

export default function Home() {
  const handleConnectClick = () => {
    alert("Coming soon");
  };

  return (
    <main className="page">
      {/* Верхняя панель: название слева, кнопка Connect wallet справа */}
      <header className="page-header">
        <div className="site-title">ClawdSearcher</div>

        <button className="wallet-button" onClick={handleConnectClick}>
          Connect wallet
        </button>
      </header>

      {/* Центр: маленькое “окно” только с иконкой и названием + кнопка Twitter */}
      <div className="center-shell">
        <section className="card card--compact">
          <div className="card-row">
            <div className="brand-horizontal">
              <div className="brand-logo brand-logo--small">
                <Image
                  src="/logo.jpg"
                  alt="ClawdSearcher logo"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
              <span className="brand-name-fancy">ClawdSearcher</span>
            </div>

            <div className="actions">
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noreferrer"
                className="twitter-button twitter-button--bigger"
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
        </section>
      </div>
    </main>
  );
}
