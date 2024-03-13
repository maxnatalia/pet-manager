import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledItemCard = styled.div`
  margin: 10px auto;
  padding: 8px 16px;
  border-bottom: 1px solid black;
  /* border-top: 1px solid black; */
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const CardAvatar = styled.span`
  padding: 8px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rebeccapurple;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardLink = styled(Link)`
  background-color: greenyellow;
  border-radius: 20px;
  padding: 8px 16px;
  margin-left: auto;
`;
