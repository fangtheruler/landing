"use client";

import Image from "next/image";
import { useState } from "react";
import "./globals.css";

const TWITTER_URL = "https://twitter.com/your_handle"; // поменяй на свой

export default function Home() {
  const [soon, setSoon] = useState(false);

  return (
    <div className="page">
      <header className="header">
        <div className="brandTopLeft">ClawdSearcher</div>

        <div className="headerRight">
          <button
            className="walletButton"
            type="button"
            onClick={() => setSoon(true)}
          >
            Connect wallet
          </button>

          {soon ? <div className="soon">Coming soon</div> : null}
        </div>
      </header>

      <main className="main">
        <section className="miniCard">
          <div className="miniLogo">
            <Image
              src="/logo.jpg"
              alt="ClawdSearcher logo"
              width={56}
              height={56}
              className="miniLogoImg"
              priority
            />
          </div>

          <div className="miniTitle">ClawdSearcher</div>
        </section>

        <a
          href={TWITTER_URL}
          target="_blank"
          rel="noreferrer"
          className="twitterBtn"
          aria-label="Open Twitter"
          title="Twitter"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="xIcon">
            <path d="M17.23 3H20.09L13.98 9.98L21.17 21H15.66L11.23 14.25L6.06 21H3.19L9.76 13.52L2.83 3H8.47L12.45 9.12L17.23 3ZM16.27 19.1H17.79L7.82 4.8H6.18L16.27 19.1Z" />
          </svg>
        </a>
      </main>
    </div>
  );
}
