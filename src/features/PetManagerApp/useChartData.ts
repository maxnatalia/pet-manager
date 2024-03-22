import { countPetsByCategory } from "./utils";
import usePetsContext from "./usePetsContext";

export const useChartData = (
  dataPieChart: "petsByCategory" | "eventsByCategory"
) => {
  const { petsList } = usePetsContext();

  const dataPetsByCategory = [
    {
      id: "1",
      name: "Dogs",
      value: countPetsByCategory("dog", petsList),
      color: "#0088FE",
    },
    {
      id: "2",
      name: "Cats",
      value: countPetsByCategory("cat", petsList),
      color: "#00C49F",
    },
    {
      id: "3",
      name: "Parrots",
      value: countPetsByCategory("parrot", petsList),
      color: "#FFBB28",
    },
    {
      id: "4",
      name: "Rabbits",
      value: countPetsByCategory("rabbit", petsList),
      color: "#FF8042",
    },
    {
      id: "5",
      name: "Rodents",
      value: countPetsByCategory("rodent", petsList),
      color: "#8884d8",
    },
    {
      id: "6",
      name: "Unspecified",
      value: countPetsByCategory("unspecified", petsList),
      color: "#888455",
    },
  ];

  return dataPieChart === "petsByCategory" ? dataPetsByCategory : undefined;
};
