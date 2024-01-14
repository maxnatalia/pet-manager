import { useParams } from "react-router-dom";
import usePetsContext from "../Pets/usePetsContext";

const SinglePet = () => {
  const { id } = useParams();
  const { getPetById } = usePetsContext();
  const selectedPet = getPetById(id);

  if (selectedPet === undefined) {
    return <div>Selected Pet not Found!</div>;
  }

  return (
    <div>
      <h2>{selectedPet?.petName}</h2>
    </div>
  );
};

export default SinglePet;
