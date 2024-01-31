import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px 0;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 20px 0 0 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
  font-size: 36px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 26px;
  }
`;

export const Subtitle = styled.h3`
  display: inline-block;
  margin: 10px 0 0 20px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.color.textPrimary};
  font-size: 20px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 16px;
  }
`;
