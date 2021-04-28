export interface ParentCategoryType {
	name: string;
	category: {
		name: string;
	}[]
}

class ParentCategory implements ParentCategoryType {
	constructor(public name: string, public category: {name: string}[]) {
		this.name = name;
		this.category = category;
	}
}

export default ParentCategory;
