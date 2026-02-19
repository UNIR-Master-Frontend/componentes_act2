import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ReservationForm } from "./ReservationForm";

describe("ReservationForm (mínimo)", () => {
  it("renderiza el modal de reserva sin crashear", () => {
    const { container } = render(
      <ReservationForm
        isOpen={true}
        onClose={() => {}}
        space={{ id: 1, nombre: "Sala X", capacidad: 4 }}
      />,
    );

    expect(container).toBeTruthy();
    expect(container.querySelector(".modal")).toBeInTheDocument();
  });
});
