import {AxiosPromise} from 'axios'
import onthepiknic from './onthepiknic'

export interface ProductApi {
	getTopFive: () => AxiosPromise;
}

const getTopFive = () => onthepiknic.get('/product/top_5')

const Product: ProductApi = {
	getTopFive: getTopFive
}

export default Product
