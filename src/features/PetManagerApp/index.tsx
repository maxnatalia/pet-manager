import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Form from "./Form";
import Pets from "./Pets";

const PetManagerApp = () => {
  return (
    <BrowserRouter basename="/pet-manager">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/pets" element={<Pets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PetManagerApp;
