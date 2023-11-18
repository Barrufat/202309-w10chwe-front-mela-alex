import RobotsList from "../../components/RobotsList/RobotsList";
import { robotItems } from "../../data/robot";

const RobotsPage = () => {
  return <RobotsList Robots={robotItems} />;
};

export default RobotsPage;
