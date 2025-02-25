import { Link } from "react-router-dom";
//ASSETS
import "../../componets/footer/footer.css";
import logo from "../../assets/dnc-logo.svg";
import brasilIcon from "../../assets/brasil.svg";
import usaIcon from "../../assets/usa.svg";
import instagramIcon from "../..//assets/instagram.svg";
import facebookIcon from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";

function Footer() {
  return (
    <footer>
      {/* container do footer em geral */}
      <div className="container">
        {/* container dos componentes do footer */}
        <div className="d-flex jc-space-between mobile-fd-column">
          {/* container do logo e redes sociais */}
          <div className="footer-logo-col">
            <img className="footer-logo-img"src={logo} />
            <p className="gray-1-name">
              A escola que prepara você para as <br />
              profissões em alta no mercado de <br />
              trabalho.
            </p>
            <div className="d-flex social-links">
              <a href="_blank" target="_blank">
                <img src={facebookIcon} />
              </a>
              <a href="_blank" target="_blank">
                <img src={twitter} />
              </a>
              <a href="_blank" target="_blank">
                <img src={linkedin} />
              </a>
              <a href="_blank" target="_blank">
                <img src={instagramIcon} />
              </a>
            </div>
          </div>
          {/* container pages do footer */}
          <div className="d-flex mobile-fd-column">
            <div className="footer-col">
              <h3>Pages</h3>
              <ul>
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
            </div>
          </div>
          {/* container de contato do footer */}
          <div className="footer-col">
            <h3>Contact</h3>
            <p className="grey-1-color">
              R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP |
              CEP 12243-030
            </p>
            <p className="grey-1-color">suporte@escoladnc.com.br</p>
            <p className="grey-1-color">(19) 99187-4342</p>
          </div>
        </div>
        {/* container de copyrigth */}
        <div className="d-flex jc-space-between footer-copy al-center">
          <p className="grey-1-color">copyrigth @ DNC - 2024</p>
          <div className="langs-area d-flex">
            <img src={brasilIcon} height="29px" />
            <img src={usaIcon} height="29px" />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
