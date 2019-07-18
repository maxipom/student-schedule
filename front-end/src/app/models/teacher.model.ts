export class TeacherModel {
  public id: string;
  public gender: string;
  public firstName: string;
  public lastName: string;
  public name: string;
  public short: string;

  constructor(id, gender, firstName, lastName, name, short) {
    this.id = id;
    this.gender = gender;
    this.firstName = firstName;
    this.lastName = lastName;
    this.name = name;
    this.short = short;
  }
}
