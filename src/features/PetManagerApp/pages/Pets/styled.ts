import styled, { css } from "styled-components";

type ButtonType = {
  $edit?: boolean;
  $remove?: boolean;
};

export const PetsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    justify-content: center;
  }
`;

export const PetCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
  max-width: 340px;
  padding: 20px 0 0 0;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  border-radius: 20px;
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.05),
    0px -2px 50px 0px rgba(9, 10, 51, 0.04);
  position: relative;
`;

export const BoxTitle = styled.div`
  margin: 0 64px 0 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TitleCard = styled.h4`
  margin: 0;
  font-size: 22px;
  text-transform: capitalize;
`;

export const SubtitleCard = styled.h5`
  margin: 0;
  font-size: 18px;
  font-weight: 300;
  text-transform: capitalize;
`;

export const Box = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  font-weight: 300;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Avatar = styled.div`
  width: 80px;
  height: 50px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Events = styled.div`
  width: 80px;
  height: 50px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 900;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
`;

export const EventButton = styled.button`
  padding: 4px 8px;
  margin-top: 10px;
  letter-spacing: 2px;
  font-size: 18px;
  color: ${({ theme }) => theme.color.special};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.color.special};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.color.backgroundPrimary};
    border: 2px solid transparent;
    background-color: ${({ theme }) => theme.color.special};
  }
`;

export const ButtonsBox = styled.div`
  padding: 20px 10px;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  right: 0;
  top: 0;
`;
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
