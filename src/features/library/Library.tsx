import { Navigate, Route, Routes } from "react-router";
import "./styles.css";
import Books from "./views/Books";
import NavItem from "../../components/NavItem";
import Purchases from "./views/Purchases/Purchases";
import BookDetail from "./views/BookDetail/BookDetail";
import { Magazines } from "./views/Magazines";
import MagazineDetail from "./views/MagazineDetail/MagazineDetail";
import useUser from "../../hooks/useUser";
import AuthGuard from "../auth/guards/AuthGuard";

export default function Library() {
  const { user } = useUser();

  return (
    <>
      <div className="library-navbar">
        <NavItem label="Libros" path="/library/books"></NavItem>
        <NavItem label="Revistas" path="/library/magazines"></NavItem>

        {user && (
          <>
            <NavItem label="Mis compras" path="/library/purchases"></NavItem>
          </>
        )}
      </div>

      <Routes>
        <Route>
          <Route index path="/" element={<Navigate to="books" replace />} />
          <Route path="books">
            <Route index element={<Books />} />
            <Route path=":id" element={<BookDetail />} />
          </Route>
          <Route path="magazines">
            <Route index element={<Magazines />} />
            <Route path=":id" element={<MagazineDetail />} />
          </Route>

          <Route element={<AuthGuard />}>
            <Route path="purchases" element={<Purchases />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
