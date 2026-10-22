"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  "Web Development",
  "Custom Software",
  "Mobile Applications",
  "UI / UX Design",
  "AI & Automation",
  "SEO · Ads · Animation",
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const visualRef = useRef<HTMLDivElement | null>(null);
  const [selectedService, setSelectedService] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const visual = visualRef.current;

    if (!section || !visual) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".anb-contact-heading-line",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".anb-contact-copy",
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".anb-contact-form",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        visual,
        {
          y: 60,
          opacity: 0,
          rotate: -3,
        },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            once: true,
          },
        }
      );

      gsap.to(".anb-contact-spark", {
        y: -12,
        x: 8,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4,
      });

      gsap.to(".anb-contact-ring", {
        rotate: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="anb-contact"
      aria-labelledby="contact-title"
    >
      <div className="anb-contact-orb anb-contact-orb-one" />
      <div className="anb-contact-orb anb-contact-orb-two" />

      <div className="anb-contact-inner">
        {/* HEADER */}
        <div className="anb-contact-header">
          <div className="anb-contact-kicker">
            <span>06</span>
            <span>LET&apos;S TALK</span>
          </div>

          <h2 id="contact-title" className="anb-contact-title">
            <span className="anb-contact-heading-line">GOT A PROJECT?</span>
            <span className="anb-contact-heading-line muted">
              LET&apos;S MAKE IT REAL.
            </span>
          </h2>

          <p className="anb-contact-copy">
            Tell us what you&apos;re building, what you need, or simply where
            you want to go. We&apos;ll figure out the next step together.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="anb-contact-grid">
          {/* LEFT VISUAL */}
          <div className="anb-contact-visual" ref={visualRef}>
            <div className="anb-contact-visual-label">
              <span>ANUBHAV SOLUTIONS</span>
              <span>PROJECT INQUIRY</span>
            </div>

            <div className="anb-contact-scene">
              <div className="anb-contact-ring" />

              <span className="anb-contact-spark spark-one" />
              <span className="anb-contact-spark spark-two" />
              <span className="anb-contact-spark spark-three" />

              {/* Speech bubble */}
              <div className="anb-contact-bubble">
                <span>Let&apos;s build it.</span>
                <small>↗</small>
              </div>

              {/* Cartoon person */}
              <div className="anb-contact-character">
                <div className="anb-contact-head" />

                <div className="anb-contact-body">
                  <span className="anb-contact-arm left" />
                  <span className="anb-contact-arm right" />
                </div>

                <div className="anb-contact-leg left" />
                <div className="anb-contact-leg right" />
              </div>

              {/* Desk */}
              <div className="anb-contact-desk">
                <div className="anb-contact-laptop">
                  <div className="anb-contact-laptop-screen">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="anb-contact-laptop-base" />
                </div>

                <div className="anb-contact-cup">
                  <span />
                </div>

                <div className="anb-contact-desk-line" />
              </div>
            </div>

            <div className="anb-contact-visual-bottom">
              <span>IDEA</span>
              <span>DESIGN</span>
              <span>BUILD</span>
              <span>LAUNCH</span>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="anb-contact-form-wrap">
            {!submitted ? (
              <form
                className="anb-contact-form"
                onSubmit={handleSubmit}
              >
                <div className="anb-contact-field-row">
                  <label className="anb-contact-field">
                    <span>01 / NAME</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </label>

                  <label className="anb-contact-field">
                    <span>02 / EMAIL</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      required
                    />
                  </label>
                </div>

                <div className="anb-contact-service">
                  <span className="anb-contact-service-label">
                    03 / WHAT DO YOU NEED?
                  </span>

                  <div className="anb-contact-pills">
                    {services.map((service) => (
                      <button
                        type="button"
                        key={service}
                        className={`anb-contact-pill ${
                          selectedService === service ? "selected" : ""
                        }`}
                        onClick={() => setSelectedService(service)}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="anb-contact-field anb-contact-message">
                  <span>04 / TELL US ABOUT IT</span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us a little about your project..."
                    required
                  />
                </label>

                <div className="anb-contact-submit-row">
                  <p>
                    We usually reply within one working day.
                  </p>

                  <button
                    type="submit"
                    className="anb-contact-submit"
                  >
                    <span>LET&apos;S BUILD IT</span>
                    <span>↗</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="anb-contact-success">
                <div className="anb-contact-success-mark">✓</div>

                <span className="anb-contact-success-label">
                  MESSAGE RECEIVED
                </span>

                <h3>
                  Thanks for reaching out.
                </h3>

                <p>
                  Your project details are ready to send. Connect this form
                  to your email or backend when you deploy the website.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="anb-contact-reset"
                >
                  SEND ANOTHER MESSAGE ↗
                </button>
              </div>
            )}
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="anb-contact-bottom">
          <span>HAVE A PROJECT?</span>
          <strong>LET&apos;S MAKE IT REAL.</strong>
          <span>ANUBHAV / 06</span>
        </div>
      </div>

      <style jsx>{`
        .anb-contact {
          position: relative;
          overflow: hidden;
          background: var(--cream);
          color: var(--plum);
          padding: 170px 0 110px;
          min-height: 100vh;
        }

        .anb-contact-inner {
          position: relative;
          z-index: 2;
          width: min(1380px, calc(100% - 80px));
          margin: 0 auto;
        }

        .anb-contact-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .anb-contact-orb-one {
          width: 520px;
          height: 520px;
          right: -180px;
          top: 120px;
          background: rgba(53, 21, 47, 0.035);
        }

        .anb-contact-orb-two {
          width: 360px;
          height: 360px;
          left: -210px;
          bottom: -120px;
          background: rgba(53, 21, 47, 0.045);
        }

        .anb-contact-header {
          display: grid;
          grid-template-columns: 150px minmax(0, 1fr) 320px;
          gap: 40px;
          align-items: end;
          margin-bottom: 70px;
        }

        .anb-contact-kicker {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-bottom: 10px;
          color: var(--muted);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .anb-contact-kicker span:first-child {
          font-size: 12px;
          color: var(--plum);
        }

        .anb-contact-title {
          display: flex;
          flex-direction: column;
          margin: 0;
          font-size: clamp(54px, 7vw, 112px);
          line-height: 0.84;
          letter-spacing: -0.065em;
          font-weight: 900;
          text-transform: uppercase;
        }

        .anb-contact-heading-line {
          display: block;
        }

        .anb-contact-heading-line.muted {
          color: rgba(53, 21, 47, 0.3);
        }

        .anb-contact-copy {
          max-width: 320px;
          margin: 0 0 4px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.65;
        }

        .anb-contact-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 30px;
          align-items: stretch;
        }

        .anb-contact-visual {
          position: relative;
          min-height: 600px;
          overflow: hidden;
          border: 1px solid rgba(53, 21, 47, 0.12);
          border-radius: 28px;
          background:
            linear-gradient(
              rgba(53, 21, 47, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(53, 21, 47, 0.035) 1px,
              transparent 1px
            ),
            var(--cream-light);
          background-size: 42px 42px;
        }

        .anb-contact-visual-label {
          position: absolute;
          top: 24px;
          left: 28px;
          right: 28px;
          display: flex;
          justify-content: space-between;
          color: rgba(53, 21, 47, 0.45);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .anb-contact-scene {
          position: absolute;
          inset: 80px 30px 90px;
        }

        .anb-contact-ring {
          position: absolute;
          width: 270px;
          height: 270px;
          top: 40px;
          right: 30px;
          border: 1px solid rgba(53, 21, 47, 0.15);
          border-radius: 50%;
        }

        .anb-contact-ring::before,
        .anb-contact-ring::after {
          content: "";
          position: absolute;
          inset: 28px;
          border: 1px solid rgba(53, 21, 47, 0.1);
          border-radius: 50%;
        }

        .anb-contact-ring::after {
          inset: 80px;
          background: rgba(53, 21, 47, 0.04);
        }

        .anb-contact-bubble {
          position: absolute;
          top: 45px;
          left: 25px;
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 16px 20px;
          border: 1px solid rgba(53, 21, 47, 0.15);
          border-radius: 30px 30px 30px 5px;
          background: rgba(255, 248, 240, 0.88);
          color: var(--plum);
          font-size: 13px;
          font-weight: 700;
          box-shadow: 0 15px 40px rgba(53, 21, 47, 0.05);
        }

        .anb-contact-bubble small {
          font-size: 16px;
        }

        .anb-contact-character {
          position: absolute;
          left: 28%;
          bottom: 145px;
          width: 125px;
          height: 190px;
        }

        .anb-contact-head {
          position: absolute;
          top: 0;
          left: 38px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--plum);
        }

        .anb-contact-body {
          position: absolute;
          top: 43px;
          left: 22px;
          width: 80px;
          height: 88px;
          border-radius: 35px 35px 16px 16px;
          background: var(--plum);
        }

        .anb-contact-arm {
          position: absolute;
          top: 15px;
          width: 65px;
          height: 14px;
          border-radius: 20px;
          background: var(--plum);
        }

        .anb-contact-arm.left {
          left: -38px;
          transform: rotate(28deg);
        }

        .anb-contact-arm.right {
          right: -38px;
          transform: rotate(-35deg);
        }

        .anb-contact-leg {
          position: absolute;
          top: 117px;
          width: 18px;
          height: 73px;
          border-radius: 20px;
          background: var(--plum);
        }

        .anb-contact-leg.left {
          left: 38px;
          transform: rotate(7deg);
        }

        .anb-contact-leg.right {
          left: 72px;
          transform: rotate(-7deg);
        }

        .anb-contact-desk {
          position: absolute;
          left: 5%;
          right: 5%;
          bottom: 70px;
          height: 115px;
          border-radius: 12px 12px 4px 4px;
          background: var(--plum);
        }

        .anb-contact-desk::after {
          content: "";
          position: absolute;
          left: 7%;
          right: 7%;
          bottom: -65px;
          height: 70px;
          border-left: 8px solid var(--plum);
          border-right: 8px solid var(--plum);
        }

        .anb-contact-laptop {
          position: absolute;
          width: 175px;
          left: 27%;
          top: -70px;
        }

        .anb-contact-laptop-screen {
          height: 105px;
          border: 8px solid var(--plum);
          border-radius: 8px 8px 3px 3px;
          background: var(--cream-light);
          padding: 16px;
        }

        .anb-contact-laptop-screen span {
          display: block;
          width: 55%;
          height: 7px;
          margin-bottom: 10px;
          border-radius: 10px;
          background: rgba(53, 21, 47, 0.18);
        }

        .anb-contact-laptop-screen span:nth-child(2) {
          width: 85%;
        }

        .anb-contact-laptop-screen span:nth-child(3) {
          width: 65%;
        }

        .anb-contact-laptop-base {
          width: 205px;
          height: 10px;
          margin-left: -15px;
          border-radius: 0 0 10px 10px;
          background: var(--plum);
        }

        .anb-contact-cup {
          position: absolute;
          right: 14%;
          top: -36px;
          width: 32px;
          height: 42px;
          border-radius: 4px 4px 10px 10px;
          background: var(--cream);
        }

        .anb-contact-cup span {
          position: absolute;
          width: 15px;
          height: 15px;
          right: -11px;
          top: 8px;
          border: 4px solid var(--plum);
          border-left: 0;
          border-radius: 0 10px 10px 0;
        }

        .anb-contact-desk-line {
          position: absolute;
          left: 8%;
          right: 8%;
          top: 14px;
          height: 1px;
          background: rgba(255, 248, 240, 0.2);
        }

        .anb-contact-spark {
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--plum);
        }

        .spark-one {
          left: 10%;
          top: 35%;
        }

        .spark-two {
          right: 14%;
          top: 24%;
          width: 4px;
          height: 4px;
        }

        .spark-three {
          right: 30%;
          bottom: 24%;
          width: 5px;
          height: 5px;
        }

        .anb-contact-visual-bottom {
          position: absolute;
          bottom: 24px;
          left: 28px;
          right: 28px;
          display: flex;
          justify-content: space-between;
          color: rgba(53, 21, 47, 0.42);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        .anb-contact-form-wrap {
          min-height: 600px;
          padding: 42px;
          border-radius: 28px;
          background: var(--plum);
          color: var(--cream-light);
        }

        .anb-contact-form {
          display: flex;
          flex-direction: column;
          gap: 34px;
        }

        .anb-contact-field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }

        .anb-contact-field {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .anb-contact-field > span,
        .anb-contact-service-label {
          color: rgba(255, 248, 240, 0.5);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .anb-contact-field input,
        .anb-contact-field textarea {
          width: 100%;
          border: 0;
          border-bottom: 1px solid rgba(255, 248, 240, 0.22);
          outline: none;
          resize: vertical;
          background: transparent;
          color: var(--cream-light);
          font: inherit;
          font-size: 16px;
          padding: 12px 0;
        }

        .anb-contact-field input::placeholder,
        .anb-contact-field textarea::placeholder {
          color: rgba(255, 248, 240, 0.35);
        }

        .anb-contact-field input:focus,
        .anb-contact-field textarea:focus {
          border-bottom-color: var(--cream-light);
        }

        .anb-contact-service {
          display: flex;
          flex-direction: column;
          gap: 17px;
        }

        .anb-contact-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .anb-contact-pill {
          border: 1px solid rgba(255, 248, 240, 0.22);
          border-radius: 100px;
          background: transparent;
          color: rgba(255, 248, 240, 0.72);
          cursor: pointer;
          padding: 10px 15px;
          font-size: 10px;
          font-weight: 700;
          transition: 0.3s ease;
        }

        .anb-contact-pill:hover,
        .anb-contact-pill.selected {
          border-color: var(--cream-light);
          background: var(--cream-light);
          color: var(--plum);
          transform: translateY(-2px);
        }

        .anb-contact-submit-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          margin-top: 5px;
        }

        .anb-contact-submit-row p {
          max-width: 230px;
          margin: 0;
          color: rgba(255, 248, 240, 0.42);
          font-size: 11px;
          line-height: 1.5;
        }

        .anb-contact-submit {
          display: inline-flex;
          align-items: center;
          gap: 25px;
          border: 0;
          border-radius: 100px;
          background: var(--cream-light);
          color: var(--plum);
          cursor: pointer;
          padding: 17px 22px;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.08em;
        }

        .anb-contact-submit:hover {
          transform: translateY(-3px);
        }

        .anb-contact-success {
          min-height: 510px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        .anb-contact-success-mark {
          display: grid;
          place-items: center;
          width: 60px;
          height: 60px;
          margin-bottom: 30px;
          border: 1px solid rgba(255, 248, 240, 0.3);
          border-radius: 50%;
          font-size: 24px;
        }

        .anb-contact-success-label {
          color: rgba(255, 248, 240, 0.5);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.16em;
        }

        .anb-contact-success h3 {
          margin: 15px 0;
          font-size: clamp(35px, 4vw, 58px);
          line-height: 0.95;
          letter-spacing: -0.05em;
        }

        .anb-contact-success p {
          max-width: 420px;
          color: rgba(255, 248, 240, 0.58);
          font-size: 14px;
          line-height: 1.6;
        }

        .anb-contact-reset {
          margin-top: 25px;
          border: 1px solid rgba(255, 248, 240, 0.3);
          border-radius: 100px;
          background: transparent;
          color: var(--cream-light);
          cursor: pointer;
          padding: 13px 18px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .anb-contact-reset:hover {
          background: var(--cream-light);
          color: var(--plum);
        }

        .anb-contact-bottom {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 20px;
          align-items: center;
          margin-top: 55px;
          padding-top: 22px;
          border-top: 1px solid rgba(53, 21, 47, 0.12);
          color: rgba(53, 21, 47, 0.45);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .anb-contact-bottom strong {
          color: var(--plum);
          font-size: 12px;
        }

        .anb-contact-bottom span:last-child {
          text-align: right;
        }

        @media (max-width: 1000px) {
          .anb-contact {
            padding-top: 150px;
          }

          .anb-contact-header {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .anb-contact-copy {
            max-width: 520px;
          }

          .anb-contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .anb-contact {
            padding: 130px 0 70px;
          }

          .anb-contact-inner {
            width: min(100% - 30px, 1380px);
          }

          .anb-contact-title {
            font-size: clamp(48px, 14vw, 80px);
          }

          .anb-contact-grid {
            gap: 18px;
          }

          .anb-contact-visual {
            min-height: 480px;
          }

          .anb-contact-scene {
            inset: 70px 15px 70px;
          }

          .anb-contact-ring {
            width: 190px;
            height: 190px;
            right: 5px;
          }

          .anb-contact-character {
            left: 22%;
            transform: scale(0.82);
            transform-origin: bottom left;
          }

          .anb-contact-desk {
            left: 0;
            right: 0;
          }

          .anb-contact-form-wrap {
            min-height: auto;
            padding: 28px 22px;
          }

          .anb-contact-field-row {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .anb-contact-submit-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .anb-contact-submit {
            width: 100%;
            justify-content: space-between;
          }

          .anb-contact-bottom {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .anb-contact-bottom span:last-child {
            text-align: left;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .anb-contact-ring,
          .anb-contact-spark {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}