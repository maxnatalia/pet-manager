import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { MdMore } from "react-icons/md";
import { MdFeaturedPlayList } from "react-icons/md";
import usePetsContext from "../../usePetsContext";
import {
  Avatar,
  ButtonIcon,
  ButtonsBox,
  PageContent,
  PetBox,
  PetsContainer,
} from "./styled";
import TitlePage from "../../../../common/TitlePage";

const Pets = () => {
  const navigate = useNavigate();
  const { petsList, handleRemovePet, handleEditPet } = usePetsContext();

  return (
    <>
      <TitlePage
        title="Pet List Management"
        subtitle="Here you can view, edit and delete your pets"
        icon={<MdFeaturedPlayList />}
      />
      <PageContent>
        <PetsContainer>
          {petsList.map(pet => (
            <PetBox key={pet.id}>
              <Avatar>O</Avatar>
              <h4>{pet.petName}</h4>
              <h5>{pet.breed}</h5>
              <ButtonsBox>
                <ButtonIcon
                  onClick={() => navigate(`/pet/${pet.id}`)}
                  title="See More Details"
                >
                  <MdMore />
                </ButtonIcon>
                <ButtonIcon
                  title="Remove Pet"
                  onClick={() => handleRemovePet(pet.id)}
                >
                  <MdDelete />
                </ButtonIcon>
                <ButtonIcon
                  title="Edit Pet"
                  onClick={() => {
                    navigate("/form");
                    handleEditPet(pet.id);
                  }}
                >
                  <MdEditDocument />
                </ButtonIcon>
              </ButtonsBox>
            </PetBox>
          ))}
        </PetsContainer>

        {/* <div>
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
      </div> */}
      </PageContent>
    </>
  );
};

export default Pets;
