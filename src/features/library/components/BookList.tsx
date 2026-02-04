import { useEffect, useState } from "react";
import { getBooks } from "../services/book.service";
import BooksCarousel from "./BooksCarousel";
import useLoading from "../../../hooks/useLoading";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    getBooksData();
  }, []);

  const getBooksData = async () => {
    setLoading(true);
    const booksData = await getBooks();
    setBooks(booksData);
    setLoading(false);
  };

  return <BooksCarousel title="Listado de libros" books={books} />;
}
