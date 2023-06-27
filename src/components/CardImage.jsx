/* eslint-disable react/prop-types */
const CardImage = ({ imagePath, title, description, card_3, card_4, card }) => {
  return (
    <div className={`${card} ${card_3 || card_4 ? "content_2" : ""}`}>
      <picture>
        <img src={imagePath} alt={title ? title : "design-image"} />
      </picture>
      {title && description && (
        <div className="image-info-cards">
          {card_3 && <h5 className="title graphic">{title}</h5>}
          {card_4 && <h6 className="title photography">{title}</h6>}
          <p className={`description ${card_3 ? "_1" : "_2"}`}>{description}</p>
        </div>
      )}
    </div>
  );
};

export default CardImage;
