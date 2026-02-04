import { Navigate, Route, Routes } from "react-router";
import "./styles.css";
import Books from "./views/Books";
import Magazines from "./views/Magazines";
import NavItem from "../../components/NavItem";
import ShoppingCart from "./views/ShoppingCart";
import Purchases from "./views/Purchases";
import BookDetail from "./views/BookDetail/BookDetail";

export default function Library() {
  return (
    <>
      <div className="library-navbar">
        <NavItem label="Libros" path="/library/books"></NavItem>
        <NavItem label="Revistas" path="/library/magazines"></NavItem>
        <NavItem label="Carrito" path="/library/cart"></NavItem>
        <NavItem label="Mis compras" path="/library/purchases"></NavItem>
      </div>

      <Routes>
        <Route>
          <Route index path="/" element={<Navigate to="books" replace />} />
          <Route path="books">
            <Route index element={<Books />} />
            <Route path=":id" element={<BookDetail />} />
          </Route>
          <Route path="magazines" element={<Magazines />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="purchases" element={<Purchases />} />
        </Route>
      </Routes>
    </>
  );
}
