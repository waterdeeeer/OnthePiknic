export interface BrandModel {
  _id: number;
  name: string;
  logo_src: string;
  description: string;
}

class Brand {
  name: string;
  logo_src: string;
  description: string;
  id: number;
  constructor(jsonData: BrandModel) {
    this.id = jsonData._id;
    this.name = jsonData.name;
    this.logo_src = jsonData.logo_src;
    this.description = jsonData.description;
  }
}

export default Brand;
