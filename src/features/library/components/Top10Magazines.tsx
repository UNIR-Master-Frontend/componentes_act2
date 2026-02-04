import { useEffect, useState } from "react";
import useLoading from "../../../hooks/useLoading";
import MagazinesCarousel from "./MagazinesCarousel";
import { getTop10Magazines } from "../services/magazine.service";

export default function Top10Magazines() {
  const [magazines, setMagazines] = useState([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    getMagazinesData();
  }, []);

  const getMagazinesData = async () => {
    setLoading(true);
    const magazinesData = await getTop10Magazines();
    setMagazines(magazinesData);
    setLoading(false);
  };

  return (
    <MagazinesCarousel
      title="Top 10 de revistas más vendidos"
      magazines={magazines}
    />
  );
}
