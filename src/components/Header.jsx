import { useState } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import HeaderCSS from "../css/Header.module.css";
import data from "../Data";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/#about", label: "About" },
  { to: "/#gallery", label: "Gallery" },
  { to: "/#commission", label: "Commission" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={HeaderCSS.container}>
      <Link to="/" className={HeaderCSS.brand} aria-label="Bashar Hroub home">
        <span className={HeaderCSS.brandText}>{data.HeaderTitle}</span>
      </Link>
      <div className={HeaderCSS.hamburger} aria-label="Toggle menu">
        <Hamburger
          toggled={menuOpen}
          toggle={setMenuOpen}
          color="#f3f3f3"
          size={24}
          label="Show menu"
        />
      </div>
      <nav
        className={`${HeaderCSS.nav} ${menuOpen ? HeaderCSS.navOpen : ""}`}
        aria-label="Primary"
        aria-hidden={!menuOpen}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} onClick={handleLinkClick}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
