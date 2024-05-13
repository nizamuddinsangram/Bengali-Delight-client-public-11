import { Link } from "react-router-dom";
import img from "../../assets/error4.jpg";
const ErrorPage = () => {
  return (
    // <div className="flex flex-col items-center justify-center h-screen">
    //   <img src={img} alt="404 Not Found" className="w-64 h-64 mb-8" />
    //   <h1 className="text-3xl font-semibold text-center mb-4">
    //     404 - Page Not Found
    //   </h1>
    //   <p className="text-lg text-center mb-8">
    //     Oops! Looks like you've wandered off the beaten path.
    //   </p>
    //   <Link
    //     to="/"
    //     className="btn bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-md text-white font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
    //   >
    //     Back to Home
    //   </Link>
    // </div>
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* 404 Image */}
      <img
        src={img}
        alt="404 Not Found"
        className="w-80 h-[60vh] mb-8 md:w-96 lg:w-1/2 xl:w-2/3 rounded-full"
      />

      {/* 404 Message */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-center mb-8">
        Oops! Looks like you've wandered off the beaten path.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="btn bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-md text-white font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
