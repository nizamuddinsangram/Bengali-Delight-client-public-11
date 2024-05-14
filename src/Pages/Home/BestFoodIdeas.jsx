import img from "../../assets/image/meat image.jpg";
const BestFoodIdeas = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <img src={img} alt="Food Image" className="w-full rounded-lg" />
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <h2 className="text-3xl font-bold mb-4">Barbecue beef recipes</h2>
          <div className="flex w-full">
            <div className="w-1/2">
              <p className="text-lg mb-4 font-medium">
                Fire up the coals and grill some juicy steaks, burgers and more.
                From Texas barbecue brisket, to beer-braised short ribs and
                steak salads, we've got plenty of barbecue beef recipes to
                inspire.
              </p>
              <button className="bg-orange-500 font-bold text-white px-4 py-2 rounded-lg text-lg mb-4">
                Order Now
              </button>
            </div>
            <div className="flex flex-col  bg-teal-950 p-4 rounded-lg ml-4">
              <div className="mb-4 flex flex-col">
                <strong className="text-lg text-white">Lunch Time:</strong>{" "}
                <span className="text-lg text-white">12:00 PM - 3:00 PM</span>
              </div>
              <div className="flex flex-col">
                <strong className="text-lg text-white">Dinner Time:</strong>{" "}
                <span className="text-lg text-white">6:00 PM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestFoodIdeas;
