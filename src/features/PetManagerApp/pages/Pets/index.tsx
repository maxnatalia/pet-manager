import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { MdMore } from "react-icons/md";
import { MdFeaturedPlayList } from "react-icons/md";
import usePetsContext from "../../usePetsContext";
import {
  Avatar,
  Box,
  BoxTitle,
  ButtonIcon,
  ButtonsBox,
  EventButton,
  Events,
  PetCard,
  PetsContainer,
  SubtitleCard,
  TitleCard,
} from "./styled";
import TitlePage from "../../../../common/TitlePage";
import { getAnimalEmoji } from "../../utils";

const Pets = () => {
  const navigate = useNavigate();
  const { petsList, handleRemovePet, handleEditPet, editableId } =
    usePetsContext();

  useEffect(() => {
    if (editableId) {
      navigate("/form");
    }
  }, [editableId, navigate]);

  return (
    <>
      <TitlePage
        title="Pets List"
        subtitle="Here you can view, edit and delete your pets"
        icon={<MdFeaturedPlayList />}
      />
      <PetsContainer>
        {petsList.map(pet => (
          <PetCard key={pet.id}>
            <BoxTitle>
              <Avatar>{getAnimalEmoji(pet.category)}</Avatar>
              <div>
                <TitleCard>{pet.petName}</TitleCard>
                <SubtitleCard>{pet.breed}</SubtitleCard>
              </div>
            </BoxTitle>
            <BoxTitle>
              <Events>{pet.events.length}</Events>
              <div>
                <TitleCard>{pet.petName}'s Events</TitleCard>
                <EventButton onClick={() => navigate(`/pet/${pet.id}`)}>
                  Manage Events
                </EventButton>
              </div>
            </BoxTitle>
            <Box>
              <div>
                <div>Added:</div>
                <div>XX.XX.XXXX</div>
              </div>
              <div>
                <div>Edited:</div>
                <div>XX.XX.XXXX</div>
              </div>
            </Box>

            <ButtonsBox>
              <ButtonIcon
                onClick={() => navigate(`/pet/${pet.id}`)}
                title="See More Details"
              >
                <MdMore />
              </ButtonIcon>
              <ButtonIcon
                $remove
                title="Remove Pet"
                onClick={() => handleRemovePet(pet.id)}
              >
                <MdDelete />
              </ButtonIcon>
              <ButtonIcon
                $edit
                title="Edit Pet"
                onClick={() => handleEditPet(pet.id)}
              >
                <MdEditDocument />
              </ButtonIcon>
            </ButtonsBox>
          </PetCard>
        ))}
      </PetsContainer>
    </>
  );
};

export default Pets;
