import { MdMore } from "react-icons/md";
import { TitleBox } from "../../../../../common/TitleBox";
import { getPetEmoji } from "../../../utils";
import usePetsContext from "../../../usePetsContext";
import { AddBox, PetItem, PetsBox, PetsList } from "./styled";
import { ButtonLink } from "../../../../../common/ButtonLink";
import { useNavigate } from "react-router-dom";

const LatestPets = () => {
  const { petsList } = usePetsContext();
  const navigate = useNavigate();

  return (
    <PetsBox>
      <TitleBox>Lastest added pets:</TitleBox>
      <PetsList>
        {petsList.map(pet => (
          <PetItem key={pet.id}>
            <span>{getPetEmoji(pet.category)}</span>
            <span>{pet.petName}</span>
            <AddBox>
              <span>XX.XX.XXXX</span>
              <span>adding date</span>
            </AddBox>
            <ButtonLink
              title={`Go to ${pet.petName} page`}
              onClick={() => navigate(`/pet/${pet.id}`)}
            >
              <MdMore />
              Go
            </ButtonLink>
          </PetItem>
        ))}
      </PetsList>
    </PetsBox>
  );
};

export default LatestPets;
