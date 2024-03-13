import { CardAvatar, CardLink, StyledItemCard } from "./styled";

interface ItemCardProps {
  avatar: string;
  name: string;
  subname: string;
  linkAddress: string;
  linkName: string;
}

const ItemCard = ({
  avatar,
  name,
  subname,
  linkAddress,
  linkName,
}: ItemCardProps) => {
  return (
    <StyledItemCard>
      <CardAvatar>{avatar}</CardAvatar>
      <div>
        <div>{name}</div>
        <div>{subname}</div>
      </div>
      <CardLink to={linkAddress}>{linkName}</CardLink>
    </StyledItemCard>
  );
};

export default ItemCard;
