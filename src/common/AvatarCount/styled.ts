import styled from "styled-components";

export const Avatar = styled.span`
  font-size: 18px;
  padding: 8px;
  margin: 6px;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  border-radius: 50%;
  position: relative;
`;

export const Count = styled.span`
  background-color: ${({ theme }) => theme.color.special};
  padding: 12px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.color.backgroundSecondary};
  font-size: 16px;
  font-weight: 700;
  position: absolute;
  top: -10px;
  right: 0;
`;
