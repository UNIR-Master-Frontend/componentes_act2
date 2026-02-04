import { useEffect, useState } from "react";
import useLoading from "../../../hooks/useLoading";
import MagazinesCarousel from "./MagazinesCarousel";
import { getRecommendedMagazines } from "../services/magazine.service";

export default function RecommendedMagazines() {
  const [recommendedMagazines, setRecommendedMagazines] = useState([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    getRecommendedMagazinesData();
  }, []);

  const getRecommendedMagazinesData = async () => {
    setLoading(true);
    const recommendedMagazinesData = await getRecommendedMagazines();
    setRecommendedMagazines(recommendedMagazinesData.recomendaciones);
    setLoading(false);
  };

  return (
    <MagazinesCarousel
      title="Revistas recomendados"
      magazines={recommendedMagazines}
    />
  );
}
