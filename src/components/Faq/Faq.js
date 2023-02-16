import { frequentQuestions } from "../../data";
import { useState } from "react";
import "./Faq.css";

function Faq(){
  const [openFaq, setOpenFaq] = useState(null);

  const handleFaqClick = (id) => {
    setOpenFaq(id === openFaq ? null : id);
  };

  return (
    <section className="faqs">
      <h2>Frequently Asked Questions</h2>
      <div className="container faqs__container">
        {frequentQuestions.map((faq) => (
          <article key={faq.id} className="faq">
            <div className="faq__icon" onClick={() => handleFaqClick(faq.id)}>
              {faq.id === openFaq ? faq.iconMinus: faq.iconPlus}
            </div>
            <div className="question__answer">
              <h4>{faq.question}</h4>
              {faq.id === openFaq && <p>{faq.answer}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Faq;