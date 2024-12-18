import BookNow from "../components/BookNow";
import AboutPage from "../pages/AboutPage";
import OurServices from "../services/";
import CalltoAction from "./CalltoAction";
import HeroSection from "./HeroSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CalltoAction/>
      <OurServices/>
      <AboutPage/>
      {/* <BookNow/> */}
    </div>
  );
};

export default HomePage;
