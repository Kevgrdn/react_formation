import {useQuery} from "@tanstack/react-query";
import React, {useRef, useState} from "react";
import {getHeroes} from "../api/heroes";

type SelectPlayerProps = {
  label: string;
};

const SelectPlayer = ({label}: SelectPlayerProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {data, error, isLoading, refetch} = useQuery(
    ["getHeroes", inputRef.current?.value],
    () => getHeroes(inputRef.current?.value || ""),
    {
      enabled: false,
    }
  );

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const searchedHero = inputRef.current?.value;
    refetch();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor={`player${label}`}>Select player {label} </label>
      <input
        className="border p-2 text-black rounded-lg"
        type="text"
        name={`player${label}`}
        id={`player${label}`}
        ref={inputRef}
      />
      <button className="text-white bg-blue-600 text-lg rounded-lg p-2 mx-2">Search</button>
    </form>
  );
};

function Battle() {
  return (
    <section>
      <h1>Battle</h1>
      <div className="flex justify-center gap-2">
        <SelectPlayer label="one" />
        <SelectPlayer label="two" />
      </div>
    </section>
  );
}

export default Battle;
