import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const CardsBox = styled.div<{ $column?: boolean }>`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  ${({ $column }) =>
    $column &&
    css`
      flex-direction: column;
    `}
`;

export const CardWrapper = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.textPrimary};
  min-width: 330px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  position: relative;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    border-left: 1px solid ${({ theme }) => theme.color.special};
    border-bottom: 1px solid ${({ theme }) => theme.color.special};
    box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.05),
      0px -2px 50px 0px rgba(9, 10, 51, 0.04);
  }
`;

export const CardTab = styled.div`
  padding: 10px 20px;
  position: absolute;
  right: 0;
  top: -30px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  font-size: 22px;
  font-weight: 700;
`;

export const CardTitle = styled.span`
  text-transform: uppercase;
  font-size: 22px;
`;

export const CardContent = styled.div`
  font-weight: 100;
`;
