"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WORK_CSS = `
.anb-work {
  position: relative;
  overflow: hidden;
  padding: 150px 0 150px;
  background: #f7ebdd;
  color: #35152f;
}

.anb-work__inner {
  width: min(1380px, calc(100% - 64px));
  margin: 0 auto;
}

.anb-work__heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 50px;
  margin-bottom: 75px;
}

.anb-work__eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  color: #765f70;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .2em;
  text-transform: uppercase;
}

.anb-work__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #35152f;
}

.anb-work__title {
  margin: 0;
  font-size: clamp(55px, 8vw, 125px);
  line-height: .84;
  letter-spacing: -.07em;
  font-weight: 900;
}

.anb-work__intro {
  max-width: 390px;
  margin: 0;
  color: #765f70;
  font-size: 16px;
  line-height: 1.7;
}

/* PROJECT GRID */

.anb-work__grid {
  display: grid;
  grid-template-columns: 1.35fr .85fr;
  gap: 22px;
}

.anb-project {
  position: relative;
  min-height: 570px;
  overflow: hidden;
  border-radius: 2px;
  background: #35152f;
  color: #fff8f0;
  cursor: pointer;
}

.anb-project--large {
  min-height: 700px;
}

.anb-project--wide {
  grid-column: 1 / -1;
  min-height: 480px;
}

.anb-project__visual {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.anb-project__glow {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 248, 240, .22) 0%,
    rgba(255, 248, 240, .07) 38%,
    transparent 70%
  );
  filter: blur(5px);
  transition: transform 1s cubic-bezier(.2,.8,.2,1);
}

.anb-project:hover .anb-project__glow {
  transform: scale(1.35);
}

/* BROWSER PROJECT */

.anb-browser {
  position: absolute;
  width: 74%;
  height: 58%;
  left: 13%;
  top: 18%;
  overflow: hidden;
  border: 1px solid rgba(255,248,240,.45);
  border-radius: 14px;
  background: #fff8f0;
  color: #35152f;
  transform: rotate(-3deg);
  box-shadow: 0 35px 80px rgba(20,5,17,.25);
  transition:
    transform .8s cubic-bezier(.2,.8,.2,1),
    width .8s ease;
}

.anb-project:hover .anb-browser {
  transform: rotate(1deg) translateY(-12px) scale(1.03);
}

.anb-browser__bar {
  height: 31px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding-left: 12px;
  border-bottom: 1px solid rgba(53,21,47,.12);
}

.anb-browser__bar i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #35152f;
}

.anb-browser__hero {
  position: relative;
  height: 44%;
  padding: 28px;
  background: #f1dfce;
}

.anb-browser__hero h3 {
  width: 55%;
  margin: 0;
  font-size: clamp(20px, 3vw, 38px);
  line-height: .9;
  letter-spacing: -.06em;
}

.anb-browser__hero p {
  width: 42%;
  margin-top: 12px;
  font-size: 8px;
  line-height: 1.5;
  opacity: .65;
}

.anb-browser__shape {
  position: absolute;
  right: 25px;
  top: 25px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 12px solid #35152f;
  opacity: .9;
}

.anb-browser__cards {
  display: flex;
  gap: 9px;
  padding: 18px 25px;
}

.anb-browser__card {
  height: 80px;
  flex: 1;
  border: 1px solid rgba(53,21,47,.18);
  border-radius: 6px;
}

/* DASHBOARD PROJECT */

.anb-dashboard {
  position: absolute;
  width: 82%;
  height: 61%;
  left: 9%;
  top: 17%;
  padding: 12px;
  border: 1px solid rgba(255,248,240,.35);
  border-radius: 13px;
  background: rgba(255,248,240,.1);
  backdrop-filter: blur(5px);
  transform: rotate(3deg);
  transition:
    transform .8s cubic-bezier(.2,.8,.2,1),
    scale .8s ease;
}

.anb-project:hover .anb-dashboard {
  transform: rotate(-1deg) translateY(-10px);
  scale: 1.03;
}

