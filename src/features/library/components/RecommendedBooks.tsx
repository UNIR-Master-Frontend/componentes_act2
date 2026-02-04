import { useEffect, useState } from "react";
import { getRecommendedBooks } from "../services/book.service";
import BooksCarousel from "./BooksCarousel/BooksCarousel";
import useLoading from "../../../hooks/useLoading";

export default function RecommendedBooks() {
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    getRecommendedBooksData();
  }, []);

  const getRecommendedBooksData = async () => {
    setLoading(true);
    const recommendedBooksData = await getRecommendedBooks();
    setRecommendedBooks(recommendedBooksData);
    setLoading(false);
  };

  return <BooksCarousel title="Libros recomendados" books={recommendedBooks} />;
}
