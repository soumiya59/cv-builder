import axios from "axios";


const axiosClient = axios.create({
   baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  config.headers.Authorization = `Bearer ${token}`;
<<<<<<< HEAD
 
=======
  config.headers["Content-Type"] = 'application/x-www-form-urlencoded';
>>>>>>> 4f636a8f2afe107dd5801cf4a176fad03af7859a
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response.status === 401) {
      localStorage.removeItem("ACCESS_TOKEN");
      // window.location.reload();
    } else if (response.status === 404) {
      //Show not found
    }
    throw error;
  }
);

export default axiosClient;
