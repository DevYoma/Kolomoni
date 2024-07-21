import Logo from "../../atoms/Logo/Logo";
import Button from "../ui/Button/Button";
import "./Navbar.scss";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo text />

      <div className="navbar__links">
        <li>
          Products <MdKeyboardArrowDown className="navbar__linksIcon" />
        </li>
        <li>
          Resources
          <MdKeyboardArrowDown className="navbar__linksIcon" />
        </li>
        <li>
          Company
          <MdKeyboardArrowDown className="navbar__linksIcon" />
        </li>
      </div>

      <div className="navbar__cta">
        <div>
            <Button>Create Account</Button>
        </div>

        <div>
            <Button
            backgroundColor="transparent"
            color="#231F20"
            border="1px solid #FFF5EE"
            >
                Log in
            </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar