class SubjectModel {
  public short: string;
  public id: string;
  public name: string;
  public students: string;

  constructor(id, name, short, students) {
    this.id = id;
    this.name = name;
    this.short = short;
    this.students = students;
  }
}

