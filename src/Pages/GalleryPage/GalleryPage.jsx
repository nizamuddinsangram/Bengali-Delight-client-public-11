import axios from "axios";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import GalleryBanner from "./GalleryBanner";
import GalleryCard from "./GalleryCard";
const GalleryPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.userName.value;
    const experience = form.feedback.value;
    const image = form.imageUrl.value;
    const feedback = {
      name,
      experience,
      image,
    };
    console.log(feedback);
    axios
      .post(
        "https://bengali-delights-server-lilac.vercel.app/feedback",
        feedback
      )
      .then((res) => {
        console.log(res.data);
      });
  };
  const openModal = () => {
    if (user) {
      document.getElementById("my_modal_1").showModal();
    } else {
      navigate("/login", { state: location.pathname });
    }
  };
  return (
    <div>
      <Helmet>
        <title>Bengali Delights || Gallery </title>
      </Helmet>
      <GalleryBanner />
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center ">
          <p>This is our gallery</p>
          <button
            className="btn btn-sm ml-3 bg-blue-500 text-white rounded-lg"
            onClick={openModal}
          >
            Open Modal
          </button>
        </div>

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Feedback!</h3>
            <p className="py-4">Give your feedback here</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Users Name
                </label>
                <input
                  type="text"
                  name="userName"
                  readOnly
                  defaultValue={user?.displayName || ""}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Feedback / Experience
                </label>
                <textarea
                  name="feedback"
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                  placeholder="Describe your experience or give feedback"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Image URL
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                  placeholder="Enter image URL"
                />
              </div>

              <div className="modal-action">
                <button type="submit" className="btn bg-blue-500 text-white">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    const modal = document.getElementById("my_modal_1");
                    modal?.close();
                  }}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
      <GalleryCard />
    </div>
  );
};

export default GalleryPage;
// <div>
//   <p>this is our gallery </p>
//   {/* Open the modal using document.getElementById('ID').showModal() method */}
//   <button
//     className="btn"
//     onClick={() => document.getElementById("my_modal_1").showModal()}
//   >
//     open modal
//   </button>
//   <dialog id="my_modal_1" className="modal">
//     <div className="modal-box">
//       <h3 className="font-bold text-lg">feedback!</h3>
//       <p className="py-4">Give your feedback here</p>
//       <div className="modal-action">
//         <form onSubmit={handleSubmit} method="dialog">
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Users Name
//             </label>
//             <input
//               type="text"
//               name="userName"
//               defaultValue={user?.displayname}
//               className="mt-1 p-2 w-full border border-gray-300 rounded-lg bg-gray-100"
//             />
//           </div>

//           {/* Feedback or experience description */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Feedback / Experience
//             </label>
//             <textarea
//               required
//               name="feedback"
//               className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
//               placeholder="Describe your experience or give feedback"
//             ></textarea>
//           </div>

//           {/* Image URL */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Image URL
//             </label>
//             <input
//               type="text"
//               name="imageUrl"
//               className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
//               placeholder="Enter image URL"
//               required
//             />
//           </div>

//           <div className="modal-action">
//             <button type="submit" className="btn">
//               Submit
//             </button>
//             <button type="button" className="btn">
//               Close
//             </button>
//           </div>
//         </form>
//         {/* <form method="dialog">
//           <button className="btn">Close</button>
//         </form> */}
//       </div>
//     </div>
//   </dialog>
// </div>
