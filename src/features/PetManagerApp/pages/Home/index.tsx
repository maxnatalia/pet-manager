import { MdDashboard } from "react-icons/md";
import TitlePage from "../../../../common/TitlePage";
import Overview from "./Overview";
import Today from "./Today";
import LatestPets from "./LatestPets";
// import PieChartStat from "./PieChartStat";
import { GridContent } from "./styled";
import FilteringEvents from "./FilteringEvents";

const Home = () => {
  return (
    <>
      <TitlePage
        title="Welcome!"
        subtitle="Today is XX may 2020"
        icon={<MdDashboard />}
      />
      {/* <PieChartStat /> */}
      <GridContent>
        <Today />
        <Overview />
        <LatestPets />
        <FilteringEvents />
      </GridContent>
    </>
  );
};

export default Home;
