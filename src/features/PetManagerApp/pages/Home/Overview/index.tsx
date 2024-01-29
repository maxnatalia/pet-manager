import { MdPets } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { OverviewBox, TotalCard, WrapperCard } from "./styled";
import { TitleBox } from "../../../../../common/TitleBox";
import usePetsContext from "../../../usePetsContext";

const Overview = () => {
  const { petsList } = usePetsContext();

  const countTotalEvents = () =>
    petsList.reduce((totalEvents, pet) => totalEvents + pet.events.length, 0);

  return (
    <OverviewBox>
      <TitleBox>Overview:</TitleBox>
      <WrapperCard>
        <TotalCard>
          <MdPets />
          <div>
            <div>{petsList.length}</div>
            Pets
          </div>
        </TotalCard>
        <TotalCard>
          <MdEvent />
          <div>
            <div>{countTotalEvents()}</div>
            Events
          </div>
        </TotalCard>
      </WrapperCard>
    </OverviewBox>
  );
};

export default Overview;
