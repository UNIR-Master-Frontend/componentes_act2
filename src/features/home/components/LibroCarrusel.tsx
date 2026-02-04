// import ImagenesLibros from "./ImagenesLibros";
import LibroUnidad from "./LibroUnidad";
// import {Book} from "../data/librosData.js";
// import { imageneslib } from "./ImagenesLibros";
// import "./carruselstyle.css";

const LandingCard = () => {
  return (
    <>
      <div className="Titlecarrusel">
        <h1>Explora nuestros libros destacados</h1>
      </div>
      <div className="LandingCard">
        {/* {imageneslib.map((image) => {
            
            
            const libroEncontrado = Book.find((libro:any) => libro.id === image.id);

            return (
                <div key={image.id} className='bloque-libro-imagen'>
                    
                    <div className='ImagenesLibros'>
                        <img src={image.src} alt={image.alt}/>
                    </div>
                    
                    
                    {libroEncontrado && (
                         <LibroUnidad key={libroEncontrado.id} libro={libroEncontrado} />
                    )}

                </div>
            )
        })} */}
      </div>
    </>
  );
};

export default LandingCard;
