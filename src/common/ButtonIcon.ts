import styled, { css } from "styled-components";

type ButtonType = {
  $edit?: boolean;
  $remove?: boolean;
};

export const ButtonIcon = styled.button<ButtonType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-size: 18px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: ${({ theme }) => theme.color.special};
  color: ${({ theme }) => theme.color.backgroundSecondary};
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.backgroundSecondary};
    color: ${({ theme }) => theme.color.special};
    border: 2px solid ${({ theme }) => theme.color.special};
  }

  ${({ $edit }) =>
    $edit &&
    css`
      background-color: ${({ theme }) => theme.color.edit};

      &:hover {
        color: ${({ theme }) => theme.color.edit};
        border: 2px solid ${({ theme }) => theme.color.edit};
      }
    `}

  ${({ $remove }) =>
    $remove &&
    css`
      background-color: ${({ theme }) => theme.color.remove};

      &:hover {
        color: ${({ theme }) => theme.color.remove};
        border: 2px solid ${({ theme }) => theme.color.remove};
      }
    `}
`;
