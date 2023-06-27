/* eslint-disable react/prop-types */
const CardContent = ({ title, description, buttonColor, card }) => {
  return (
    <div className={`content_1 ${card}`}>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <button className={`learn-more ${buttonColor}`}>Learn More</button>
    </div>
  );
};

export default CardContent;
