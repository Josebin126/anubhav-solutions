"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const INDUSTRIES_CSS = `
.anb-industries {
  position: relative;
  overflow: hidden;
  padding: 150px 0 145px;
  background: #35152f;
  color: #fff8f0;
}

.anb-industries__inner {
  width: min(1380px, calc(100% - 64px));
  margin: 0 auto;
}

.anb-industries__header {
  display: grid;
  grid-template-columns: 1fr .75fr;
  gap: 70px;
  align-items: end;
  margin-bottom: 85px;
}

.anb-industries__eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255,248,240,.58);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .2em;
  text-transform: uppercase;
}

.anb-industries__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fff8f0;
}

.anb-industries__title {
  margin: 20px 0 0;
  max-width: 900px;
  font-size: clamp(58px, 8.5vw, 130px);
  line-height: .82;
  letter-spacing: -.075em;
  font-weight: 900;
}

.anb-industries__intro {
  max-width: 430px;
  margin: 0 0 5px auto;
  color: rgba(255,248,240,.62);
  font-size: 16px;
  line-height: 1.7;
}

.anb-industries__intro strong {
  color: #fff8f0;
}

/* GRID */

.anb-industries__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid rgba(255,248,240,.2);
  border-left: 1px solid rgba(255,248,240,.2);
}

.anb-industry {
  position: relative;
  min-height: 310px;
  padding: 30px;
  overflow: hidden;
  border-right: 1px solid rgba(255,248,240,.2);
  border-bottom: 1px solid rgba(255,248,240,.2);
  cursor: pointer;
  transition:
    background .45s ease,
    color .45s ease;
}

.anb-industry::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #fff8f0;
  transform: translateY(100%);
  transition: transform .55s cubic-bezier(.76,0,.24,1);
}

.anb-industry:hover::before {
  transform: translateY(0);
}

.anb-industry__number,
.anb-industry__icon,
.anb-industry__content,
.anb-industry__arrow {
  position: relative;
  z-index: 2;
}

.anb-industry__number {
  color: rgba(255,248,240,.45);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .15em;
  transition: color .35s ease;
}

.anb-industry:hover .anb-industry__number {
  color: #765f70;
}

.anb-industry__icon {
  position: absolute;
  top: 27px;
  right: 29px;
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255,248,240,.4);
  border-radius: 50%;
  color: #fff8f0;
  font-size: 22px;
  transition:
    color .4s ease,
    background .4s ease,
    transform .5s cubic-bezier(.2,.8,.2,1);
}

.anb-industry:hover .anb-industry__icon {
  background: #35152f;
  color: #fff8f0;
  transform: rotate(12deg) scale(1.08);
}

.anb-industry__content {
  position: absolute;
  left: 30px;
  right: 30px;
  bottom: 30px;
}

.anb-industry__title {
  margin: 0;
  font-size: clamp(25px, 3vw, 42px);
  line-height: .9;
  letter-spacing: -.05em;
  font-weight: 900;
  transition: color .35s ease;
}

.anb-industry__title span {
  display: block;
}

.anb-industry:hover .anb-industry__title {
  color: #35152f;
}

.anb-industry__description {
  max-width: 310px;
  margin: 18px 0 0;
  color: rgba(255,248,240,.58);
  font-size: 12px;
  line-height: 1.65;
  transition: color .35s ease;
}

.anb-industry:hover .anb-industry__description {
  color: #765f70;
}

.anb-industry__arrow {
  position: absolute;
  right: 30px;
  bottom: 31px;
  font-size: 20px;
  color: rgba(255,248,240,.65);
  transition:
    color .35s ease,
    transform .45s ease;
}

.anb-industry:hover .anb-industry__arrow {
  color: #35152f;
  transform: translate(5px,-5px);
}

/* BOTTOM */

.anb-industries__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-top: 35px;
}

.anb-industries__bottom span {
  color: rgba(255,248,240,.45);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .15em;
  text-transform: uppercase;
}

.anb-industries__bottom strong {
  color: #fff8f0;
}

/* MOBILE */

