import { useState } from "react";
import { MdFeaturedPlayList } from "react-icons/md";
import { ButtonLink } from "../../../../../common/ButtonLink";
import { TitleBox } from "../../../../../common/TitleBox";
import ItemCard from "../../../../../common/ItemCard";
import usePetsContext from "../../../usePetsContext";
import { getEventEmoji } from "../../../utils";
import { ButtonsBox, EventsBox } from "./styled";

const FilteringEvents = () => {
  const { archiveEvents, futureEvents } = usePetsContext();
  const [activeList, setActiveList] = useState<"archive" | "future">("future");

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
          <h5>🖇️ Archive Events:</h5>
          {archiveEvents.map(item => (
            <ItemCard
              key={item.eventId}
              avatar={getEventEmoji(item.eventCategory)}
              name={`${item.eventCategory} - ${item.petName} `}
              subname={`${item.eventDate} - ${item.eventName}`}
              linkAddress={`/pet/${item.petId}`}
              linkName="Manage event"
            />
          ))}
        </>
      )}
      {activeList === "future" && (
        <>
          <h5>🖇️ Future Events:</h5>
          {futureEvents.map(item => (
            <ItemCard
              key={item.eventId}
              avatar={getEventEmoji(item.eventCategory)}
              name={`${item.eventCategory} - ${item.petName} `}
              subname={`${item.eventDate} - ${item.eventName}`}
              linkAddress={`/pet/${item.petId}`}
              linkName="Manage event"
            />
          ))}
        </>
      )}
    </EventsBox>
  );
};

export default FilteringEvents;
