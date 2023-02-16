import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa"
import { socialLinks } from "../../data";
import { ValidationError, useForm } from "@formspree/react";
import  ContactImage from "../../assets/contact.svg"

import "./Contact.css"
function Contact() {
   const [state, handleSubmit] = useForm("mdovevje");
  
  if (state.succeeded) {
    setTimeout(() => {
      window.location.reload();
    }, 2500);
    return(
      <p>Message Sent Successfully....</p>
    )
  
  }
 
   
  return (
    <section className="contact">
      <div className="container contact__container">
        <aside className="contact__aside">
          <div className="aside__image">
            <img src={ContactImage} alt="contact" />
          </div>
          <h2>Contact Us</h2>
          <p>
            Asperiores veniam vel doloribus assumenda soluta blanditlis dolores
            qui voluptates, consequatur vitae
          </p>
          <ul className="contact__details">
            <li>
              <FaPhone />
              <h5>+48698013291</h5>
            </li>
            <li>
              <FaEnvelope />
              <h5>support@emmanuelmk42@gmail.com</h5>
            </li>
            <li>
              <FaLocationArrow />
              <h5>Warsaw, Poland</h5>
            </li>
          </ul>
          <ul className="contact__socials">
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a href="https://github.com/emmanueldonkor">{link.icon}</a>
              </li>
            ))}
          </ul>
        </aside>
        <form className="contact__form" id="form" onSubmit={handleSubmit}>
          <div className="form__name">
            <input
              type="text"
              name="firtName"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="secondName"
              placeholder="Second Name"
              required
            />
          </div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email address"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            name="message"
            rows="7"
            id="message"
            placeholder="Message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            class="btn btn-primary"
            disabled={state.submitting}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
