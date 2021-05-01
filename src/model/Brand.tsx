export interface BrandModel {
  _id: number;
  name: string;
  logo_src: string;
  description: string;
}

class Brand implements BrandModel {
  name: string;
  logo_src: string;
  description: string;
  _id: number;
  constructor(jsonData: BrandModel) {
    this._id = jsonData._id;
    this.name = jsonData.name;
    this.logo_src = jsonData.logo_src;
    this.description = jsonData.description;
  }
}

export default Brand;
