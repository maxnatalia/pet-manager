import { MdFeaturedPlayList } from "react-icons/md";
import { ButtonLink } from "../../../../../common/ButtonLink";
import { TitleBox } from "../../../../../common/TitleBox";
import usePetsContext from "../../../usePetsContext";
import { ButtonsBox, EventsBox } from "./styled";
import { useState } from "react";
import { mapEventsForCard } from "../../../utils";
import Card from "../../../../../common/Card";

const FilteringEvents = () => {
  const { archiveEvents, futureEvents } = usePetsContext();
  const [activeList, setActiveList] = useState<"archive" | "future">("future");

  const mappedFutureEvents = mapEventsForCard(futureEvents);
  const mappedArchiveEvents = mapEventsForCard(archiveEvents);

  // const mappedFutureEvents = futureEvents.map(event => ({
  //   ...event,
  //   id: event.eventId,
  //   cardTitle: `${getEventEmoji(event.eventCategory)} ${event.eventCategory}`,
  //   cardTab: `${getPetEmoji(event.petCategory)} ${event.petName}`,
  //   cardContent: event.eventDate,
  // }));

  // const mappedArchiveEvents = archiveEvents.map(event => ({
  //   ...event,
  //   id: event.eventId,
  //   cardTitle: `${getEventEmoji(event.eventCategory)} ${event.eventCategory}`,
  //   cardTab: `${getPetEmoji(event.petCategory)} ${event.petName}`,
  //   cardContent: event.eventDate,
  // }));

  return (
    <EventsBox>
      <TitleBox>
        <MdFeaturedPlayList />
        List of Events:
      </TitleBox>
      <ButtonsBox>
        <ButtonLink
          onClick={() => setActiveList("future")}
          title={"Show Future Events"}
          $active={activeList === "future"}
        >
          future
        </ButtonLink>
        <ButtonLink
          onClick={() => setActiveList("archive")}
          title={"Show Archive Events"}
          $active={activeList === "archive"}
        >
          archive
        </ButtonLink>
      </ButtonsBox>

      {activeList === "archive" && (
        <>
          <h5>Archive Events:</h5>
          <Card data={mappedArchiveEvents} />
        </>
      )}
      {activeList === "future" && (
        <>
          <h5>Future Events:</h5>
          <Card data={mappedFutureEvents} />
        </>
      )}
    </EventsBox>
  );
};

export default FilteringEvents;
