import styled, { css } from "styled-components";

type StyledControlProps = {
  $panel?: "centerColumn";
};

export const StyledControl = styled.div<StyledControlProps>`
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  ${({ $panel }) =>
    $panel === "centerColumn" &&
    css`
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
`;
