export class ClassroomModel {
  public id: string;
  public name: string;
  public short: string;
  public capacity: string;

  constructor(id, name, short, capacity) {
    this.id = id;
    this.name = name;
    this.short = short;
    this.capacity = capacity;
  }
}
