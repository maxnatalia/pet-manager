import { useParams } from "react-router-dom";
import { MdOutlinePets } from "react-icons/md";
import usePetsContext from "../../usePetsContext";
import useFormEvent from "./useFormEvent";
import TitlePage from "../../../../common/TitlePage";
import { eventCategoryOptions } from "../../utils";

const SinglePet = () => {
  const { id } = useParams();
  const { getPetById, handleEditPetEvent, editableEventId } = usePetsContext();
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
          <div key={event.eventId}>
            {event.eventName} - {event.eventDate}
            <button
              onClick={() => handleEditPetEvent(selectedPet.id, event.eventId)}
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
            <label>Name of Event:*</label>
            <input
              type="text"
              value={eventName}
              name="eventName"
              onChange={eventNameChangedHandler}
              onBlur={eventNameBlurHandler}
            />
          </div>
          {eventNameHasError && (
            <p>
              Error! Name of Event is requiered! You must enter at least three
              characters.
            </p>
          )}
          <div>
            <label>Date of Event:*</label>
            <input
              type="date"
              name="eventDate"
              value={eventDate}
              onChange={eventDateChangedHandler}
              onBlur={eventDateBlurHandler}
            />
          </div>
          {eventDateHasError && (
            <p>
              Error! Date of event is requiered! Date of event must be after or
              equal today.
            </p>
          )}

          <div>
            <label>Event Category:</label>
            <select
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
            </select>
          </div>

          <button type="submit">
            {editableEventId ? "Save changes" : "Add new Event"}
          </button>
        </form>
      </div>
    </>
  );
};

export default SinglePet;
