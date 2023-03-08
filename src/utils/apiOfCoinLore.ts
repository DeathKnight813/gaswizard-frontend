import axios from "axios";

const apiOfCoinLore = axios.create({
  baseURL: "https://api.coinlore.net/api",
  headers: {
    "Content-Type": "application/json",
  },
});

apiOfCoinLore.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);

export default apiOfCoinLore;
