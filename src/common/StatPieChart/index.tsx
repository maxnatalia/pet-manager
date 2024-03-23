import { Cell, Legend, Pie, PieChart } from "recharts";
import { useChartData } from "../../features/PetManagerApp/useChartData";

type StatPieChartProps = {
  dataPieChart: "petsByCategory" | "eventsByCategory";
};

const StatPieChart = ({ dataPieChart }: StatPieChartProps) => {
  const data = useChartData(dataPieChart);

  return (
    <PieChart width={320} height={200}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={50}
        label
      >
        {data?.map((entry, index) => (
          <Cell key={index} fill={entry.color} />
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

export default StatPieChart;
