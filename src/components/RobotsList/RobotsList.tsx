import RobotStructure from "../../store/types.js";
import RobotCard from "../RobotCard/RobotCard.js";
import RobotsListStyled from "./RobotsListStyled.js";

interface RobotsListProps {
  Robots: RobotStructure[];
}

const RobotsList = ({ Robots }: RobotsListProps) => {
  return (
    <RobotsListStyled>
      {Robots.map((Robot) => (
        <li key={Robot._id}>
          <RobotCard Robot={Robot} />
        </li>
      ))}
    </RobotsListStyled>
  );
};

export default RobotsList;
