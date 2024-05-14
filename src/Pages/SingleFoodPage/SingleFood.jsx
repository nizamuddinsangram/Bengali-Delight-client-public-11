import { Link, useLoaderData } from "react-router-dom";
const SingleFood = () => {
  const singleFood = useLoaderData();
  // console.log(singleFood);
  const {
    foodImage,
    shortDescription,
    foodName,
    foodCategory,
    price,
    addedBy,
    foodOrigin,
    _id,
  } = singleFood;
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="w-full sm:w-1/2">
            <img src={foodImage} className="w-full" alt={foodName} />
          </div>
          <div className="w-full sm:w-1/2 text-center mt-6 sm:mt-0 lg:pl-12">
            <p className="text-4xl mb-2 font-bold text-gray-800">{foodName}</p>
            <p className="text-xl font-medium mb-2 text-gray-700">
              {shortDescription}
            </p>
            <div className="flex justify-between mb-3">
              <p className="text-lg font-medium text-gray-700">
                Category: {foodCategory}
              </p>
              <p className="text-lg font-medium text-gray-700 ">
                Price: {price}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-medium text-gray-700 ">
                Country: {foodOrigin}
              </p>
              <p className="text-lg font-medium text-gray-700 ">
                Added By: {addedBy?.name}
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link
            to={`/foodPurchases/${_id}`}
            className="w-full sm:w-auto text-white font-black btn my-4 bg-green-500 px-6 py-3 rounded-lg inline-block lg:hover:bg-green-600"
          >
            Purchase
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleFood;
{
  /* <div>
        <div className="flex w-full h-full items-center">
          <div className="w-1/2">
            <img src={foodImage} className="w-full" />
          </div>
          <div className="w-1/2 text-center">
            <p className="text-4xl mb-2 font-bold">{foodName}</p>
            <p className="text-xl font-medium mb-2">{shortDescription}</p>
            <span className="flex justify-around mb-3">
              <p className="text-lg font-medium ">Category: {foodCategory}</p>
              <p className="text-lg font-medium">Price: {price}</p>
            </span>

            <span className="flex justify-around ">
              <p className="text-lg font-medium"> Country:{foodOrigin}</p>

              <p className="text-lg font-medium">Add By:{addedBy?.name}</p>
            </span>
          </div>
        </div>
        <Link
          to={`/foodPurchases/${_id}`}
          className="w-full text-white font-black  btn   my-4 bg-green-500"
        >
          Purchase
        </Link>
      </div> */
}
