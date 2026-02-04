import { useEffect, useState } from "react";
import useLoading from "../../../hooks/useLoading";
import MagazinesCarousel from "./MagazinesCarousel";
import { getMagazines } from "../services/magazine.service";
import type { Magazine } from "../interfaces/magazine.interface";

export default function MagazinesList() {
  const [magazines, setMagazines] = useState<Magazine[]>([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    getMagazinesData();
  }, []);

  const getMagazinesData = async () => {
    setLoading(true);
    const magazinesData = await getMagazines();
    setMagazines(magazinesData);
    setLoading(false);
  };

  return (
    <MagazinesCarousel title="Listado de revistas" magazines={magazines} />
  );
}
