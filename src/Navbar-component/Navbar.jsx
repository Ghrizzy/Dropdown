import Logo from "../images/logo.svg";
import DownArrow from "../images/icon-arrow-down.svg";
import UpArrow from "../images/icon-arrow-up.svg";
import Dropdown from "../dropdown-comp/Dropdown";
import SecDropdown from "../second-dropdown/SecDropdown";
const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="nav-left">
          <div>
            <img src={Logo} className="Logo" />
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <a href="">Features</a>
                <img src={DownArrow} />
                <img src={UpArrow} />
              </li>
              <li>
                <a href="">Company</a>
                <img src={DownArrow} />
                <img src={UpArrow} />
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-right">
          <a href="">Login</a>
          <button>Register</button>
        </div>
      </div>
      <Dropdown />
      <SecDropdown />
    </div>
  );
};

export default Navbar;
