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
        <div className="flex w-full h-full">
          <div className="w-1/2">
            <img src={foodImage} className="w-full" />
          </div>
          <div className="w-1/2 text-center">
            <p>{foodName}</p>
            <p>{price}</p>
            <p>{foodCategory}</p>
            <p>{foodOrigin}</p>

            <p>{addedBy?.name}</p>
            <p>{shortDescription}</p>
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
