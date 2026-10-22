"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-label", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.15,
        ease: "power3.out",
      });

      gsap.from(".hero-description", {
        y: 35,
        opacity: 0,
        duration: 1,
        delay: 0.35,
        ease: "power3.out",
      });

      gsap.from(".hero-actions", {
        y: 35,
        opacity: 0,
        duration: 1,
        delay: 0.45,
        ease: "power3.out",
      });

      gsap.to(".hero-title", {
        y: -100,
        scale: 0.96,
        opacity: 0.55,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".hero-glow", {
        y: 160,
        scale: 1.25,
        opacity: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(".hero-scroll", {
        opacity: 0,
        y: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "35% top",
          scrub: 1,
        },
      });
      gsap.to(".hero-orbit-one", {
  rotation: 360,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 2,
  },
});

gsap.to(".hero-orbit-two", {
  rotation: -360,
  scale: 1.08,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 3,
  },
});
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="top" className="hero">
     <div className="hero-glow" />

<div className="hero-orbit hero-orbit-one">
  <span />
</div>

<div className="hero-orbit hero-orbit-two">
  <span />
</div>

      <div className="hero-inner">
        <div className="hero-label">
          <span className="hero-dot" />
          ANUBHAV SOLUTIONS · DIGITAL TECHNOLOGY STUDIO
        </div>

        <h1 className="hero-title">
          WE BUILD
          <span>DIGITAL SYSTEMS</span>
          THAT MOVE
          <span>BUSINESSES FORWARD.</span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-description">
            We design and develop modern websites, custom software,
            mobile applications and intelligent digital experiences
            built around real business needs.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="hero-button primary">
              START A PROJECT ↗
            </a>

            <a href="#work" className="hero-button secondary">
              EXPLORE OUR WORK ↓
            </a>
          </div>
        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
}