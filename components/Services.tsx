"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES_CSS = `
.anb-services {
  position: relative;
  overflow: hidden;
  padding: 150px 0 130px;
  background: #fff8f0;
  color: #35152f;
}

.anb-services__inner {
  width: min(1380px, calc(100% - 64px));
  margin: 0 auto;
}

.anb-services__top {
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 60px;
  align-items: end;
  margin-bottom: 80px;
}

.anb-services__eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #765f70;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .2em;
  text-transform: uppercase;
}

.anb-services__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #35152f;
}

.anb-services__title {
  margin: 18px 0 0;
  font-size: clamp(58px, 8vw, 125px);
  line-height: .84;
  letter-spacing: -.07em;
  font-weight: 900;
}

.anb-services__intro {
  max-width: 540px;
  margin-left: auto;
  color: #765f70;
  font-size: 17px;
  line-height: 1.7;
}

.anb-services__intro strong {
  color: #35152f;
}

.anb-services__list {
  position: relative;
  border-top: 1px solid rgba(53,21,47,.16);
}

.anb-service {
  position: relative;
  display: grid;
  grid-template-columns: 80px minmax(250px, .8fr) minmax(280px, 1fr) 80px;
  align-items: center;
  min-height: 155px;
  border-bottom: 1px solid rgba(53,21,47,.16);
  cursor: pointer;
  transition:
    padding .45s ease,
    background .45s ease;
}

.anb-service::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #35152f;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform .45s cubic-bezier(.76,0,.24,1);
  z-index: 0;
}

.anb-service:hover {
  padding-left: 24px;
  padding-right: 24px;
}

.anb-service:hover::before {
  transform: scaleY(1);
}

.anb-service__number,
.anb-service__name,
.anb-service__description,
.anb-service__arrow {
  position: relative;
  z-index: 2;
  transition: color .35s ease, transform .35s ease;
}

.anb-service__number {
  align-self: start;
  padding-top: 28px;
  color: #927c8b;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .12em;
}

.anb-service:hover .anb-service__number,
.anb-service:hover .anb-service__name,
.anb-service:hover .anb-service__description,
.anb-service:hover .anb-service__arrow {
  color: #fff8f0;
}

.anb-service__name {
  font-size: clamp(28px, 4vw, 54px);
  line-height: .95;
  letter-spacing: -.045em;
  font-weight: 900;
}

.anb-service__name span {
  display: block;
}

.anb-service__description {
  max-width: 430px;
  color: #765f70;
  font-size: 14px;
  line-height: 1.65;
}

.anb-service__visual {
  position: absolute;
  right: 115px;
  top: 50%;
  width: 145px;
  height: 100px;
  transform: translateY(-50%) scale(.8);
  opacity: 0;
  pointer-events: none;
  transition:
    opacity .4s ease,
    transform .5s cubic-bezier(.2,.8,.2,1);
  z-index: 1;
}

.anb-service:hover .anb-service__visual {
  opacity: 1;
  transform: translateY(-50%) scale(1);
}

.anb-service__arrow {
  justify-self: end;
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  border: 1px solid currentColor;
  border-radius: 50%;
  color: #35152f;
  font-size: 21px;
  transition:
    background .35s ease,
    color .35s ease,
    transform .45s ease;
}

.anb-service:hover .anb-service__arrow {
  background: #fff8f0;
  color: #35152f;
  transform: rotate(-45deg);
}

/* WEB VISUAL */

.anb-web {
  position: absolute;
  inset: 12px 0;
  border: 2px solid currentColor;
  border-radius: 9px;
  color: #fff8f0;
  overflow: hidden;
}

.anb-web__top {
  height: 17px;
  border-bottom: 1px solid currentColor;
  display: flex;
  align-items: center;
  gap: 4px;
  padding-left: 7px;
}

.anb-web__top i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
}

.anb-web__line {
  position: absolute;
  left: 12px;
  height: 5px;
  border-radius: 5px;
  background: currentColor;
}

.anb-web__line--one {
  top: 36px;
  width: 72px;
}

.anb-web__line--two {
  top: 48px;
  width: 46px;
  opacity: .55;
}

.anb-web__box {
  position: absolute;
  right: 12px;
  top: 32px;
  width: 38px;
  height: 45px;
  border: 1px solid currentColor;
  border-radius: 4px;
}

/* SOFTWARE */

.anb-software {
  position: absolute;
  inset: 10px;
}

.anb-software__gear {
  position: absolute;
  left: 48px;
  top: 20px;
  width: 55px;
  height: 55px;
  border: 7px dotted currentColor;
  border-radius: 50%;
  color: #fff8f0;
  animation: anb-spin 5s linear infinite;
}

