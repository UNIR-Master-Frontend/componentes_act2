import { useEffect, useState } from "react";
import Dropdown from "../../../components/Dropdown/Dropdown";
import MagazinesList from "../components/MagazinesList";
import RecommendedMagazines from "../components/RecommendedMagazines";
import Top10Magazines from "../components/Top10Magazines";
import { getMagazinesCategories } from "../services/magazine.service";

export const Magazines = () => {
  const [categories, setCategories] = useState<any>([]);
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    getCategoriesData();
  }, []);

  const getCategoriesData = async () => {
    const data = await getMagazinesCategories();
    const newData = data.map((value: string) => ({
      value,
      label: value.toLocaleUpperCase(),
    }));
    setCategories(newData);
  };

  const onChangeOption = (option: string) => {
    setCategory(option);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          margin: "1rem 2rem",
        }}
      >
        <Dropdown
          options={categories}
          label="Categorías"
          onChange={(e: any) => onChangeOption(e)}
        />
      </div>

      <MagazinesList category={category} />
      <Top10Magazines />
      <RecommendedMagazines />
    </>
  );
};
