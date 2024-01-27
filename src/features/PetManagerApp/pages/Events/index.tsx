import usePetsContext from "../../usePetsContext";
import { getEventEmoji, getPetEmoji } from "../../utils";

const Events = () => {
  const { allEvents, todayEvents } = usePetsContext();

  return (
    <div>
      <div>
        {todayEvents.length > 0 ? (
          <div>
            <h3>Today's Events:</h3>
            <ul>
              {todayEvents.map(event => (
                <li key={event.eventId}>
                  {event.petName}'s Event: {event.eventName} - {event.eventDate}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>No events today</div>
        )}
      </div>
      <h2>List of Events:</h2>
      {allEvents.length > 0 ? (
        <ul>
          {allEvents.map(event => (
            <li key={event.eventId}>
              {getEventEmoji(event.eventCategory)}
              {event.eventName} - {event.eventDate} -
              {getPetEmoji(event.petCategory)}
              {event.petName}
            </li>
          ))}
        </ul>
      ) : (
        <div>Brak wydarzeń</div>
      )}
    </div>
  );
};

export default Events;
