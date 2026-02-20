import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router";
import BackButton from "./BackButton";


const mockNavigate = vi.fn();
vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("BackButton", () => {
  beforeEach(() => {
    mockNavigate.mockClear(); 
  });
  test("se ve el texto Volver en el botón", () => {
    render(
      <MemoryRouter>
        <BackButton />
      </MemoryRouter>
    );
    expect(screen.getByText(/Volver/i)).toBeInTheDocument();
  });

  test("el botón aparece en la pantalla", () => {
    render(
      <MemoryRouter>
        <BackButton />
      </MemoryRouter>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("al hacer clic vuelve a la página anterior", () => {
    render(
      <MemoryRouter>
        <BackButton />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole("button"));
    
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  test("tiene la clase CSS back-link aplicada", () => {
    render(
      <MemoryRouter>
        <BackButton />
      </MemoryRouter>
    );
    
    expect(screen.getByRole("button")).toHaveClass("back-link");
  });

  test("solo se navega una vez aunque se haga clic varias veces seguidas", () => {
    render(
      <MemoryRouter>
        <BackButton />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByRole("button"));
    expect(mockNavigate).toHaveBeenCalledTimes(3);
  });
});