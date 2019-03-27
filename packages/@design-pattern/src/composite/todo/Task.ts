class Task {
  public static get(title: string, date?: Date): Task {
    return new Task(title);
  }

  private title: string;
  private list: Task[];
  private is_complete: boolean;

  public constructor(title: string, date?: Date) {
    this.title = title;
    this.list = [];
    this.is_complete = false;
  }

  public get size(): number {
    return this.list.length;
  }

  public add(title: string, date?: Date): Task {
    const task: Task = Task.get(title, date);
    this.list.push(task);
    return task;
  }

  public delete(task: Task) {
    if (this.has(task)) {
      this.list.splice(this.list.indexOf(task), 1);
    }
  }

  public has(task: Task): boolean {
    return this.list.includes(task);
  }

  public clear() {
    this.list = [];
  }

  public toggle() {
    this.is_complete = !this.is_complete;
  }

  public isComplete() {
    return this.is_complete === true;
  }

  // private sort(type): Task[] {
  //   this.list.sort((a, b) => a[type] > b[types])
  //   .map(task => task);
  // }
}

export default Task;
