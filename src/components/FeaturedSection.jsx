const FeaturedSection = () => {
  return (
    <div className="bg-[#ECEAE3] w-full py-14 justify-center flex">
      <div className="flex justify-center lg:w-[1320px]">
        <div className="grid grid-cols-4 gap-10 text-[#331A15]">
          <div className="flex flex-col justify-center items-start gap-3">
            <img src="/images/icons/1.png" alt="" />
            <h4 className="text-4xl">Awesome Aroma</h4>
            <p>
              You will definitely be a fan of the design <br /> & aroma of your
              coffee
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-3">
            <img src="/images/icons/2.png" alt="" />
            <h4 className="text-4xl">High Quality</h4>
            <p>We served the coffee to you maintaining the best quality</p>
          </div>
          <div className="flex flex-col justify-center items-start gap-3">
            <img src="/images/icons/3.png" alt="" />
            <h4 className="text-4xl">Pure Grades</h4>
            <p>
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-3">
            <img src="/images/icons/4.png" alt="" />
            <h4 className="text-4xl">Proper Roasting</h4>
            <p>
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
