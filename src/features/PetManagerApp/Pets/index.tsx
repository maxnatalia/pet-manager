import { Link, useNavigate } from "react-router-dom";
import usePetsContext from "../usePetsContext";

const Pets = () => {
  const navigate = useNavigate();
  const { petsList, handleRemovePet, handleEditPet } = usePetsContext();

  return (
    <div>
      <h2>Pets</h2>
      <div>
        {petsList.map(pet => (
          <div key={pet.id}>
            <h2>{pet.petName}</h2>
            <Link to={`/pet/${pet.id}`}>Go to single pet</Link>
            <button onClick={() => handleRemovePet(pet.id)}>REMOVE PET</button>
            <button
              onClick={() => {
                navigate("/form");
                handleEditPet(pet.id);
              }}
            >
              EDIT PET
            </button>
          </div>
        ))}
      </div>

      <div>
        <h2>List of Events:</h2>
        {petsList.map(pet => (
          <div key={pet.id}>
            <h3>{pet.petName}'s Events:</h3>
            {pet.events.length === 0 && <p>No events!</p>}
            {pet.events.map(event => (
              <div key={event.id}>
                {event.eventName} - {event.eventDate}
                <button>Edit Event</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pets;
