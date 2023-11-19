import { Route, Navigate, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import AppStyled from "./AppStyled";
import RobotsFormPage from "../../pages/RobotsFormPage/RobotsFormPage";
import RobotsPage from "../../pages/robotsPage/RobotsPage";

const App = () => {
  return (
    <AppStyled>
      <Navigation />
      <h1>Robots App</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<RobotsPage />} />
        <Route path="/add" element={<RobotsFormPage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
