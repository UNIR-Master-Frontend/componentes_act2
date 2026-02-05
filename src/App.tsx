import "./App.css";
import { Header } from "./layout/header/Header";
import { Footer } from "./layout/footer/Footer";
import { Outlet } from "react-router";
import Loading from "./components/Loading/Loading";
import useLoading from "./hooks/useLoading";

function App() {
  const { loading } = useLoading();

  return (
    <>
      {loading ? <Loading /> : <></>}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
