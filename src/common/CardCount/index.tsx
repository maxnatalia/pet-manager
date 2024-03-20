import { ReactNode } from "react";
import { CardContent, CardTitle, CardTotal, StyledCardCount } from "./styled";

type CardCount = {
  cardTotal: string | number;
  cardTitle: string;
  children: ReactNode;
};

const CardCount = ({ cardTotal, cardTitle, children }: CardCount) => {
  return (
    <StyledCardCount>
      <CardContent>
        <CardTotal>{cardTotal}</CardTotal>
        <CardTitle>{cardTitle}</CardTitle>
      </CardContent>
      {children}
    </StyledCardCount>
  );
};

export default CardCount;
