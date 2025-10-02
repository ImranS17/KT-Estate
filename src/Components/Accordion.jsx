import React, { useState } from "react";
import "./accordion.css";

const faqs = [
  { question: "What documents are required to book a flat?", answer: "A: You'll will typically need a government ID (like Aadhar/PAN), address proof, passport-sized photographs and income proof or bank statements for loan processing." },
  { question: "Can I book a flat online?", answer: "A: You'll will typically need a government ID (like Aadhar/PAN), address proof, passport-sized photographs and income proof or bank statements for loan processing." },
  { question: "Is the property RERA registered?", answer: "A: You'll will typically need a government ID (like Aadhar/PAN), address proof, passport-sized photographs and income proof or bank statements for loan processing." },
  { question: "What is the booking amount and is it refundable?", answer: "A: You'll will typically need a government ID (like Aadhar/PAN), address proof, passport-sized photographs and income proof or bank statements for loan processing." },
  { question: "Will you help with documentation and registration?", answer: "A: You'll will typically need a government ID (like Aadhar/PAN), address proof, passport-sized photographs and income proof or bank statements for loan processing." },
  { question: "Is there a maintenance team post-possession?", answer: "A: You'll will typically need a government ID (like Aadhar/PAN), address proof, passport-sized photographs and income proof or bank statements for loan processing." },
  { question: "Can I get a home loan for this property?", answer: "A: You'll will typically need a government ID (like Aadhar/PAN), address proof, passport-sized photographs and income proof or bank statements for loan processing." },
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">FAQ</h2>
      <div className="accordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <div className="accordion-question" onClick={() => toggleAccordion(index)}>
              <p>Q: {faq.question}</p>
              <span>{activeIndex === index ? "ʌ" : "v"}</span>
            </div>
            {activeIndex === index && (
              <div className="accordion-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
