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
    </div>
  );
};

export default App;
