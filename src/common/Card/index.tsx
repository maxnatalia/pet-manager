import {
  CardsBox,
  CardContent,
  CardTab,
  CardTitle,
  CardWrapper,
} from "./styled";

type CardProps = {
  $column?: boolean;
  data: {
    id: string;
    navPetId: string;
    cardTab: string;
    cardTitle: string;
    cardContent: string;
  }[];
};

const Card = ({ data, $column }: CardProps) => {
  return (
    <CardsBox $column={$column}>
      {data.map(item => (
        <CardWrapper key={item.id} to={`/pet/${item.navPetId}`}>
          <CardTab>{item.cardTab}</CardTab>
          <CardTitle>{item.cardTitle}</CardTitle>
          <CardContent>{item.cardContent}</CardContent>
        </CardWrapper>
      ))}
    </CardsBox>
  );
};

export default Card;
