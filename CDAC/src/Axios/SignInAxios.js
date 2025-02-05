import axios from "axios";
// You can set your base URL here for your backend
const SignInAxios = axios.create({
  baseURL: "http://localhost:8080",  // Replace with your Spring Boot backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default SignInAxios;