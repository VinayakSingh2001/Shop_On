import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
// const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWVkOTM3MTEyYTNiNjllY2U3ODNmMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDA2ODYxNiwiZXhwIjoxNjkwMzI3ODE2fQ.7RAnerycPBcoSznGfgpIZf-UyKBk7TUQJ1djKfPY0B0";

const TOKEN =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken);



export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
