
"use client";

import { useState } from "react";

const particles = [
  { left: "8%", top: "12%", delay: "0.2s" },
  { left: "18%", top: "38%", delay: "1.1s" },
  { left: "27%", top: "72%", delay: "0.6s" },
  { left: "36%", top: "20%", delay: "1.7s" },
  { left: "45%", top: "82%", delay: "0.9s" },
  { left: "54%", top: "32%", delay: "1.4s" },
  { left: "63%", top: "67%", delay: "0.4s" },
  { left: "72%", top: "15%", delay: "1.8s" },
  { left: "81%", top: "48%", delay: "0.7s" },
  { left: "91%", top: "78%", delay: "1.2s" },
  { left: "12%", top: "88%", delay: "1.6s" },
  { left: "22%", top: "58%", delay: "0.3s" },
  { left: "32%", top: "8%", delay: "1.9s" },
  { left: "42%", top: "52%", delay: "0.8s" },
  { left: "58%", top: "90%", delay: "1.5s" },
  { left: "68%", top: "42%", delay: "0.5s" },
  { left: "78%", top: "84%", delay: "1.3s" },
  { left: "88%", top: "24%", delay: "0.1s" },
  { left: "5%", top: "55%", delay: "1.0s" },
  { left: "96%", top: "60%", delay: "1.7s" },
];

const balloons = [
  {
    left: "4%",
    top: "18%",
    size: "h-20 w-16",
    color: "bg-pink-500",
    delay: "0s",
    duration: "5s",
  },
  {
    left: "12%",
    top: "65%",
    size: "h-16 w-12",
    color: "bg-purple-500",
    delay: "1.2s",
    duration: "6s",
  },
  {
    left: "82%",
    top: "16%",
    size: "h-20 w-16",
    color: "bg-rose-500",
    delay: "0.8s",
    duration: "5.5s",
  },
  {
    left: "91%",
    top: "58%",
    size: "h-24 w-18",
    color: "bg-pink-400",
    delay: "1.8s",
    duration: "6.5s",
  },
  {
    left: "23%",
    top: "8%",
    size: "h-14 w-11",
    color: "bg-fuchsia-400",
    delay: "2s",
    duration: "5.8s",
  },
  {
    left: "73%",
    top: "75%",
    size: "h-16 w-12",
    color: "bg-purple-400",
    delay: "0.5s",
    duration: "6.2s",
  },
];

