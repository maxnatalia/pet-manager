import styled from "styled-components";

export const ButtonsBox = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 20px;
`;

// export const CardBox = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   gap: 40px;
// `;

export const EventsBox = styled.div`
  grid-area: events;
  margin: 20px;
  margin-right: 0;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  border-radius: 20px;
`;

// export const EventCard = styled.div`
//   width: 40%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 20px;
//   border-radius: 20px;
//   background-color: ${({ theme }) => theme.color.backgroundPrimary};
//   position: relative;
// `;

// export const EventPet = styled.span`
//   padding: 10px 20px;
//   position: absolute;
//   right: 0;
//   top: -30px;
//   border-top-left-radius: 20px;
//   border-top-right-radius: 20px;
//   background-color: ${({ theme }) => theme.color.backgroundPrimary};
//   font-size: 22px;
//   font-weight: 700;
// `;

// export const EventDate = styled.span`
//   font-weight: 100;
// `;

// export const EventCategory = styled.span`
//   text-transform: uppercase;
//   font-size: 22px;
// `;
