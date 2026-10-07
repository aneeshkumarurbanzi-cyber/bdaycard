
"use client";

import { useRef, useState } from "react";
import BirthdayOpening from "@/components/BirthdayOpening";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const audioRef = useRef(null);

  /* =========================================
     START MUSIC
  ========================================= */

  const startMusic = () => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.35;

    audioRef.current
      .play()
      .then(() => {
        setMusicPlaying(true);
      })
      .catch((error) => {
        console.log("Music could not start:", error);
      });
  };

  /* =========================================
     TOGGLE MUSIC
  ========================================= */

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => {
          setMusicPlaying(true);
        })
        .catch((error) => {
          console.log("Music could not start:", error);
        });
    } else {
      audioRef.current.pause();
      setMusicPlaying(false);
    }
  };

  /* =========================================
     OPEN INVITATION
  ========================================= */

  const handleOpen = () => {
    setOpened(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7f8] text-[#3b2730]">

      {/* =========================================
          BACKGROUND MUSIC
      ========================================= */}

      <audio
        ref={audioRef}
        src="/music/birthday-bgm.mp3"
        loop
        preload="auto"
      />

      {/* =========================================
          OPENING
      ========================================= */}

      {!opened && (
        <BirthdayOpening
          onOpen={handleOpen}
          onMusicStart={startMusic}
        />
      )}

      {/* =========================================
          MUSIC BUTTON
      ========================================= */}

      {opened && (
        <button
          type="button"
          onClick={toggleMusic}
          aria-label={musicPlaying ? "Pause music" : "Play music"}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-rose-200 bg-white/90 text-xl shadow-xl backdrop-blur-md transition hover:scale-110"
        >
          {musicPlaying ? "🔊" : "🔇"}
        </button>
      )}

      {/* =========================================
          HERO / INVITATION
      ========================================= */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff0f4] via-[#fff8f8] to-[#f9e8ef] px-6">

        {/* Decorative glow */}

        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl" />

        <div className="relative z-10 max-w-4xl text-center">

          <p className="mb-6 text-sm uppercase tracking-[0.45em] text-rose-500">
            You are warmly invited
          </p>

          <h1 className="font-serif text-6xl leading-tight text-[#4a2935] md:text-8xl">
            A Birthday
          </h1>

          <h2 className="mt-2 font-serif text-6xl italic text-rose-500 md:text-8xl">
            Celebration
          </h2>

          <div className="mx-auto my-8 h-px w-20 bg-rose-300" />

          <p className="text-sm uppercase tracking-[0.3em] text-[#795d68]">
            Celebrating
          </p>

          <h3 className="mt-3 font-serif text-4xl text-[#492d38] md:text-5xl">
            Your Name
          </h3>

          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-[#795d68] md:text-lg">
            Join us as we gather together to celebrate a beautiful
            new year of life, laughter, love and unforgettable memories.
          </p>

          <button
            type="button"
            onClick={() =>
              document
                .getElementById("invitation")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="mt-10 rounded-full bg-[#8f405c] px-9 py-4 text-sm font-medium tracking-[0.2em] text-white shadow-xl shadow-rose-300/30 transition hover:-translate-y-1 hover:bg-[#743249]"
          >
            VIEW INVITATION
          </button>

        </div>
      </section>

      {/* =========================================
          INVITATION MESSAGE
      ========================================= */}

      <section
        id="invitation"
        className="relative px-6 py-28"
      >
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.4em] text-rose-400">
            A special invitation
          </p>

          <h2 className="mt-5 font-serif text-5xl text-[#492d38] md:text-6xl">
            Come celebrate with us
          </h2>

          <div className="mx-auto mt-10 h-px w-20 bg-rose-300" />

          <p className="mt-10 text-lg leading-9 text-[#765d67]">
            It would mean so much to have you with us on this special day.
            Let&apos;s come together for an evening filled with laughter,
            delicious food, music and wonderful company.
          </p>

          <p className="mt-6 text-lg leading-9 text-[#765d67]">
            Your presence will make the celebration even more memorable.
            So save the date and join us for a birthday celebration
            filled with joy and beautiful moments.
          </p>

        </div>
      </section>

      {/* =========================================
          EVENT DETAILS
      ========================================= */}

      <section className="bg-[#fff0f3] px-6 py-28">

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[0.4em] text-rose-400">
              Save the date
            </p>

            <h2 className="mt-4 font-serif text-5xl text-[#492d38] md:text-6xl">
              Celebration Details
            </h2>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <EventCard
              icon="📅"
              title="Date"
              value="Saturday"
              detail="12 December 2026"
            />

            <EventCard
              icon="⏰"
              title="Time"
              value="6:30 PM"
              detail="Please arrive by 6:15 PM"
            />

            <EventCard
              icon="📍"
              title="Venue"
              value="The Grand Ballroom"
              detail="Thiruvananthapuram, Kerala"
            />

          </div>

        </div>
      </section>

      {/* =========================================
          CELEBRATION
      ========================================= */}

      <section className="px-6 py-28">

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[0.4em] text-rose-400">
              An evening to remember
            </p>

            <h2 className="mt-4 font-serif text-5xl text-[#492d38] md:text-6xl">
              What&apos;s Waiting For You
            </h2>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <EventCard
              icon="🎂"
              title="Birthday Cake"
              value="Make a Wish"
              detail="A special cake-cutting moment to begin the celebration."
            />

            <EventCard
              icon="🎶"
              title="Music & Fun"
              value="Let&apos;s Celebrate"
              detail="Good music, laughter and plenty of reasons to dance."
            />

            <EventCard
              icon="🍽️"
              title="Dinner"
              value="Good Food"
              detail="Enjoy a delicious evening with friends and family."
            />

          </div>

        </div>
      </section>

      {/* =========================================
          MEMORIES / GALLERY
      ========================================= */}

      <section className="bg-[#fff0f3] px-6 py-28">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[0.4em] text-rose-400">
              Moments worth remembering
            </p>

            <h2 className="mt-4 font-serif text-5xl text-[#492d38] md:text-6xl">
              A Few Memories
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-[#806873]">
              Here&apos;s to the moments we&apos;ve shared and all the
              wonderful memories still waiting to be made.
            </p>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">

            {[
              "/images/birthday-1.jpg",
              "/images/birthday-2.jpg",
              "/images/birthday-3.jpg",
            ].map((src, index) => (
              <div
                key={src}
                className={`group overflow-hidden rounded-3xl ${
                  index === 1 ? "md:translate-y-10" : ""
                }`}
              >
                <img
                  src={src}
                  alt={`Birthday memory ${index + 1}`}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================
          RSVP
      ========================================= */}

      <section className="px-6 py-28">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.4em] text-rose-400">
            We hope you can join us
          </p>

          <h2 className="mt-5 font-serif text-5xl text-[#492d38] md:text-6xl">
            Will You Be There?
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-[#765d67]">
            Your presence is the best gift we could ask for.
            Please let us know if you&apos;ll be joining the celebration.
          </p>

          <button
            type="button"
            className="mt-10 rounded-full bg-[#8f405c] px-10 py-4 text-sm font-medium tracking-[0.2em] text-white shadow-xl shadow-rose-300/30 transition hover:-translate-y-1 hover:bg-[#743249]"
          >
            CONFIRM ATTENDANCE
          </button>

        </div>
      </section>

      {/* =========================================
          FINAL INVITATION
      ========================================= */}

      <section className="relative overflow-hidden bg-[#26151d] px-6 py-32 text-center">

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/10 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-3xl">

          <div className="text-5xl">
            🎂
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.5em] text-rose-300">
            One more thing
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-tight text-white md:text-7xl">
            Your presence
            <span className="block italic text-rose-300">
              will make it special.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl leading-8 text-white/60">
            Come with your smiles, your laughter and your wonderful
            energy. Let&apos;s make this birthday one to remember.
          </p>

          <div className="mt-12 text-2xl text-rose-300">
            ✨
          </div>

        </div>

      </section>

      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="bg-[#180e14] px-6 py-12 text-center">

        <p className="text-xs uppercase tracking-[0.4em] text-rose-300">
          You are invited
        </p>

        <p className="mt-4 font-serif text-3xl text-white">
          Your Name&apos;s Birthday Celebration
        </p>

        <p className="mt-4 text-xs tracking-[0.25em] text-white/40">
          12 DECEMBER 2026 · THIRUVANANTHAPURAM
        </p>

        <p className="mt-8 text-sm text-white/30">
          With love, we look forward to celebrating with you ❤️
        </p>

      </footer>

    </main>
  );
}


/* =========================================
   EVENT CARD
========================================= */

function EventCard({ icon, title, value, detail }) {
  return (
    <div className="rounded-3xl border border-rose-100 bg-white p-10 text-center shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-rose-100">

      <div className="text-5xl">
        {icon}
      </div>

      <p className="mt-6 text-xs uppercase tracking-[0.3em] text-rose-400">
        {title}
      </p>

      <h3 className="mt-3 font-serif text-3xl text-[#492d38]">
        {value}
      </h3>

      <p className="mt-3 leading-7 text-[#806873]">
        {detail}
      </p>

    </div>
  );
}
