import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "../../components/FoodCard";
const TopFoods = () => {
  const [foods, setFood] = useState([]);
  useEffect(() => {
    const getFood = async () => {
      const { data } = await axios("http://localhost:8000/foods");
      setFood(data);
    };
    getFood();
  }, []);
  //   console.log(foods);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-10">
        Top Food Section{" "}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:grid-cols-2 ">
        {foods?.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default TopFoods;
