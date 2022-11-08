import {useLoaderData, useParams} from "react-router-dom";
import HeroCard from "../components/HeroCard/HeroCard";
import {Hero} from "../types/hero";

function HeroDetails() {
  const hero = useLoaderData() as Hero;

  return (
    <section className="flex flex-col justify-center content-center">
      <h1>Hero Details</h1>

      <HeroCard hero={hero} />
    </section>
  );
}

export default HeroDetails;