.anb-dashboard__top {
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid rgba(255,248,240,.18);
}

.anb-dashboard__brand {
  width: 65px;
  height: 7px;
  border-radius: 5px;
  background: #fff8f0;
}

.anb-dashboard__menu {
  display: flex;
  gap: 5px;
}

.anb-dashboard__menu i {
  width: 22px;
  height: 5px;
  border-radius: 5px;
  background: rgba(255,248,240,.5);
}

.anb-dashboard__body {
  display: grid;
  grid-template-columns: 75px 1fr;
  gap: 10px;
  height: calc(100% - 35px);
  padding-top: 10px;
}

.anb-dashboard__side {
  border-radius: 6px;
  background: rgba(255,248,240,.08);
}

.anb-dashboard__main {
  display: grid;
  grid-template-rows: 65px 1fr;
  gap: 10px;
}

.anb-dashboard__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
}

.anb-dashboard__stat {
  border-radius: 6px;
  background: rgba(255,248,240,.1);
}

.anb-dashboard__chart {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  background: rgba(255,248,240,.08);
}

.anb-dashboard__chart::before {
  content: "";
  position: absolute;
  left: 10%;
  right: 10%;
  bottom: 20%;
  height: 2px;
  background: #fff8f0;
  transform: rotate(-13deg);
  transform-origin: left;
}

.anb-dashboard__chart::after {
  content: "";
  position: absolute;
  left: 38%;
  top: 29%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fff8f0;
  box-shadow:
    38px -18px 0 #fff8f0,
    70px -35px 0 #fff8f0,
    102px -52px 0 #fff8f0;
}

/* CAMPAIGN PROJECT */

.anb-campaign {
  position: absolute;
  inset: 0;
}

.anb-campaign__poster {
  position: absolute;
  width: 220px;
  height: 290px;
  left: 17%;
  top: 15%;
  padding: 25px;
  background: #fff8f0;
  color: #35152f;
  transform: rotate(-7deg);
  box-shadow: 0 30px 70px rgba(20,5,17,.25);
  transition: transform .8s cubic-bezier(.2,.8,.2,1);
}

.anb-project:hover .anb-campaign__poster {
  transform: rotate(-1deg) translateY(-15px);
}

.anb-campaign__poster h3 {
  margin: 0;
  font-size: 42px;
  line-height: .83;
  letter-spacing: -.07em;
}

.anb-campaign__poster p {
  margin-top: 18px;
  font-size: 10px;
  line-height: 1.5;
}

.anb-campaign__circle {
  position: absolute;
  right: 10%;
  top: 20%;
  width: 220px;
  height: 220px;
  border: 2px solid rgba(255,248,240,.5);
  border-radius: 50%;
}

.anb-campaign__circle::before,
.anb-campaign__circle::after {
  content: "";
  position: absolute;
  inset: 22px;
  border: 1px solid rgba(255,248,240,.35);
  border-radius: 50%;
}

.anb-campaign__circle::after {
  inset: 60px;
  background: #fff8f0;
  border: 0;
}

/* PROJECT CONTENT */

.anb-project__content {
  position: absolute;
  z-index: 5;
  inset: auto 35px 32px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 30px;
}

.anb-project__category {
  margin-bottom: 10px;
  color: rgba(255,248,240,.65);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .18em;
  text-transform: uppercase;
}

.anb-project__name {
  margin: 0;
  font-size: clamp(34px, 5vw, 62px);
  line-height: .9;
  letter-spacing: -.055em;
  font-weight: 900;
}

.anb-project__arrow {
  flex: 0 0 auto;
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255,248,240,.6);
  border-radius: 50%;
  font-size: 20px;
  transition:
    background .4s ease,
    color .4s ease,
    transform .5s ease;
}

.anb-project:hover .anb-project__arrow {
  background: #fff8f0;
  color: #35152f;
  transform: rotate(-45deg);
}

