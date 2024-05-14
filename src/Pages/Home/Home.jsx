import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import img from "../../assets/image/img1.jpg";
import Banner from "./Banner";
import BestFoodIdeas from "./BestFoodIdeas";
import OurChef from "./OurChef";
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
        {/* try to another section */}
        <div>
          <div className="relative h-[40vh] lg:h-[40vh] mt-10">
            <div
              className="absolute inset-0 bg-cover bg-center flex justify-center items-center"
              style={{
                backgroundImage: `url(${img})`, // Replace 'img' with your actual image import
              }}
            >
              <div className="absolute inset-0 bg-black opacity-60"></div>

              <div className="z-10 text-gray-200 text-center lg:max-w-[43%] px-4 lg:px-0">
                <h1 className="lg:text-2xl text-xl leading-tight mb-4  font-mono">
                  "A distinctive, well-preserved and comfortable space,
                  high-quality products, authentic cuisine, food and drinks are
                  done flawlessly."
                </h1>

                <p className="italic text-lg sm:text-base lg:text-lg font-mono">
                  - Nizam Uddin Sangram
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* our chef section */}
        <div>
          <OurChef />
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Home;
// h-[60vh] lg:w-[70%]
