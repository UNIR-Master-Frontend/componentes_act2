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

export const getBookById = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/libros/${id}`);
  const data = await response.json();
  return data;
};
