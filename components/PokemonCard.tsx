import Link from "next/link";
import { Pokemon } from "pokenode-ts";

export default function PokemonCard({
  pokemon,
}: {
  pokemon: Partial<Pokemon>;
}) {
  const { name, sprites, height, weight, abilities } = pokemon;
  return (
    <div className="h-full w-full rounded-xl shadow-[0_0_7px_1px_rgba(74,74,74,0.2)] p-6 dark:bg-ugly-gray">
      <img
        className="w-full rounded-xl bg-blue-pokemon dark:border"
        src={sprites?.front_shiny as string}
        alt="Sunset in the mountains"
      />
      <div className="flex flex-col gap-1 h-52 min-h-52">
        <h2 className="font-bold text-base my-3 self-center dark:text-white">
          {name?.toLocaleUpperCase()}
        </h2>
        <div className="flex text-gray-700 text-sm justify-between dark:text-white">
          <div className="font-bold">Height</div>
          <div>{height}</div>
        </div>
        <div className="flex text-gray-700 text-sm justify-between dark:text-white">
          <div className="font-bold">Weight</div>
          <div className="">{weight}</div>
        </div>
        <div className="flex grow text-gray-700 text-sm justify-between dark:text-white">
          <div className="font-bold">Abilities</div>
          <div className="flex flex-col">
            {abilities?.map((a) => (
              <span className="self-end" key={a?.slot}>
                {capitalizeWord(a?.ability?.name)}
                <br />
              </span>
            ))}
          </div>
        </div>
        <div className="flex border-t h-9 place-content-center pt-2">
          <Link
            href={`/pokemon/${name}`}
            className="cursor-pointer transition ease-in-out delay-150 text-blue-pokemon border-blue-pokemon dark:border-white text-sm font-extrabold hover:border-b-2 hover:scale-125 dark:text-white"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export function capitalizeWord(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
