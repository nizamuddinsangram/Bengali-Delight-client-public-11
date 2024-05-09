import Banner from "./Banner";
import TopFoods from "./TopFoods";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* this is our top foods section  */}
      <div>
        <TopFoods />
        {/* this is a all card button  */}
        <div className="flex justify-center">
          <button className="my-4 btn btn-sm bg-emerald-300">All Card</button>
        </div>
        {/* all card button end  */}
      </div>
    </div>
  );
};

export default Home;
