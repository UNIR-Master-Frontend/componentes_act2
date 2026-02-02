import "./footer.css";
import "../../shared/icomoon.css";
import logo from "../../assets/images/svg/logo_nexus.svg";

export const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Logo Nexus" className="logo" />
      <div className="media-container">
        <i className="icon-facebook"></i>
        <i className="icon-instagram"></i>
        <i className="icon-linkedin"></i>
        <i className="icon-twitter"></i>
        <i className="icon-youtube"></i>
      </div>
      <small>NEXUS @ 2025. All rights reserved</small>
    </footer>
  );
};
