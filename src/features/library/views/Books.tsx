import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import RecommendedBooks from "../components/RecommendedBooks";
import Top10Books from "../components/Top10Books";
import Dropdown from "../../../components/Dropdown/Dropdown";
import { getBooksCategories } from "../services/book.service";

export default function Books() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    getCategoriesData();
  }, []);

  const getCategoriesData = async () => {
    const data = await getBooksCategories();
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

      <BookList category={category} />
      <Top10Books />
      <RecommendedBooks />
    </>
  );
}
