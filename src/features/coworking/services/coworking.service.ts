import { API_BASE_URL } from "../../../constants/url";

const headers = {
  "Content-Type": "application/json",
};

export const getSpaces = async () => {
  const response = await fetch(`${API_BASE_URL}/espacios-v2`);
  const data = await response.json();
  return data;
};

export const getSpaceById = async (id: number) => {
  const response = await fetch(`${API_BASE_URL}/espacios/${id}`);
  const data = await response.json();
  return data;
};

export const getReservations = async () => {
  const response = await fetch(`${API_BASE_URL}/reservas`);
  const data = await response.json();
  return data;
};

export const createReservation = async (reservationData: any) => {
  const response = await fetch(`${API_BASE_URL}/reservas/reservar`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(reservationData),
  });
  const data = await response.json();
  return data;
};

export const deleteReservation = async (id: number) => {
  const response = await fetch(`${API_BASE_URL}/eliminar-reservas/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
