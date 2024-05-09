import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllFoodCard from "./AllFoodCard";
const AllFoodPage = () => {
  const allFoods = useLoaderData();
  const [Foods, setFood] = useState(allFoods);

  console.log(allFoods);
  return (
    <div>
      {Foods?.map((food) => (
        <AllFoodCard key={food._id}></AllFoodCard>
      ))}
    </div>
  );
};

export default AllFoodPage;
