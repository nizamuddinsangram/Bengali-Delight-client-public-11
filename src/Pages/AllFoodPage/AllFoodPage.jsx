import axios from "axios";
import { Helmet } from "react-helmet-async";

import { useEffect, useState } from "react";
import AllFoodBanner from "./AllFoodBanner";
import AllFoodCard from "./AllFoodCard";
const AllFoodPage = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // const allFoods = useLoaderData();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        "https://bengali-delights-server-lilac.vercel.app/allFoods"
      );
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
        const { data } = await axios(
          "https://bengali-delights-server-lilac.vercel.app/allFoods"
        );
        setAllFoods(data);
      } else {
        const { data } = await axios(
          `https://bengali-delights-server-lilac.vercel.app/search?foodName=${query}`
        );
        setAllFoods(data);
      }
    } catch (error) {
      console.error(error);
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
      <AllFoodBanner />
      <div className="my-6 w-full text-center">
        <input
          className="w-1/2 p-2 rounded-lg"
          type="text"
          placeholder="Search food..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {allFoods?.map((food) => (
          <AllFoodCard key={food._id} food={food}></AllFoodCard>
        ))}
      </div>
    </div>
  );
};

export default AllFoodPage;
