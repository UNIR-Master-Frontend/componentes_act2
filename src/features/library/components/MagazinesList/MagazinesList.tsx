import { useEffect, useState } from "react";
import useLoading from "../../../../hooks/useLoading";
import MagazinesCarousel from "../MagazinesCarousel";
import {
  getMagazines,
  getMagazinesByCategory,
} from "../../services/magazine.service";
import type { Magazine } from "../../interfaces/magazine.interface";

export default function MagazinesList({ category = "" }: { category: string }) {
  const [magazines, setMagazines] = useState<Magazine[]>([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    if (category) {
      getMagazinesDataByCategory();
    } else {
      getMagazinesData();
    }
  }, [category]);

  const getMagazinesData = async () => {
    setLoading(true);
    const magazinesData = await getMagazines();
    setMagazines(magazinesData);
    setLoading(false);
  };

  const getMagazinesDataByCategory = async () => {
    setLoading(true);
    const booksData = await getMagazinesByCategory(category);
    setMagazines(booksData);
    setLoading(false);
  };

  return (
    <MagazinesCarousel title="Listado de revistas" magazines={magazines} />
  );
}
