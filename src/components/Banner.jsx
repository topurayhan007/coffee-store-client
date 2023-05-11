/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  return (
    <div
      className="lg:h-[800px] text-white flex justify-end items-center"
      style={{
        backgroundImage: `url("/images/more/3.png")`,
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <div className="flex-1"></div>
      <div className="px-24 flex-1">
        <h2 className="text-5xl mb-4">
          Would you like a Cup of Delicious Coffee?
        </h2>
        <p className="mb-8">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="btn hover:bg-transparent hover:text-white border-2 border-[#D2B48C] hover:border-white bg-[#D2B48C] text-black text-2xl normal-case rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;
