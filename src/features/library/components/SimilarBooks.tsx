import { useEffect, useState } from "react";
import BooksCarousel from "./BooksCarousel";
import useLoading from "../../../hooks/useLoading";
import { getSimilarBooks } from "../services/book.service";

export default function SimilarBooks({ id }: { id: number }) {
  const [similarBooks, setSimilarBooks] = useState([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    getSimilarBooksData();
  }, []);

  const getSimilarBooksData = async () => {
    setLoading(true);
    const similarBooksData = await getSimilarBooks(id);
    setSimilarBooks(similarBooksData);
    setLoading(false);
  };

  return <BooksCarousel title="Libros similares" books={similarBooks} />;
}
