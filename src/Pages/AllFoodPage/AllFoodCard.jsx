// eslint-disable-next-line react/prop-types
const AllFoodCard = ({ food }) => {
  console.log(food);
  const {
    foodImage,
    foodName,
    price,
    shortDescription,
    quantity,
    foodCategory,
  } = food;
  return (
    <div className="w-10/12	mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        className="object-cover object-center w-full h-56"
        src={foodImage}
        alt="avatar"
      />

      <div className="flex items-center px-6 py-3 bg-gray-900">
        <svg
          aria-label="headphones icon"
          className="w-6 h-6 text-white fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
          />
        </svg>

        <h1 className="mx-3 text-lg font-semibold text-white">Focusing</h1>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          {foodName}
        </h1>

        <p className="py-2 text-gray-700 dark:text-gray-400">
          {shortDescription}
        </p>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <span>Price: {price} </span>
        </div>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <span>Category: {foodCategory}</span>
        </div>

        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <span>Quantity: {quantity}</span>
        </div>
        <button className="btn btn-sm bg-purple-100  w-full  mt-3">
          Details{" "}
        </button>
      </div>
    </div>
  );
};

export default AllFoodCard;
