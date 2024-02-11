import { MdDelete } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlinePets } from "react-icons/md";
import usePetsContext from "../../usePetsContext";
import useFormEvent from "./useFormEvent";
import TitlePage from "../../../../common/TitlePage";
import { eventCategoryOptions } from "../../utils";
import {
  ButtonsBox,
  CategoryBox,
  CategoryWrapper,
  ContentBox,
  DataBox,
  EventsBox,
  ExtraBox,
  FormBox,
  PetBox,
  PetName,
} from "./styled";
import { ButtonIcon } from "../../../../common/ButtonIcon";
import { useEffect } from "react";
import { Input } from "../../../../common/Input";
import { Label } from "../../../../common/Label";
import { ErrorFieldMsg } from "../../../../common/ErrorFieldMsg";

const SinglePet = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    getPetById,
    handleEditPetEvent,
    editableEventId,
    handleRemovePet,
    handleEditPet,
    editableId,
  } = usePetsContext();

  useEffect(() => {
    if (editableId) {
      navigate("/form");
    }
  }, [editableId, navigate]);

  const selectedPet = getPetById(id);

  const {
    onFormSubmit,
    eventName,
    eventNameChangedHandler,
    eventNameBlurHandler,
    eventNameHasError,
    eventDate,
    eventDateChangedHandler,
    eventDateBlurHandler,
    eventDateHasError,
    eventCategory,
    eventCategoryChangedHandler,
  } = useFormEvent(selectedPet?.id);

  if (selectedPet === undefined) {
    return <div>Selected Pet not Found!</div>;
  }

  return (
    <>
      <TitlePage
        title={`All about ${selectedPet.petName}`}
        subtitle={`Here you can add events for ${selectedPet.petName} and managed data`}
        icon={<MdOutlinePets />}
      />
      <ContentBox>
        <PetBox>
          <ButtonsBox>
            <ButtonIcon
              $edit
              title={"Edit pet data"}
              onClick={() => handleEditPet(selectedPet.id)}
            >
              <MdEditDocument />
            </ButtonIcon>

            <ButtonIcon
              $remove
              title={"Remove pet"}
              onClick={() => {
                handleRemovePet(selectedPet.id);
                navigate("/pets");
              }}
            >
              <MdDelete />
            </ButtonIcon>
          </ButtonsBox>
          <DataBox>
            <div>
              <CategoryWrapper>
                <CategoryBox>📌 name</CategoryBox>
                <PetName>{selectedPet.petName}</PetName>
              </CategoryWrapper>
              <CategoryWrapper>
                <CategoryBox>📌 breed</CategoryBox>
                <PetName>{selectedPet.breed}</PetName>
              </CategoryWrapper>
              <CategoryWrapper>
                <CategoryBox>📌 gender</CategoryBox>
                <PetName>{selectedPet.gender}</PetName>
              </CategoryWrapper>
              <CategoryWrapper>
                <CategoryBox>📌 type</CategoryBox>
                <PetName>{selectedPet.category}</PetName>
              </CategoryWrapper>
              <CategoryWrapper>
                <CategoryBox>📌 date of birth</CategoryBox>
                <PetName>{selectedPet.dateOfBirth}</PetName>
              </CategoryWrapper>
              <CategoryWrapper>
                <CategoryBox>📌 description</CategoryBox>
                <PetName>{selectedPet.description}</PetName>
              </CategoryWrapper>
            </div>
            <ExtraBox>
              <div>
                <div>adding date</div>
                <div>XX.XX.XXXX</div>
              </div>
              <div>
                <div>update date</div>
                <div>XX.XX.XXXX</div>
              </div>
            </ExtraBox>
          </DataBox>
        </PetBox>

        <FormBox>
          <h2>EVENTS:</h2>
          <form onSubmit={onFormSubmit}>
            <div>
              <Label $error={eventNameHasError}>Name of Event:*</Label>
              <Input
                $error={eventNameHasError}
                type="text"
                value={eventName}
                name="eventName"
                onChange={eventNameChangedHandler}
                onBlur={eventNameBlurHandler}
              />
            </div>
            {eventNameHasError && (
              <ErrorFieldMsg>
                Error! Name of Event is requiered! You must enter at least three
                characters.
              </ErrorFieldMsg>
            )}
            <div>
              <Label $error={eventDateHasError}>Date of Event:*</Label>
              <Input
                $error={eventDateHasError}
                type="date"
                name="eventDate"
                value={eventDate}
                onChange={eventDateChangedHandler}
                onBlur={eventDateBlurHandler}
              />
            </div>
            {eventDateHasError && (
              <ErrorFieldMsg>
                Error! Date of event is requiered! Date of event must be after
                or equal today.
              </ErrorFieldMsg>
            )}

            <div>
              <Label>Event Category:</Label>
              <Input
                as={"select"}
                name="eventCategory"
                value={eventCategory}
                onChange={eventCategoryChangedHandler}
              >
                {eventCategoryOptions.map((category, index) => (
                  <option
                    key={`${index} - ${category.value}`}
                    value={category.value}
                  >
                    {category.label}
                  </option>
                ))}
              </Input>
            </div>

            <button type="submit">
              {editableEventId ? "Save changes" : "Add new Event"}
            </button>
          </form>
        </FormBox>

        <EventsBox>
          <h2>List of Events:</h2>
          {selectedPet.events.length === 0 && (
            <p>You don't have any events for {selectedPet.petName} yet.</p>
          )}
          {selectedPet.events.map(event => (
            <div key={event.eventId}>
              {event.eventName} - {event.eventDate}
              <button
                onClick={() =>
                  handleEditPetEvent(selectedPet.id, event.eventId)
                }
              >
                Edit Event
              </button>
            </div>
          ))}
        </EventsBox>
      </ContentBox>
    </>
  );
};

export default SinglePet;
