import { useNavigate } from "react-router-dom";
import RobotsForm from "../../components/RobotsForm/RobotsForm";

const RobotsFormPage = () => {
  const navigate = useNavigate();

  const addCurrentRobot = () => {
    navigate("/home");
  };

  return (
    <>
      <RobotsForm submitAction={addCurrentRobot} />
    </>
  );
};

export default RobotsFormPage;
