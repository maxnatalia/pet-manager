import BlockBox from "../../../../../common/BlockBox";
import ItemCard from "../../../../../common/ItemCard";
import { getPetEmoji } from "../../../utils";
import usePetsContext from "../../../usePetsContext";
import { PetsBox } from "./styled";

const LatestPets = () => {
  const { petsList } = usePetsContext();

  return (
    <PetsBox>
      <BlockBox title="🖇️ Lastest added pets:">
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
    </PetsBox>
  );
};

export default LatestPets;
