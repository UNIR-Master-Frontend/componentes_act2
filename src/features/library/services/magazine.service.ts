import { API_BASE_URL } from "../../../constants/url";
import type { Magazine } from "../interfaces/magazine.interface";

export const getMagazines = async (): Promise<Magazine[]> => {
  try {
    const response = await fetch(API_BASE_URL + "/revistas");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fallo al conectar con Apidog:", error);
    return [];
  }
};

export const getMagazineById = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/revistas/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error cargando revista por id:", error);
    return null;
  }
};

export const getTop10Magazines = async () => {
  const response = await fetch(`${API_BASE_URL}/revistas/top10`);
  const data = await response.json();
  return data;
};

export const getRecommendedMagazines = async () => {
  const response = await fetch(`${API_BASE_URL}/recomendaciones/revistas`);
  const data = await response.json();
  return data;
};

export const getSimilarMagazines = async (id: number) => {
  const response = await fetch(`${API_BASE_URL}/revistas/${id}/similares`);
  const data = await response.json();
  return data;
};

export const getMagazinesPurchasesByUserId = async (id: number) => {
  const response = await fetch(`${API_BASE_URL}/revistas/usuarios/${id}`);
  const data = await response.json();
  return data;
};
