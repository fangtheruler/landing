"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import "./globals.css";

const TWITTER_URL = "https://twitter.com/your_handle";

export default function Home() {
  const [soon, setSoon] = useState(false);
  const [showSlots, setShowSlots] = useState(false);
  const tiles = ["Slot 1", "Slot 2", "Slot 3", "Slot 4"];

  useEffect(() => {
    const el = document.documentElement;
    const down = () => el.classList.add("claw-pressed");
    const up = () => el.classList.remove("claw-pressed");
    el.addEventListener("mousedown", down);
    el.addEventListener("mouseup", up);
    el.addEventListener("mouseleave", up);
    return () => {
      el.removeEventListener("mousedown", down);
      el.removeEventListener("mouseup", up);
      el.removeEventListener("mouseleave", up);
    };
  }, []);

  return (
    <div className="page">
      <div className="logoBg" aria-hidden="true">
        <Image
          src="/logo-bg.png"
          alt=""
          fill
          className="logoBgImg"
          priority
        />
      </div>

      <header className="header">
        <button
          type="button"
          className="brandBlock"
          onClick={() => setShowSlots((v) => !v)}
        >
          <div className="brandLogo">
            <Image
              src="/logo.jpg"
              alt="ClawdSearcher"
              width={40}
              height={40}
              className="brandLogoImg"
              priority
            />
          </div>
          <span className="brandTitle">ClawdSearcher</span>
        </button>

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
        <p className="tagline">
          We are looking for gems at an early stage in the Clawd ecosystem.
        </p>

        {showSlots && (
          <div className="miniGrid">
            {tiles.map((label, i) => (
              <button
                key={label}
                type="button"
                className="miniTile"
                onClick={() => console.log(`Clicked tile ${i + 1}`)}
              >
                {label}
              </button>
            ))}
          </div>
        )}

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
