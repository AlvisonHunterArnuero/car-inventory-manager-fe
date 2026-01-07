import { useState, useMemo } from "react";

export function useCarFilters(initialCars: any[]) {
  const [localCars, setLocalCars] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState("asc");

  const allCars = useMemo(
    () => [...initialCars, ...localCars],
    [initialCars, localCars]
  );

  const availableYears = useMemo(() => {
    const years = allCars.map((car) => car.year.toString());
    return ["All", ...Array.from(new Set(years))].sort((a, b) =>
      b.localeCompare(a)
    );
  }, [allCars]);

  const filteredCars = useMemo(() => {
    return allCars
      .filter((car) => {
        const matchesModel = car.model
          .toLowerCase()
          .includes(search.toLowerCase());
        const matchesYear =
          selectedYear === "All" || car.year.toString() === selectedYear;
        return matchesModel && matchesYear;
      })
      .sort((a, b) => {
        return sortOrder === "asc"
          ? a.model.localeCompare(b.model)
          : b.model.localeCompare(a.model);
      });
  }, [allCars, search, selectedYear, sortOrder]);

  const addCar = (newCar: any) => {
    setLocalCars((prev) => [...prev, { ...newCar, id: Date.now().toString() }]);
  };

  return {
    search,
    setSearch,
    selectedYear,
    setSelectedYear,
    availableYears,
    sortOrder,
    setSortOrder,
    filteredCars,
    addCar,
  };
}
