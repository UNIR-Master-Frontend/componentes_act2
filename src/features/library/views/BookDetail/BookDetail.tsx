import { useParams } from "react-router";
import "./styles.css";
import { useEffect, useState } from "react";
import { getBookById } from "../../services/book.service";

import bookImg from "../../../../assets/images/jpg/book.jpg";
import type { Book as BookInterface } from "../../interfaces/book.interface";
import useLoading from "../../../../hooks/useLoading";
import SimilarBooks from "../../components/SimilarBooks";
import BackButton from "../../../../components/BackButton/BackButton";

export default function BookDetail() {
  const params = useParams();
  const [book, setBook] = useState<BookInterface | undefined>(undefined);
  const [counter, setCounter] = useState(1);
  const { setLoading } = useLoading();

  useEffect(() => {
    if (params.id) {
      getBookDataById();
    }
  }, []);

  const getBookDataById = async () => {
    setLoading(true);
    const bookData = await getBookById(params.id!);
    setBook(bookData);
    setLoading(false);
  };

  const addToCounter = (value: number) => {
    setCounter((currentValue) => currentValue + value);
  };

  return book ? (
    <>
      <div className="container overlay">
        <div className="p-4">
          <BackButton />
        </div>

        <div className="grid">
          <section className="intro-container">
            <h1>{book.nombre}</h1>
            <h3>{book.autor}</h3>

            <span>
              <h3>€{book.precio + 50}</h3>
              <h2>€{book.precio}</h2>
            </span>
          </section>

          <div className="image-container">
            <img className="book-image" src={bookImg} alt="Libro" />
          </div>

          <section className="info-container">
            <h3>Editorial</h3>
            <p>{book.editorial}</p>
          </section>

          <section className="quantity-container">
            <h3>Cantidad</h3>

            <div className="quantity-input-container">
              <button
                className="text minus"
                onClick={() => addToCounter(-1)}
                disabled={counter === 1}
              >
                -
              </button>
              <input id="quantity" type="number" value={counter} />
              <button
                className="text plus"
                onClick={() => addToCounter(1)}
                disabled={counter === 5}
              >
                +
              </button>
            </div>

            <small>Máximo 5 unidades</small>

            <div className="buttons-container">
              <button
                className="primary"
                onClick={() => alert("Compra realizada correctamente")}
              >
                Comprar
              </button>
            </div>
          </section>
        </div>
      </div>

      <SimilarBooks id={book.id} />
    </>
  ) : (
    <></>
  );
}
