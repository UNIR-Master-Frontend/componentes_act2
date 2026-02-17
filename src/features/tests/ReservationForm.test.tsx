import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ReservationForm } from "../coworking/components/ReservationForm";

describe("ReservationForm", () => {
  it("renderiza el formulario y su botón principal", () => {
    render(
      <ReservationForm
        isOpen={true}
        onClose={() => {}}
        space={{ id: 1, nombre: "Sala X", capacidad: 4 }}
      />,
    );

    expect(screen.getByText(/Datos personales/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Confirmar Reserva/i }),
    ).toBeInTheDocument();
  });
});
