/* eslint-disable react/prop-types */
import CardContent from "../components/CardContent";
import CardImage from "../components/CardImage";
import { infoCards, imageInfoCards } from "../data";

const CardsContainer = ({ menu }) => {
  const { card_1, card_2 } = infoCards;
  const { card_3, card_4 } = imageInfoCards;
  return (
    <main>
      <section className="cards-container">
        <CardContent
          title={card_1.title}
          description={card_1.description}
          buttonColor={card_1.buttonColor}
          card="_1"
        />
        <CardImage card="_2" imagePath={!menu ? "/desktop/image-transform.jpg" : "/mobile/image-transform.jpg"} />
        <CardImage card="_3" imagePath={!menu ? "/desktop/image-stand-out.jpg" : "/mobile/image-stand-out.jpg"} />
        <CardContent
          title={card_2.title}
          description={card_2.description}
          buttonColor={card_2.buttonColor}
          card="_4"
        />
        <CardImage
          imagePath={!menu ? "/desktop/image-graphic-design.jpg" : "/mobile/image-graphic-design.jpg"}
          title={card_3.title}
          description={card_3.description}
          card_3={card_3}
          card="_5"
        />
        <CardImage
          imagePath={!menu ? "/desktop/image-photography.jpg" : "/mobile/image-photography.jpg"}
          title={card_4.title}
          description={card_4.description}
          card_4={card_4}
          card="_6"
        />
      </section>
    </main>
  );
};

export default CardsContainer;
