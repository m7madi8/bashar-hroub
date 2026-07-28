import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Portfolio from "../components/Portfolio";
import Commission from "../components/Commission";
import PageMeta from "../components/PageMeta";
import { scrollToHash } from "../utils/scrollToHash";
import data from "../Data";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scrollToHash(location.hash);
      return;
    }

    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [location.pathname, location.hash, location.key]);

  return (
    <>
      <PageMeta
        title={null}
        description={data.HeroTagline}
      />
      <Hero />
      <AboutSection />
      <Portfolio />
      <Commission />
    </>
  );
}

export default Home;
