import BlockBox from "../../../../../common/BlockBox";
import Control from "../../../../../common/Control";
import ItemCard from "../../../../../common/ItemCard";
import CardCount from "../../../../../common/CardCount";
import { Button } from "../../../../../common/Button";
import Calendar from "../../../../../common/Calendar";
import { AllEvents } from "../../../types";
import { getEventEmoji, isDateEventExpired } from "../../../utils";
import usePetsContext from "../../../usePetsContext";
import useActivePanelControl from "../../../useActivePanelControl";

const DynamicHighlights = () => {
  const { todayEvents, thisWeekEvents, thisMonthEvents } = usePetsContext();
  const tabs = ["today", "this week", "this month"];
  const { controlPanel: highlight, handleControlPanel: handleHighlight } =
    useActivePanelControl("today", tabs);

  const renderEvents = (events: AllEvents[], tabTitle: string) => (
    <CardCount cardTitle={tabTitle} cardTotal={"📌"}>
      {events.length === 0 ? (
        <div>You don't have any events planned❗</div>
      ) : (
        events.map(item => (
          <ItemCard
            key={item.eventId}
            avatar={getEventEmoji(item.eventCategory)}
            name={item.eventCategory}
            subname={item.eventDate}
            linkAddress={`/pet/${item.petId}`}
            linkName={item.petName}
            extraInfo={isDateEventExpired(item.eventDate)}
          />
        ))
      )}
    </CardCount>
  );

  return (
    <BlockBox
      title={"🖇️ Dynamic Highlights:"}
      $gridPosition="today"
      $direction="column"
    >
      <Calendar />
      <Control>
        {tabs.map(tab => (
          <Button
            key={tab}
            $active={highlight === tab}
            onClick={() => handleHighlight(tab)}
          >
            {tab}
          </Button>
        ))}
      </Control>
      <div>
        {highlight === "today" && renderEvents(todayEvents, "Today Events:")}
        {highlight === "this week" &&
          renderEvents(thisWeekEvents, "This Week Events:")}
        {highlight === "this month" &&
          renderEvents(thisMonthEvents, "This Month Events:")}
      </div>
    </BlockBox>
  );
};

export default DynamicHighlights;
