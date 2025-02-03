import axios from "axios";

const SignUpAxios = axios.create({
  baseURL: "http://localhost:8080/auth", // Replace with your actual backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default SignUpAxios;
