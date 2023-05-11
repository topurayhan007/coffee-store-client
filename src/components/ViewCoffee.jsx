import { Link, useLoaderData } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";

const ViewCoffee = () => {
  const coffee = useLoaderData();
  const { name, quantity, supplier, taste, category, details, photo } = coffee;

  return (
    <div className="flex justify-center flex-col items-center mb-28 mt-12">
      <div className="flex lg:w-[1320px] justify-start mb-12">
        <Link to="/">
          <button className="flex justify-center items-center text-2xl">
            {" "}
            <HiArrowNarrowLeft className="me-2" />
            Back to home
          </button>
        </Link>
      </div>
      <div className="card card-side bg-[#F5F4F1] rounded-lg py-10 mt-12 lg:w-[1320px]">
        <figure className="h-96 flex-1">
          <img src={photo} alt={name} className="w-1/2" />
        </figure>
        <div className="card-body px-8 me-8 flex-1">
          <p className="font-semibold text-lg">
            Name: <span className="font-normal">{name}</span>
          </p>
          <p className="font-semibold text-lg">
            Category: <span className="font-normal">{category}</span>
          </p>
          <p className="font-semibold text-lg">
            Quantity: <span className="font-normal">{quantity}</span>
          </p>
          <p className="font-semibold text-lg">
            Supplier: <span className="font-normal">{supplier}</span>
          </p>
          <p className="font-semibold text-lg">
            Taste: <span className="font-normal">{taste}</span>
          </p>
          <p className="font-semibold text-lg">
            Details: <span className="font-normal">{details}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewCoffee;
