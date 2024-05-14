import rakib from "../../assets/image/chef.jpg";

const OurChef = () => {
  return (
    <div className="container mx-auto py-4 px-4 lg:py-12 lg:px-4 lg:w-3/4">
      {" "}
      {/* Added lg:w-3/4 for 70% width */}
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={rakib}
            alt="Chef Image"
            className="w-full h-auto lg:h-[55vh] rounded-lg"
          />
        </div>

        <div className="w-full lg:w-1/2 lg:pl-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Chef</h2>
          <div className="mb-4">
            <h3 className="text-xl lg:text-2xl font-semibold text-nice-font">
              {" "}
              {/* Added text-nice-font for nice font style */}
              Rakibul Ismal
            </h3>
            <p className="text-gray-600 mb-2 text-lg font-normal lg:tracking-widest	lg:leading-8	">
              Chef responsibilities include studying recipes, setting up menus
              and preparing high-quality dishes. Our chef specializes in
              crafting a delightful array of traditional dishes, including
              aromatic Dim Baji, savory Potato Baji, and comforting Dal.
            </p>
          </div>

          <div className="flex items-center mb-4 space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </a>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurChef;
