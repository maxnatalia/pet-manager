import { ReactNode } from "react";
import { GridPosition, StyledBlockBox, Title } from "./styled";

type BlockBoxProps = {
  title: string;
  children: ReactNode;
  $gridPosition?: GridPosition;
};

const BlockBox = ({ title, children, $gridPosition }: BlockBoxProps) => {
  return (
    <StyledBlockBox $gridPosition={$gridPosition}>
      <Title>{title}</Title>
      <div>{children}</div>
    </StyledBlockBox>
  );
};

export default BlockBox;
