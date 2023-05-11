import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { CgCoffee } from "react-icons/cg";

const CoffeeContainer = () => {
  const coffees = useLoaderData();

  return (
    <div className="flex justify-center flex-col items-center mt-28">
      <div className="flex items-center flex-col lg:w-[1320px] z-50">
        <p>--- Sip & Savor ---</p>
        <h1 className="text-[#331A15] text-6xl mt-2 drop-shadow-lg shadow-black">
          Our Popular Products
        </h1>
        <Link to="/addCoffee">
          <button className="btn mt-5 mb-12 hover:bg-white hover:text-black border-2 bg-[#D2B48C] border-black text-white text-2xl normal-case rounded">
            Add Coffee <CgCoffee className="ms-2 text-black" />
          </button>
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
          ))}
        </div>
      </div>
      <div className="w-full absolute ">
        <img src="/images/more/1.png" alt="" />
      </div>
    </div>
  );
};

export default CoffeeContainer;
