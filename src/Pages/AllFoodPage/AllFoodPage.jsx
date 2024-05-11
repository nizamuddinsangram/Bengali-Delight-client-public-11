import axios from "axios";
import { useEffect, useState } from "react";
import AllFoodCard from "./AllFoodCard";
const AllFoodPage = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // const allFoods = useLoaderData();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios("http://localhost:8000/allFoods");
      setAllFoods(data);
    };
    getData();
  }, []);
  console.log(allFoods);
  const filteredFoods = allFoods.filter((food) =>
    food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search food..."
        value={searchQuery}
        onChange={handleSearchChange}
      />{" "}
      <div className="grid grid-cols-1 md:grid-cols-2e lg:grid-cols-3 gap-10">
        {filteredFoods?.map((food) => (
          <AllFoodCard key={food._id} food={food}></AllFoodCard>
        ))}
      </div>
    </div>
  );
};

export default AllFoodPage;
