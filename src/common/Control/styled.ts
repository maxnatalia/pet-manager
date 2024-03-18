import styled, { css } from "styled-components";

type StyledControlProps = {
  $panel: "leftRow" | "centerColumn";
};

export const StyledControl = styled.div<StyledControlProps>`
  padding: 20px;
  border: 1px solid black;
  border-radius: 20px;

  ${({ $panel }) =>
    $panel === "leftRow" &&
    css`
      display: flex;
      gap: 20px;
      justify-content: flex-end;
    `}

  ${({ $panel }) =>
    $panel === "centerColumn" &&
    css`
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      align-items: center;
    `}
`;
