import { AxiosPromise } from "axios";
import onthepiknic from "./onthepiknic";
import { Product as product } from "../types";
export interface ProductApi {
  getTopFive: () => AxiosPromise;
  getAll: () => AxiosPromise<product[]>;
}

const getTopFive = () => onthepiknic.get("/product/top_5");
const getAll = () => onthepiknic.post("/product/find", {});
const Product: ProductApi = {
  getTopFive: getTopFive,
  getAll: getAll,
};
export default Product;
