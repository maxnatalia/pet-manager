import styled from "styled-components";

export const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.color.backgroundSecondary};
  padding: 20px;
  border-radius: 20px;
  border-bottom-left-radius: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    border-bottom-left-radius: 20px;
  }
`;

export const Logo = styled.img`
  width: 80px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 60px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0 20px;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: none;
  }
`;
