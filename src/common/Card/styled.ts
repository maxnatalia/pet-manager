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

export const CardWrapper = styled.div`
  min-width: 330px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  position: relative;
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
