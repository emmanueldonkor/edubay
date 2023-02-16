import { NavLink } from "react-router-dom"
import "./Header.css"

import Head from "../../assets/H.svg"
function Header() {
  return (
   <header>
   <div className="container header__container">
    <div className="header__left">
      <h1>Get the best education by joining edubay online school to achieve your dream career</h1>
      <p>
     If you don't know where to start, click on the button to contact us
      </p>
      <NavLink to="/contact" className="btn btn-primary">Get Started</NavLink>
    </div>
    <div className="header__right">
         <div className="header__right-image">
         <img src={Head} alt="header" />
         </div>
    </div>
   </div>
   </header>
  )
}
export default Header;

