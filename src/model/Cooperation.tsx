export interface CooperationModel {
  name: string;
  logo_src: string;
  description: string;
}

class Cooperation {
  name: string;
  logo_src: string;
  description: string;
  constructor(jsonData: CooperationModel) {
    this.name = jsonData.name;
    this.logo_src = jsonData.logo_src;
    this.description = jsonData.description;
  }
}

export default Cooperation;
