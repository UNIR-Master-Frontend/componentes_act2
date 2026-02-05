import Book from "./Book/Book";
import type { Book as BookInterface } from "../interfaces/book.interface";
import Carousel from "../../../components/Carousel/Carousel";

export default function BooksCarousel({
  title = "",
  books = [],
  emptyMessage = "",
}) {
  return books.length ? (
    <Carousel title={title}>
      {books.map((book: BookInterface) => {
        return (
          <div className="carousel-item" key={book.id + book.nombre}>
            <Book book={book} />
          </div>
        );
      })}
    </Carousel>
  ) : (
    <>
      <h3>{title}</h3>
      <h5 className="pl-5">{emptyMessage}</h5>
    </>
  );
}
