export interface IDayTodos {
  day: number;
  dayName: string | null;
  month: string;
  monthIndex: number;
  year: number;
  listTodos: ITodo[];
}

export interface ITodo {
  id: string;
  isDone: boolean;
  todo: string;
}

export interface IDaysTodos {
  todos: IDayTodos[];
}
