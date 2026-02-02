import { useState } from "react";
import Card from "./components/card/Card";
import libroImg from "./assets/images/png/libro_cien_anios.png";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Coworking } from "./features/coworking/Coworking";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showReservations, setShowReservations] = useState(false);

  return (
    <>
      <div>
        <Header
          showReservations={showReservations}
          setShowReservations={setShowReservations}
        />
        <Coworking
          showReservations={showReservations}
          setShowReservations={setShowReservations}
        />
        <Footer />

        {/* <Card
          rank={1}
          image={libroImg}
          title="The Let Them Theory"
          description="A life-changing tool millions of people can’t stop talking about."
          category="Ficción"
          price={14.99}
          oldPrice={18.99}
          stock={15}
          onAdd={() => console.log("Añadir")}
          onFavorite={() => console.log("Favorito")}
        /> */}
      </div>
    </>
  );
}

export default App;
