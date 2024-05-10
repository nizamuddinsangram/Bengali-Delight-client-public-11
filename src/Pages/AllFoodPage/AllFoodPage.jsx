import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllFoodCard from "./AllFoodCard";
const AllFoodPage = () => {
  const allFoods = useLoaderData();
  const [Foods, setFood] = useState(allFoods);

  console.log(allFoods);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2e lg:grid-cols-3 gap-10">
      {Foods?.map((food) => (
        <AllFoodCard key={food._id} food={food}></AllFoodCard>
      ))}
    </div>
  );
};

export default AllFoodPage;
