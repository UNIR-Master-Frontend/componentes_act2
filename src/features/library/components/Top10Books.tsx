import { useEffect, useState } from "react";
import { getTop10Books } from "../services/book.service";
import BooksCarousel from "./BooksCarousel";
import useLoading from "../../../hooks/useLoading";

export default function Top10Books() {
  const [books, setBooks] = useState([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    getBooksData();
  }, []);

  const getBooksData = async () => {
    setLoading(true);
    const booksData = await getTop10Books();
    setBooks(booksData);
    setLoading(false);
  };

  return <BooksCarousel title="Top 10 de libros más vendidos" books={books} />;
}
