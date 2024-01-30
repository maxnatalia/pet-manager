import styled from "styled-components";

export const PetsBox = styled.div`
  grid-area: pets;
  padding: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
`;

export const PetsList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
`;

export const PetItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin: 20px auto;
  font-size: 22px;
  font-weight: 900;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  border-radius: 20px;
`;

export const AddBox = styled.div`
  flex: 1;
  text-align: right;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
`;
