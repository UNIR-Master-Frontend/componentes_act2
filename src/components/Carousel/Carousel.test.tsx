import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Carousel from "./Carousel";
import { describe, test, expect, afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

describe("Carousel", () => {
  test("renderiza el título correctamente", () => {
    render(
      <Carousel title="Top Revistas">
        <div>Item 1</div>
      </Carousel>
    );

    expect(screen.getByText("Top Revistas")).toBeInTheDocument();
  });

  test("renderiza los children", () => {
    render(
      <Carousel title="Listado">
        <div>Item 1</div>
        <div>Item 2</div>
      </Carousel>
    );

    expect(screen.getAllByText("Item 1").length).toBeGreaterThan(0);
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  test("agrega clase dragging al hacer mouseDown", () => {
    render(
      <Carousel title="Listado">
        <div>Item</div>
      </Carousel>
    );

    const content = document.querySelector(".carousel-content") as HTMLElement;

    fireEvent.mouseDown(content, { pageX: 100 });

    expect(content.classList.contains("dragging")).toBe(true);
  });

  test("remueve clase dragging al hacer mouseUp", () => {
    render(
      <Carousel title="Listado">
        <div>Item</div>
      </Carousel>
    );

    const content = document.querySelector(".carousel-content") as HTMLElement;

    fireEvent.mouseDown(content, { pageX: 100 });
    fireEvent.mouseUp(content);

    expect(content.classList.contains("dragging")).toBe(false);
  });
});