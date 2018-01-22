export class Technique {
  private id: number;
  private name: String;
  private percentagetopower: number;

  constructor(obj?: any) {
    this.id = (obj && obj.id) || 0;
    this.name = (obj && obj.name) || '';
    this.percentagetopower = (obj && obj.percentagetopower) || 0;
  }

  getId(): number {
    return this.id;
  }

  getPercentagetopower(): number {
    return this.percentagetopower;
  }

  getName(): String {
    return this.name;
  }

  setId(id: number) {
    this.id = id;
  }

  setPercentagetopower(id: number) {
    this.percentagetopower = id;
  }

  setName(name: String) {
    this.name = name;
  }

}
