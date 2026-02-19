import { render, waitFor } from "@testing-library/react";
import { describe, test, expect, beforeEach, vi } from "vitest";
import MagazinesList from "../../components/MagazinesList/MagazinesList";
import * as service from "../../services/magazine.service";
import useLoading from "../../../../hooks/useLoading";

// Mock de dependencias externas
vi.mock("../services/magazine.service");
vi.mock("../../../hooks/useLoading");

// Mock del componente hijo para evitar errores de useNavigate
vi.mock("./MagazinesCarousel", () => ({
  default: () => <div data-testid="mock-carousel" />,
}));

describe("MagazinesList", () => {
  const mockMagazines = [
    { id: 1, nombre: "Tech Today" },
    { id: 2, nombre: "Fashion Weekly" },
  ];

  const setLoadingMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    (service.getMagazines as any).mockResolvedValue(mockMagazines);
    (service.getMagazinesByCategory as any).mockResolvedValue(mockMagazines);

    (useLoading as any).mockReturnValue({
      setLoading: setLoadingMock,
    });
  });

  test("llama getMagazines cuando no hay categoría", async () => {
    render(<MagazinesList category="" />);

    await waitFor(() => {
      expect(service.getMagazines).toHaveBeenCalled();
    });
  });

  test("llama getMagazinesByCategory cuando hay categoría", async () => {
    render(<MagazinesList category="tech" />);

    await waitFor(() => {
      expect(service.getMagazinesByCategory).toHaveBeenCalledWith("tech");
    });
  });

  test("activa y desactiva loading correctamente", async () => {
    render(<MagazinesList category="" />);

    await waitFor(() => {
      expect(setLoadingMock).toHaveBeenCalledWith(true);
      expect(setLoadingMock).toHaveBeenCalledWith(false);
    });
  });
});