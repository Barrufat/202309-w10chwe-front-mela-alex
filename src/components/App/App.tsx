import { Route, Navigate, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import AppStyled from "./AppStyled";
import RobotsPage from "../../pages/robotsPage/robotsPage";

const App = () => {
  return (
    <AppStyled>
      <Navigation />
      <h1>Robots App</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<RobotsPage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
