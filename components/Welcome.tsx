"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Welcome() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const characterRef = useRef<HTMLDivElement | null>(null);
  const orbRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const character = characterRef.current;
    const orb = orbRef.current;

    if (!section || !character || !orb) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .from(".anb-hero-brand", {
          y: 20,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          ".anb-hero-title-line",
          {
            y: 70,
            opacity: 0,
            duration: 0.9,
            stagger: 0.12,
          },
          "-=0.35"
        )
        .from(
          ".anb-hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.35"
        )
        .from(
          ".anb-hero-actions",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ".anb-hero-stat",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.25"
        )
        .from(
          character,
          {
            x: 80,
            opacity: 0,
            scale: 0.92,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .from(
          ".anb-hero-bubble",
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            stagger: 0.15,
          },
          "-=0.55"
        );

      gsap.to(character, {
        y: -10,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(orb, {
        scale: 1.035,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".anb-hero-ring", {
        rotation: 360,
        duration: 28,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".anb-hero-dot", {
        y: -15,
        duration: 2.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".anb-hero-star", {
        rotation: 15,
        scale: 1.08,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".anb-hero-bubble.idea", {
        y: -8,
        duration: 2.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".anb-hero-bubble.build", {
        y: 8,
        duration: 2.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".anb-hero-grid", {
        y: 30,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(character, {
        y: -55,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".anb-hero-copy", {
        y: -35,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="anb-hero"
      aria-label="Anubhav Solutions introduction"
    >
      <div className="anb-hero-grid" />

      <div className="anb-hero-glow anb-hero-glow-one" />
      <div className="anb-hero-glow anb-hero-glow-two" />

      <div className="anb-hero-ring anb-hero-ring-one" />
      <div className="anb-hero-ring anb-hero-ring-two" />

      <span className="anb-hero-dot anb-hero-dot-one" />
      <span className="anb-hero-dot anb-hero-dot-two" />

      <main className="anb-hero-inner">
        <div className="anb-hero-copy">
          <div className="anb-hero-brand">
            <span className="anb-hero-brand-dot" />

            <span>
              ANUBHAV SOLUTIONS · DIGITAL TECHNOLOGY STUDIO
            </span>
          </div>

          <div className="anb-hero-title">
            <div className="anb-hero-title-line">
              We turn
            </div>

            <div className="anb-hero-title-line">
              ideas into
            </div>

            <div className="anb-hero-title-line anb-hero-title-accent">
              digital
            </div>

            <div className="anb-hero-title-line anb-hero-title-accent">
              experiences.
            </div>
          </div>

          <p className="anb-hero-description">
            We design and build websites, software, mobile applications
            and digital experiences that help ambitious businesses move
            forward.
          </p>

          <div className="anb-hero-actions">
            <a href="#contact" className="anb-hero-primary">
              Start a Project <span>↗</span>
            </a>

            <a href="#work" className="anb-hero-secondary">
              Explore Our Work <span>↓</span>
            </a>
          </div>

          <div className="anb-hero-stats">
            <div className="anb-hero-stat">
              <strong>01+</strong>
              <span>Years Experience</span>
            </div>

            <div className="anb-hero-stat">
              <strong>03+</strong>
              <span>Projects Delivered</span>
            </div>

            <div className="anb-hero-stat">
              <strong>05+</strong>
              <span>Happy Clients</span>
            </div>
          </div>
        </div>

        <div className="anb-hero-visual">
          <div ref={orbRef} className="anb-hero-orb">
            <div className="anb-hero-orb-inner" />

            <div className="anb-hero-ring anb-hero-visual-ring-one" />
            <div className="anb-hero-ring anb-hero-visual-ring-two" />

            <div className="anb-hero-star">✦</div>

            <div
              ref={characterRef}
              className="anb-hero-character"
            >
              <svg
                viewBox="0 0 420 500"
                className="anb-character-svg"
                role="img"
                aria-label="Anubhav Solutions digital designer"
              >
                {/* Hair */}
                <path
                  d="M145 130 C145 70 190 38 250 45 C315 52 337 95 322 160 L286 145 L260 113 L214 132 L178 125 Z"
                  fill="#1d1020"
                />

                {/* Face */}
                <circle
                  cx="230"
                  cy="166"
                  r="73"
                  fill="#E8A36F"
                />

                {/* Ear */}
                <circle
                  cx="159"
                  cy="174"
                  r="14"
                  fill="#E8A36F"
                />

                <circle
                  cx="301"
                  cy="174"
                  r="14"
                  fill="#E8A36F"
                />

                {/* Hair front */}
                <path
                  d="M158 140 C165 85 210 62 260 75 C288 82 310 104 313 137 C285 126 267 112 251 96 C234 118 205 132 158 140 Z"
                  fill="#1d1020"
                />

                {/* Eyes */}
                <circle
                  cx="204"
                  cy="171"
                  r="7"
                  fill="#241522"
                />

                <circle
                  cx="258"
                  cy="171"
                  r="7"
                  fill="#241522"
                />

                {/* Smile */}
                <path
                  d="M210 202 Q230 220 251 202"
                  fill="none"
                  stroke="#241522"
                  strokeWidth="6"
                  strokeLinecap="round"
                />

                {/* Body */}
                <path
                  d="M150 250 Q230 220 310 250 L330 385 Q230 425 130 385 Z"
                  fill="#593051"
                />

                {/* Neck */}
                <path
                  d="M205 226 L205 260 Q230 277 255 260 L255 226 Z"
                  fill="#D99261"
                />

                {/* Shirt collar */}
                <path
                  d="M201 249 L230 276 L259 249 L275 265 Q230 305 185 265 Z"
                  fill="#241522"
                />

                {/* Laptop */}
                <rect
                  x="145"
                  y="300"
                  width="170"
                  height="105"
                  rx="12"
                  fill="#241522"
                />

                <rect
                  x="157"
                  y="312"
                  width="146"
                  height="78"
                  rx="8"
                  fill="#FFF8F0"
                />

                {/* Laptop screen details */}
                <rect
                  x="173"
                  y="330"
                  width="72"
                  height="7"
                  rx="4"
                  fill="#7D4B73"
                />

                <rect
                  x="173"
                  y="347"
                  width="105"
                  height="7"
                  rx="4"
                  fill="#C28EB8"
                />

                <rect
                  x="173"
                  y="364"
                  width="61"
                  height="7"
                  rx="4"
                  fill="#35152F"
                />

                {/* Laptop base */}
                <path
                  d="M130 405 L330 405 L347 421 L113 421 Z"
                  fill="#241522"
                />

                {/* Left arm */}
                <path
                  d="M153 275 Q125 305 146 337 L170 322 L184 285 Z"
                  fill="#593051"
                />

                {/* Right raised arm */}
                <path
                  d="M298 274 Q330 250 322 205 L305 160 L278 170 L292 220 L275 260 Z"
                  fill="#593051"
                />

                {/* Raised hand */}
                <path
                  d="M304 166
                     C294 151 296 135 306 126
                     C313 120 320 125 320 135
                     L321 148
                     L328 123
                     C330 114 339 115 341 123
                     L337 149
                     L345 128
                     C348 120 356 122 357 130
                     L350 154
                     L355 143
                     C358 135 367 138 367 146
                     C365 161 354 174 338 181 Z"
                  fill="#E8A36F"
                />

                {/* Laptop small A */}
                <circle
                  cx="290"
                  cy="315"
                  r="14"
                  fill="#FFF8F0"
                />

                <text
                  x="290"
                  y="320"
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="800"
                  fill="#35152F"
                >
                  A
                </text>

                {/* Legs */}
                <path
                  d="M185 402 L218 402 L200 458 L158 458 Z"
                  fill="#241522"
                />

                <path
                  d="M242 402 L275 402 L306 458 L265 458 Z"
                  fill="#241522"
                />

                {/* Shoes */}
                <ellipse
                  cx="177"
                  cy="460"
                  rx="40"
                  ry="14"
                  fill="#241522"
                />

                <ellipse
                  cx="285"
                  cy="460"
                  rx="40"
                  ry="14"
                  fill="#241522"
                />
              </svg>
            </div>

            <div className="anb-hero-bubble idea">
              Got an idea? 💡
            </div>

            <div className="anb-hero-bubble build">
              Let&apos;s build it.
            </div>
          </div>
        </div>
      </main>

      <div className="anb-hero-bottom">
        <span>STRATEGY</span>
        <span>DESIGN</span>
        <span>BUILD</span>

        <div className="anb-hero-scroll">
          SCROLL TO EXPLORE ↓
        </div>
      </div>

      <style jsx>{`
        .anb-hero {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 78% 46%,
              rgba(207, 167, 205, 0.2),
              transparent 25%
            ),
            linear-gradient(
              135deg,
              #fff8f0 0%,
              #f7ebdd 52%,
              #f4e4dc 100%
            );
          color: #241522;
          isolation: isolate;
        }

        .anb-hero-grid {
          position: absolute;
          inset: 0;
          opacity: 0.22;
          background-image:
            linear-gradient(
              rgba(53, 21, 47, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(53, 21, 47, 0.08) 1px,
              transparent 1px
            );
          background-size: 56px 56px;
          pointer-events: none;
        }

        .anb-hero-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(1px);
          pointer-events: none;
          z-index: -1;
        }

        .anb-hero-glow-one {
          width: 430px;
          height: 430px;
          right: -150px;
          top: 110px;
          background: rgba(211, 179, 202, 0.25);
        }

        .anb-hero-glow-two {
          width: 300px;
          height: 300px;
          left: -150px;
          bottom: -100px;
          background: rgba(218, 194, 176, 0.28);
        }

        .anb-hero-ring {
          position: absolute;
          border: 1px solid rgba(53, 21, 47, 0.12);
          border-radius: 50%;
          pointer-events: none;
        }

        .anb-hero-ring-one {
          width: 520px;
          height: 520px;
          right: -180px;
          top: -180px;
        }

        .anb-hero-ring-two {
          width: 350px;
          height: 350px;
          left: -200px;
          bottom: -190px;
        }

        .anb-hero-dot {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #35152f;
          z-index: 2;
        }

        .anb-hero-dot-one {
          left: 52%;
          top: 61%;
        }

        .anb-hero-dot-two {
          right: 13%;
          top: 21%;
          width: 7px;
          height: 7px;
          opacity: 0.6;
        }

        .anb-hero-inner {
          width: min(1380px, calc(100% - 80px));
          min-height: 100vh;
          margin: 0 auto;
          padding: 155px 0 90px;
          display: grid;
          grid-template-columns: 1.02fr 0.98fr;
          align-items: center;
          gap: 40px;
          position: relative;
          z-index: 3;
        }

        .anb-hero-copy {
          position: relative;
          z-index: 5;
        }

        .anb-hero-brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 32px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #6d5367;
        }

        .anb-hero-brand-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #35152f;
          box-shadow: 0 0 0 6px rgba(53, 21, 47, 0.08);
        }

        .anb-hero-title {
          max-width: 800px;
          font-size: clamp(58px, 7vw, 112px);
          line-height: 0.87;
          letter-spacing: -0.065em;
          font-weight: 900;
        }

        .anb-hero-title-line {
          display: block;
          overflow: hidden;
        }

        .anb-hero-title-accent {
          color: #7a3d70;
        }

        .anb-hero-description {
          max-width: 650px;
          margin: 38px 0 0;
          font-size: clamp(16px, 1.35vw, 20px);
          line-height: 1.65;
          color: #6f5a6b;
        }

        .anb-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }

        .anb-hero-primary,
        .anb-hero-secondary {
          min-height: 56px;
          padding: 0 25px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 800;
          transition:
            transform 0.3s ease,
            background 0.3s ease,
            color 0.3s ease;
        }

        .anb-hero-primary {
          background: #35152f;
          color: #fff8f0;
          box-shadow: 0 15px 35px rgba(53, 21, 47, 0.14);
        }

        .anb-hero-secondary {
          border: 1px solid #6c4a63;
          color: #35152f;
          background: rgba(255, 248, 240, 0.45);
        }

        .anb-hero-primary:hover,
        .anb-hero-secondary:hover {
          transform: translateY(-4px);
        }

        .anb-hero-primary:hover {
          background: #5a3152;
        }

        .anb-hero-secondary:hover {
          background: #35152f;
          color: #fff8f0;
        }

        .anb-hero-stats {
          display: flex;
          margin-top: 48px;
          max-width: 600px;
        }

        .anb-hero-stat {
          flex: 1;
          padding-right: 25px;
          margin-right: 25px;
          border-right: 1px solid rgba(53, 21, 47, 0.18);
        }

        .anb-hero-stat:last-child {
          border-right: 0;
          margin-right: 0;
        }

        .anb-hero-stat strong {
          display: block;
          font-size: 26px;
          line-height: 1;
          color: #35152f;
        }

        .anb-hero-stat span {
          display: block;
          margin-top: 8px;
          color: #806b7b;
          font-size: 12px;
        }

        .anb-hero-visual {
          min-height: 610px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .anb-hero-orb {
          width: min(600px, 42vw);
          aspect-ratio: 1;
          border-radius: 50%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(
              circle at 50% 45%,
              rgba(255, 248, 240, 0.85),
              rgba(226, 192, 221, 0.65) 55%,
              rgba(198, 159, 192, 0.2) 75%,
              transparent 76%
            );
          box-shadow:
            0 30px 100px rgba(53, 21, 47, 0.08),
            inset 0 0 80px rgba(255, 255, 255, 0.3);
        }

        .anb-hero-orb-inner {
          position: absolute;
          inset: 7%;
          border-radius: 50%;
          border: 1px solid rgba(53, 21, 47, 0.12);
        }

        .anb-hero-visual-ring-one {
          inset: -3%;
          width: 106%;
          height: 106%;
        }

        .anb-hero-visual-ring-two {
          inset: 3%;
          width: 94%;
          height: 94%;
          border-style: dashed;
          opacity: 0.5;
        }

        .anb-hero-character {
          width: 76%;
          position: relative;
          z-index: 4;
          transform-origin: center bottom;
        }

        .anb-character-svg {
          display: block;
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .anb-hero-bubble {
          position: absolute;
          z-index: 8;
          padding: 15px 20px;
          border-radius: 18px;
          background: #fff8f0;
          color: #35152f;
          font-size: 13px;
          font-weight: 800;
          box-shadow: 0 15px 35px rgba(53, 21, 47, 0.1);
        }

        .anb-hero-bubble::after {
          content: "";
          position: absolute;
          bottom: -9px;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 12px solid #fff8f0;
        }

        .anb-hero-bubble.idea {
          right: -3%;
          top: 25%;
        }

        .anb-hero-bubble.idea::after {
          left: 25px;
        }

        .anb-hero-bubble.build {
          left: -3%;
          bottom: 22%;
        }

        .anb-hero-bubble.build::after {
          right: 25px;
        }

        .anb-hero-star {
          position: absolute;
          left: 27%;
          top: 30%;
          font-size: 30px;
          color: #8b6384;
          z-index: 7;
        }

        .anb-hero-bottom {
          width: min(1380px, calc(100% - 80px));
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 60px;
          z-index: 5;
          color: #8a7183;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .anb-hero-scroll {
          margin-left: auto;
        }

        @media (max-width: 1100px) {
          .anb-hero-inner {
            grid-template-columns: 1fr 0.85fr;
          }

          .anb-hero-title {
            font-size: clamp(55px, 7vw, 85px);
          }

          .anb-hero-orb {
            width: 48vw;
          }
        }

        @media (max-width: 820px) {
          .anb-hero {
            min-height: auto;
          }

          .anb-hero-inner {
            width: calc(100% - 40px);
            min-height: auto;
            padding: 150px 0 100px;
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .anb-hero-title {
            font-size: clamp(52px, 14vw, 82px);
            line-height: 0.9;
          }

          .anb-hero-description {
            max-width: 580px;
            margin-top: 28px;
          }

          .anb-hero-visual {
            min-height: 500px;
          }

          .anb-hero-orb {
            width: min(520px, 90vw);
          }

          .anb-hero-character {
            width: 72%;
          }

          .anb-hero-bubble.idea {
            right: 0;
          }

          .anb-hero-bubble.build {
            left: 0;
          }

          .anb-hero-bottom {
            width: calc(100% - 40px);
            bottom: 24px;
            gap: 20px;
          }
        }

        @media (max-width: 560px) {
          .anb-hero-inner {
            width: calc(100% - 28px);
            padding-top: 125px;
          }

          .anb-hero-brand {
            font-size: 9px;
            letter-spacing: 0.13em;
            margin-bottom: 24px;
          }

          .anb-hero-brand-dot {
            width: 7px;
            height: 7px;
          }

          .anb-hero-title {
            font-size: clamp(47px, 15vw, 68px);
          }

          .anb-hero-description {
            font-size: 15px;
            line-height: 1.55;
          }

          .anb-hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .anb-hero-primary,
          .anb-hero-secondary {
            width: 100%;
          }

          .anb-hero-stats {
            gap: 10px;
            margin-top: 35px;
          }

          .anb-hero-stat {
            padding-right: 10px;
            margin-right: 10px;
          }

          .anb-hero-stat strong {
            font-size: 20px;
          }

          .anb-hero-stat span {
            font-size: 9px;
          }

          .anb-hero-visual {
            min-height: 390px;
          }

          .anb-hero-orb {
            width: 94vw;
          }

          .anb-hero-bubble {
            padding: 11px 14px;
            font-size: 10px;
          }

          .anb-hero-bubble.idea {
            right: -2px;
            top: 18%;
          }

          .anb-hero-bubble.build {
            left: -2px;
            bottom: 15%;
          }

          .anb-hero-star {
            font-size: 20px;
          }

          .anb-hero-bottom {
            display: none;
          }

          .anb-hero-dot-one {
            left: 15%;
            top: 52%;
          }

          .anb-hero-dot-two {
            right: 10%;
            top: 30%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .anb-hero *,
          .anb-hero *::before,
          .anb-hero *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}