import { Link } from "react-router-dom";
//ASSETS
import logo from "../../assets/dnc-logo.svg";
import "../../componets/header/header.css";

function header() {
  return (
    <header>
      <div className="container ">
        <div className="al-center d-flex jc-space-between">
          <Link to="/">
            <img src={logo} />
          </Link>
          <nav>
            <ul className="d-flex">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default header;
