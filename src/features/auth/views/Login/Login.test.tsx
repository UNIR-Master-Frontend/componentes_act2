import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Login from "./Login";

vi.mock("react-router", () => ({
  useNavigate: () => vi.fn(),
}));

vi.mock("../../../../hooks/useLoading", () => ({
  default: () => ({ setLoading: vi.fn() }),
}));

vi.mock("../../../../hooks/useUser", () => ({
  default: () => ({ setUserLogin: vi.fn() }),
}));


vi.mock("../../../../assets/images/svg/logo_nexus.svg", () => ({
  default: "test-file-stub",
}));

describe("Login Rendering", () => {
  it("debería mostrar los campos de entrada y el título correctamente", () => {
    render(<Login />);

    const title = screen.getByText(/iniciar sesión/i);
    expect(title).toBeDefined();

    const userInput = screen.getByLabelText(/usuario/i);
    const passwordInput = screen.getByLabelText(/contraseña/i);

    expect(userInput).toBeDefined();
    expect(passwordInput).toBeDefined();

    const button = screen.getByRole("button", { name: /entrar/i });
    expect(button).toBeDefined();
  });
});