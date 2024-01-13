import styled from "styled-components";

export const StyledFooter = styled.footer`
  grid-area: footer;
  padding: 20px;
  background: ${({ theme }) => theme.color.backgroundSecondary};
  border-radius: 20px;
  border-top-left-radius: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    border-top-left-radius: 20px;
  }
`;

export const ContactBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-direction: column;
  }
`;

export const Mail = styled.a`
  padding: 20px 0;
  text-decoration: none;
  color: ${({ theme }) => theme.color.textPrimary};
  font-size: 32px;
  font-weight: 700;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.color.special};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
  }
`;

export const styledIcon = (Icon: React.ComponentType) => styled(Icon)`
  width: 60px;
  height: 60px;
  color: ${({ theme }) => theme.color.special};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.color.textPrimary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 40px;
    height: 40px;
  }
`;

export const Author = styled.div`
  margin: 0;
  text-align: center;
  font-weight: 500;
`;
