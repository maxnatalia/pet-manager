import styled from "styled-components";

export type GridPosition =
  | "latestPets"
  | "petsOverview"
  | "today"
  | "eventsInsights";

export const StyledBlockBox = styled.div<{ $gridPosition?: GridPosition }>`
  grid-area: ${({ $gridPosition }) => $gridPosition};
  padding: 20px;
  border: 1px solid black;
  /* display: flex;
  flex-direction: column;
  gap: 20px; */
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
`;
