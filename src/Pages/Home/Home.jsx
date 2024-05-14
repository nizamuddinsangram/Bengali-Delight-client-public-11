import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import BestFoodIdeas from "./BestFoodIdeas";
import OurLatestFood from "./OurLatestFood";
import TopFoods from "./TopFoods";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bengali Delights || HOME</title>
      </Helmet>
      <Banner />
      {/* this is our top foods section  */}
      <div>
        <TopFoods />
        {/* this is a all card button  */}
        <div className="flex justify-center">
          <Link to="/allFood" className="my-4 btn btn-sm bg-emerald-300">
            All Card
          </Link>
        </div>
        {/* all card button end  */}
      </div>
      <BestFoodIdeas />
      <div className="mb-10">
        <p className="text-4xl text-center mb-2 text-red-600">
          Our Latest Food
        </p>
        <p className="text-center mb-10 text-red-950 font-medium ">
          In English Meat is animal tissue, often muscle, that is eaten as food.
          Humans have hunted and <br></br>farmed other animals for meat since
          prehistory
        </p>
        <OurLatestFood />
      </div>
    </div>
  );
};

export default Home;
