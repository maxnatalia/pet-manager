import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const LinkButton = styled(Link)<{ $active?: boolean }>`
  padding: 6px 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 700;
  color: ${({ theme }) => theme.color.special};
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.special};
  background-color: transparent;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.special};
    color: ${({ theme }) => theme.color.backgroundPrimary};
  }

  ${({ $active }) =>
    $active &&
    css`
      background-color: ${({ theme }) => theme.color.special};
      color: ${({ theme }) => theme.color.backgroundPrimary};
      pointer-events: none;
    `}
`;
