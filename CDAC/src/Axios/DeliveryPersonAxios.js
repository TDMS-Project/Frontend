import axios from "axios";

const DeliveryPersonAxios = axios.create({
  baseURL: "http://localhost:8080",  // Replace with your backend endpoint
  headers: {
    "Content-Type": "application/json",
  },
});

export default DeliveryPersonAxios;
