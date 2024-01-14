import { TbHome, TbPaw } from "react-icons/tb";
import { MdAddCircle } from "react-icons/md";
import { styledIcon } from "./styled";

export const navigationList = [
  {
    name: "Home",
    link: "/",
    title: "Go Home",
    Icon: styledIcon(TbHome),
  },
  {
    name: "My Pets",
    link: "/pets",
    title: "Go to pets list",
    Icon: styledIcon(TbPaw),
  },
  {
    name: "Add Pet",
    link: "/form",
    title: "Go to form",
    Icon: styledIcon(MdAddCircle),
  },
];
