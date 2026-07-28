import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import layoutCSS from "../css/MainLayout.module.css";

function MainLayout() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.pageYOffset > 300);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={layoutCSS.shell}>
      <a href="#main-content" className={layoutCSS.skipLink}>
        Skip to content
      </a>
      <Header />
      <div id="main-content" className={layoutCSS.content} tabIndex={-1}>
        <Outlet />
      </div>
      <Footer />
      {showScroll && <ScrollToTop />}
    </div>
  );
}

export default MainLayout;
