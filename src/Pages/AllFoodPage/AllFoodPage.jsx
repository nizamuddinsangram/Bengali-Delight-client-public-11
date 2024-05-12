import axios from "axios";
import { Helmet } from "react-helmet-async";

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
  const handleSearchChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    try {
      if (query.trim() === "") {
        // If query is empty, fetch all foods
        const { data } = await axios("http://localhost:8000/allFoods");
        setAllFoods(data);
      } else {
        const { data } = await axios(
          `http://localhost:8000/search?foodName=${query}`
        );
        setAllFoods(data);
      }
    } catch (error) {
      console.error("Error searching foods:", error);
    }
  };

  // const handleSearchChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };
  return (
    <div>
      <Helmet>
        <title>Bengali Delights || All Food</title>
      </Helmet>
      <input
        type="text"
        placeholder="Search food..."
        value={searchQuery}
        onChange={handleSearchChange}
      />{" "}
      <div className="grid grid-cols-1 md:grid-cols-2e lg:grid-cols-3 gap-10">
        {allFoods?.map((food) => (
          <AllFoodCard key={food._id} food={food}></AllFoodCard>
        ))}
      </div>
    </div>
  );
};

export default AllFoodPage;
