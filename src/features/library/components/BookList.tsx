import { useEffect, useState } from "react";
import { getBooks, getBooksByCategory } from "../services/book.service";
import BooksCarousel from "./BooksCarousel";
import useLoading from "../../../hooks/useLoading";

export default function BookList({ category = "" }: { category: string }) {
  const [books, setBooks] = useState([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    if (category) {
      getBooksDataByCategory();
    } else {
      getBooksData();
    }
  }, [category]);

  const getBooksData = async () => {
    setLoading(true);
    const booksData = await getBooks();
    setBooks(booksData);
    setLoading(false);
  };

  const getBooksDataByCategory = async () => {
    setLoading(true);
    const booksData = await getBooksByCategory(category);
    setBooks(booksData);
    setLoading(false);
  };

  return <BooksCarousel title="Listado de libros" books={books} />;
}
