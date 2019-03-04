export default class Task {
  public static get(title: string, date?: Date): Task {
    return new Task(title);
  }

  private title: string;
  private list: Task[];

  public constructor(title: string, date?: Date) {
    this.title = title;
    this.list = [];
  }

  public add(title: string, date?: Date): number {
    this.list.push(Task.get(title, date));
    return this.list.length;
  }
}
