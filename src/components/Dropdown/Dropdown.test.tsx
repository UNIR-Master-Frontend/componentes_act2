import { afterEach, describe, expect, it } from "vitest";
import type { DropdownOption } from "./Dropdown";
import { cleanup, render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Componente Dropdown", () => {
  const options: DropdownOption[] = [
    { label: "Libros", value: "books" },
    { label: "Revistas", value: "magazines" },
  ];

  const onChange = (value: string) => {
    console.log(value);
  };

  const label = "Contenido de librería";

  const renderDropdown = (extraProps = {}) => {
    return render(
      <Dropdown
        options={options}
        onChange={(e: any) => onChange(e)}
        label={label}
        {...extraProps}
      />,
    );
  };

  afterEach(() => {
    cleanup();
  });

  it("Debe visualizar el titulo", () => {
    renderDropdown();
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it("Debe mostrar el valor por defecto si no se pasa el value", () => {
    renderDropdown();
    expect(screen.getByText("Elegir")).toBeInTheDocument();
  });

  it("Debe renderizar las opciones", () => {
    renderDropdown();
    expect(screen.getByText(options[0].label)).toBeInTheDocument();
    expect(screen.getByText(options[1].label)).toBeInTheDocument();
  });

  it("Debe mantener el valor seleccionado al pasar la prop", () => {
    const component = renderDropdown({
      value: options[1].value,
    });
    const select = component.getByRole("combobox") as HTMLSelectElement;
    expect(select.value).toBe(options[1].value);
  });
});
