import styled from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  margin: 40px auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  border-radius: 20px;
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-areas:
    "header header"
    "nav main"
    "footer footer";

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header "
      "nav"
      "main"
      "footer";
    grid-gap: 20px;
  }
`;

export const Main = styled.main`
  grid-area: main;
  min-height: 90vh;
`;
