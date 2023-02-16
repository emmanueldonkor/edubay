import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "../../data";
import "./Testimonials.css";
import { Pagination } from "swiper";
function Testimonials ()  {
  return (
    <section className="container testimonials__container">
      <h2>Student's Testimonials</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // set breakpoints for different screen sizes
          600: {
            slidesPerView: 2,
          }
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <article className="testimonial">
              <div className="avatar">
                <img src={testimonial.image} alt="avatar"></img>
              </div>
              <div className="testimonial__info">
                <h5>{testimonial.name}</h5>
                <small>Student</small>
              </div>
              <div className="testimonial__body">
                <p>{testimonial.text}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
       <div className="swiper-pagination"></div>
    </section>
  );
};
export default Testimonials;
