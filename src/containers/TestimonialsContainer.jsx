import TestimonialCard from "../components/TestimonialCard";
import { testimonialsInfoCards } from "../data";

const TestimonialsContainer = () => {
  return (
    <section className="testimonials-container">
      <p className="title">client testimonials</p>
      <div className="testimonials-cards-container">
        {testimonialsInfoCards.map(
          ({ imgUrl, description, name, userPosition }, i) => (
            <TestimonialCard
              key={i}
              imgUrl={imgUrl}
              description={description}
              name={name}
              userPosition={userPosition}
            />
          )
        )}
      </div>
    </section>
  );
};

export default TestimonialsContainer;
