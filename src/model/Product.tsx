import ProductImage, {ProductImageModel} from './ProductImage';
import Brand, {BrandModel} from './Brand';
import Cooperation, {CooperationModel} from './Cooperation';

export interface ProductModel {
	name: string;
	_id: number;
	price: number;
	color: string[];
	description: string;
	size: string[];
	overall_rating: number;
	image: ProductImageModel[];
	brand: BrandModel;
	cooperation: CooperationModel;
}

class Product {
	name: string;
	id: number;
	price: number;
	color: string[];
	description: string;
	size: string[];
	overall_rating: number;
	images: ProductImage[] = [];
	brand: Brand;
	cooperation: Cooperation;
	constructor(jsonData: ProductModel) {
		this.name = jsonData.name;
		this.id = jsonData._id;
		this.price = jsonData.price;
		this.color = jsonData.color;
		this.description = jsonData.description;
		this.size = jsonData.size;
		this.overall_rating = jsonData.overall_rating;
		jsonData.image.forEach((image) => {
			this.images.push(new ProductImage(image));
		});
		this.brand = new Brand(jsonData.brand);
		this.cooperation = new Cooperation(jsonData.cooperation);
	}
}

export default Product;
