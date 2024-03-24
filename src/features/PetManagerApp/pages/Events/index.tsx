import { MdEventNote } from "react-icons/md";
// import { TitleBox } from "../../../../common/TitleBox";
import TitlePage from "../../../../common/TitlePage";
import usePetsContext from "../../usePetsContext";
// import { EventBlock, EventsBox } from "./styled";
// import Card from "../../../../common/Card";
// import { mapEventsForCard } from "../../utils";
import BlockBox from "../../../../common/BlockBox";
import Calendar from "../../../../common/Calendar";
import StatBarChart from "../../../../common/StatBarChart";
import Control from "../../../../common/Control";
import { Button } from "../../../../common/Button";
import useActivePanelControl from "../../useActivePanelControl";
import { AllEvents } from "../../types";
import CardCount from "../../../../common/CardCount";
import ItemCard from "../../../../common/ItemCard";
import { getEventEmoji } from "../../utils";

const Events = () => {
  const { futureEvents, archiveEvents, allEvents } = usePetsContext();
  const tabs = ["all", "future", "archive"];
  const { controlPanel: panel, handleControlPanel: handlePanel } =
    useActivePanelControl("all", tabs);

  // const mappedEventsUpcoming = mapEventsForCard(futureEvents);
  // const mappedEventsArchive = mapEventsForCard(archiveEvents);

  const renderEvents = (events: AllEvents[], tabTitle: string) => (
    <CardCount cardTitle={`${tabTitle} ➡️ ${events.length}`} cardTotal={"📌"}>
      {events.length === 0 ? (
        <div>You don't have any events❗</div>
      ) : (
        events.map(item => (
          <ItemCard
            key={item.eventId}
            avatar={getEventEmoji(item.eventCategory)}
            name={item.eventCategory}
            subname={item.eventDate}
            linkAddress={`/pet/${item.petId}`}
            linkName={item.petName}
          />
        ))
      )}
    </CardCount>
  );

  return (
    <>
      <TitlePage
        title="All Events"
        subtitle="Here you can see your all events📅"
        icon={<MdEventNote />}
      />

      <BlockBox title="🖇️ Pet's Event Center:" $direction="column">
        <Calendar />
        <Control>
          {tabs.map(tab => (
            <Button
              key={tab}
              $active={panel === tab}
              onClick={() => handlePanel(tab)}
            >
              {tab}
            </Button>
          ))}
        </Control>
        <div>
          {panel === "all" && renderEvents(allEvents, "All Events")}
          {panel === "future" && renderEvents(futureEvents, "Future Events")}
          {panel === "archive" && renderEvents(archiveEvents, "Archive Events")}
        </div>
      </BlockBox>
      <BlockBox title="🖇️ Statistics:">
        <div>wykres z podzialem na typy eventow</div>
        <StatBarChart dataBarChart="eventsByCategory" />
      </BlockBox>
      {/* <BlockBox title="🖇️ Future Events:">
        <div>
          lista future events z filtrem na dzis, this week, this month, this
          year
        </div>
      </BlockBox>
      <BlockBox title="🖇️ Archive Events:">
        <div>
          lista archive eventow z dodaniem informacji czy odblo sie wydarzenie i
          jakies wnioski itp
        </div>
      </BlockBox>
      <EventsBox>
        <EventBlock>
          <TitleBox>Upcoming Events:</TitleBox>
          <Card $column data={mappedEventsUpcoming} />
        </EventBlock>
        <EventBlock>
          <TitleBox>Archive Events:</TitleBox>
          <Card $column data={mappedEventsArchive} />
        </EventBlock>
      </EventsBox> */}
    </>
  );
};

export default Events;
