import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    // send data to server
    fetch("http://localhost:5000/coffee", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully!",
            icon: "success",
            confirmButtonText: "Okay",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="flex justify-center mb-28 mt-12">
      <div className="flex justify-center items-center flex-col lg:w-[1320px] bg-[#F4F3F0] rounded px-28 py-16">
        <h2 className="text-5xl font-bold text-[#374151] drop-shadow-2xl shadow-black">
          Update Coffee
        </h2>
        <p className="text-center my-8">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at <br /> its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed <br /> to using Content here.
        </p>
        <form onSubmit={handleUpdateCoffee} className="w-full">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg">Name</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  className="input input-bordered rounded w-full"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg">
                  Quantity
                </span>
              </label>
              <label className="">
                <input
                  type="number"
                  name="quantity"
                  placeholder="Enter coffee quantity"
                  className="input input-bordered rounded w-full"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg">
                  Supplier
                </span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter coffee supplier"
                  className="input input-bordered rounded w-full"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg">Taste</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter coffee taste"
                  className="input input-bordered rounded w-full"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg">
                  Category
                </span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="category"
                  placeholder="Enter coffee category"
                  className="input input-bordered rounded w-full"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-lg">
                  Details
                </span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  className="input input-bordered rounded w-full"
                />
              </label>
            </div>
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text font-semibold text-lg">Photo</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter photo URL"
                  className="input input-bordered rounded w-full"
                />
              </label>
            </div>
          </div>
          <div className="form-control mt-8">
            <button
              type="submit"
              className="btn hover:bg-[#b9986a] border-2 bg-[#D2B48C] border-black text-black text-2xl normal-case rounded w-full"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
