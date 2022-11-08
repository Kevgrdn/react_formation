import {Hero} from "../types/hero";
import {BASE_URL, fetcher} from "./fetcher";

export const getHeroes = (name: string) => {
  return fetcher
    .get<Hero[]>(BASE_URL + "/heroes?name_like=" + name)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error("Err", err.message);
    });
};
export const getHeroById = (id: string) => {
  return fetcher
    .get<Hero>(BASE_URL + "/heroes/" + id)
    .then((res) => res.data)
    .catch((err) => {
      throw new Error("Err", err.message);
    });
};
