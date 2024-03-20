import styled from "styled-components";

export const StyledCardCount = styled.div`
  max-width: 320px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CardTotal = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.special};
  font-size: 26px;
  font-weight: 700;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.special};
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
`;

export const CardTitle = styled.h4`
  color: red;
  margin: 0;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 24px;
`;
