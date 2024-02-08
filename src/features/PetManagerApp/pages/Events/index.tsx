import { MdEventNote } from "react-icons/md";
import { TitleBox } from "../../../../common/TitleBox";
import TitlePage from "../../../../common/TitlePage";
import usePetsContext from "../../usePetsContext";
import { EventBlock, EventsBox } from "./styled";
import Card from "../../../../common/Card";
import { mapEventsForCard } from "../../utils";

const Events = () => {
  const { futureEvents, archiveEvents } = usePetsContext();

  const mappedEventsUpcoming = mapEventsForCard(futureEvents);
  const mappedEventsArchive = mapEventsForCard(archiveEvents);

  return (
    <>
      <TitlePage
        title="All Events"
        subtitle="Here you can see your all events📅"
        icon={<MdEventNote />}
      />
      <EventsBox>
        <EventBlock>
          <TitleBox>Upcoming Events:</TitleBox>
          <Card $column data={mappedEventsUpcoming} />
        </EventBlock>
        <EventBlock>
          <TitleBox>Archive Events:</TitleBox>
          <Card $column data={mappedEventsArchive} />
        </EventBlock>
      </EventsBox>
    </>
  );
};

export default Events;
