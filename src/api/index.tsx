import product, {ProductApi} from './product'
import parentCategory, {ParentCategoryApi} from './parent_category'

export const IMAGE_BASE_URL = 'https://onthepiknic.com/asset';

class Api {
	private static instance: Api;
	private constructor(public product: ProductApi, public parentCategory: ParentCategoryApi) {
		this.product = product;
		this.parentCategory = parentCategory;
	}
	static getInstance() {
		if (this.instance) return this.instance;
		else {
			this.instance = new Api(product, parentCategory);
			return this.instance;
		}
	}

}


export default Api;
