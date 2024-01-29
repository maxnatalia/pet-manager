import styled from "styled-components";

export const TitleBox = styled.h4`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  color: ${({ theme }) => theme.color.special};
`;
