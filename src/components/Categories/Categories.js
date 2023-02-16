import "./Categories.css"
import { categories } from "../../data";
export default function Categories()  {
  return (
    <section className="categories">
      <div className="container categories__container">
      <div className="categories__left">
        <h1>Categories</h1>
        <p>Lorem ispsum</p>
        <a href="#courses" className="btn">
          Learn More
        </a>
      </div>
      <div className="categories__right">
        {categories.map((data) => (
          <article key={data.id} className="category">
            <span className="category__icon">
              {data.icon}
            </span>
            <h5>{data.title}</h5>
            <p>
             {data.text}
            </p>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}

