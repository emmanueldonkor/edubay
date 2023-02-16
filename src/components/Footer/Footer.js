import { navLinks,footerLinks, socialLinks } from "../../data"
import { NavLink } from "react-router-dom";
import "./Footer.css"
export default function Footer()  {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer_1">
          <a href="#home">
            <h4>EduBay</h4>
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur elit. corporis ipsum nobis
            ratione
          </p>
        </div>
        <div className="footer_2">
          <h4>Permalinks</h4>
          <ul className="permalinks">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink to={ link.text==="home" ? "/":`/${link.text}`}>{link.text.toLocaleUpperCase()}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer_3">
          <h4>Primacy</h4>
          <ul className="privacy">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.text}`}>{link.text.toLocaleUpperCase()}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__4">
          <h4>Contact us</h4>
          <div>
            <p>+48 234 567 8910</p>
            <p>emmanuelmk42@gmail.com</p>
          </div>
          <ul className="footer__socials">
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a href="https://github.com/emmanueldonkor">{link.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <small>CopyRight &copy; emmanueldonkor</small>
      </div>
    </footer>
  );
}
