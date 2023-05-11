import Banner from "./Banner";
import CoffeeContainer from "./CoffeeContainer";
import FeaturedSection from "./FeaturedSection";
import InstagramPhotoSection from "./InstagramPhotoSection";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center">
      <Banner></Banner>
      <FeaturedSection></FeaturedSection>
      <CoffeeContainer></CoffeeContainer>
      <InstagramPhotoSection></InstagramPhotoSection>
    </div>
  );
};

export default Homepage;
