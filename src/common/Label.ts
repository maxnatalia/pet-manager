import styled from "styled-components";

export const Label = styled.label<{ $error?: boolean }>`
  padding: 0 10px;
  color: ${({ $error, theme }) =>
    $error ? theme.color.remove : theme.color.textPrimary};
  font-weight: 300;
`;
