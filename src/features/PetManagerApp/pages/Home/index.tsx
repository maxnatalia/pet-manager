import { MdDashboard } from "react-icons/md";
import TitlePage from "../../../../common/TitlePage";

const Home = () => {
  return (
    <>
      <TitlePage
        title="Welcome!"
        subtitle="Today is XX may 2020"
        icon={<MdDashboard />}
      />
    </>
  );
};

export default Home;
