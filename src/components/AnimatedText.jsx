import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const easeOutExpo = [0.16, 1, 0.3, 1];

function useLightMotion() {
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return {
    reduceMotion,
    light: Boolean(reduceMotion || isMobile),
  };
}

export function SplitChars({
  text,
  as: Tag = "span",
  className,
  delay = 0,
  stagger = 0.035,
  once = true,
  immediate = false,
}) {
  const { reduceMotion, light } = useLightMotion();
  const chars = Array.from(text);

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const motionProps = immediate
    ? { initial: "hidden", animate: "visible" }
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once, amount: 0.4 },
      };

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        style={{ display: "inline-block", perspective: light ? undefined : 800 }}
        {...motionProps}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: light ? Math.max(stagger * 0.6, 0.02) : stagger,
              delayChildren: delay,
            },
          },
        }}
        aria-hidden="true"
      >
        {chars.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            style={{
              display: "inline-block",
              whiteSpace: char === " " ? "pre" : "normal",
              transformOrigin: "bottom",
            }}
            variants={{
              hidden: {
                opacity: 0,
                y: light ? 24 : 48,
                rotateX: light ? 0 : -55,
                filter: light ? "none" : "blur(8px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                filter: "none",
                transition: {
                  duration: light ? 0.55 : 0.85,
                  ease: easeOutExpo,
                },
              },
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}

export function SplitWords({
  text,
  as: Tag = "p",
  className,
  delay = 0,
  stagger = 0.05,
  once = true,
  immediate = false,
}) {
  const { reduceMotion, light } = useLightMotion();
  const words = text.split(" ");

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const motionProps = immediate
    ? { initial: "hidden", animate: "visible" }
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once, amount: 0.35 },
      };

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        style={{ display: "inline" }}
        {...motionProps}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: light ? Math.max(stagger * 0.7, 0.02) : stagger,
              delayChildren: delay,
            },
          },
        }}
        aria-hidden="true"
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            style={{
              display: "inline-block",
              marginRight: "0.28em",
            }}
            variants={{
              hidden: {
                opacity: 0,
                y: light ? 16 : 28,
                filter: light ? "none" : "blur(6px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: "none",
                transition: {
                  duration: light ? 0.45 : 0.7,
                  ease: easeOutExpo,
                },
              },
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}

export function FadeUp({
  children,
  className,
  delay = 0,
  once = true,
  as: Tag = motion.div,
}) {
  const { reduceMotion, light } = useLightMotion();

  if (reduceMotion) {
    const Static = Tag === motion.div ? "div" : Tag;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Tag
      className={className}
      initial={{
        opacity: 0,
        y: light ? 20 : 36,
        filter: light ? "none" : "blur(4px)",
      }}
      whileInView={{ opacity: 1, y: 0, filter: "none" }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: light ? 0.55 : 0.85, delay, ease: easeOutExpo }}
    >
      {children}
    </Tag>
  );
}

export const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export const heroItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easeOutExpo },
  },
};
