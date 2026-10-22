"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    number: "01",
    title: "THINK DIFFERENT",
    text: "We look beyond the obvious and find smarter ways to solve digital problems.",
  },
  {
    number: "02",
    title: "DESIGN BETTER",
    text: "Every screen should feel clear, useful and intentional — not complicated.",
  },
  {
    number: "03",
    title: "BUILD PROPERLY",
    text: "We combine thoughtful design with reliable technology that is built to last.",
  },
  {
    number: "04",
    title: "GROW TOGETHER",
    text: "We work with clients as partners, not just as another project on a list.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) {
        gsap.set(".anb-about-reveal", {
          opacity: 1,
          y: 0,
          rotate: 0,
        });

        gsap.set(".anb-about-orbit", {
          opacity: 1,
          scale: 1,
        });

        return;
      }

      gsap.from(".anb-about-reveal", {
        opacity: 0,
        y: 45,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
        },
      });

      gsap.from(".anb-about-orbit", {
        opacity: 0,
        scale: 0.75,
        rotate: -15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      });

      gsap.to(".anb-about-orbit-ring-one", {
        rotate: 360,
        duration: 28,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".anb-about-orbit-ring-two", {
        rotate: -360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".anb-about-character", {
        y: -12,
        rotate: 2,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".anb-about-dot", {
        scale: 1.4,
        opacity: 0.45,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.25,
        ease: "sine.inOut",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="anb-about-section"
    >
      <style jsx>{`
        .anb-about-section {
          position: relative;
          background: var(--plum);
          color: var(--cream-light);
          overflow: hidden;
          padding: 150px 0 130px;
        }

        .anb-about-section::before {
          content: "";
          position: absolute;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 248, 240, 0.09),
            transparent 68%
          );
          top: -360px;
          right: -220px;
          pointer-events: none;
        }

        .anb-about-section::after {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          border: 1px solid rgba(255, 248, 240, 0.07);
          bottom: -330px;
          left: -220px;
          pointer-events: none;
        }

        .anb-about-wrap {
          width: min(1240px, calc(100% - 64px));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .anb-about-top {
          display: grid;
          grid-template-columns: 1fr 0.7fr;
          gap: 80px;
          align-items: end;
        }

        .anb-about-kicker {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0.55;
        }

        .anb-about-kicker::before {
          content: "";
          width: 30px;
          height: 1px;
          background: var(--cream-light);
        }

        .anb-about-title {
          margin: 20px 0 0;
          max-width: 850px;
          font-size: clamp(54px, 8vw, 112px);
          line-height: 0.88;
          letter-spacing: -0.065em;
          font-weight: 900;
          text-transform: uppercase;
        }

        .anb-about-title span {
          display: block;
          color: rgba(255, 248, 240, 0.35);
        }

        .anb-about-intro {
          max-width: 360px;
          margin-left: auto;
          font-size: 15px;
          line-height: 1.75;
          color: rgba(255, 248, 240, 0.65);
        }

        .anb-about-main {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 90px;
          align-items: center;
          margin-top: 120px;
        }

        .anb-about-story {
          max-width: 600px;
        }

        .anb-about-story-label {
          font-family: var(--font-geist-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          opacity: 0.45;
          margin-bottom: 25px;
        }

        .anb-about-story-heading {
          margin: 0;
          font-size: clamp(30px, 4vw, 52px);
          line-height: 1.02;
          letter-spacing: -0.045em;
          font-weight: 800;
        }

        .anb-about-story-heading em {
          font-style: normal;
          opacity: 0.42;
        }

        .anb-about-story-text {
          margin: 30px 0 0;
          max-width: 530px;
          font-size: 15px;
          line-height: 1.8;
          color: rgba(255, 248, 240, 0.62);
        }

        .anb-about-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 35px;
        }

        .anb-about-tag {
          padding: 9px 13px;
          border: 1px solid rgba(255, 248, 240, 0.16);
          border-radius: 100px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 248, 240, 0.72);
        }

        .anb-about-visual {
          min-height: 450px;
          position: relative;
          display: grid;
          place-items: center;
        }

        .anb-about-orbit {
          width: min(430px, 90%);
          aspect-ratio: 1;
          position: relative;
        }

        .anb-about-orbit-core {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: var(--cream);
          color: var(--plum);
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          display: grid;
          place-items: center;
          z-index: 5;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.18);
        }

        .anb-about-core-mark {
          font-size: 52px;
          font-weight: 900;
          letter-spacing: -0.12em;
          transform: translateX(-3px);
        }

        .anb-about-core-label {
          position: absolute;
          bottom: 25px;
          font-family: var(--font-geist-mono), monospace;
          font-size: 7px;
          letter-spacing: 0.14em;
          opacity: 0.5;
        }

        .anb-about-orbit-ring-one,
        .anb-about-orbit-ring-two {
          position: absolute;
          inset: 5%;
          border: 1px solid rgba(255, 248, 240, 0.18);
          border-radius: 50%;
        }

        .anb-about-orbit-ring-one::before,
        .anb-about-orbit-ring-one::after,
        .anb-about-orbit-ring-two::before,
        .anb-about-orbit-ring-two::after {
          content: "";
          position: absolute;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--cream);
        }

        .anb-about-orbit-ring-one::before {
          top: 11%;
          left: 8%;
        }

        .anb-about-orbit-ring-one::after {
          bottom: 8%;
          right: 12%;
        }

        .anb-about-orbit-ring-two {
          inset: 18%;
          border-style: dashed;
          opacity: 0.55;
        }

        .anb-about-orbit-ring-two::before {
          top: 5%;
          right: 25%;
        }

        .anb-about-orbit-ring-two::after {
          bottom: 18%;
          left: 8%;
        }

        .anb-about-character {
          position: absolute;
          width: 105px;
          height: 145px;
          right: 2%;
          bottom: 5%;
          z-index: 6;
        }

        .anb-about-character-head {
          position: absolute;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: var(--cream);
          left: 30px;
          top: 0;
        }

        .anb-about-character-hair {
          position: absolute;
          width: 46px;
          height: 22px;
          border-radius: 28px 28px 8px 8px;
          background: var(--plum-soft);
          left: 30px;
          top: -3px;
          z-index: 2;
        }

        .anb-about-character-body {
          position: absolute;
          width: 70px;
          height: 70px;
          border-radius: 35px 35px 14px 14px;
          background: var(--cream);
          left: 18px;
          top: 42px;
        }

        .anb-about-character-arm {
          position: absolute;
          width: 42px;
          height: 10px;
          border-radius: 20px;
          background: var(--cream);
          top: 64px;
          right: -2px;
          transform: rotate(-32deg);
          transform-origin: left center;
        }

        .anb-about-character-hand {
          position: absolute;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--cream);
          right: -12px;
          top: 42px;
        }

        .anb-about-character-leg-one,
        .anb-about-character-leg-two {
          position: absolute;
          width: 12px;
          height: 38px;
          border-radius: 10px;
          background: var(--cream);
          top: 104px;
        }

        .anb-about-character-leg-one {
          left: 37px;
          transform: rotate(6deg);
        }

        .anb-about-character-leg-two {
          left: 60px;
          transform: rotate(-8deg);
        }

        .anb-about-character-eye-one,
        .anb-about-character-eye-two {
          position: absolute;
          width: 4px;
          height: 5px;
          border-radius: 50%;
          background: var(--plum);
          top: 20px;
          z-index: 3;
        }

        .anb-about-character-eye-one {
          left: 43px;
        }

        .anb-about-character-eye-two {
          left: 58px;
        }

        .anb-about-character-smile {
          position: absolute;
          width: 12px;
          height: 6px;
          border-bottom: 2px solid var(--plum);
          border-radius: 0 0 12px 12px;
          left: 46px;
          top: 28px;
          z-index: 3;
        }

        .anb-about-dot {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--cream);
        }

        .anb-about-dot-one {
          top: 8%;
          right: 18%;
        }

        .anb-about-dot-two {
          bottom: 12%;
          left: 12%;
        }

        .anb-about-dot-three {
          top: 44%;
          left: 2%;
        }

        .anb-about-principles {
          margin-top: 130px;
          border-top: 1px solid rgba(255, 248, 240, 0.14);
        }

        .anb-about-principles-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25px 0;
          border-bottom: 1px solid rgba(255, 248, 240, 0.14);
        }

        .anb-about-principles-heading span:first-child {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .anb-about-principles-heading span:last-child {
          font-family: var(--font-geist-mono), monospace;
          font-size: 10px;
          opacity: 0.4;
        }

        .anb-about-principle {
          display: grid;
          grid-template-columns: 80px 1fr 1fr;
          gap: 30px;
          align-items: center;
          padding: 31px 0;
          border-bottom: 1px solid rgba(255, 248, 240, 0.1);
          transition:
            padding 0.4s ease,
            background 0.4s ease;
        }

        .anb-about-principle:hover {
          padding-left: 18px;
          padding-right: 18px;
          background: rgba(255, 248, 240, 0.035);
        }

        .anb-about-principle-number {
          font-family: var(--font-geist-mono), monospace;
          font-size: 10px;
          opacity: 0.4;
        }

        .anb-about-principle-title {
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .anb-about-principle-text {
          font-size: 12px;
          line-height: 1.65;
          color: rgba(255, 248, 240, 0.52);
          max-width: 430px;
        }

        .anb-about-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: 100px;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 248, 240, 0.14);
        }

        .anb-about-bottom-text {
          max-width: 520px;
          font-size: clamp(22px, 3vw, 38px);
          line-height: 1.05;
          letter-spacing: -0.035em;
          font-weight: 700;
        }

        .anb-about-bottom-text span {
          opacity: 0.38;
        }

        .anb-about-location {
          text-align: right;
          font-family: var(--font-geist-mono), monospace;
          font-size: 9px;
          line-height: 1.7;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0.45;
        }

        @media (max-width: 900px) {
          .anb-about-section {
            padding: 110px 0;
          }

          .anb-about-wrap {
            width: min(100% - 36px, 700px);
          }

          .anb-about-top {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .anb-about-intro {
            margin-left: 0;
          }

          .anb-about-main {
            grid-template-columns: 1fr;
            gap: 50px;
            margin-top: 90px;
          }

          .anb-about-visual {
            min-height: 380px;
          }

          .anb-about-principles {
            margin-top: 90px;
          }

          .anb-about-principle {
            grid-template-columns: 55px 1fr;
            gap: 15px;
          }

          .anb-about-principle-text {
            grid-column: 2;
          }
        }

        @media (max-width: 600px) {
          .anb-about-section {
            padding: 90px 0;
          }

          .anb-about-wrap {
            width: calc(100% - 28px);
          }

          .anb-about-title {
            font-size: clamp(48px, 15vw, 76px);
          }

          .anb-about-story-heading {
            font-size: 31px;
          }

          .anb-about-visual {
            min-height: 310px;
          }

          .anb-about-orbit {
            width: 300px;
          }

          .anb-about-orbit-core {
            width: 105px;
            height: 105px;
          }

          .anb-about-core-mark {
            font-size: 38px;
          }

          .anb-about-character {
            transform: scale(0.78);
            transform-origin: bottom right;
          }

          .anb-about-principle {
            padding: 24px 0;
          }

          .anb-about-principle-title {
            font-size: 14px;
          }

          .anb-about-bottom {
            display: block;
          }

          .anb-about-location {
            margin-top: 30px;
            text-align: left;
          }
        }
      `}</style>

      <div className="anb-about-wrap">
        <div className="anb-about-top">
          <div className="anb-about-reveal">
            <div className="anb-about-kicker">ABOUT ANUBHAV</div>

            <h2 className="anb-about-title">
              WE BUILD
              <span>DIGITAL THAT</span>
              MATTERS.
            </h2>
          </div>

          <p className="anb-about-intro anb-about-reveal">
            Anubhav Solutions is a digital technology studio focused on
            creating useful, thoughtful and memorable digital experiences
            for modern businesses.
          </p>
        </div>

        <div className="anb-about-main">
          <div className="anb-about-story anb-about-reveal">
            <div className="anb-about-story-label">
              WHO WE ARE
            </div>

            <h3 className="anb-about-story-heading">
              WE TURN IDEAS INTO
              <br />
              <em>USEFUL DIGITAL PRODUCTS.</em>
            </h3>

            <p className="anb-about-story-text">
              From a first idea to a finished product, we bring strategy,
              design and technology together under one roof. Whether it is
              a business website, custom software, mobile application or
              intelligent digital solution, our goal stays simple:
              make technology work beautifully for people.
            </p>

            <div className="anb-about-meta">
              <span className="anb-about-tag">Strategy</span>
              <span className="anb-about-tag">Design</span>
              <span className="anb-about-tag">Technology</span>
              <span className="anb-about-tag">Growth</span>
            </div>
          </div>

          <div className="anb-about-visual">
            <div className="anb-about-orbit">
              <div className="anb-about-orbit-ring-one" />
              <div className="anb-about-orbit-ring-two" />

              <div className="anb-about-orbit-core">
                <div className="anb-about-core-mark">A/S</div>
                <div className="anb-about-core-label">
                  DIGITAL STUDIO
                </div>
              </div>

              <div className="anb-about-character">
                <div className="anb-about-character-hair" />
                <div className="anb-about-character-head" />
                <div className="anb-about-character-body" />
                <div className="anb-about-character-arm" />
                <div className="anb-about-character-hand" />

                <div className="anb-about-character-leg-one" />
                <div className="anb-about-character-leg-two" />

                <div className="anb-about-character-eye-one" />
                <div className="anb-about-character-eye-two" />
                <div className="anb-about-character-smile" />
              </div>

              <span className="anb-about-dot anb-about-dot-one" />
              <span className="anb-about-dot anb-about-dot-two" />
              <span className="anb-about-dot anb-about-dot-three" />
            </div>
          </div>
        </div>

        <div className="anb-about-principles">
          <div className="anb-about-principles-heading">
            <span>WHAT DRIVES US</span>
            <span>04 PRINCIPLES</span>
          </div>

          {principles.map((item) => (
            <div
              className="anb-about-principle anb-about-reveal"
              key={item.number}
            >
              <span className="anb-about-principle-number">
                {item.number}
              </span>

              <span className="anb-about-principle-title">
                {item.title}
              </span>

              <span className="anb-about-principle-text">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <div className="anb-about-bottom anb-about-reveal">
          <p className="anb-about-bottom-text">
            SMALL TEAM.
            <br />
            <span>BIG IDEAS.</span>
          </p>

          <div className="anb-about-location">
            ANUBHAV SOLUTIONS
            <br />
            DIGITAL TECHNOLOGY STUDIO
          </div>
        </div>
      </div>
    </section>
  );
}