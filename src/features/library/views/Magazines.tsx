import MagazinesList from "../components/MagazinesList";
import RecommendedMagazines from "../components/RecommendedMagazines";
import Top10Magazines from "../components/Top10Magazines";

export const Magazines = () => {
  return (
    <>
      <MagazinesList />
      <Top10Magazines />
      <RecommendedMagazines />
    </>
  );
};
