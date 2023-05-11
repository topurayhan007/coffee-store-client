import Banner from "./Banner";
import CoffeeContainer from "./CoffeeContainer";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center">
      <Banner></Banner>
      <CoffeeContainer></CoffeeContainer>
    </div>
  );
};

export default Homepage;
