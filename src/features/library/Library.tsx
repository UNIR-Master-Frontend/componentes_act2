import { Route, Routes } from "react-router";
import "./styles.css";
import Books from "./views/Books";
import Magazines from "./views/Magazines";
import ShoppingCart from "./views/ShoppingCart";
import Purchases from "./views/Purchases";

export default function Library() {
  return (
    <>
      <div className="library-navbar">
        <a href="/library">Libros</a>
        <a href="/library/magazines">Revistas</a>
        <a href="/library/cart">Carrito</a>
        <a href="/library/purchases">Mis compras</a>
      </div>

      <Routes>
        <Route>
          <Route index element={<Books />} />
          <Route path="magazines" element={<Magazines />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="purchases" element={<Purchases />} />
        </Route>
      </Routes>
    </>
  );
}
