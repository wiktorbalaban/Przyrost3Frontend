export class Arena {
  private id: number;
  private name: String;

  constructor(obj?: any) {
    this.id = (obj && obj.id) || Math.floor(Math.random() * 1000);
    this.name = (obj && obj.name) || '';
  }

  getId(): number {
    return this.id;
  }

  getName(): String {
    return this.name;
  }
}