export interface ITodo {
  day: number;
  dayName: string | null;
  month: string;
  monthIndex: number;
  year: number;
  listTodos: string[];
}

export interface ITodos {
  todos: ITodo[];
}