.anb-software__core {
  position: absolute;
  left: 66px;
  top: 38px;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background: currentColor;
}

.anb-software__line {
  position: absolute;
  width: 35px;
  height: 2px;
  background: currentColor;
  top: 47px;
}

.anb-software__line--one {
  left: 8px;
}

.anb-software__line--two {
  right: 8px;
}

@keyframes anb-spin {
  to { transform: rotate(360deg); }
}

/* MOBILE */

.anb-mobile {
  position: absolute;
  left: 48px;
  top: 5px;
  width: 52px;
  height: 90px;
  border: 3px solid currentColor;
  border-radius: 12px;
  color: #fff8f0;
}

.anb-mobile::before {
  content: "";
  position: absolute;
  left: 8px;
  right: 8px;
  top: 20px;
  height: 38px;
  border: 1px solid currentColor;
  border-radius: 4px;
}

.anb-mobile::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  left: 50%;
  bottom: 7px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: currentColor;
}

/* DESIGN */

.anb-design {
  position: absolute;
  inset: 5px;
  color: #fff8f0;
}

.anb-design__paper {
  position: absolute;
  left: 30px;
  top: 5px;
  width: 85px;
  height: 85px;
  border: 2px solid currentColor;
  border-radius: 5px;
  transform: rotate(-6deg);
}

.anb-design__line {
  position: absolute;
  left: 43px;
  height: 4px;
  border-radius: 5px;
  background: currentColor;
}

.anb-design__line--one {
  top: 27px;
  width: 48px;
}

.anb-design__line--two {
  top: 41px;
  width: 33px;
}

.anb-design__pencil {
  position: absolute;
  width: 8px;
  height: 76px;
  background: currentColor;
  right: 21px;
  top: 8px;
  transform: rotate(38deg);
  border-radius: 5px;
}

/* AI */

.anb-ai {
  position: absolute;
  inset: 0;
}

.anb-ai__circle {
  position: absolute;
  left: 45px;
  top: 16px;
  width: 68px;
  height: 68px;
  border: 2px solid currentColor;
  border-radius: 50%;
  color: #fff8f0;
}

.anb-ai__circle::before,
.anb-ai__circle::after {
  content: "";
  position: absolute;
  inset: 12px;
  border: 1px dashed currentColor;
  border-radius: 50%;
}

.anb-ai__circle::after {
  inset: 26px;
  background: currentColor;
  border: 0;
}

/* GROWTH */

.anb-growth {
  position: absolute;
  inset: 10px;
  color: #fff8f0;
}

.anb-growth__bar {
  position: absolute;
  bottom: 5px;
  width: 16px;
  background: currentColor;
  border-radius: 4px 4px 0 0;
}

.anb-growth__bar--one {
  left: 18px;
  height: 25px;
}

.anb-growth__bar--two {
  left: 44px;
  height: 45px;
}

.anb-growth__bar--three {
  left: 70px;
  height: 67px;
}

.anb-growth__arrow {
  position: absolute;
  right: 15px;
  top: 13px;
  font-size: 42px;
  transform: rotate(-20deg);
}

/* FOOTER */

.anb-services__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding-top: 35px;
  color: #765f70;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.anb-services__footer span:last-child {
  color: #35152f;
}

/* MOBILE */