export default function BirthdayOpening({ onOpen, onMusicStart }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;

    // Start BGM from the user's click
    onMusicStart?.();

    // Start opening animation
    setOpening(true);

    // Reveal birthday page
    setTimeout(() => {
      onOpen();
    }, 2200);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden
      bg-[#160f1c] transition-all duration-[1800ms]
      ${
        opening
          ? "pointer-events-none scale-110 opacity-0"
          : "scale-100 opacity-100"
      }`}
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[120px]" />

      <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/10 blur-[80px]" />

      {/* =========================================
          BALLOONS
      ========================================= */}

      <div className="absolute inset-0 overflow-hidden">

        {balloons.map((balloon, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-[1800ms]
              ${opening ? "scale-150 opacity-0" : "opacity-100"}
            `}
            style={{
              left: balloon.left,
              top: balloon.top,
            }}
          >
            {/* Balloon */}
            <div
              className={`relative ${balloon.size} ${balloon.color}
              rounded-[50%_50%_45%_45%]
              shadow-[inset_-8px_-10px_15px_rgba(0,0,0,0.18),0_10px_30px_rgba(236,72,153,0.2)]
              animate-bounce`}
              style={{
                animationDelay: balloon.delay,
                animationDuration: balloon.duration,
              }}
            >
              {/* Balloon shine */}
              <div className="absolute left-[20%] top-[15%] h-[25%] w-[20%] rounded-full bg-white/30 blur-[2px]" />

              {/* Balloon knot */}
              <div
                className={`absolute -bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 ${balloon.color}`}
              />
            </div>

            {/* Balloon string */}
            <div className="mx-auto h-28 w-px bg-white/20" />
          </div>
        ))}

      </div>

      {/* =========================================
          FLOATING PARTICLES
      ========================================= */}

      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, index) => (
          <span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-pink-200/60 animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* =========================================
          DECORATIVE HEARTS
      ========================================= */}

      <div
        className={`absolute left-[18%] top-[28%] text-xl text-pink-300/50
        transition-all duration-[1500ms]
        ${opening ? "scale-150 opacity-0" : "animate-pulse"}`}
      >
        ♥
      </div>

      <div
        className={`absolute right-[20%] top-[35%] text-2xl text-rose-300/40
        transition-all duration-[1500ms]
        ${opening ? "scale-150 opacity-0" : "animate-pulse"}`}
      >
        ✦
      </div>

      <div
        className={`absolute bottom-[22%] left-[25%] text-lg text-pink-300/40
        transition-all duration-[1500ms]
        ${opening ? "scale-150 opacity-0" : "animate-pulse"}`}
      >
        ♥
      </div>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <div className="relative z-10 flex flex-col items-center text-center">

        {/* Top text */}

        <p
          className={`mb-6 text-xs uppercase tracking-[0.5em] text-pink-200/70
          transition-all duration-1000
          ${
            opening
              ? "-translate-y-8 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          A little surprise for you
        </p>

        {/* =========================================
            GIFT
        ========================================= */}

        <button
          type="button"
          onClick={handleOpen}
          aria-label="Open birthday gift"
          className={`group relative h-52 w-52 transition-all duration-[1800ms]
          ${
            opening
              ? "scale-[1.8] rotate-6"
              : "hover:scale-105"
          }`}
        >

          {/* Gift glow */}

          <div className="absolute inset-0 rounded-3xl bg-pink-400/20 blur-3xl transition group-hover:bg-pink-400/30" />

          {/* =========================================
              GIFT BOX
          ========================================= */}

          <div className="absolute bottom-4 left-1/2 h-32 w-40 -translate-x-1/2 rounded-b-2xl bg-gradient-to-br from-pink-500 to-rose-700 shadow-2xl">

            {/* Vertical ribbon */}

            <div className="absolute left-1/2 top-0 h-full w-8 -translate-x-1/2 bg-pink-200/80" />

            {/* =====================================
                BOW
            ===================================== */}

            <div className="absolute -top-10 left-1/2 flex -translate-x-1/2 items-center">

              <div className="h-12 w-16 rotate-[25deg] rounded-full bg-pink-300 shadow-lg" />

              <div className="h-12 w-16 -rotate-[25deg] rounded-full bg-pink-300 shadow-lg" />

              <div className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400 shadow-md" />

            </div>

          </div>

          {/* =========================================
              GIFT LID
          ========================================= */}

          <div
            className={`absolute left-1/2 top-10 h-12 w-48 -translate-x-1/2 rounded-xl
            bg-gradient-to-r from-rose-600 to-pink-500 shadow-xl
            transition-all duration-1000
            ${
              opening
                ? "-translate-y-24 rotate-6"
                : ""
            }`}
          >

            <div className="absolute left-1/2 h-full w-8 -translate-x-1/2 bg-pink-200/80" />

          </div>

          {/* =========================================
              GIFT HEART
          ========================================= */}

          <div
            className={`absolute left-1/2 top-[65%] -translate-x-1/2 -translate-y-1/2
            text-4xl text-white
            transition-all duration-700
            ${
              opening
                ? "scale-[2] opacity-0"
                : "scale-100"
            }`}
          >
            ♥
          </div>

        </button>

        {/* =========================================
            BOTTOM TEXT
        ========================================= */}

        <div
          className={`mt-8 transition-all duration-1000
          ${
            opening
              ? "translate-y-10 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >

          <h1 className="font-serif text-4xl text-white md:text-5xl">
            Tap to open
          </h1>

          <p className="mt-3 text-sm tracking-[0.3em] text-pink-200/60">
            YOUR SPECIAL DAY AWAITS
          </p>

        </div>

      </div>

      {/* =========================================
          BOTTOM MUSIC MESSAGE
      ========================================= */}

      <div
        className={`absolute bottom-8 left-8 flex items-center gap-3 text-xs text-pink-200/50
        transition-all duration-1000
        ${
          opening
            ? "translate-y-5 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <span className="text-lg">♫</span>

        <span>
          Background music
        </span>
      </div>

      {/* =========================================
          BOTTOM DECORATION
      ========================================= */}

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2
        text-xl text-pink-300/60
        transition-all duration-1000
        ${
          opening
            ? "translate-y-5 opacity-0"
            : "animate-bounce"
        }`}
      >
        ↓
      </div>

    </div>
  );
}
