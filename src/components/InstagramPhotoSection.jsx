const InstagramPhotoSection = () => {
  return (
    <div className="w-full my-28">
      <div className="flex justify-center flex-col items-center">
        <div className="flex items-center flex-col lg:w-[1320px] z-50">
          <p>Follow Us Now</p>
          <h1 className="text-[#331A15] text-6xl mt-2 drop-shadow-lg shadow-black mb-12">
            Follow on Instagram
          </h1>
          <div className="grid grid-cols-4 gap-8">
            <img src="/images/cups/cup (1).png" alt="" />
            <img src="/images/cups/cup (2).png" alt="" />
            <img src="/images/cups/cup (3).png" alt="" />
            <img src="/images/cups/cup (4).png" alt="" />
            <img src="/images/cups/cup (5).png" alt="" />
            <img src="/images/cups/cup (6).png" alt="" />
            <img src="/images/cups/cup (7).png" alt="" />
            <img src="/images/cups/cup (8).png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramPhotoSection;
