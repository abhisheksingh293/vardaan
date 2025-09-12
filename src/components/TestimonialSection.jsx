import React from "react";
import "./TestimonialSection.css";

const testimonials = [
  {
    name: "Riya Verma",
    role: "Class 10 Student",
    quote: "Vardaan helped me improve my Maths score from 68% to 92%! The practice tests and quick doubt support made all the difference.",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=student1&backgroundColor=ffecd2,fff7ed"
  },
  {
    name: "Amit Singh",
    role: "Class 12 Student",
    quote: "The teachers explain every concept so clearly, and the mock tests really boosted my confidence for my board exams.",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=student2&backgroundColor=ffecd2,fff7ed"
  },
  {
    name: "Sneha Das",
    role: "Class 9 Student",
    quote: "I love the flexible schedule and how easy it is to ask questions. My science marks have improved a lot!",
    image: "https://api.dicebear.com/7.x/adventurer/svg?seed=student3&backgroundColor=ffecd2,fff7ed"
  }
];

const TestimonialSection = () => (
  <section className="testimonial-section">
    <h2 className="testimonial-title">What Our Students Say</h2>
    <div className="testimonial-cards">
      {testimonials.map((t, idx) => (
        <div className="testimonial-card" key={idx}>
          <img src={t.image} alt={t.name} className="testimonial-avatar" />
          <blockquote className="testimonial-quote">“{t.quote}”</blockquote>
          <div className="testimonial-user">
            <span className="testimonial-name">{t.name}</span>
            <span className="testimonial-role">{t.role}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialSection;
