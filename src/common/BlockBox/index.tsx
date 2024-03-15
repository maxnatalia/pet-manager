import { ReactNode } from "react";

type BlockBoxProps = {
  title: string;
  children: ReactNode;
};

const BlockBox = ({ title, children }: BlockBoxProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default BlockBox;
