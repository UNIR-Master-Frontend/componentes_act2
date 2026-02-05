import { API_BASE_URL } from "../../../constants/url";

export const getBooks = async () => {
  const response = await fetch(`${API_BASE_URL}/libros`);
  const data = await response.json();
  return data;
};

export const getTop10Books = async () => {
  const response = await fetch(`${API_BASE_URL}/libros/top10`);
  const data = await response.json();
  return data;
};

export const getRecommendedBooks = async () => {
  const response = await fetch(`${API_BASE_URL}/recomendaciones/libros`);
  const data = await response.json();
  return data;
};

export const getBookById = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/libros/${id}`);
  const data = await response.json();
  return data;
};

export const getSimilarBooks = async (id: number) => {
  const response = await fetch(`${API_BASE_URL}/libros/${id}/similares`);
  const data = await response.json();
  return data;
};

export const getBooksPurchasesByUserId = async (id: number) => {
  const response = await fetch(`${API_BASE_URL}/libros/usuarios/${id}`);
  const data = await response.json();
  return data;
};

export const getBooksCategories = async () => {
  const response = await fetch(`${API_BASE_URL}/categorias/libros`);
  const data = await response.json();
  return data;
};

export const getBooksByCategory = async (categoria: string) => {
  const params = {
    categoria,
  };
  const query = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");
  const response = await fetch(`${API_BASE_URL}/libros?${query}`, {});
  const data = await response.json();
  return data;
};
