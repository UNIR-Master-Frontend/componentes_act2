import { useState, useEffect } from "react";
import "./header.css";
import logo from "../../assets/images/svg/logo_nexus.svg";
import menuIcon from "../../assets/images/svg/menu-hamburger.svg";
import closeIcon from "../../assets/images/svg/close-icon.svg";
import NavItem from "../../components/NavItem/NavItem";
import { useNavigate, useLocation } from "react-router";
import useUser from "../../hooks/useUser";
import Button from "../../components/Button/Button";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, setUserLogin } = useUser();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="menu">
      <div className="menu-container">
        <a onClick={() => { navigate("/"); closeMenu(); }}>
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
            <img src={menuOpen ? closeIcon : menuIcon} alt="icono de menú" />
          </label>
        </div>

        <nav className={menuOpen ? "nav-open" : ""}>
          <ul>
            <NavItem label="Inicio" path="/" onClick={closeMenu} />
            <NavItem label="Librería" path="/library" onClick={closeMenu} />
            <NavItem label="Coworking" path="/coworking" onClick={closeMenu} />
            <li className="button-group">
              {user ? (
                <>
                  <h3>{user.nombre}</h3>
                  <Button
                    label="Cerrar Sesión"
                    variant="primary"
                    onClick={() => { setUserLogin(undefined); closeMenu(); }}
                  />
                </>
              ) : (
                <Button
                  label="Iniciar Sesión"
                  variant="primary"
                  onClick={() => { navigate("auth"); closeMenu(); }}
                />
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