@media (max-width: 950px) {
  .anb-industries {
    padding: 110px 0;
  }

  .anb-industries__header {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .anb-industries__intro {
    margin-left: 0;
  }

  .anb-industries__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .anb-industries {
    padding: 95px 0;
  }

  .anb-industries__inner {
    width: calc(100% - 36px);
  }

  .anb-industries__title {
    font-size: 16vw;
  }

  .anb-industries__grid {
    grid-template-columns: 1fr;
  }

  .anb-industry {
    min-height: 280px;
  }

  .anb-industries__bottom {
    display: block;
  }

  .anb-industries__bottom span {
    display: block;
    margin-bottom: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .anb-industry,
  .anb-industry::before,
  .anb-industry__icon,
  .anb-industry__arrow {
    transition: none !important;
  }
}
`;

const industries = [
  {
    number: "01",
    title: "BUSINESS",
    subtitle: "& CORPORATE",
    description:
      "Digital platforms and software solutions that help businesses operate, scale and grow.",
    icon: "▦",
  },
  {
    number: "02",
    title: "E-COMMERCE",
    subtitle: "& RETAIL",
    description:
      "Modern shopping experiences that connect brands with customers and make buying simpler.",
    icon: "◇",
  },
  {
    number: "03",
    title: "HEALTHCARE",
    subtitle: "& WELLNESS",
    description:
      "Simple digital experiences that make healthcare services easier to discover and access.",
    icon: "+",
  },
  {
    number: "04",
    title: "EDUCATION",
    subtitle: "& LEARNING",
    description:
      "Technology that creates engaging learning experiences for students and institutions.",
    icon: "✦",
  },
  {
    number: "05",
    title: "REAL ESTATE",
    subtitle: "& PROPERTY",
    description:
      "Digital products that make property discovery, management and communication easier.",
    icon: "⌂",
  },
  {
    number: "06",
    title: "STARTUPS",
    subtitle: "& SAAS",
    description:
      "Fast, scalable digital products built for ambitious startups and growing teams.",
    icon: "↗",
  },
];

export default function Industries() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      gsap.from(".anb-industries__eyebrow", {
        scrollTrigger: {
          trigger: root,
          start: "top 78%",
        },
        y: 20,
        opacity: 0,
        duration: 0.7,
      });

      gsap.from(".anb-industries__title", {
        scrollTrigger: {
          trigger: root,
          start: "top 72%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".anb-industries__intro", {
        scrollTrigger: {
          trigger: root,
          start: "top 72%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
      });

      gsap.from(".anb-industry", {
        scrollTrigger: {
          trigger: ".anb-industries__grid",
          start: "top 82%",
        },
        y: 45,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: "power3.out",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: INDUSTRIES_CSS }} />

      <section
        ref={rootRef}
        className="anb-industries"
        id="industries"
      >
        <div className="anb-industries__inner">

          <div className="anb-industries__header">
            <div>
              <div className="anb-industries__eyebrow">
                <span className="anb-industries__dot" />
                Where we work
              </div>

              <h2 className="anb-industries__title">
                BUILT FOR
                <br />
                THE REAL
                <br />
                WORLD.
              </h2>
            </div>

            <p className="anb-industries__intro">
              Different industries. Different challenges.
              <br />
              <strong>One approach:</strong> understand the problem,
              design the right experience and build technology that works.
            </p>
          </div>

          <div className="anb-industries__grid">
            {industries.map((industry) => (
              <article
                className="anb-industry"
                key={industry.number}
              >
                <div className="anb-industry__number">
                  {industry.number}
                </div>

                <div className="anb-industry__icon">
                  {industry.icon}
                </div>

                <div className="anb-industry__content">
                  <h3 className="anb-industry__title">
                    <span>{industry.title}</span>
                    <span>{industry.subtitle}</span>
                  </h3>

                  <p className="anb-industry__description">
                    {industry.description}
                  </p>
                </div>

                <div className="anb-industry__arrow">
                  ↗
                </div>
              </article>
            ))}
          </div>

          <div className="anb-industries__bottom">
            <span>
              Business · Retail · Healthcare · Education · Property · SaaS
            </span>

            <span>
              <strong>06</strong> industries
            </span>
          </div>

        </div>
      </section>
    </>
  );
}