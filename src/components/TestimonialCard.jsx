/* eslint-disable react/prop-types */
const TestimonialCard = ({ imgUrl, description, name, userPosition }) => {
  return (
    <div className="testimonial-card">
      <img src={imgUrl} alt={name} className="avatar" />
      <p className="description">{description}</p>
      <p className="name">{name}</p>
      <span className="user-position">{userPosition}</span>
    </div>
  );
};

export default TestimonialCard;
