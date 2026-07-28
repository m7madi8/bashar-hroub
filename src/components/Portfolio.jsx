import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PortfolioCSS from "../css/Portfolio.module.css";
import data from "../Data";
import paintings from "../paintings";
import { SplitChars, FadeUp } from "./AnimatedText";

function Portfolio() {
  return (
    <section id="gallery" className={PortfolioCSS.section} aria-label="Gallery">
      <SplitChars
        text={data.GalleryHeading}
        as="h2"
        className={PortfolioCSS.heading}
        stagger={0.04}
      />
      <div className={PortfolioCSS.gridContainer}>
        {paintings.map((painting, index) => (
          <PaintingCard
            key={painting.id}
            painting={painting}
            delay={Math.min(index * 0.06, 0.36)}
          />
        ))}
      </div>
    </section>
  );
}

function PaintingCard({ painting, delay }) {
  return (
    <FadeUp delay={delay}>
      <Link
        to={`/painting/${painting.slug}`}
        className={PortfolioCSS.card}
        aria-label={`View details for ${painting.title}`}
      >
        <div className={PortfolioCSS.imageWrapper}>
          <motion.img
            src={painting.image}
            alt={painting.title}
            className={PortfolioCSS.image}
            draggable="false"
            loading="lazy"
            decoding="async"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <div className={PortfolioCSS.meta}>
          <h3 className={PortfolioCSS.title}>{painting.title}</h3>
          <p className={PortfolioCSS.date}>{painting.date}</p>
        </div>
      </Link>
    </FadeUp>
  );
}

export default Portfolio;
