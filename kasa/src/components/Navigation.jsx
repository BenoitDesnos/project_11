// used in Home.js, About.js, Lodging.js, NotFound.js
import Logo from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <header>
      <img src={Logo} alt="Logo Kasa" />
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={(nav) =>
              nav.isActive ? "nav-active hover size3" : "hover size3"
            }
          >
            ACCUEIL
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className={(nav) =>
              nav.isActive ? "nav-active hover size3" : "hover size3"
            }
          >
            A PROPOS
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
