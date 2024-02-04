import { MdPets } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import {
  Avatar,
  CategoryWrapper,
  Count,
  OverviewBox,
  Total,
  TotalCard,
  WrapperCard,
} from "./styled";
import { TitleBox } from "../../../../../common/TitleBox";
import usePetsContext from "../../../usePetsContext";
import { getEventEmoji, getPetEmoji } from "../../../utils";

const Overview = () => {
  const { petsList, countPetsByCategory, totalEvents, countEventsByCategory } =
    usePetsContext();

  return (
    <OverviewBox>
      <TitleBox>Overview:</TitleBox>
      <WrapperCard>
        <TotalCard>
          <Total>{petsList.length}</Total>

          <div>
            <MdPets />
            Pets
          </div>

          <CategoryWrapper>
            {countPetsByCategory.map(
              item =>
                item.count > 0 && (
                  <Avatar key={item.category}>
                    {getPetEmoji(item.category)} <Count>{item.count}</Count>
                  </Avatar>
                )
            )}
          </CategoryWrapper>
        </TotalCard>
        <TotalCard>
          <Total>{totalEvents}</Total>

          <div>
            <MdEvent />
            Events
          </div>
          <CategoryWrapper>
            {countEventsByCategory.map(
              item =>
                item.count > 0 && (
                  <Avatar key={item.category}>
                    {getEventEmoji(item.category)} <Count>{item.count}</Count>
                  </Avatar>
                )
            )}
          </CategoryWrapper>
        </TotalCard>
      </WrapperCard>
    </OverviewBox>
  );
};

export default Overview;
