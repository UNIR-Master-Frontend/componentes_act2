import { useEffect, useState } from "react";
import useLoading from "../../../hooks/useLoading";
import { getSimilarMagazines } from "../services/magazine.service";
import MagazinesCarousel from "./MagazinesCarousel";

export default function SimilarMagazines({ id }: { id: number }) {
  const [similarMagazines, setSimilarMagazines] = useState([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    getSimilarMagazinesData();
  }, []);

  const getSimilarMagazinesData = async () => {
    setLoading(true);
    const similarMagazinesData = await getSimilarMagazines(id);
    setSimilarMagazines(similarMagazinesData);
    setLoading(false);
  };

  return (
    <MagazinesCarousel
      title="Revistas similares"
      magazines={similarMagazines}
    />
  );
}
