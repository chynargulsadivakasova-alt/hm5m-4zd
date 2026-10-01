import logo from "../img/logoSite.svg";
import facebook from "../img/Facebook.png";
import instagram from "../img/Instagram.png";
import twitter from "../img/Twitter.png";
import youtube from "../img/Youtube.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_main">
        <div className="container footer_cont">
          <img className="footer_logo" src={logo} alt="Simple" />
          <div className="footer_socials">
            <img src={facebook} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
            <img src={instagram} alt="Instagram" />
            <img src={youtube} alt="YouTube" />
          </div>
        </div>
      </div>
      <div className="footer_copyright">SIMPLE ® 2021</div>
    </footer>
  );
}
