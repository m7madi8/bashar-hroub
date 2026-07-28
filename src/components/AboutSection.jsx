import React from "react";
import AboutCSS from "../css/AboutSection.module.css";
import data from "../Data";
import aboutImage from "../assets/profile/about.jpg";
import { SplitChars, SplitWords, FadeUp } from "./AnimatedText";

function AboutSection() {
  const handleClick = () => {
    const email = data.AboutEmail;
    const subject = data.AboutEmailSubject;
    const emailLink = document.createElement("a");
    emailLink.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    emailLink.click();
  };

  return (
    <section id="about" className={AboutCSS.section} aria-label="About">
      <div className={AboutCSS.content}>
        <FadeUp className={AboutCSS.imageWrapper} delay={0.05}>
          <img
            src={aboutImage}
            alt="Bashar Hroub"
            className={AboutCSS.image}
            loading="lazy"
            decoding="async"
          />
        </FadeUp>
        <div className={AboutCSS.textWrapper}>
          <SplitChars
            text={data.AboutHeading}
            as="h2"
            className={AboutCSS.heading}
            stagger={0.04}
          />
          <SplitWords
            text={data.AboutTextParagraph1}
            as="p"
            className={AboutCSS.paragraph}
            delay={0.15}
            stagger={0.028}
          />
          <SplitWords
            text={data.AboutTextParagraph2}
            as="p"
            className={AboutCSS.paragraph}
            delay={0.28}
            stagger={0.025}
          />
          <FadeUp delay={0.35}>
            <button
              type="button"
              onClick={handleClick}
              className={AboutCSS.contactButton}
            >
              {data.AboutButtonText}
            </button>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