.anb-project__shade {
  position: absolute;
  inset: 45% 0 0;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(20,5,17,.85)
  );
  z-index: 3;
}

/* TAGS */

.anb-project__tags {
  position: absolute;
  z-index: 6;
  top: 28px;
  left: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.anb-project__tag {
  padding: 7px 11px;
  border: 1px solid rgba(255,248,240,.28);
  border-radius: 30px;
  background: rgba(53,21,47,.2);
  backdrop-filter: blur(5px);
  color: #fff8f0;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
}

/* BOTTOM LABEL */

.anb-work__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
  padding-top: 25px;
  border-top: 1px solid rgba(53,21,47,.16);
}

.anb-work__bottom span {
  color: #765f70;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .15em;
  text-transform: uppercase;
}

.anb-work__bottom strong {
  color: #35152f;
}

/* MOBILE */

@media (max-width: 900px) {
  .anb-work {
    padding: 110px 0;
  }

  .anb-work__heading {
    display: block;
    margin-bottom: 55px;
  }

  .anb-work__intro {
    margin-top: 30px;
  }

  .anb-work__grid {
    grid-template-columns: 1fr;
  }

  .anb-project,
  .anb-project--large,
  .anb-project--wide {
    grid-column: auto;
    min-height: 520px;
  }

  .anb-project--wide {
    min-height: 450px;
  }
}

