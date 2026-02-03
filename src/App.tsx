import "./App.css";
import { Header } from "./layout/header/Header";
import { Footer } from "./layout/footer/Footer";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header
      // showReservations={showReservations}
      // setShowReservations={setShowReservations}
      />

      {/* <Coworking
          showReservations={showReservations}
          setShowReservations={setShowReservations}
        />
        */}

      <Outlet />

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

      <Footer />
    </>
  );
}

export default App;
