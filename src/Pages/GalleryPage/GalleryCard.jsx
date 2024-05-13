import axios from "axios";
import { useEffect, useState } from "react";

const GalleryCard = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        "https://bengali-delights-server-lilac.vercel.app/feedback"
      );
      setGallery(data);
    };
    getData();
  }, []);
  return (
    // <div>
    //   <div className="grid gap-10 grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
    //     {gallery?.map((item) => (
    //       <div key={item._id}>
    //         <img src={item.image} />
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item) => (
          <div key={item._id} className="relative">
            <img
              src={item.image}
              className="w-full h-full object-cover"
              alt={`Image by ${item.name}`}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
              <div>
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p>{item.experience}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCard;
