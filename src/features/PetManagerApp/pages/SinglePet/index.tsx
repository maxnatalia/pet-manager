import { useParams } from "react-router-dom";
import { MdOutlinePets } from "react-icons/md";
import usePetsContext from "../../usePetsContext";
import useFormEvent from "./useFormEvent";
import TitlePage from "../../../../common/TitlePage";

const SinglePet = () => {
  const { id } = useParams();
  const { getPetById, handleEditPetEvent, editableEventId } = usePetsContext();
  const selectedPet = getPetById(id);

  const {
    onFormSubmit,
    eventName,
    eventNameChangedHandler,
    eventNameHasError,
    eventDate,
    eventDateChangedHandler,
    eventDateHasError,
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
      <div>
        <h2>{selectedPet.petName}</h2>
        <p>{selectedPet.breed}</p>
        <p>{selectedPet.category}</p>
        <p>{selectedPet.gender}</p>
        <p>{selectedPet.dateOfBirth} - AGE - X</p>
      </div>
      <div>
        <h2>List of Events:</h2>
        {selectedPet.events.length === 0 && (
          <p>You don't have any events for {selectedPet.petName} yet.</p>
        )}
        {selectedPet.events.map(event => (
          <div key={event.id}>
            {event.eventName} - {event.eventDate}
            <button
              onClick={() => handleEditPetEvent(selectedPet.id, event.id)}
            >
              Edit Event
            </button>
          </div>
        ))}
      </div>
      <div>
        <h2>EVENTS:</h2>
        <form onSubmit={onFormSubmit}>
          <div>
            <label>Name of Event:</label>
            <input
              type="text"
              value={eventName}
              name="eventName"
              onChange={eventNameChangedHandler}
            />
          </div>
          {eventNameHasError && <p>Error!</p>}
          <div>
            <label>Date of Event:</label>
            <input
              type="date"
              name="eventDate"
              value={eventDate}
              onChange={eventDateChangedHandler}
            />
          </div>
          {eventDateHasError && <p>Error!</p>}

          <button type="submit">
            {editableEventId ? "Save changes" : "Add new Event"}
          </button>
        </form>
      </div>
    </>
  );
};

export default SinglePet;
