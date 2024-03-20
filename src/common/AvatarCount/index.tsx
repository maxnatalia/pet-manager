import { Avatar, Count } from "./styled";

type AvatarCount = {
  title: string;
  avatarIcon: string;
  count: number | string;
};

const AvatarCount = ({ title, avatarIcon, count }: AvatarCount) => {
  return (
    <Avatar title={title.toUpperCase()}>
      {avatarIcon}
      <Count>{count}</Count>
    </Avatar>
  );
};

export default AvatarCount;
