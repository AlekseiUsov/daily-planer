// types
import { THolidaysResponce } from "../types/types";

const holidaysAPI = "https://date.nager.at/api/v2/PublicHolidays/";

export const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function getHolidays(year: number) {
  return fetch(`${holidaysAPI}${year}/RU`).then((res) =>
    checkResponse<THolidaysResponce>(res)
  );
}
