const FoodCard = ({ food }) => {
  const { foodImage, foodName, foodCategory, price } = food;
  return (
    <div className="  w-11/12 mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <img className="object-cover w-full h-64" src={foodImage} alt="Article" />

      <div className="p-6">
        <div>
          <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
            {foodCategory}
          </span>
          <div className="flex justify-between items-center">
            <a
              className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabIndex="0"
              role="link"
            >
              {foodName}
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Price: {price}
            </p>
          </div>
        </div>

        {/* this is details button  */}
        <button className="btn btn-sm w-full my-2 text-white font-bold bg-sky-400">
          Details Button
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
