import { describe, it, expect, vi, afterEach } from "vitest";
import * as CoworkingService from "../../services/coworking.service";

afterEach(() => vi.restoreAllMocks());

describe("Coworking Service", () => {
  it("getSpaces devuelve lista de espacios", async () => {
    const mockSpaces = [
      { id: 1, nombre: "Sala A" },
      { id: 2, nombre: "Sala B" },
    ];

    vi.spyOn(window, "fetch").mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => mockSpaces,
    } as Response);

    const result = await CoworkingService.getSpaces();

    expect(result).toEqual(mockSpaces);
    expect(result).toHaveLength(2);
    expect(result[0].nombre).toBe("Sala A");
  });
});
