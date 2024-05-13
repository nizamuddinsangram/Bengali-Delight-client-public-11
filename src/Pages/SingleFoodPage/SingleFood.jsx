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
      <div>
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
      </div>
    </>
  );
};

export default SingleFood;
