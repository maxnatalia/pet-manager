import { ReactNode } from "react";
import { CardAvatar, CardLink, StyledItemCard } from "./styled";

interface ItemCardProps {
  avatar: string;
  name: string;
  subname: string;
  linkAddress: string;
  linkName: string;
  title?: string;
  children?: ReactNode;
  extraInfo?: string;
}

const ItemCard = ({
  avatar,
  name,
  subname,
  linkAddress,
  linkName,
  children,
  title,
  extraInfo,
}: ItemCardProps) => {
  return (
    <StyledItemCard title={title}>
      <CardAvatar>{avatar}</CardAvatar>
      <div>
        <div>{name}</div>
        <div>{subname}</div>
      </div>
      <div>{extraInfo}</div>
      <CardLink to={linkAddress}>{linkName}</CardLink>
      <div>{children}</div>
    </StyledItemCard>
  );
};

export default ItemCard;
