import { TitleBox } from "../../../../../common/TitleBox";
import { mapPetsForCard } from "../../../utils";
import usePetsContext from "../../../usePetsContext";
import { PetsBox } from "./styled";

import Card from "../../../../../common/Card";

const LatestPets = () => {
  const { petsList } = usePetsContext();

  const mappedPetsList = mapPetsForCard(petsList);

  return (
    <PetsBox>
      <TitleBox>Lastest added pets:</TitleBox>
      <Card $column data={mappedPetsList} />
    </PetsBox>
  );
};

export default LatestPets;
