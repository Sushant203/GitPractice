import BookNow from "../components/BookNow";
import AboutPage from "../pages/AboutPage";
import CalltoAction from "./CalltoAction";
import HeroSection from "./HeroSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CalltoAction/>
      <AboutPage/>
      {/* <BookNow/> */}
    </div>
  );
};

export default HomePage;
