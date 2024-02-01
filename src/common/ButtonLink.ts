import styled, { css } from "styled-components";

export const ButtonLink = styled.button<{ $active?: boolean }>`
  padding: 6px 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.special};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.special};
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
