import {
  Bar,
  BarChart,
  CartesianGrid,
  // Legend,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useChartData } from "../../features/PetManagerApp/useChartData";

type StatBarChart = {
  dataBarChart: "petsByCategory" | "eventsByCategory";
};

const StatBarChart = ({ dataBarChart }: StatBarChart) => {
  const data = useChartData(dataBarChart);

  return (
    <BarChart width={730} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis
        type="number"
        domain={[0, "dataMax"]}
        allowDecimals={false}
        // dataKey="value"
      />
      <Tooltip />
      {/* <Legend /> */}
      <Bar
        dataKey="value"
        fill="#8884d8"
        activeBar={<Rectangle fill="pink" stroke="blue" />}
      />
      {/* {data?.map((entry, index) => (
        <Bar
          key={index}
          dataKey="petName"
          fill={entry.color}
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      ))} */}
    </BarChart>
  );
};

export default StatBarChart;
