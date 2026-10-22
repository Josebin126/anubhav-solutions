"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "CLIENT",
    text: "Every great project starts with a conversation.",
    left: "10%",
  },
  {
    number: "02",
    title: "IDEA",
    text: "We turn your vision into a clear digital direction.",
    left: "30%",
  },
  {
    number: "03",
    title: "DESIGN",
    text: "We shape the experience, interface and visual identity.",
    left: "50%",
  },
  {
    number: "04",
    title: "BUILD",
    text: "Our team brings the product to life with clean technology.",
    left: "70%",
  },
  {
    number: "05",
    title: "LAUNCH",
    text: "Your idea becomes a real digital product ready for people.",
    left: "90%",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const clientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const path = pathRef.current;
    const progress = progressRef.current;
    const client = clientRef.current;

    if (!section || !path || !progress || !client) return;

    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const pathLength = path.getTotalLength();

      if (reducedMotion) {
        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: 0,
        });

        gsap.set(progress, {
          width: "100%",
        });

        gsap.set(client, {
          x: 0,
        });

        gsap.set(".anb-process-step", {
          opacity: 1,
          y: 0,
          scale: 1,
        });

        return;
      }

      /* -----------------------------
         Initial state
      ----------------------------- */

      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.set(progress, {
        width: "0%",
      });

      /*
       * IMPORTANT:
       * All five steps are ALWAYS visible.
       * No opacity animation is applied to them.
       */
      gsap.set(".anb-process-step", {
        opacity: 1,
        y: 0,
        scale: 1,
      });

      /* -----------------------------
         Scroll animation
      ----------------------------- */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=3200",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /* Draw path */
      timeline.to(
        path,
        {
          strokeDashoffset: 0,
          duration: 5,
          ease: "none",
        },
        0
      );

      /* Progress bar */
      timeline.to(
        progress,
        {
          width: "100%",
          duration: 5,
          ease: "none",
        },
        0
      );

      /* -----------------------------
         Move character through journey
      ----------------------------- */

      timeline.to(
        client,
        {
          x: 35,
          duration: 0.8,
          ease: "none",
        },
        0
      );

      timeline.to(
        client,
        {
          x: 110,
          duration: 1,
          ease: "none",
        },
        1
      );

      timeline.to(
        client,
        {
          x: 185,
          duration: 1,
          ease: "none",
        },
        2
      );

      timeline.to(
        client,
        {
          x: 260,
          duration: 1,
          ease: "none",
        },
        3
      );

      timeline.to(
        client,
        {
          x: 335,
          duration: 1,
          ease: "none",
        },
        4
      );

      /* -----------------------------
         Decorative animations
      ----------------------------- */

      gsap.to(".anb-process-doodle", {
        y: -10,
        rotate: 4,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".anb-process-spark", {
        scale: 1.3,
        opacity: 0.55,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        stagger: 0.25,
        ease: "sine.inOut",
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="anb-process-section"
    >
      <style jsx>{`
        .anb-process-section {
          min-height: 100vh;
          background: var(--cream-light);
          color: var(--plum);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .anb-process-section::before {
          content: "";
          position: absolute;
          width: 620px;
          height: 620px;
          border-radius: 50%;
          background: rgba(53, 21, 47, 0.045);
          top: -280px;
          right: -180px;
          pointer-events: none;
        }

        .anb-process-section::after {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(53, 21, 47, 0.035);
          bottom: -250px;
          left: -170px;
          pointer-events: none;
        }

        .anb-process-wrap {
          width: min(1240px, calc(100% - 64px));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* -----------------------------
           HEADER
        ----------------------------- */

        .anb-process-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
          margin-bottom: 55px;
        }

        .anb-process-kicker {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0.65;
        }

        .anb-process-kicker::before {
          content: "";
          width: 30px;
          height: 1px;
          background: var(--plum);
        }

        .anb-process-heading {
          margin: 12px 0 0;
          max-width: 760px;
          font-size: clamp(48px, 7vw, 94px);
          line-height: 0.9;
          letter-spacing: -0.055em;
          font-weight: 900;
          text-transform: uppercase;
        }

        .anb-process-heading span {
          display: block;
          opacity: 0.3;
        }

        .anb-process-intro {
          max-width: 290px;
          font-size: 14px;
          line-height: 1.7;
          color: var(--muted);
        }

        /* -----------------------------
           JOURNEY CARD
        ----------------------------- */

        .anb-process-stage {
          position: relative;
          height: 390px;
          border: 1px solid rgba(53, 21, 47, 0.13);
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.28);
          overflow: hidden;
        }

        .anb-process-stage::before {
          content: "";
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(53, 21, 47, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(53, 21, 47, 0.035) 1px,
              transparent 1px
            );

          background-size: 42px 42px;

          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 20%,
            black 80%,
            transparent
          );

          pointer-events: none;
        }

        .anb-process-stage-label {
          position: absolute;
          top: 22px;
          left: 24px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          opacity: 0.5;
          z-index: 8;
        }

        .anb-process-stage-number {
          position: absolute;
          top: 20px;
          right: 24px;
          font-family: var(--font-geist-mono), monospace;
          font-size: 11px;
          opacity: 0.5;
          z-index: 8;
        }

        /* -----------------------------
           CURVED ROAD
        ----------------------------- */

        .anb-process-road {
          position: absolute;
          left: 7%;
          right: 7%;
          top: 44%;
          height: 120px;
          transform: translateY(-50%);
          z-index: 2;
        }

        .anb-process-road svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .anb-process-road-path {
          fill: none;
          stroke: rgba(53, 21, 47, 0.13);
          stroke-width: 2;
          stroke-linecap: round;
        }

        .anb-process-road-path-active {
          fill: none;
          stroke: var(--plum);
          stroke-width: 3;
          stroke-linecap: round;
        }

        /* -----------------------------
           CARTOON CHARACTER
        ----------------------------- */

        .anb-process-client {
          position: absolute;
          left: 4%;
          top: 44%;
          width: 72px;
          height: 72px;
          transform: translateY(-50%);
          z-index: 7;
        }

        .anb-process-person {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .anb-process-head {
          position: absolute;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: var(--plum);
          left: 23px;
          top: 2px;
        }

        .anb-process-body {
          position: absolute;
          width: 39px;
          height: 31px;
          border-radius: 18px 18px 8px 8px;
          background: var(--plum);
          left: 16px;
          top: 27px;
        }

        .anb-process-arm {
          position: absolute;
          width: 24px;
          height: 7px;
          border-radius: 20px;
          background: var(--plum);
          right: 1px;
          top: 34px;
          transform: rotate(-25deg);
          transform-origin: left center;
        }

        .anb-process-wave {
          position: absolute;
          width: 17px;
          height: 17px;
          border: 2px solid var(--plum);
          border-left-color: transparent;
          border-bottom-color: transparent;
          border-radius: 50%;
          right: -12px;
          top: 17px;
          transform: rotate(20deg);
        }

        /* -----------------------------
           FIVE STEPS
           IMPORTANT:
           Each step gets its LEFT position
           directly from inline style.
           No nth-of-type selectors.
        ----------------------------- */

        .anb-process-step {
          position: absolute;
          top: 76%;
          transform: translate(-50%, -50%);
          width: 155px;
          text-align: center;
          z-index: 6;

          /* ALWAYS VISIBLE */
          opacity: 1 !important;
        }

        .anb-process-step-dot {
          width: 17px;
          height: 17px;
          margin: 0 auto 12px;
          border-radius: 50%;
          background: var(--cream-light);
          border: 3px solid var(--plum);
          position: relative;
        }

        .anb-process-step-dot::after {
          content: "";
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--plum);
          top: 3px;
          left: 3px;
        }

        .anb-process-step-number {
          display: block;
          font-family: var(--font-geist-mono), monospace;
          font-size: 10px;
          opacity: 0.45;
          margin-bottom: 5px;
        }

        .anb-process-step-title {
          display: block;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 0.08em;
          color: var(--plum);
        }

        .anb-process-step-text {
          display: block;
          margin-top: 8px;
          font-size: 10px;
          line-height: 1.45;
          color: var(--muted);
        }

        /* -----------------------------
           PROGRESS
        ----------------------------- */

        .anb-process-progress {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0%;
          height: 4px;
          background: var(--plum);
          z-index: 10;
        }

        /* -----------------------------
           BOTTOM
        ----------------------------- */

        .anb-process-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 22px;
        }

        .anb-process-caption {
          font-family: var(--font-geist-mono), monospace;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          opacity: 0.5;
        }

        .anb-process-arrow {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(53, 21, 47, 0.18);
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 17px;
        }

        /* -----------------------------
           DECORATIONS
        ----------------------------- */

        .anb-process-doodle {
          position: absolute;
          right: 14%;
          top: 17%;
          width: 54px;
          height: 54px;
          border: 2px solid var(--plum);
          border-radius: 50%;
          opacity: 0.13;
          z-index: 1;
        }

        .anb-process-doodle::before,
        .anb-process-doodle::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 70px;
          height: 1px;
          background: var(--plum);
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .anb-process-doodle::after {
          transform: translate(-50%, -50%) rotate(-45deg);
        }

        .anb-process-spark {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--plum);
          opacity: 0.25;
          z-index: 1;
        }

        .anb-process-spark-one {
          top: 30%;
          left: 18%;
        }

        .anb-process-spark-two {
          top: 22%;
          right: 28%;
        }

        .anb-process-spark-three {
          bottom: 22%;
          right: 18%;
        }

        /* -----------------------------
           TABLET
        ----------------------------- */

        @media (max-width: 900px) {
          .anb-process-wrap {
            width: min(100% - 36px, 700px);
          }

          .anb-process-top {
            display: block;
            margin-bottom: 30px;
          }

          .anb-process-intro {
            margin-top: 20px;
            max-width: 430px;
          }

          .anb-process-stage {
            height: 420px;
          }

          .anb-process-step {
            width: 105px;
          }

          .anb-process-step-text {
            display: none;
          }

          .anb-process-step-title {
            font-size: 12px;
          }

          .anb-process-road {
            left: 5%;
            right: 5%;
          }
        }

        /* -----------------------------
           MOBILE
        ----------------------------- */

        @media (max-width: 600px) {
          .anb-process-section {
            min-height: 100svh;
          }

          .anb-process-wrap {
            width: calc(100% - 28px);
          }

          .anb-process-top {
            margin-bottom: 24px;
          }

          .anb-process-heading {
            font-size: clamp(42px, 14vw, 70px);
          }

          .anb-process-stage {
            height: 370px;
            border-radius: 22px;
          }

          .anb-process-road {
            left: 3%;
            right: 3%;
            top: 42%;
          }

          .anb-process-step {
            top: 75%;
            width: 66px;
          }

          .anb-process-step-title {
            font-size: 8px;
            letter-spacing: 0.03em;
          }

          .anb-process-step-number {
            font-size: 8px;
          }

          .anb-process-step-text {
            display: none;
          }

          .anb-process-step-dot {
            width: 14px;
            height: 14px;
            border-width: 2px;
            margin-bottom: 9px;
          }

          .anb-process-step-dot::after {
            width: 4px;
            height: 4px;
            top: 3px;
            left: 3px;
          }

          .anb-process-client {
            width: 55px;
            height: 55px;
            left: 1%;
            top: 42%;
          }

          .anb-process-head {
            width: 20px;
            height: 20px;
            left: 18px;
          }

          .anb-process-body {
            width: 32px;
            height: 26px;
            left: 12px;
            top: 23px;
          }

          .anb-process-arm {
            width: 19px;
            top: 29px;
          }

          .anb-process-wave {
            width: 14px;
            height: 14px;
            right: -10px;
            top: 12px;
          }

          .anb-process-stage-label {
            top: 18px;
            left: 18px;
          }

          .anb-process-stage-number {
            top: 17px;
            right: 18px;
          }

          .anb-process-doodle {
            right: 8%;
          }

          .anb-process-caption {
            font-size: 8px;
          }

          .anb-process-arrow {
            width: 38px;
            height: 38px;
          }
        }
      `}</style>

      <div className="anb-process-wrap">

        {/* HEADER */}

        <div className="anb-process-top">
          <div>
            <div className="anb-process-kicker">
              OUR PROCESS
            </div>

            <h2 className="anb-process-heading">
              FROM IDEA
              <span>TO REALITY.</span>
            </h2>
          </div>

          <p className="anb-process-intro">
            Your project moves through one clear journey — from the first
            conversation to a digital product ready for the real world.
          </p>
        </div>

        {/* JOURNEY */}

        <div className="anb-process-stage">

          <span className="anb-process-stage-label">
            PROJECT JOURNEY
          </span>

          <span className="anb-process-stage-number">
            ANUBHAV / 05
          </span>

          {/* Decoration */}

          <div className="anb-process-doodle" />

          <span className="anb-process-spark anb-process-spark-one" />
          <span className="anb-process-spark anb-process-spark-two" />
          <span className="anb-process-spark anb-process-spark-three" />

          {/* Curved road */}

          <div className="anb-process-road">
            <svg
              viewBox="0 0 1000 120"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                className="anb-process-road-path"
                d="M 0 60 C 150 5, 250 115, 400 60 S 650 5, 800 60 S 930 100, 1000 60"
              />

              <path
                ref={pathRef}
                className="anb-process-road-path-active"
                d="M 0 60 C 150 5, 250 115, 400 60 S 650 5, 800 60 S 930 100, 1000 60"
              />
            </svg>
          </div>

          {/* Cartoon person */}

          <div
            ref={clientRef}
            className="anb-process-client"
          >
            <div className="anb-process-person">
              <div className="anb-process-head" />
              <div className="anb-process-body" />
              <div className="anb-process-arm" />
              <div className="anb-process-wave" />
            </div>
          </div>

          {/* FIVE STEPS */}

          {steps.map((step) => (
            <div
              key={step.number}
              className="anb-process-step"
              style={{
                left: step.left,
              }}
            >
              <div className="anb-process-step-dot" />

              <span className="anb-process-step-number">
                {step.number}
              </span>

              <span className="anb-process-step-title">
                {step.title}
              </span>

              <span className="anb-process-step-text">
                {step.text}
              </span>
            </div>
          ))}

          {/* Progress */}

          <div
            ref={progressRef}
            className="anb-process-progress"
          />
        </div>

        {/* BOTTOM */}

        <div className="anb-process-bottom">
          <span className="anb-process-caption">
            Scroll to move the project forward
          </span>

          <span className="anb-process-arrow">
            ↓
          </span>
        </div>
      </div>
    </section>
  );
}