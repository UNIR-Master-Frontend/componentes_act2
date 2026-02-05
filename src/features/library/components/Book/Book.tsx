import type { Book } from "../../interfaces/book.interface";
import Card from "../../../../components/Card/Card";

import bookImg from "../../../../assets/images/jpg/book.jpg";
import "./styles.css";
import { useNavigate } from "react-router";

export default function Book({ book }: { book: Book }) {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`${book.id}`);
  };

  return (
    <Card onClick={goToDetail}>
      <div className="book-img">
        <img src={bookImg} alt="Imagen de libro" />
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
