import { MdDashboard } from "react-icons/md";
import TitlePage from "../../../../common/TitlePage";
import Overview from "./Overview";
import Today from "./Today";
import LatestPets from "./LatestPets";
import FilteringEvents from "./FilteringEvents";
import { GridContent } from "./styled";

const Home = () => {
  return (
    <>
      <TitlePage
        title="Welcome!"
        subtitle="Start exploring and managing your adorable furry friends effortlessly.
                  If you need any assistance, feel free to reach out. Happy pet managing!🐾"
        icon={<MdDashboard />}
      />
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
