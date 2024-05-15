import img from "../../assets/pexels-photo-1640777.jpeg";
const GalleryBanner = () => {
  return (
    <div className="relative mb-10">
      {/* Banner Image */}
      <img
        src={img}
        alt="All Foods Banner"
        className="w-full h-[50vh] lg:h-[60vh] object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Banner Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-gray-300 z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl mb-2 lg:mb-4 text-center font-bold">
          Our Gallery Page
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

export default GalleryBanner;
