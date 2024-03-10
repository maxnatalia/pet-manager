import { Cell, Legend, Pie, PieChart } from "recharts";
import usePetsContext from "../../../usePetsContext";
import { PetCategory } from "../../../utils";

const PieChartStat = () => {
  const { petsList } = usePetsContext();

  const countPets = (category: PetCategory) =>
    petsList.filter(pet => pet.category === category).length;

  const dataPieChart = [
    {
      id: "1",
      name: "Dogs",
      value: countPets("dog"),
      color: "#0088FE",
    },
    {
      id: "2",
      name: "Cats",
      value: countPets("cat"),
      color: "#00C49F",
    },
    {
      id: "3",
      name: "Parrots",
      value: countPets("parrot"),
      color: "#FFBB28",
    },
    {
      id: "4",
      name: "Rabbits",
      value: countPets("rabbit"),
      color: "#FF8042",
    },
    {
      id: "5",
      name: "Rodents",
      value: countPets("rodent"),
      color: "#8884d8",
    },
  ];

  return (
    <PieChart width={300} height={260}>
      <Pie
        data={dataPieChart}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={50}
        fill="#346C6F"
        label
      >
        {dataPieChart.map(entry => (
          <Cell key={entry.id} fill={entry.color} />
        ))}
      </Pie>
      <Legend
        verticalAlign="middle"
        align="right"
        layout="vertical"
        iconType="circle"
      />
    </PieChart>
  );
};

export default PieChartStat;
