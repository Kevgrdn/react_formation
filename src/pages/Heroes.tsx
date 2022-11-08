import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {Hero} from "../types/hero";
import Spinner from "../components/Spinner/Spinner";
import HeroLabel from "../components/HeroLabel/HeroLabel";
import {useNavigate, useSearchParams} from "react-router-dom";

function Heroes() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const mountedRef = useRef(false);
  const [selectedLetter, setSelectedLetter] = useState(searchParams.get("q") || "A");
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    if (mountedRef.current) {
      console.log("Uniquement mise a jour de selectedLetter");
    }
    if (error) {
      setError("");
    }

    axios
      .get(`http://localhost:4000/heroes?name_like=^${selectedLetter}`, {signal: controller.signal})
      .then((res) => {
        setHeroes(res.data);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
    return () => {
      controller.abort();
    };
  }, [selectedLetter]);

  mountedRef.current = true;

  const letters = [];
  for (let index = 65; index < 91; index++) {
    letters.push(String.fromCharCode(index));
  }

  const onClickLetter = (letter: string) => {
    if (letter !== selectedLetter) {
      setSearchParams({
        q: letter,
      });
      setSelectedLetter(letter);
      setLoading(true);
    }
  };

  return (
    <>
      <ul className="flex justify-center gap-2 font-semibold text-xl">
        {letters.map((letter: string) => {
          return (
            <li
              className={selectedLetter === letter ? "text-red-600" : ""}
              key={letter}
              onClick={() => onClickLetter(letter)}
            >
              {letter}
            </li>
          );
        })}
      </ul>
      {error && <p className="text-red-500">Houston, we have a problem: {error}</p>}
      <p>Vous avez cliqué sur {selectedLetter}</p>
      {loading === true ? (
        <Spinner />
      ) : (
        heroes.map((hero: Hero) => {
          return <HeroLabel key={hero.id} id={hero.id} name={hero.name} onClick={() => navigate(hero.id)} />;
        })
      )}
    </>
  );
}

export default Heroes;
