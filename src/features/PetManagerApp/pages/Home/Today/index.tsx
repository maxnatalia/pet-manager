import { MdEventBusy } from "react-icons/md";
import { TitleBox } from "../../../../../common/TitleBox";
import { getEventEmoji, getPetEmoji } from "../../../utils";
import {
  EventCard,
  EventsWrapper,
  ExtraNumber,
  PetDetails,
  TodayBox,
} from "./styled";
import usePetsContext from "../../../usePetsContext";
import { useNavigate } from "react-router-dom";
import { ButtonLink } from "../../../../../common/ButtonLink";

const Today = () => {
  const { todayEvents } = usePetsContext();
  const navigate = useNavigate();

  return (
    <TodayBox>
      {todayEvents.length === 0 ? (
        <TitleBox>
          Today you don't have events: <MdEventBusy />
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
              <span>{getEventEmoji(event.eventCategory)}</span>
              {event.eventCategory}
            </ButtonLink>
          </EventCard>
        ))}
      </EventsWrapper>
    </TodayBox>
  );
};

export default Today;
