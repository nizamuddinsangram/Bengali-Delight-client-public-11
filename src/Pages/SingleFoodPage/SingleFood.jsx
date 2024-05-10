import { useLoaderData } from "react-router-dom";
const SingleFood = () => {
  const singleFood = useLoaderData();
  console.log(singleFood);
  const { foodImage, foodName } = singleFood;
  return (
    <div className="flex w-full h-full">
      <div className="w-1/2">
        <img src={foodImage} className="w-full" />
      </div>
      <div className="w-1/2 text-center">
        <p>{foodName}</p>
      </div>
    </div>
  );
};

export default SingleFood;
