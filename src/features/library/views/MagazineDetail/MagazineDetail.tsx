import { useEffect, useState } from "react";
import "./styles.css";
import { useParams } from "react-router";
import type { Magazine } from "../../interfaces/magazine.interface";
import { getMagazineById } from "../../services/magazine.service";
import useLoading from "../../../../hooks/useLoading";
import magazineImg from "../../../../assets/images/jpg/magazine.jpg";
import SimilarMagazines from "../../components/SimilarMagazines";
import BackButton from "../../../../components/BackButton/BackButton";

export default function MagazineDetail() {
  const params = useParams();
  const [magazine, setMagazine] = useState<Magazine | undefined>(undefined);
  const { setLoading } = useLoading();

  useEffect(() => {
    if (params.id) {
      getBookMagazineById();
    }
  }, []);

  const getBookMagazineById = async () => {
    setLoading(true);
    try {
      const detail = await getMagazineById(params.id!);
      setMagazine(detail);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    const current = JSON.parse(localStorage.getItem("cart") || "[]");
    current.push(magazine);
    localStorage.setItem("cart", JSON.stringify(current));
    alert("Añadido al carrito");
  };

  return magazine ? (
    <>
      <div className="mag-detail-page">
        <BackButton />

        <div className="mag-detail-main">
          <img src={magazineImg} alt="Imagen de revista" />

          <div>
            <h1>Revista edición {magazine.edicion}</h1>
            <p>
              <strong>Editorial:</strong> {magazine.editorial}
            </p>
            <p>
              <strong>Categoría:</strong> {magazine.categoria}
            </p>

            <p>{`Revista ${magazine.periodicidad} de la editorial ${magazine.editorial}`}</p>

            <p className="price">${magazine.precio}</p>

            <button className="add-btn primary" onClick={handleAddToCart}>
              🛒 Añadir al carrito
            </button>
          </div>
        </div>
      </div>
      <SimilarMagazines id={magazine.id} />
    </>
  ) : (
    <></>
  );
}
