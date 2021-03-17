export interface ProductImageModel {
  id: number;
  prod_id: number;
  src: string;
  color: string;
  is_rep: Boolean;
  size: string;
}

class ProductImage {
  id: number;
  prod_id: number;
  src: string;
  color: string;
  is_rep: Boolean;
  size: string;
  constructor(jsonData: ProductImageModel) {
    this.id = jsonData.id;
    this.prod_id = jsonData.prod_id;
    this.src = jsonData.src;
    this.color = jsonData.color;
    this.is_rep = jsonData.is_rep;
    this.size = jsonData.size;
  }
}

export default ProductImage;
