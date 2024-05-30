import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useOrederFood = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const getData = async () => {
    const { data } = await axiosSecure(`/purchases/${user?.email}`);
    return data;
  };
  const { data: test } = useQuery({
    queryKey: ["orderItems", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: getData,
  });
  //   console.log("useOrder food ", test);
  return [test];
};
export default useOrederFood;
