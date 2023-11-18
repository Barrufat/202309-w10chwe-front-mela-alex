import RobotStructure from "../../types";
import RobotCardStyled from "./RobotCardStyled";

interface RobotCardProps {
  Robot: RobotStructure;
}

const RobotCard = ({
  Robot: { image, name, resistance, velocity },
}: RobotCardProps) => {
  return (
    <RobotCardStyled>
      <h2 className="robot-title">{name}</h2>

      <div className="robot__image-box">
        <img
          className="robot__image"
          src={image}
          alt={name}
          height="200"
          width="200"
        />
      </div>
      <ul className="robot__data-box">
        <li className="robot__data">
          Velocity: <span>{velocity}</span>
        </li>
        <li className="robot__data">
          {" "}
          Resistance: <span>{resistance}</span>
        </li>
      </ul>
    </RobotCardStyled>
  );
};

export default RobotCard;
