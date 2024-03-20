import BlockBox from "../../../../../common/BlockBox";
import Control from "../../../../../common/Control";
import CardCount from "../../../../../common/CardCount";
import AvatarCount from "../../../../../common/AvatarCount";
import { Button } from "../../../../../common/Button";
import { LinkButton } from "../../../../../common/LinkButton";
import { AllEvents, CardDataEvent, EventCategory } from "../../../types";
import { getEventEmoji } from "../../../utils";
import useActivePanelControl from "../../../useActivePanelControl";
import usePetsContext from "../../../usePetsContext";

const EventsInsights = () => {
  const {
    allEvents,
    futureEvents,
    archiveEvents,
    countTotalEventsByCategory,
    countFutureEventsByCategory,
    countArchiveEventsByCategory,
  } = usePetsContext();

  const tabs = ["total", "future", "archive"];

  const { controlPanel: eventFilter, handleControlPanel: handleEventFilter } =
    useActivePanelControl("total", tabs);

  const cardData: CardDataEvent[] = [
    {
      events: allEvents,
      countByCategory: countTotalEventsByCategory,
      tabName: "total",
    },
    {
      events: futureEvents,
      countByCategory: countFutureEventsByCategory,
      tabName: "future",
    },
    {
      events: archiveEvents,
      countByCategory: countArchiveEventsByCategory,
      tabName: "archive",
    },
  ];

  const activeCard = cardData.find(card => card.tabName === eventFilter);

  const renderCard = (
    events: AllEvents[],
    countByCategory: {
      category: EventCategory;
      count: number;
    }[],
    tabName: string
  ) => {
    return (
      <CardCount cardTitle={`${tabName} events`} cardTotal={events.length}>
        <div>
          {events.length === 0 && <div>You don't have any events.</div>}
          {countByCategory.map(
            item =>
              item.count > 0 && (
                <AvatarCount
                  key={item.category}
                  title={item.category}
                  avatarIcon={getEventEmoji(item.category)}
                  count={item.count}
                />
              )
          )}
        </div>
        <LinkButton to={"/events"}>See All Events Details</LinkButton>
      </CardCount>
    );
  };

  return (
    <BlockBox title="🖇️ Events Insights:">
      <Control $panel="centerColumn">
        {tabs.map(tab => (
          <Button
            key={tab}
            $active={eventFilter === tab}
            onClick={() => handleEventFilter(tab)}
          >
            {tab}
          </Button>
        ))}
      </Control>
      {activeCard &&
        renderCard(
          activeCard.events,
          activeCard.countByCategory,
          activeCard.tabName
        )}
    </BlockBox>
  );
};

export default EventsInsights;
