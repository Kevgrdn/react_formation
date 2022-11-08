import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {BASE_URL, fetcher} from "../api/fetcher";
import Spinner from "../components/Spinner/Spinner";
import {Hero} from "../types/hero";

function HeroDetails() {
  const {id} = useParams();
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

  return (
    <section>
      <h1>Hero Details</h1>
      {isLoading && <Spinner />}
      {error && <p className="text-red-500">{error}</p>}
      {hero && (
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
          <div className="h-96 overflow-hidden relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src={hero?.image.url}
              alt={`Illustration of ${hero?.biography["full-name"] || hero?.name}`}
            />
          </div>
          <div className="px-6 py-2">
            <p className="font-bold text-xl">
              {hero?.name} <span className="text-gray-600 text-base">#{hero?.id}</span>
            </p>
            <p className="text-lg mb-2">{hero?.biography["full-name"]}</p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa voluptas iste laboriosam neque, similique
              qui.
            </p>
          </div>
          <div className="px-6 py-2">
            <span className="inline-block bg-blue-200 text-blue-700 px-3 py-1 text-xs my-1 mx-2 rounded-lg font-semibold">
              intelligence: {hero?.powerstats.intelligence}
            </span>
            <span className="inline-block bg-red-200 text-red-700 px-3 py-1 text-xs my-1 mx-2 rounded-lg font-semibold">
              combat: {hero?.powerstats.combat}
            </span>
            <span className="inline-block bg-green-200 text-green-700 px-3 py-1 text-xs my-1 mx-2 rounded-lg font-semibold">
              durability: {hero?.powerstats.durability}
            </span>
            <span className="inline-block bg-purple-200 text-purple-700 px-3 py-1 text-xs my-1 mx-2 rounded-lg font-semibold">
              power: {hero?.powerstats.power}
            </span>
            <span className="inline-block bg-amber-200 text-amber-700 px-3 py-1 text-xs my-1 mx-2 rounded-lg font-semibold">
              speed: {hero?.powerstats.speed}
            </span>
            <span className="inline-block bg-teal-200 text-teal-700 px-3 py-1 text-xs my-1 mx-2 rounded-lg font-semibold">
              strength: {hero?.powerstats.strength}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}

export default HeroDetails;
