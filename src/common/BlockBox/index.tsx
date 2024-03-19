import { ReactNode } from "react";
import { BlockContent, GridPosition, StyledBlockBox, Title } from "./styled";

type BlockBoxProps = {
  title: string;
  children: ReactNode;
  $gridPosition?: GridPosition;
  $direction?: "column";
};

const BlockBox = ({
  title,
  children,
  $gridPosition,
  $direction,
}: BlockBoxProps) => {
  return (
    <StyledBlockBox $gridPosition={$gridPosition}>
      <Title>{title}</Title>
      <BlockContent $direction={$direction}>{children}</BlockContent>
    </StyledBlockBox>
  );
};

export default BlockBox;
