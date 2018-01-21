export class Wife {
  private id: number;
  private name: String;
  private surname: String;
  private percentagetopower: number;

  constructor(obj?: any) {
    this.id = (obj && obj.id) || 0;
    this.name = (obj && obj.name) || '';
  }

  getId(): number {
    return this.id;
  }

  getPercentagetopower(): number {
    return this.id;
  }

  getName(): String {
    return this.name;
  }

  getSurname(): String {
    return this.name;
  }

  setId(id: number) {
    this.id = id;
  }

  setPercentagetopower(id: number) {
    this.id = id;
  }

  setName(name: String) {
    this.name = name;
  }

  setSurname(name: String) {
    this.name = name;
  }

}
