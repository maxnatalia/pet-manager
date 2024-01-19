import styled from "styled-components";

export const Title = styled.h2`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
  font-size: 36px;
  font-weight: 400;
`;

export const Subtitle = styled.h3`
  margin: 0;
  padding-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.color.textPrimary};
  font-size: 20px;
  font-weight: 400;
`;
