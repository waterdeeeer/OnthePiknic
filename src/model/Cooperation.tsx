export interface CooperationModel {
  name: string;
  logo_src: string;
  description: string;
  _id: number;
}

class Cooperation implements CooperationModel {
  _id: number;
  name: string;
  logo_src: string;
  description: string;
  constructor(jsonData: CooperationModel) {
    this._id = jsonData._id;
    this.name = jsonData.name;
    this.logo_src = jsonData.logo_src;
    this.description = jsonData.description;
  }
}

export default Cooperation;
