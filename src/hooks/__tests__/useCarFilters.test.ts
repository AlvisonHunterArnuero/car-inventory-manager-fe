import { renderHook, act } from "@testing-library/react";
import { useCarFilters } from "../useCarFilters";

const mockData = [
  { id: "1", model: "A3" },
  { id: "2", model: "Q5" },
];

describe("useCarFilters Hook", () => {
  it("filters cars by model search string", () => {
    const { result } = renderHook(() => useCarFilters(mockData));

    act(() => {
      result.current.setSearch("Q5");
    });

    expect(result.current.filteredCars).toHaveLength(1);
    expect(result.current.filteredCars[0].model).toBe("Q5");
  });

  it("sorts cars correctly", () => {
    const { result } = renderHook(() => useCarFilters(mockData));

    act(() => {
      result.current.setSortOrder("desc");
    });

    expect(result.current.filteredCars[0].model).toBe("Q5"); // Q comes after A
  });

  it("adds a new car to the list", () => {
    const { result } = renderHook(() => useCarFilters(mockData));

    act(() => {
      result.current.addCar({
        make: "Audi",
        model: "RS7",
        year: 2024,
        color: "Black",
      });
    });

    expect(result.current.filteredCars).toHaveLength(3);
    expect(result.current.filteredCars.some((c) => c.model === "RS7")).toBe(
      true
    );
  });

  it("filters by both model and year simultaneously", () => {
    const mockCars = [
      { id: "1", model: "A3", year: 2022 },
      { id: "2", model: "A3", year: 2024 },
      { id: "3", model: "Q5", year: 2022 },
    ];
    const { result } = renderHook(() => useCarFilters(mockCars));

    act(() => {
      result.current.setSearch("A3");
      result.current.setSelectedYear("2022");
    });

    expect(result.current.filteredCars).toHaveLength(1);
    expect(result.current.filteredCars[0].id).toBe("1");
  });
});
