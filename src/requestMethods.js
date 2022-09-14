import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTZlZjE1MzExMmZiYzllMjg0N2U4ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjUzNzQxNiwiZXhwIjoxNjYyNzk2NjE2fQ.9oCMUNKZ1PAaX531OJboWAdvo05IKkaiPcAgnXTVvs8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
