import { courses } from "../../data"
import "./Courses.css"
export default function Courses()  {
  return (
    <section className="courses">
      <h2>Popular Courses</h2>
      <div className="container courses__container">
        {courses.map((course, index) => (
          <article key={course.id} className="course">
            <div className="course__image">
              <img src={course.image} alt={`course${index}`} />
            </div>
            <div className="course__info">
              <h4>{course.title}</h4>
              <p>{course.text}</p>
              <a
                href="https://github.com/emmanueldonkor"
                rel="noreferrer"
               
                className="btn btn-primary"
              >
                Enrol
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
