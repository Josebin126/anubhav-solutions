"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) return;

      gsap.from(".anb-footer-reveal", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 85%",
        },
      });

      gsap.to(".anb-footer-mark", {
        y: -7,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="anb-footer">
      <style jsx>{`
        .anb-footer {
          position: relative;
          overflow: hidden;
          padding-top: 120px;
          background: #24101f;
          color: var(--cream-light);
          padding: 90px 0 25px;
        }

        .anb-footer::before {
          content: "";
          position: absolute;
          width: 650px;
          height: 650px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 248, 240, 0.07),
            transparent 68%
          );
          top: -420px;
          right: -250px;
          pointer-events: none;
        }

        .anb-footer-wrap {
          width: min(1240px, calc(100% - 64px));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .anb-footer-main {
          display: grid;
          grid-template-columns: 1.4fr 0.7fr 0.7fr 0.7fr;
          gap: 55px;
          padding-bottom: 75px;
          border-bottom: 1px solid rgba(255, 248, 240, 0.12);
        }

        .anb-footer-brand {
          max-width: 430px;
        }

        .anb-footer-mark {
          width: 82px;
          height: 82px;
          border: 1px solid rgba(255, 248, 240, 0.25);
          border-radius: 50%;
          display: grid;
          place-items: center;
          margin-bottom: 28px;
          font-size: 27px;
          font-weight: 900;
          letter-spacing: -0.12em;
        }

        .anb-footer-title {
          margin: 0;
          font-size: clamp(30px, 4vw, 52px);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 900;
          text-transform: uppercase;
        }

        .anb-footer-title span {
          display: block;
          opacity: 0.32;
        }

        .anb-footer-description {
          max-width: 390px;
          margin: 24px 0 0;
          color: rgba(255, 248, 240, 0.5);
          font-size: 13px;
          line-height: 1.7;
        }

        .anb-footer-column-title {
          margin: 5px 0 22px;
          font-family: var(--font-geist-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255, 248, 240, 0.38);
        }

        .anb-footer-links {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        .anb-footer-links a {
          position: relative;
          color: rgba(255, 248, 240, 0.75);
          font-size: 13px;
          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .anb-footer-links a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 1px;
          background: var(--cream-light);
          transition: width 0.3s ease;
        }

        .anb-footer-links a:hover {
          color: var(--cream-light);
          transform: translateX(4px);
        }

        .anb-footer-links a:hover::after {
          width: 100%;
        }

        .anb-footer-contact {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .anb-footer-contact a {
          color: rgba(255, 248, 240, 0.75);
          font-size: 13px;
          line-height: 1.5;
          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .anb-footer-contact a:hover {
          color: var(--cream-light);
          transform: translateX(4px);
        }

        .anb-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          padding-top: 24px;
        }

        .anb-footer-copy,
        .anb-footer-credit {
          font-family: var(--font-geist-mono), monospace;
          font-size: 8px;
          line-height: 1.6;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255, 248, 240, 0.32);
        }

        .anb-footer-credit {
          text-align: right;
        }

        .anb-footer-back {
          position: absolute;
          right: 0;
          bottom: 24px;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(255, 248, 240, 0.16);
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: var(--cream-light);
          font-size: 16px;
          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .anb-footer-back:hover {
          transform: translateY(-4px);
          background: rgba(255, 248, 240, 0.08);
        }

        @media (max-width: 900px) {
          .anb-footer {
            padding-top: 75px;
          }

          .anb-footer-wrap {
            width: min(100% - 36px, 700px);
          }

          .anb-footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 50px 35px;
          }

          .anb-footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 600px) {
          .anb-footer {
            padding: 70px 0 25px;
          }

          .anb-footer-wrap {
            width: calc(100% - 28px);
          }

          .anb-footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 40px 25px;
            padding-bottom: 55px;
          }

          .anb-footer-brand {
            grid-column: 1 / -1;
          }

          .anb-footer-mark {
            width: 68px;
            height: 68px;
            font-size: 22px;
          }

          .anb-footer-title {
            font-size: 35px;
          }

          .anb-footer-description {
            font-size: 12px;
          }

          .anb-footer-bottom {
            display: block;
            padding-right: 55px;
          }

          .anb-footer-credit {
            text-align: left;
            margin-top: 12px;
          }

          .anb-footer-back {
            bottom: 24px;
          }
        }
          @media (max-width: 768px) {
  .anb-footer {
    padding-top: 110px;
  }
}
      `}</style>

      <div className="anb-footer-wrap">
        <div className="anb-footer-main">
          <div className="anb-footer-brand anb-footer-reveal">
            <div className="anb-footer-mark">
              A/S
            </div>

            <h2 className="anb-footer-title">
              BUILD
              <span>WHAT&apos;S</span>
              NEXT.
            </h2>

            <p className="anb-footer-description">
              Anubhav Solutions is a digital technology studio creating
              websites, software, mobile applications and digital
              experiences for ambitious businesses.
            </p>
          </div>

          <div className="anb-footer-reveal">
            <div className="anb-footer-column-title">
              Explore
            </div>

            <nav className="anb-footer-links">
              <a href="#services">Services</a>
              <a href="#work">Work</a>
              <a href="#process">Process</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="anb-footer-reveal">
            <div className="anb-footer-column-title">
              Services
            </div>

            <nav className="anb-footer-links">
              <a href="#services">Web Development</a>
              <a href="#services">Custom Software</a>
              <a href="#services">Mobile Apps</a>
              <a href="#services">UI / UX Design</a>
              <a href="#services">AI & Automation</a>
            </nav>
          </div>

          <div className="anb-footer-reveal">
            <div className="anb-footer-column-title">
              Connect
            </div>

            <div className="anb-footer-contact">
              <a href="mailto:hello@anubhavsolutions.com">
                hello@anubhavsolutions.com
              </a>

              <a href="#contact">
                Start a Project ↗
              </a>

              <a href="#contact">
                Let&apos;s Talk ↗
              </a>
            </div>
          </div>
        </div>

        <div className="anb-footer-bottom">
          <div className="anb-footer-copy">
           © 2026 ANUBHAV SOLUTIONS
            <br />
            ALL RIGHTS RESERVED
          </div>

          <div className="anb-footer-credit">
            DIGITAL TECHNOLOGY STUDIO
            <br />
            MADE WITH INTENTION
          </div>

          <a
            href="#"
            className="anb-footer-back"
            aria-label="Back to top"
          >
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}