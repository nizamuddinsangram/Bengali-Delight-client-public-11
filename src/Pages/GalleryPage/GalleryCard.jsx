import axios from "axios";
import { useEffect, useState } from "react";

const GalleryCard = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios("http://localhost:8000/feedback");
      setGallery(data);
    };
    getData();
  }, []);
  return (
    <div>
      <p>this is galley section</p>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
        {gallery?.map((item) => (
          <div key={item._id}>
            <img src={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCard;
