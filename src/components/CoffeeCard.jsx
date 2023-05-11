/* eslint-disable react/prop-types */
import { AiFillEye } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

const CoffeeCard = ({ coffee }) => {
  const { name, taste, category, photo } = coffee;
  return (
    <div className="card card-side bg-[#F5F4F1] rounded-lg py-5">
      <figure className="ps-3">
        <img src={photo} alt={name} />
      </figure>
      <div className="card-body px-2">
        <p className="font-semibold text-lg">
          Name: <span className="font-normal">{name}</span>
        </p>
        <p className="font-semibold text-lg">
          Category: <span className="font-normal">{category}</span>
        </p>
        <p className="font-semibold text-lg">
          Taste: <span className="font-normal">{taste}</span>
        </p>
      </div>
      <div className="card-actions px-8 flex-col justify-center items-center gap-4">
        <button className="btn text-xl px-3 py-2 border-0 text-white bg-[#D2B48C] hover:bg-[#f7d4a6]">
          <AiFillEye />
        </button>
        <button className="btn text-xl px-3 py-2 text-white">
          <MdModeEditOutline />
        </button>
        <button className="btn text-xl px-3 py-2 text-white btn-error">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
