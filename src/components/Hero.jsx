import React from "react";
import { motion } from "framer-motion";
import HeroCSS from "../css/Hero.module.css";
import data from "../Data";
import heroImage from "../assets/hero/hero.jpg";
import { SplitChars, SplitWords, heroContainer, heroItem } from "./AnimatedText";

function Hero() {
  return (
    <section className={HeroCSS.hero} aria-label="Hero">
      <motion.img
        src={heroImage}
        alt=""
        className={HeroCSS.background}
        draggable="false"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        initial={{ scale: 1.12, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className={HeroCSS.overlay} />
      <motion.div
        className={HeroCSS.content}
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <SplitChars
          text={data.HeroName}
          as="h1"
          className={HeroCSS.name}
          delay={0.25}
          stagger={0.045}
          immediate
        />
        <SplitWords
          text={data.HeroTagline}
          as="p"
          className={HeroCSS.tagline}
          delay={0.7}
          stagger={0.04}
          immediate
        />
        <motion.div className={HeroCSS.actions} variants={heroItem}>
          <a href="#gallery" className={HeroCSS.primaryBtn}>
            {data.HeroCtaGallery}
          </a>
          <a href="#commission" className={HeroCSS.secondaryBtn}>
            {data.HeroCtaCommission}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
