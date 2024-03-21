import { formatDate } from "../../features/PetManagerApp/utils";
import { StyledCalendar } from "./styled";

const Calendar = () => {
  const currentDate = new Date();
  return <StyledCalendar>Today is 📅 {formatDate(currentDate)}</StyledCalendar>;
};

export default Calendar;
