import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = () => {
  return (
    <NavigationStyled>
      <ul className="navigation__box">
        <li>
          <NavLink to="/home">See All</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add New</NavLink>
        </li>
      </ul>
      <div className="navigation__title-box">
        <img
          className="navigation__main-logo"
          src="./logo.png"
          alt="cute-robots"
          height="120"
          width="142"
        />
      </div>
    </NavigationStyled>
  );
};

export default Navigation;
