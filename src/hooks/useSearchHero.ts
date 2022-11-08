import {useEffect, useState} from "react";
import {BASE_URL, fetcher} from "../api/fetcher";
import {Hero} from "../types/hero";

const useSearchHero = (id: string) => {
  const [hero, setHero] = useState<Hero | null>(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetcher
      .get<Hero>(BASE_URL + "/heroes/" + id)
      .then((res) => setHero(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return {hero, error, isLoading};
};

export {useSearchHero};
