import {useQuery} from "@tanstack/react-query";
import React, {useRef, useState} from "react";
import {getHeroes} from "../api/heroes";
import HeroLabel from "../components/HeroLabel/HeroLabel";

type SelectPlayerProps = {
  label: string;
  onSelect?: any;
};

const SelectPlayer = ({label, onSelect}: SelectPlayerProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {data, error, isLoading, refetch} = useQuery(
    ["getHeroes", inputRef.current?.value],
    () => getHeroes(inputRef.current?.value || ""),
    {
      enabled: !!inputRef.current?.value,
      staleTime: Infinity,
    }
  );

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    refetch();
  };

  return (
    <>
      <form className="flex flex-col" onSubmit={onSubmitHandler}>
        <label className="uppercase font-thin tracking-widest text-lg" htmlFor={`player${label}`}>
          Select player {label}{" "}
        </label>
        <input
          className="border p-2 text-black rounded-lg"
          type="text"
          name={`player${label}`}
          id={`player${label}`}
          ref={inputRef}
        />
        <button className="">Search</button>
      </form>
      <div className="flex flex-col">
        {data &&
          data.length &&
          data.map((hero) => (
            <HeroLabel key={hero.id} id={hero.id} name={hero.name} onClick={() => onSelect(hero.id)} />
          ))}
      </div>
    </>
  );
};

function Battle() {
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);

  return (
    <section>
      <h1>Battle</h1>
      <div className="flex justify-center gap-2">
        <SelectPlayer label="one" onSelect={setPlayerOne} />
        <SelectPlayer label="two" onSelect={setPlayerTwo} />
      </div>
      {playerOne && playerTwo && (
        <div className="">
          <button>Battle</button>
        </div>
      )}
    </section>
  );
}

export default Battle;
