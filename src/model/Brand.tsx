export interface BrandModel {
  name: string;
  logo_src: string;
  description: string;
}

class Brand {
  name: string;
  logo_src: string;
  description: string;
  constructor(jsonData: BrandModel) {
    this.name = jsonData.name;
    this.logo_src = jsonData.logo_src;
    this.description = jsonData.description;
  }
}

export default Brand;
