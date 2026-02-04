import { useEffect, useState } from "react";
import useUser from "../../../../hooks/useuser";
import { getMagazinesPurchasesByUserId } from "../../services/magazine.service";
import useLoading from "../../../../hooks/useLoading";
import { getBooksPurchasesByUserId } from "../../services/book.service";
import BooksCarousel from "../../components/BooksCarousel";
import MagazinesCarousel from "../../components/MagazinesCarousel";

import "./style.css";

export default function Purchases() {
  const { user } = useUser();
  const { setLoading } = useLoading();
  const [books, setBooks] = useState([]);
  const [magazines, setMagazines] = useState([]);

  useEffect(() => {
    getBooksPurchases();
    getMagazinesPurchases();
  }, []);

  const getBooksPurchases = async () => {
    setLoading(true);
    const data = await getBooksPurchasesByUserId(user!.id);
    setBooks(data);
    setLoading(false);
  };
  const getMagazinesPurchases = async () => {
    setLoading(true);
    const data = await getMagazinesPurchasesByUserId(user!.id);
    setMagazines(data);
    setLoading(false);
  };

  return (
    <>
      <div className="purchases-container">
        <h3>Mis compras</h3>

        <BooksCarousel
          title="Libros"
          books={books}
          emptyMessage="No hay compras registradas"
        />
        <MagazinesCarousel
          title="Revistas"
          magazines={magazines}
          emptyMessage="No hay compras registradas"
        />
      </div>
    </>
  );
}
