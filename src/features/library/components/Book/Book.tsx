import type { Book } from "../../interfaces/book.interface";
import Card from "../../../../components/Card/Card";

import img1 from "../../../../assets/images/png/book1.png";
import img2 from "../../../../assets/images/png/book2.png";
import img3 from "../../../../assets/images/png/book3.png";
import img4 from "../../../../assets/images/png/book4.png";
import img5 from "../../../../assets/images/png/book5.png";
import img6 from "../../../../assets/images/png/book6.png";
import img7 from "../../../../assets/images/png/book7.png";
import img8 from "../../../../assets/images/png/book8.png";
import img9 from "../../../../assets/images/png/book9.png";
import img10 from "../../../../assets/images/png/book10.png";
import "./styles.css";
import { useNavigate } from "react-router";

const imagesbooks = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function Book({ book }: { book: Book }) {
  const navigate = useNavigate();

  const imagesbooksrandom = imagesbooks[Math.floor(Math.random() * imagesbooks.length)];

  const goToDetail = () => {
    navigate(`/library/books/${book.id}`);
  };

  return (
    <Card onClick={goToDetail}>
      <div className="book-img">
        <img src={imagesbooksrandom} alt="Imagen de libro" />
      </div>
      <div className="book-content">
        <h4>{book.nombre}</h4>
        <h5>{book.autor}</h5>
        <h5>Categoria: {book.categoria.toLocaleUpperCase()}</h5>

        <small>€{book.precio}</small>

        <div className="book-link">
          Más Información <span className="arrow">→</span>
        </div>
      </div>
    </Card>
  );
}
