import { TitleBox } from "../../../../../common/TitleBox";
import { getPetEmoji } from "../../../utils";
import usePetsContext from "../../../usePetsContext";
import { PetsBox } from "./styled";

const LatestPets = () => {
  const { petsList } = usePetsContext();
  return (
    <PetsBox>
      <TitleBox>Lastest added pets:</TitleBox>
      <div>
        {petsList.map(pet => (
          <div key={pet.id}>
            <p>{pet.petName}</p>
            <span>{getPetEmoji(pet.category)}</span>
          </div>
        ))}
      </div>
    </PetsBox>
  );
};

export default LatestPets;
