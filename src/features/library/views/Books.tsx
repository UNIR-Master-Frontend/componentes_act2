import BookList from "../components/BookList";
import RecommendedBooks from "../components/RecommendedBooks";
import Top10Books from "../components/Top10Books";

export default function Books() {
  return (
    <>
      <BookList />
      <Top10Books />
      <RecommendedBooks />
    </>
  );
}
