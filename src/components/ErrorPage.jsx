import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";

const ErrorPage = () => {
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
      <div>
        <img src="/images/404/404.gif" alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
