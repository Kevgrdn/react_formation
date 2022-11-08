import React, {useRef, useState} from "react";
import {getHeroes} from "../api/heroes";
import HeroCard from "../components/HeroCard/HeroCard";
import {Hero} from "../types/hero";

const Search = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const intRef = useRef<HTMLInputElement>(null);
  const [heroes, setHeroes] = useState<Hero[]>([]);

  const onSubmitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value || "";
    const result = await getHeroes(name);
    setHeroes(result);
  };
  return (
    <section>
      <h1>Search</h1>
      <form onSubmit={onSubmitHandler}>
        <fieldset className="">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" ref={nameRef} />
        </fieldset>
        <fieldset>
          <label htmlFor="int">Intelligence</label>
          <input type="range" id="int" name="int" ref={intRef} />
        </fieldset>
        <button>Search</button>
      </form>
      <div className="flex flex-wrap justify-center gap-6">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </section>
  );
};

export default Search;
