import React from "react";
import FooterCSS from "../css/Footer.module.css";
import data from "../Data";

function Footer() {
  return (
    <footer className={FooterCSS.footer}>
      <div className={FooterCSS.container}>
        <p>{data.FooterText}</p>
        <p className={FooterCSS.credit}>
          Designed and developed by{" "}
          <a href="https://github.com/rakshixh">rakshixh</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
