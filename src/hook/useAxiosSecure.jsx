import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
const axiosSecure = axios.create({
  baseURL: "https://bengali-delights-server-lilac.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error tracked intercepter", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("log out user");
          logOut();
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
