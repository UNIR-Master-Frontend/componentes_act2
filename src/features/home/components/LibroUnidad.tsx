import { imageneslib } from "./ImagenesLibros";

interface LibroData {
    title:string;
    author: string;
    year: number | string;
}

interface LibroUnidadProps {
    libro: LibroData;
}

export const LibroUnidad = ({ libro }:LibroUnidadProps) => {
    return (
        <div className='libro'>
                 <h2>{libro.title}</h2>
                
                 <p><strong>Autor:</strong> {libro.author}</p>
                 <p><strong>Año:</strong>{libro.year}</p>
          </div>       
        
            
         )}
                
           

            

export default LibroUnidad;