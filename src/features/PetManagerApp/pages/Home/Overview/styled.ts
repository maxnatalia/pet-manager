import styled from "styled-components";

export const OverviewBox = styled.div`
  grid-area: overview;
  margin: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  border-radius: 20px;
`;

export const WrapperCard = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

export const TotalCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 20px;
  min-width: 240px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  font-size: 36px;
  font-weight: 300;
  text-transform: uppercase;
  position: relative;
`;

export const Total = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -20px;
  right: -10px;
  color: ${({ theme }) => theme.color.special};
  font-size: 26px;
  font-weight: 700;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.special};
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
`;

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Avatar = styled.span`
  font-size: 28px;
  padding: 8px;
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
