export class PeriodModel {
  public period: string;
  public name: string;
  public short: string;
  public startTime: string;
  public endTime: string;

  constructor(period, name, short, startTime, endTime) {
    this.period = period;
    this.name = name;
    this.short = short;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
