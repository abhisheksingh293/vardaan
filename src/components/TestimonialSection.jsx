import React from "react";
import "./TestimonialSection.css";

const testimonials = [
  {
    name: "Akshita Lal",
    role: "Class 10 ICSE",
    quote: "I am glad that I’m studying at Vardaan Learning Institute. Here, you get every resource and support you need to excel in your studies. The teachers are very helpful and always encourage you like a friend, a brother, or a sister. /n They explain every concept clearly and make learning fun. The environment here is very positive, and there are regular tests to track our progress. This is truly the best institute I’ve ever been part of. Thank you, Vardaan! 💫",
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
