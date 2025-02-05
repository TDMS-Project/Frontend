// src/Axios/VendorAxios.js
import axios from "axios";

// Create an Axios instance to set base URL and headers
const VendorAxios = axios.create({
  baseURL: "http://localhost:8080/api/admin/vendorList/4",  // Replace with your API URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default VendorAxios;