@media (max-width: 600px) {
  .anb-work {
    padding: 95px 0;
  }

  .anb-work__inner {
    width: calc(100% - 36px);
  }

  .anb-work__title {
    font-size: 17vw;
  }

  .anb-project,
  .anb-project--large,
  .anb-project--wide {
    min-height: 430px;
  }

  .anb-browser {
    width: 86%;
    left: 7%;
    height: 52%;
    top: 19%;
  }

  .anb-dashboard {
    width: 88%;
    left: 6%;
    height: 54%;
  }

  .anb-campaign__poster {
    width: 170px;
    height: 225px;
    left: 8%;
  }

  .anb-campaign__poster h3 {
    font-size: 32px;
  }

  .anb-campaign__circle {
    width: 150px;
    height: 150px;
    right: 5%;
  }

  .anb-project__content {
    inset: auto 22px 23px;
  }

  .anb-project__name {
    font-size: 35px;
  }

  .anb-project__arrow {
    width: 44px;
    height: 44px;
  }

  .anb-project__tags {
    top: 20px;
    left: 20px;
  }

  .anb-work__bottom {
    display: block;
  }

  .anb-work__bottom span {
    display: block;
    margin-bottom: 10px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .anb-project *,
  .anb-project {
    transition: none !important;
  }
}
`;

export default function SelectedWork() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      gsap.from(".anb-work__eyebrow", {
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
        },
        y: 20,
        opacity: 0,
        duration: 0.7,
      });

      gsap.from(".anb-work__title", {
        scrollTrigger: {
          trigger: root,
          start: "top 70%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".anb-work__intro", {
        scrollTrigger: {
          trigger: root,
          start: "top 70%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
      });

      gsap.from(".anb-project", {
        scrollTrigger: {
          trigger: ".anb-work__grid",
          start: "top 80%",
        },
        y: 70,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: WORK_CSS }} />

      <section
        ref={rootRef}
        className="anb-work"
        id="work"
      >
        <div className="anb-work__inner">

          <div className="anb-work__heading">
            <div>
              <div className="anb-work__eyebrow">
                <span className="anb-work__dot" />
                Selected work
              </div>

              <h2 className="anb-work__title">
                BUILT FOR
                <br />
                REAL
                <br />
                BUSINESSES.
              </h2>
            </div>

            <p className="anb-work__intro">
              Every project starts with a business problem. We turn that
              problem into a digital product that looks good, works properly
              and is built to grow.
            </p>
          </div>

          <div className="anb-work__grid">

            {/* PROJECT 01 */}
            <article className="anb-project anb-project--large">
              <div className="anb-project__visual">
                <div
                  className="anb-project__glow"
                  style={{ left: "-100px", top: "-80px" }}
                />

                <div className="anb-browser">
                  <div className="anb-browser__bar">
                    <i />
                    <i />
                    <i />
                  </div>

                  <div className="anb-browser__hero">
                    <h3>
                      DIGITAL
                      <br />
                      BUSINESS
                    </h3>

                    <p>
                      A modern digital presence designed to turn visitors
                      into customers.
                    </p>

                    <div className="anb-browser__shape" />
                  </div>

                  <div className="anb-browser__cards">
                    <div className="anb-browser__card" />
                    <div className="anb-browser__card" />
                    <div className="anb-browser__card" />
                  </div>
                </div>
              </div>

              <div className="anb-project__tags">
                <span className="anb-project__tag">Website</span>
                <span className="anb-project__tag">UI / UX</span>
                <span className="anb-project__tag">Development</span>
              </div>

              <div className="anb-project__shade" />

              <div className="anb-project__content">
                <div>
                  <div className="anb-project__category">
                    Project type · Business
                  </div>

                  <h3 className="anb-project__name">
                    Business
                    <br />
                    Platform
                  </h3>
                </div>

                <div className="anb-project__arrow">↗</div>
              </div>
            </article>

            {/* PROJECT 02 */}
            <article className="anb-project">
              <div className="anb-project__visual">
                <div
                  className="anb-project__glow"
                  style={{ right: "-120px", top: "30px" }}
                />

                <div className="anb-dashboard">
                  <div className="anb-dashboard__top">
                    <div className="anb-dashboard__brand" />

                    <div className="anb-dashboard__menu">
                      <i />
                      <i />
                    </div>
                  </div>

                  <div className="anb-dashboard__body">
                    <div className="anb-dashboard__side" />

                    <div className="anb-dashboard__main">
                      <div className="anb-dashboard__stats">
                        <div className="anb-dashboard__stat" />
                        <div className="anb-dashboard__stat" />
                        <div className="anb-dashboard__stat" />
                      </div>

                      <div className="anb-dashboard__chart" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="anb-project__tags">
                <span className="anb-project__tag">SaaS</span>
                <span className="anb-project__tag">Dashboard</span>
              </div>

              <div className="anb-project__shade" />

              <div className="anb-project__content">
                <div>
                  <div className="anb-project__category">
                    Project type · SaaS
                  </div>

                  <h3 className="anb-project__name">
                    SaaS
                    <br />
                    Product
                  </h3>
                </div>

                <div className="anb-project__arrow">↗</div>
              </div>
            </article>

            {/* PROJECT 03 */}
            <article className="anb-project anb-project--wide">
              <div className="anb-project__visual">
                <div
                  className="anb-project__glow"
                  style={{ left: "35%", top: "-100px" }}
                />

                <div className="anb-campaign">
                  <div className="anb-campaign__poster">
                    <h3>
                      MAKE
                      <br />
                      IT
                      <br />
                      MOVE.
                    </h3>

                    <p>
                      Creative campaigns, motion and digital growth built
                      around your audience.
                    </p>
                  </div>

                  <div className="anb-campaign__circle" />
                </div>
              </div>

              <div className="anb-project__tags">
                <span className="anb-project__tag">SEO</span>
                <span className="anb-project__tag">Meta Ads</span>
                <span className="anb-project__tag">Animation</span>
              </div>

              <div className="anb-project__shade" />

              <div className="anb-project__content">
                <div>
                  <div className="anb-project__category">
                    Project type · Growth
                  </div>

                  <h3 className="anb-project__name">
                    Growth
                    <br />
                    Campaign
                  </h3>
                </div>

                <div className="anb-project__arrow">↗</div>
              </div>
            </article>

          </div>

          <div className="anb-work__bottom">
            <span>
              Digital products · Websites · Software · Growth
            </span>

            <span>
              <strong>03</strong> project directions
            </span>
          </div>

        </div>
      </section>
    </>
  );
}