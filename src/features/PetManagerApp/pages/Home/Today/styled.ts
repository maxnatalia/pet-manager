import styled from "styled-components";

export const TodayBox = styled.div`
  grid-area: today;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  border-radius: 20px;
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.02),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);
`;

export const ExtraNumber = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.special};
`;
export const EventsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const EventCard = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 40px;
  padding: 10px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
`;

export const PetDetails = styled.div`
  font-weight: 700;
`;

export const ButtonLink = styled.button`
  padding: 6px 10px;
  font-weight: 100;
  text-transform: uppercase;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.color.special};
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.special};
  }
`;
