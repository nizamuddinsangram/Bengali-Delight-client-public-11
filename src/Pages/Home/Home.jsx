import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Banner from "./Banner";
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
    </div>
  );
};

export default Home;
