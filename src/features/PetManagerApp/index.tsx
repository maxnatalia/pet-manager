import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Pets from "./pages/Pets";
import SinglePet from "./pages/SinglePet";

const PetManagerApp = () => {
  return (
    <BrowserRouter basename="/pet-manager">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/pet/:id" element={<SinglePet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PetManagerApp;
