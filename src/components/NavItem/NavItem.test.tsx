import { beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavItem from "./NavItem";

const mockNavigate = vi.fn();

vi.mock("react-router", async () => {
  const actual = await vi.importActual<any>("react-router");

  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => ({
      pathname: "/library/books",
    }),
  };
});

describe("Componente NavItem", () => {
  const renderNavItem = (props = {}) => {
    const defaultProps = {
      label: "Libros",
      path: "/books",
    };

    return render(<NavItem {...defaultProps} {...props} />);
  };

  beforeEach(() => {
    mockNavigate.mockClear();
    cleanup();
  });

  it("Se renderiza el titulo correctamente", () => {
    renderNavItem();
    expect(screen.getByText("Libros")).toBeInTheDocument();
  });

  it("Se debe aplicar la clase active si coincide con la ruta actual", () => {
    renderNavItem();
    expect(screen.getByText("Libros")).toHaveClass("active");
  });

  it("No se aplica la clase active si no está incluida en la ruta actual", () => {
    renderNavItem({
      path: "library/magazines",
    });
    expect(screen.getByText("Libros")).not.toHaveClass("active");
  });

  it("Navegar al hacer clic", async () => {
    renderNavItem();
    const navItem = screen.getByText("Libros");
    await userEvent.click(navItem);
    expect(mockNavigate).toHaveBeenCalledWith("/books");
  });
});
