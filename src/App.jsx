import FooterImages from "./components/FooterImages";
import FooterSection from "./components/FooterSection";
import Header from "./components/Header";
import CardsContainer from "./containers/CardsContainer";
import TestimonialsContainer from "./containers/TestimonialsContainer";
import { useReziseEvent } from "./handleReziseModule";

const App = () => {
  const { menu } = useReziseEvent();

  return (
    <div className="inner-section">
      <Header menu={menu} />
      <CardsContainer menu={menu} />
      <TestimonialsContainer />
      <FooterImages menu={menu} />
      <FooterSection />
      <footer className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/NVergil" target="_blank" rel="noreferrer">
          VerDanT
        </a>
        .
      </footer>
    </div>
  );
};

export default App;
