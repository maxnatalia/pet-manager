import styled from "styled-components";

export const GridContent = styled.div`
  display: grid;
  grid-template-areas:
    "today pets"
    "overview pets"
    "events events";

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-template-areas:
      "today"
      "overview"
      "pets"
      "events";
  }
`;
