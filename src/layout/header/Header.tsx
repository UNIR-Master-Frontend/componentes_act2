import { useState } from "react";
import { Button } from "../../components/Button/Button";
import "./header.css";
import logo from "../../assets/images/svg/logo_nexus.svg";
import menuIcon from "../../assets/images/svg/menu-hamburger.svg";
import NavItem from "../../components/NavItem";
import { useNavigate } from "react-router";
import useUser from "../../hooks/useUser";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, setUserLogin } = useUser();

  return (
    <header className="menu">
      <div className="menu-container">
        <a onClick={() => navigate("/")}>
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
            <NavItem label="Coworking" path="/coworking" />
            <li className="button-group">
              {user ? (
                <>
                  <h3>{user.nombre}</h3>
                  <Button
                    label="Cerrar Sesión"
                    variant="primary"
                    onClick={() => setUserLogin(undefined)}
                  />
                </>
              ) : (
                <Button
                  label="Iniciar Sesión"
                  variant="primary"
                  onClick={() => navigate("auth")}
                />
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
