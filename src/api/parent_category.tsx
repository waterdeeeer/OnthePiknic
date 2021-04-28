import {AxiosPromise} from 'axios'
import onthepiknic from './onthepiknic'

export interface ParentCategoryApi {
	getAll: () => AxiosPromise
}

const getAll = () => onthepiknic.post('/parent_category/find')

const ParentCategory: ParentCategoryApi = {
	getAll: getAll
}

export default ParentCategory
