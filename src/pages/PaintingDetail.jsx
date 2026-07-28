import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import DetailCSS from "../css/PaintingDetail.module.css";
import { getPaintingBySlug } from "../paintings";
import { SplitChars, SplitWords, FadeUp } from "../components/AnimatedText";
import PageMeta from "../components/PageMeta";
import NotFound from "./NotFound";

function PaintingDetail() {
  const { slug } = useParams();
  const painting = getPaintingBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [slug]);

  if (!painting) {
    return <NotFound />;
  }

  return (
    <>
      <PageMeta
        title={painting.title}
        description={`${painting.title} — ${painting.medium}. ${painting.description}`}
      />
      <main className={DetailCSS.main} aria-label={painting.title}>
        <FadeUp>
          <Link to="/#gallery" className={DetailCSS.back}>
            ← Back to gallery
          </Link>
        </FadeUp>
        <div className={DetailCSS.layout}>
          <FadeUp className={DetailCSS.imageWrap} delay={0.08}>
            <motion.img
              src={painting.image}
              alt={painting.title}
              className={DetailCSS.image}
              draggable="false"
              loading="eager"
              decoding="async"
              initial={{ scale: 1.06, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </FadeUp>
          <div className={DetailCSS.details}>
            <SplitChars
              text={painting.title}
              as="h1"
              className={DetailCSS.title}
              delay={0.15}
              stagger={0.04}
              immediate
            />
            <SplitWords
              text={painting.date}
              as="p"
              className={DetailCSS.date}
              delay={0.45}
              stagger={0.05}
              immediate
            />
            <FadeUp delay={0.35}>
              <ul className={DetailCSS.metaList}>
                <li>
                  <span className={DetailCSS.metaLabel}>Artist</span>
                  <span>Bashar Hroub</span>
                </li>
                <li>
                  <span className={DetailCSS.metaLabel}>Medium</span>
                  <span>{painting.medium}</span>
                </li>
                <li>
                  <span className={DetailCSS.metaLabel}>Dimensions</span>
                  <span>{painting.dimensions}</span>
                </li>
                <li>
                  <span className={DetailCSS.metaLabel}>Year</span>
                  <span>{painting.year}</span>
                </li>
              </ul>
            </FadeUp>
            <SplitWords
              text={painting.description}
              as="p"
              className={DetailCSS.description}
              delay={0.55}
              stagger={0.03}
              immediate
            />
            <FadeUp delay={0.5} className={DetailCSS.actions}>
              <Link to="/#commission" className={DetailCSS.primaryBtn}>
                Inquire about this work
              </Link>
              <Link to="/#gallery" className={DetailCSS.secondaryBtn}>
                View all works
              </Link>
            </FadeUp>
          </div>
        </div>
      </main>
    </>
  );
}

export default PaintingDetail;
