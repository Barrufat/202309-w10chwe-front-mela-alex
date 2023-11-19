import { useState } from "react";
import RobotStructure from "../../store/types";
import RobotsFormStyled from "./RobotsFormStyled";

interface RobotsFormProps {
  submitAction: (newRobot: RobotStructure) => void;
}

const RobotsForm = ({ submitAction }: RobotsFormProps) => {
  const initialRobots: RobotStructure = {
    image: "",
    name: "",
    resistance: 0,
    velocity: 0,
  };

  const [newRobot, setNewRobot] = useState<RobotStructure>(initialRobots);

  const updateNewRobot = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setNewRobot((currentNewRobot) => ({
      ...currentNewRobot,
      [event.target.id]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    submitAction(newRobot);
  };

  return (
    <RobotsFormStyled onSubmit={onFormSubmit}>
      <h2>Create a new Robot</h2>
      <label className="form__label" htmlFor="name">
        Name:
      </label>
      <input
        required
        type="text"
        id="name"
        value={newRobot.name}
        onChange={updateNewRobot}
      />
      <label className="form__label" htmlFor="urbanTribvelocitye">
        Velocity:
      </label>
      <input
        required
        type="number"
        id="velocity"
        value={newRobot.resistance}
        onChange={updateNewRobot}
      />
      <label className="form__label" htmlFor="resistance">
        Resistance:
      </label>
      <input
        required
        type="number"
        id="resistance"
        value={newRobot.resistance}
        onChange={updateNewRobot}
      />
      <label className="form__label" htmlFor="image">
        Image url:
      </label>
      <input
        type="url"
        id="image"
        value={newRobot.image}
        onChange={updateNewRobot}
      />
    </RobotsFormStyled>
  );
};

export default RobotsForm;
