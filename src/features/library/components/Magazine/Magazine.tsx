import { useNavigate } from "react-router";
import "./styles.css";
import type { Magazine } from "../../interfaces/magazine.interface";
import magazineImg from "../../../../assets/images/jpg/magazine.jpg";
import Card from "../../../../components/Card/Card";

export default function Magazine({ magazine }: { magazine: Magazine }) {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`${magazine.id}`);
  };

  return (
    <Card onClick={goToDetail}>
      <div className="book-img">
        <img src={magazineImg} alt="Imagen de revista" />
      </div>
      <div className="magazine-content">
        <h4>Revista edición {magazine.edicion}</h4>
        <h5>{magazine.nombre}</h5>
        <h5>Categoria: {magazine.categoria.toLocaleUpperCase()}</h5>

        <small>€{magazine.precio}</small>

        <div className="magazine-link">
          Más Información <span className="arrow">→</span>
        </div>
      </div>
    </Card>
  );
}
