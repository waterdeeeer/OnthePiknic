import axios from "axios";

const onthepiknic = axios.create({
  baseURL: "https://onthepiknic.com/api",
});

export default onthepiknic;
