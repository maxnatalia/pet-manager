import styled from "styled-components";

export const ContentBox = styled.div`
  padding: 20px;
  display: grid;
  justify-content: space-between;
  grid-gap: 20px;
  grid-template-areas:
    "petData form"
    "petData events";
`;

export const PetBox = styled.div`
  grid-area: petData;
  /* padding: 20px; */
  padding-top: 0;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  border-radius: 20px;
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.05),
    0px -2px 50px 0px rgba(9, 10, 51, 0.04);
`;

export const FormBox = styled.div`
  grid-area: form;
`;

export const EventsBox = styled.div`
  grid-area: events;
`;

export const ButtonsBox = styled.div`
  margin: 0 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 40px;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CategoryWrapper = styled.div`
  margin-top: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const CategoryBox = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
`;

export const PetName = styled.h4`
  margin: 0;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 100;
`;

export const ExtraBox = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: space-around;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 14px;
`;