@media (max-width: 900px) {
  .anb-services__top {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .anb-services__intro {
    margin-left: 0;
  }

  .anb-service {
    grid-template-columns: 55px 1fr 60px;
    min-height: 145px;
  }

  .anb-service__description,
  .anb-service__visual {
    display: none;
  }
}

@media (max-width: 600px) {
  .anb-services {
    padding: 100px 0 90px;
  }

  .anb-services__inner {
    width: min(100% - 36px, 1380px);
  }

  .anb-services__top {
    margin-bottom: 55px;
  }

  .anb-services__title {
    font-size: clamp(54px, 16vw, 82px);
  }

  .anb-service {
    grid-template-columns: 42px 1fr 48px;
    min-height: 120px;
  }

  .anb-service:hover {
    padding-left: 10px;
    padding-right: 10px;
  }

  .anb-service__number {
    padding-top: 22px;
    font-size: 9px;
  }

  .anb-service__name {
    font-size: clamp(25px, 8vw, 42px);
  }

  .anb-service__arrow {
    width: 42px;
    height: 42px;
    font-size: 17px;
  }

  .anb-services__footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .anb-software__gear {
    animation: none;
  }
}
`;

function ServiceVisual({ type }: { type: string }) {
  if (type === "web") {
    return (
      <div className="anb-web">
        <div className="anb-web__top">
          <i />
          <i />
          <i />
        </div>
        <div className="anb-web__line anb-web__line--one" />
        <div className="anb-web__line anb-web__line--two" />
        <div className="anb-web__box" />
      </div>
    );
  }

  if (type === "software") {
    return (
      <div className="anb-software">
        <div className="anb-software__gear" />
        <div className="anb-software__core" />
        <div className="anb-software__line anb-software__line--one" />
        <div className="anb-software__line anb-software__line--two" />
      </div>
    );
  }

  if (type === "mobile") {
    return <div className="anb-mobile" />;
  }

  if (type === "design") {
    return (
      <div className="anb-design">
        <div className="anb-design__paper" />
        <div className="anb-design__line anb-design__line--one" />
        <div className="anb-design__line anb-design__line--two" />
        <div className="anb-design__pencil" />
      </div>
    );
  }

  if (type === "ai") {
    return (
      <div className="anb-ai">
        <div className="anb-ai__circle" />
      </div>
    );
  }

  return (
    <div className="anb-growth">
      <div className="anb-growth__bar anb-growth__bar--one" />
      <div className="anb-growth__bar anb-growth__bar--two" />
      <div className="anb-growth__bar anb-growth__bar--three" />
      <div className="anb-growth__arrow">↗</div>
    </div>
  );
}

const services = [
  {
    number: "01",
    title: "WEB",
    subtitle: "DEVELOPMENT",
    description:
      "Fast, responsive websites and digital platforms designed around your brand, users and business goals.",
    type: "web",
  },
  {
    number: "02",
    title: "CUSTOM",
    subtitle: "SOFTWARE",
    description:
      "Purpose-built software that simplifies operations, connects systems and solves real business problems.",
    type: "software",
  },
  {
    number: "03",
    title: "MOBILE",
    subtitle: "APPLICATIONS",
    description:
      "Modern mobile experiences that make your products and services easier to access anywhere.",
    type: "mobile",
  },
  {
    number: "04",
    title: "UI / UX",
    subtitle: "DESIGN",
    description:
      "Clear interfaces and thoughtful experiences that turn complex ideas into simple digital products.",
    type: "design",
  },
  {
    number: "05",
    title: "AI &",
    subtitle: "AUTOMATION",
    description:
      "Intelligent workflows and automation that help teams reduce repetitive work and move faster.",
    type: "ai",
  },
  {
    number: "06",
    title: "SEO · ADS ·",
    subtitle: "ANIMATION",
    description:
      "Digital growth, creative campaigns and motion content that help your business get noticed.",
    type: "growth",
  },
];

export default function Services() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      gsap.from(".anb-services__eyebrow", {
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
        },
        y: 20,
        opacity: 0,
        duration: 0.7,
      });

      gsap.from(".anb-services__title", {
        scrollTrigger: {
          trigger: root,
          start: "top 70%",
        },
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".anb-services__intro", {
        scrollTrigger: {
          trigger: root,
          start: "top 70%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
      });

      gsap.from(".anb-service", {
        scrollTrigger: {
          trigger: ".anb-services__list",
          start: "top 78%",
        },
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.09,
        ease: "power3.out",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SERVICES_CSS }} />

      <section
        ref={rootRef}
        className="anb-services"
        id="services"
      >
        <div className="anb-services__inner">
          <div className="anb-services__top">
            <div>
              <div className="anb-services__eyebrow">
                <span className="anb-services__dot" />
                What we build
              </div>

              <h2 className="anb-services__title">
                DIGITAL
                <br />
                THAT
                <br />
                MOVES.
              </h2>
            </div>

            <p className="anb-services__intro">
              From the first idea to the final launch, we combine{" "}
              <strong>design, technology and creativity</strong> to build
              digital experiences that help businesses move forward.
            </p>
          </div>

          <div className="anb-services__list">
            {services.map((service) => (
              <div className="anb-service" key={service.number}>
                <div className="anb-service__number">
                  {service.number}
                </div>

                <div className="anb-service__name">
                  <span>{service.title}</span>
                  <span>{service.subtitle}</span>
                </div>

                <div className="anb-service__description">
                  {service.description}
                </div>

                <div className="anb-service__visual">
                  <ServiceVisual type={service.type} />
                </div>

                <div className="anb-service__arrow">
                  ↗
                </div>
              </div>
            ))}
          </div>

          <div className="anb-services__footer">
            <span>Strategy · Design · Technology</span>
            <span>Built around your business →</span>
          </div>
        </div>
      </section>
    </>
  );
}