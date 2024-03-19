import styled, { css } from "styled-components";

export type GridPosition =
  | "latestPets"
  | "petsOverview"
  | "today"
  | "eventsInsights";

export type BlockContentFlow = {
  $direction?: "column";
};

export const StyledBlockBox = styled.div<{ $gridPosition?: GridPosition }>`
  grid-area: ${({ $gridPosition }) => $gridPosition};
  padding: 20px;
  border: 1px solid black;
`;

export const Title = styled.h3`
  font-size: 30px;
  margin: 0;
`;

export const BlockContent = styled.div<BlockContentFlow>`
  display: flex;
  justify-content: space-between;

  ${({ $direction }) =>
    $direction === "column" &&
    css`
      flex-direction: column;
    `}
`;
