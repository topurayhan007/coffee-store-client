/* eslint-disable react/prop-types */
import { AiFillEye } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, taste, category, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-seven-wheat.vercel.app/coffee/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "The coffee has been deleted.", "success");
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            } else {
              Swal.fire(
                "Error!",
                "The coffee couldn't be deleted. Please try again!",
                "error"
              );
            }
          });
      }
    });
  };

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
        <Link to={`/viewCoffee/${_id}`}>
          <button className="btn text-xl px-3 py-2 border-0 text-white bg-[#D2B48C] hover:bg-[#f7d4a6]">
            <AiFillEye />
          </button>
        </Link>
        <Link to={`/updateCoffee/${_id}`}>
          <button className="btn text-xl px-3 py-2 text-white">
            <MdModeEditOutline />
          </button>
        </Link>
        <button
          onClick={() => {
            handleDelete(coffee._id);
          }}
          className="btn text-xl px-3 py-2 text-white btn-error"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
