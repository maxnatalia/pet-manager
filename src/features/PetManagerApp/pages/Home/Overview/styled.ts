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
  flex-wrap: wrap;
  gap: 20px;
`;

export const TotalCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 30px;
  min-width: 240px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  font-size: 36px;
  font-weight: 300;
  text-transform: uppercase;
`;
