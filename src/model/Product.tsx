import ProductImage, { ProductImageModel } from "./ProductImage";
import Brand from "./Brand";
import Cooperation from "./Cooperation";

export interface ProductModel {
  name: string;
  _id: number;
  price: number;
  color: string[];
  description: string;
  size: string[];
  overall_rating: number;
  image: ProductImageModel[];
  brand: Brand;
  cooperation: Cooperation;
}

class Product implements ProductModel {
  name: string;
  _id: number;
  price: number;
  color: string[];
  description: string;
  size: string[];
  overall_rating: number;
  image: ProductImage[] = [];
  brand: Brand;
  cooperation: Cooperation;
  constructor(jsonData: ProductModel) {
    this.name = jsonData.name;
    this._id = jsonData._id;
    this.price = jsonData.price;
    this.color = jsonData.color;
    this.description = jsonData.description;
    this.size = jsonData.size;
    this.overall_rating = jsonData.overall_rating;
    jsonData.image.forEach((image) => {
      this.image.push(new ProductImage(image));
    });
    this.brand = new Brand(jsonData.brand);
    this.cooperation = new Cooperation(jsonData.cooperation);
  }
}

export default Product;
