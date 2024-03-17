import BlockBox from "../../../../../common/BlockBox";
import ItemCard from "../../../../../common/ItemCard";
import { getPetEmoji } from "../../../utils";
import usePetsContext from "../../../usePetsContext";

const LatestPets = () => {
  const { petsList } = usePetsContext();

  return (
    <BlockBox title="🖇️ Lastest added pets:" $gridPosition="latestPets">
      {petsList.map(item => (
        <ItemCard
          key={item.id}
          avatar={getPetEmoji(item.category)}
          name={item.petName}
          subname={item.breed}
          linkName="See more..."
          linkAddress={`/pet/${item.id}`}
        />
      ))}
    </BlockBox>
  );
};

export default LatestPets;
