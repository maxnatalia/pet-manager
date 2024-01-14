import { Link } from "react-router-dom";
import usePetsContext from "./usePetsContext";

const Pets = () => {
  const { petsList, handleRemovePet } = usePetsContext();

  return (
    <div>
      <h2>Pets</h2>
      <div>
        {petsList.map(pet => (
          <div key={pet.id}>
            <h2>{pet.petName}</h2>
            <Link to={`/pet/${pet.id}`}>Go to single pet</Link>
            <button onClick={() => handleRemovePet(pet.id)}>REMOVE PET</button>
            <button>EDIT PET</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pets;
