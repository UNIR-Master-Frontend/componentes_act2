import { API_BASE_URL } from "../../../constants/url";

export const login = async (body: { user: string; password: string }) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};
