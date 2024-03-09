import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

type SpecialProps = {
  $special: boolean;
};

export const StyledNavigation = styled.nav`
  grid-area: nav;
  width: 100%;
  background: ${({ theme }) => theme.color.backgroundSecondary};
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    flex-direction: row;
    /* align-items: end; */
    padding-bottom: 0;
    /* padding-right: 20px; */
    border-radius: 20px;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    flex-direction: row;
    padding-top: 20px;
    padding-right: 20px;
  }
`;

export const StyledNavLink = styled(NavLink)<SpecialProps>`
  text-decoration: none;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &.active {
    background: ${({ theme }) => theme.color.backgroundPrimary};
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    pointer-events: none;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
      border-top-right-radius: 20px;
      border-bottom-left-radius: 0;
    }
  }

  &:hover {
    background: ${({ theme }) => theme.color.backgroundPrimary};
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom: 2px solid ${({ theme }) => theme.color.special};

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
      border-top-right-radius: 20px;
      border-bottom-left-radius: 0;
    }
  }

  ${({ $special }) =>
    $special &&
    css`
      &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.color.special};
      }
    `}
`;

export const Label = styled.span<SpecialProps>`
  font-size: 26px;
  color: ${({ theme }) => theme.color.textPrimary};

  ${({ $special }) =>
    $special &&
    css`
      font-weight: 700;
      color: ${({ theme }) => theme.color.special};
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: none;
  }
`;

export const styledIcon = (Icon: React.ComponentType) => styled(
  Icon
)<SpecialProps>`
  font-size: 46px;
  color: ${({ theme }) => theme.color.textPrimary};
  transition: color 0.3s ease-in-out;

  ${({ $special }) =>
    $special &&
    css`
      color: ${({ theme }) => theme.color.special};
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 26px;
  }
`;
