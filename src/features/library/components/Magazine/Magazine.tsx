import { useNavigate } from "react-router";
import "./styles.css";
import type { Magazine } from "../../interfaces/magazine.interface";
import magazineImg from "../../../../assets/images/jpg/magazine.jpg";
import img1 from "../../../../assets/images/png/mag1.png";
import img2 from "../../../../assets/images/png/mag2.png";
import img3 from "../../../../assets/images/png/mag3.png";
import img4 from "../../../../assets/images/png/mag4.png";
import img5 from "../../../../assets/images/png/mag5.png";
import img6 from "../../../../assets/images/png/mag6.png";
import img7 from "../../../../assets/images/png/mag7.png";
import img8 from "../../../../assets/images/png/mag8.png";
import img9 from "../../../../assets/images/png/mag9.png";
import img10 from "../../../../assets/images/png/mag10.png";
import Card from "../../../../components/Card/Card";

const imagesmagazines = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function Magazine({ magazine }: { magazine: Magazine }) {
  const navigate = useNavigate();

   const imagesmagazinesrandom = imagesmagazines[Math.floor(Math.random() * imagesmagazines.length)];

  const goToDetail = () => {
    navigate(`/library/magazines/${magazine.id}`);
  };

  return (
    <Card onClick={goToDetail}>
      <div className="book-img">
        <img src={imagesmagazinesrandom} alt="Imagen de revista" />
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
