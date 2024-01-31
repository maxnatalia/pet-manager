import { ReactElement } from "react";
import { Subtitle, Title, Wrapper } from "./styled";

type TitlePageProps = {
  title: string;
  icon: ReactElement;
  subtitle: string;
};

const TitlePage = ({ title, icon, subtitle }: TitlePageProps) => {
  return (
    <Wrapper>
      <Title>
        {icon}
        {title}
      </Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  );
};

export default TitlePage;
