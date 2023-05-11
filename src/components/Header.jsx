const Header = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        backgroundImage: `url("/images/more/15.jpg")`,
        width: "100%",
        height: "100px",
        backgroundSize: "cover",
      }}
    >
      <img
        src="/images/more/logo1.png"
        alt=""
        style={{ height: "70px", marginRight: "10px" }}
      />
      <h2 className="text-white text-5xl font-medium">Espresso Emporium</h2>
    </div>
  );
};

export default Header;
