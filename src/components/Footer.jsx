import {
  BsFillTelephoneFill,
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsFacebook,
} from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div
      className="w-full text-[#331A15]"
      style={{
        backgroundImage: `url("/images/more/10.png")`,
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center flex-col items-center  mt-28">
        <div className="flex lg:w-[1320px]">
          <img src="/images/more/logo1.png" alt="" className="h-20" />
        </div>

        <div className="flex items-center lg:w-[1320px] z-50">
          <div className="flex-1">
            <h3 className="text-4xl my-8">Espresso Emporium</h3>
            <p>
              Always ready to be your friend. Come & Contact with us to share
              your <br /> memorable moments, to share with your best companion.
            </p>
            <div className="flex gap-4 text-3xl items-center mt-8 text-[#331A15]">
              <a>
                <BsFacebook />
              </a>
              <a>
                <BsTwitter />
              </a>
              <a>
                <BsInstagram />
              </a>
              <a>
                <BsLinkedin />
              </a>
            </div>
            <h3 className="text-4xl my-8">Get in Touch</h3>
            <div className="flex mb-4 items-center">
              <BsFillTelephoneFill className="me-2" />
              <p>+88 01533 333 333</p>
            </div>
            <div className="flex mb-4 items-center">
              <MdEmail className="me-2 text-lg" />
              <p>info@gmail.com</p>
            </div>
            <div className="flex mb-12 items-center">
              <MdLocationOn className="me-2 text-xl" />
              <p>72, Wall street, King Road, Dhaka</p>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-4xl">Contact Us</h3>
            <div>
              <div className="">
                <div className="card-body px-0">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Email"
                      className="input input-bordered"
                    />
                  </div>
                  <textarea
                    rows="4"
                    cols="40"
                    placeholder="Message"
                    className="border rounded-md p-4 input-bordered"
                  ></textarea>
                  <div className="mt-6">
                    <button className="btn normal-case text-xl rounded-full px-8 border-[#331A15] text-[#331A15] border-2 hover:bg-transparent bg-transparent">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center text-white"
        style={{
          backgroundImage: `url("/images/more/24.jpg")`,
          width: "100%",
          height: "80px",
          backgroundSize: "cover",
        }}
      >
        <h3 className="text-3xl">
          Copyright Espresso Emporium ! All Rights Reserved. Made by{" "}
          <a href="https://github.com/topurayhan007" className="text-[#D2B48C]">
            topurayhan007
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
