import type { Book } from "../../library/interfaces/book.interface";

export interface User {
  id: number;
  nombre: string;
  dni: number;
  tipo: "estudiante" | "docente" | "externo";
  libros_comprados: Book[];
  //   revistas_compradas: Magazine[];
}
