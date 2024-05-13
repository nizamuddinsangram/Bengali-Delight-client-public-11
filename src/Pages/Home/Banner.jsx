// Import Swiper React components
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/pexels-photo-1640777.jpeg";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper lg:h-[60vh] h-[100vh] md:h-[80vh]"
      >
        <SwiperSlide className="">
          {/* <div className="swiper-content">
            <h1>Discover Culinary Delights with FoodieHub</h1>
            <p>
              Explore a world of flavors, from savory classics to exotic
              delicacies. Join us on a gastronomic journey like no other!
            </p>
            <a href="/all-foods" className="btn">
              Explore All Foods
            </a>
          </div>

          <img src={img1} /> */}
          <div className="relative">
            <img src={img1} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
            {/* Dark overlay */}
            <div className="swiper-content absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
              <h1 className="text-4xl mb-4">
                Discover Culinary Delights with FoodieHub
              </h1>
              <p className="text-lg mb-6">
                Explore a world of flavors, from savory classics to exotic
                delicacies. Join us on a gastronomic journey like no other!
              </p>
              <Link
                to="/allFood"
                className="btn bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md text-white"
              >
                Explore All Foods
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
