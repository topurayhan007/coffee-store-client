import Banner from "./Banner";
import CoffeeContainer from "./CoffeeContainer";
import FeaturedSection from "./FeaturedSection";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center">
      <Banner></Banner>
      <FeaturedSection></FeaturedSection>
      <CoffeeContainer></CoffeeContainer>
    </div>
  );
};

export default Homepage;
