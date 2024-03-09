import styled from "styled-components";

export const Input = styled.input<{ $error?: boolean }>`
  margin: 20px 0;
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  outline: none;
  border: 4px solid;
  border-color: ${({ $error, theme }) =>
    $error ? theme.color.remove : theme.color.textPrimary};
`;
