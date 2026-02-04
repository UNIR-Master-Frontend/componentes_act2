import { useRef, type MouseEventHandler } from "react";
import Book from "../Book/Book";

import "./styles.css";
import type { Book as BookInterface } from "../../interfaces/book.interface";

export default function BooksCarousel({ title = "", books = [] }) {
  const carouselRef: any = useRef(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const moved = useRef(false);

  const onMouseDown = (e: any) => {
    isDown.current = true;
    moved.current = false;
    carouselRef.current.classList.add("dragging");

    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown.current = false;
    carouselRef.current.classList.remove("dragging");
  };

  const onMouseUp = () => {
    isDown.current = false;
    carouselRef.current.classList.remove("dragging");
  };

  const onMouseMove = (e: any) => {
    if (!isDown.current) return;

    e.preventDefault();
    moved.current = true;

    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="books-carousel-container">
      <div className="books-carouse-title">
        <span>
          <h3>{title}</h3>
        </span>
      </div>
      <div
        className="books-carousel-content"
        ref={carouselRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {books.map((book: BookInterface) => {
          return (
            <div className="books-carousel-item" key={book.id + book.nombre}>
              <Book book={book} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
