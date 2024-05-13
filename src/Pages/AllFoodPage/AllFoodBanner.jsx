import img from "../../assets/image/img1.jpg";

const AllFoodBanner = () => {
  return (
    <div className="relative mb-10 rounded-full">
      {/* Banner Image */}
      <img
        src={img}
        alt="All Foods Banner"
        className="w-full h-[40vh] object-cover rounded-lg"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Banner Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-center font-bold">
          Discover Delicious Foods
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6 text-center  px-4">
          Indulge in a culinary adventure and explore a wide array of
          mouthwatering
          <br />
          dishes from around the globe.
        </p>
        {/* <a
          href="/all-foods"
          className="btn bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md text-white font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Explore Now
        </a> */}
      </div>
    </div>
  );
};

export default AllFoodBanner;
