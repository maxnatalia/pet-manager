import styled, { css } from "styled-components";
import { FaSun, FaMoon, FaPaw } from "react-icons/fa";

type PointerIconProps = {
  $moveToRight: boolean;
};

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TextTheme = styled.span`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 2px;
`;

export const Box = styled.div`
  width: 80px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.background};
  border: 2px solid ${({ theme }) => theme.color.textPrimary};
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const LightIcon = styled(FaSun)`
  color: yellow;
  font-size: 18px;
`;

export const DarkIcon = styled(FaMoon)`
  color: gray;
  font-size: 18px;
`;

export const PointerIcon = styled(FaPaw)<PointerIconProps>`
  color: ${({ theme }) => theme.color.background};
  font-size: 48px;
  padding: 6px;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  border: 2px solid ${({ theme }) => theme.color.textPrimary};
  border-radius: 50%;
  position: absolute;
  left: -4px;
  top: -6px;
  transition: all 0.5s ease-in-out;

  ${({ $moveToRight }) =>
    $moveToRight &&
    css`
      transform: translateX(40px);
    `}
`;
