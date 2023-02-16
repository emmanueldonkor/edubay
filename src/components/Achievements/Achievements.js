import Achieve from "../../assets/achievements.svg"
import { FaAward, FaUser, FaVideo } from "react-icons/fa";
import "./Achievement.css"
export default function  Achievements () {
  return (
    <section className="about__achievements">
      <div className="container about__achievements-container">
        <div className="about__achievements-left">
          <img src={Achieve} alt="achievement" />
        </div>
        <div className="about__achievements-right">
          <h1>Achievements</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit
          </p>
          <div className="achievements__cards">
            <article className="achievement__card">
              <span className="achievement__icon">
                <FaVideo />
              </span>
              <h3>500+</h3>
              <p>Courses</p>
            </article>
            <article className="achievement__card">
              <span className="achievement__icon">
                <FaUser />
              </span>
              <h3>79,000</h3>
              <p>Students</p>
            </article>
            <article className="achievement__card">
              <span className="achievement__icon">
                <FaAward />
              </span>
              <h3>30+</h3>
              <p>Awards</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
