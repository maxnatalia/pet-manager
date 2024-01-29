import { MdEventBusy } from "react-icons/md";
import { TitleBox } from "../../../../../common/TitleBox";
import { getEventEmoji, getPetEmoji } from "../../../utils";
import {
  ButtonLink,
  EventCard,
  EventsWrapper,
  ExtraNumber,
  PetDetails,
  TodayBox,
} from "./styled";
import usePetsContext from "../../../usePetsContext";
import { useNavigate } from "react-router-dom";

const Today = () => {
  const { todayEvents } = usePetsContext();
  const navigate = useNavigate();

  return (
    <TodayBox>
      {todayEvents.length === 0 ? (
        <TitleBox>
          Today you don't have any events <MdEventBusy />
        </TitleBox>
      ) : (
        <TitleBox>
          Today's events: <ExtraNumber>{todayEvents.length}</ExtraNumber>
        </TitleBox>
      )}
      <EventsWrapper>
        {todayEvents.map(event => (
          <EventCard key={event.eventId}>
            <PetDetails>
              {getPetEmoji(event.petCategory)} {event.petName}
            </PetDetails>
            <ButtonLink
              title={"See more events"}
              onClick={() => navigate("/events")}
            >
              {getEventEmoji(event.eventCategory)}
              {event.eventCategory}
            </ButtonLink>
          </EventCard>
        ))}
      </EventsWrapper>
    </TodayBox>
  );
};

export default Today;
