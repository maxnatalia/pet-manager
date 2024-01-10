import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Container, Main } from "./styled";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Navigation />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Container>
  );
};

export default Layout;
