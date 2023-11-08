export const holidays = [
  { day: 31, month: "Декабрь", name: "Новый год" },
  { day: 1, month: "Январь", name: "Новый год" },
  { day: 2, month: "Январь", name: "Новогодние праздники" },
  { day: 3, month: "Январь", name: "Новогодние праздники" },
  { day: 4, month: "Январь", name: "Новогодние праздники" },
  { day: 5, month: "Январь", name: "Новогодние праздники" },
  { day: 6, month: "Январь", name: "Новогодние праздники" },
  { day: 7, month: "Январь", name: "Рождество Христово" },
  { day: 23, month: "Февраль", name: "День защитника Отечества" },
  { day: 8, month: "Март", name: "Международный женский день" },
  { day: 1, month: "Май", name: "Праздник Весны и Труда" },
  { day: 9, month: "Май", name: "День Победы" },
  { day: 12, month: "Июнь", name: "День России" },
  { day: 4, month: "Ноябрь", name: "День народного единства" },
];

export const todos = [];

export const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export const daysOfWeek: string[] = ["Пн", "Вт", "Ср", "Чт", "Пт", "Cб", "Вс"];

export const storage = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos") as string)
  : [];
