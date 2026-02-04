import { useState } from "react";
import { Button } from "../../components/Button/Button";
import "./header.css";
import logo from "../../assets/images/svg/logo_nexus.svg";
import menuIcon from "../../assets/images/svg/menu-hamburger.svg";
import { useLocation } from "react-router";
import NavItem from "../../components/NavItem";

interface HeaderProps {
  showReservations: boolean;
  setShowReservations: (value: boolean) => void;
}

export const Header = () => {
  const { pathname } = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  let closeTimeout: number;

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout);
    setSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setSubmenuOpen(false);
    }, 150);
  };

  return (
    <header className="menu">
      <div className="menu-container">
        <a href="/">
          <img src={logo} alt="Logo Nexus" className="logo" />
        </a>

        <div className="hamburger-container">
          <input
            type="checkbox"
            className="menu-icon"
            id="hamburguer"
            checked={menuOpen}
            onChange={(e) => setMenuOpen(e.target.checked)}
          />
          <label htmlFor="hamburguer">
            <img src={menuIcon} alt="icono de menú" />
          </label>
        </div>

        <nav className={menuOpen ? "nav-open" : ""}>
          <ul>
            <NavItem label="Inicio" path="/" />
            <NavItem label="Librería" path="/library" />

            {/* <li
              className="nav-item-with-submenu"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className={`nav-link ${ pathName === '/' ? 'active': '' }`}>Coworking</span>
              <div className={`submenu ${submenuOpen ? "show" : ""}`}>
                <button onClick={() => setShowReservations(!showReservations)}>
                  {showReservations ? "Ver Espacios" : "Mis Reservas"}
                </button> 
              </div>
            </li> */}

            <NavItem label="Coworking" path="/coworking" />

            <li className="button-group">
              <Button label="Registrarse" variant="primary-outline" />
              <Button label="Iniciar Sesión" variant="primary" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
