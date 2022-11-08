import {useEffect, useReducer, useState} from "react";
import {BASE_URL, fetcher} from "../api/fetcher";
import {ActionNames, useSearchHeroReducer} from "../reducers/reducer.hero";
import {Hero} from "../types/hero";

type State = {
  hero: Hero | null;
  isLoading: boolean;
  error: string;
};

const useSearchHero = (id: string) => {
  const initState: State = {
    hero: null,
    error: "",
    isLoading: true,
  };

  const [{error, hero, isLoading}, dispatch] = useReducer(useSearchHeroReducer, initState);

  useEffect(() => {
    fetcher
      .get<Hero>(BASE_URL + "/heroes/" + id)
      .then((res) => {
        dispatch({type: ActionNames.SET_HERO, payload: res.data});
      })
      .catch((err) => {
        dispatch({type: ActionNames.SET_ERROR, payload: err.message});
      });
  }, []);

  return {hero, error, isLoading};
};

export {useSearchHero};
