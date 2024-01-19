import { ReactElement } from "react";
import { Subtitle, Title } from "./styled";

type TitlePageProps = {
  title: string;
  icon: ReactElement;
  subtitle: string;
};

const TitlePage = ({ title, icon, subtitle }: TitlePageProps) => {
  return (
    <div>
      <Title>
        {icon}
        {title}
      </Title>
      <Subtitle>{subtitle}</Subtitle>
    </div>
  );
};

export default TitlePage;
