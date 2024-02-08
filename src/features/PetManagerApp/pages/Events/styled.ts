import styled from "styled-components";

export const EventsBox = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
`;

export const EventBlock = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  border-radius: 20px;
`;
