import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWVkOTM3MTEyYTNiNjllY2U3ODNmMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTc4MTAxNCwiZXhwIjoxNjkwMDQwMjE0fQ.zJ8Rr_cAIrAan49CRbw4QWCAXyM6fOvU5pvkqI2ezkw";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });