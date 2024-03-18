import { ReactNode } from "react";
import { StyledControl } from "./styled";

type ControlProps = {
  children: ReactNode;
  $panel: "leftRow" | "centerColumn";
};
const Control = ({ children, $panel }: ControlProps) => {
  return <StyledControl $panel={$panel}>{children}</StyledControl>;
};

export default Control;
