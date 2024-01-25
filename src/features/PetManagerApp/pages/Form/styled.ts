import styled, { css } from "styled-components";

export const FormBox = styled.form`
  padding: 40px 20px;
  display: grid;
  grid-template-areas:
    "basic additional"
    "button button";
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding: 20px 10px;
    grid-template-columns: 1fr;
    grid-template-areas:
      "basic"
      "additional"
      "button";
    grid-gap: 20px;
    /* padding: 10px; */
  }
`;

export const BlockBox = styled.div<{ $position: "basic" | "additional" }>`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  grid-area: ${({ $position }) =>
    $position === "basic" ? "basic" : "additional"};
`;

export const FieldBox = styled.div<{ $horizontal?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${({ $horizontal }) =>
    $horizontal &&
    css`
      flex-direction: row;
    `}
`;

export const Label = styled.label<{ $error?: boolean; $horizontal?: boolean }>`
  padding: 0 10px;
  color: ${({ $error, theme }) =>
    $error ? theme.color.remove : theme.color.textPrimary};
  font-size: 22px;
  font-weight: 300;

  ${({ $horizontal }) =>
    $horizontal &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
  }
`;

export const Input = styled.input<{ $error?: boolean }>`
  padding: 10px;
  border-radius: 20px;
  outline: none;
  border: 4px solid;
  border-color: ${({ $error, theme }) =>
    $error ? theme.color.remove : theme.color.textPrimary};
`;

export const ErrorMsg = styled.p`
  padding: 0 10px;
  color: ${({ theme }) => theme.color.remove};
  font-weight: 100;
`;

export const Legend = styled.div`
  padding: 20px;
  font-weight: 500;
`;

export const CustomRadio = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 60px;
  height: 60px;
  border: 4px solid ${({ theme }) => theme.color.textPrimary};
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:checked {
    background-color: ${({ theme }) => theme.color.textPrimary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.textPrimary};
    border-color: ${({ theme }) => theme.color.special};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 40px;
    height: 40px;
  }
`;

export const SubmitButton = styled.button`
  grid-area: button;
  justify-self: center;
  background-color: ${({ theme }) => theme.color.special};
  border-radius: 20px;
  border: 2px solid transparent;
  padding: 10px 20px;
  color: ${({ theme }) => theme.color.backgroundSecondary};
  font-size: 22px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.color.special};
    background-color: ${({ theme }) => theme.color.backgroundSecondary};
    border: 2px solid ${({ theme }) => theme.color.special};
  }
`;

export const CancelButton = styled.button`
  background-color: ${({ theme }) => theme.color.special};
`;
