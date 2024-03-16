import { ReactNode } from "react";
import { CardAvatar, CardLink, StyledItemCard } from "./styled";

interface ItemCardProps {
  avatar: string;
  name: string;
  subname: string;
  linkAddress: string;
  linkName: string;
  children?: ReactNode;
}

const ItemCard = ({
  avatar,
  name,
  subname,
  linkAddress,
  linkName,
  children,
}: ItemCardProps) => {
  return (
    <StyledItemCard>
      <CardAvatar>{avatar}</CardAvatar>
      <div>
        <div>{name}</div>
        <div>{subname}</div>
      </div>
      <CardLink to={linkAddress}>{linkName}</CardLink>
      <div>{children}</div>
    </StyledItemCard>
  );
};

export default ItemCard;
