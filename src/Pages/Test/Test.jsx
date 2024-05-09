import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
const Test = () => {
  const [name, setName] = useState();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (user?.email) {
      axiosSecure.get("/test").then((res) => setName(res.data));
    }
  }, [axiosSecure, user?.email]);

  return (
    <div className="bg-red-300 h-[60vh] text-center">
      <p>
        my website my power{" "}
        <span className="text-3xl font-bold text-gray-200">{name?.name}</span>
      </p>
    </div>
  );
};

export default Test;
