import { PokemonClient, Pokemon } from "pokenode-ts";
import { GetServerSideProps } from "next";
import _ from "lodash";
import { IconChevronLeft } from "@tabler/icons";
import DarkModeToggle from "../../components/DarkModeToggle";
import PokemonCard, { capitalizeWord } from "../../components/PokemonCard";
import { Accordion, createStyles } from "@mantine/core";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => {
  const isDarkMode = theme.colorScheme === "dark" ? true : false;
  return {
    item: {
      backgroundColor: isDarkMode ? "#4b4343" : "#fff",
      borderRadius: "0.75rem",
      border: "1px solid #fff",
      margin: "1rem 0",
      boxShadow: isDarkMode ? "" : "0 0 7px 1px rgba(74,74,74,0.2)",
      color: isDarkMode ? "#fff" : "#000",
      button: {
        "&[data-active]": {
          color: isDarkMode ? "#fff" : "#367aac",
        },
      },
    },
    chevron: {
      color: isDarkMode ? "#fff" : "#367aac",
    },
  };
});

export default function PokemonPage({
  pokemon,
  randomPokemon,
}: {
  pokemon: Partial<Pokemon>;
  randomPokemon: Partial<Pokemon>[];
}) {
  const router = useRouter();
  const { classes } = useStyles();

  if (pokemon === undefined) {
    return (
      <div>Mistake rendering pokemon. See url for clue about which one</div>
    );
  }

  return (
    <div className="flex flex-col max-w-6xl mx-auto py-10">
      <div className="flex flex-col sm:grid sm:grid-cols-[minmax(0,1fr),auto,minmax(0,1fr)] grow dark:text-white">
        <div>
          <button
            onClick={() => router.back()}
            className="btn gap-2 bg-blue-pokemon hover:bg-white hover:text-blue-pokemon hover:underline w-40 h-10 hover:border hover:border-blue-pokemon dark:bg-white dark:text-blue-pokemon normal-case"
          >
            <IconChevronLeft />
            Back
          </button>
        </div>
        <div className="grow flex flex-col mb-8">
          <img
            className="w-full max-w-md rounded-xl bg-blue-pokemon self-center"
            src={pokemon.sprites?.front_shiny as string}
            alt="Sunset in the mountains"
          />
          <div className="font-bold text-base my-3 self-center">
            {pokemon.name?.toLocaleUpperCase()}
          </div>
          <div className="flex justify-between gap-5 text-sm">
            <div>Height: {pokemon.height}</div>
            <div>Wight: {pokemon.weight}</div>
            <div>Base experience: {pokemon.base_experience}</div>
            <div>Default: {pokemon.is_default?.toString()}</div>
            <div>Order: {pokemon.order}</div>
            <div>Species: {pokemon.species?.name}</div>
          </div>
        </div>
        <div className="justify-self-end">
          <DarkModeToggle />
        </div>
      </div>
      <div>
        <Accordion
          classNames={{
            item: classes.item,
            chevron: classes.chevron,
          }}
        >
          <Accordion.Item value="abilites">
            <Accordion.Control>Abilities</Accordion.Control>
            <Accordion.Panel>
              {pokemon.abilities?.map((item) => (
                <div key={item.ability.name} className="pl-4">
                  <span className="text-blue-pokemon dark:text-white">•</span>{" "}
                  {capitalizeWord(item.ability.name)}
                </div>
              ))}
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="forms">
            <Accordion.Control>Forms</Accordion.Control>
            <Accordion.Panel>
              {pokemon.forms?.map((form) => (
                <div key={form.name} className="pl-4">
                  <span className="text-blue-pokemon dark:text-white">•</span>{" "}
                  {capitalizeWord(form.name)}
                </div>
              ))}
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="types">
            <Accordion.Control>Types</Accordion.Control>
            <Accordion.Panel>
              {pokemon.types?.map((item) => (
                <div key={item.type.name} className="flex gap-8 pl-4">
                  <div>
                    <span className="text-blue-pokemon dark:text-white">•</span>{" "}
                    Name: {capitalizeWord(item.type.name)}
                  </div>
                  <div>Slot: {item.slot}</div>
                </div>
              ))}
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="game_indicies">
            <Accordion.Control>Game indices</Accordion.Control>
            <Accordion.Panel>
              {pokemon.game_indices?.map((gi) => (
                <div key={gi.version.name} className="flex gap-2 pl-4">
                  <div>
                    <span className="text-blue-pokemon dark:text-white">•</span>{" "}
                    Game Index: {capitalizeWord(gi.game_index.toString())}
                  </div>
                  <div>Version: {capitalizeWord(gi.version.name)}</div>
                </div>
              ))}
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="stats">
            <Accordion.Control>Stats</Accordion.Control>
            <Accordion.Panel>
              {pokemon.stats?.map((stat) => (
                <div
                  key={stat.stat.name}
                  className="grid grid-cols-3 w-1/2 pl-4"
                >
                  <div>
                    <span className="text-blue-pokemon dark:text-white">•</span>{" "}
                    Name: {capitalizeWord(stat.stat.name)}
                  </div>
                  <div>Effort: {stat.effort.toString()}</div>
                  <div>Base Stat: {stat.base_stat.toString()}</div>
                </div>
              ))}
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="moves">
            <Accordion.Control>Moves</Accordion.Control>
            <Accordion.Panel>
              {pokemon.moves?.map((m) => (
                <div key={m.move.name} className="pb-5 pl-4">
                  <div className="font-bold text-sm">
                    <span className="text-blue-pokemon dark:text-white">•</span>{" "}
                    Move: {capitalizeWord(m.move.name)}
                  </div>
                  <div className="pl-3 ">Version Group Details: </div>
                  <div className="pl-3 grid grid-cols-5 gap-5">
                    {m.version_group_details.map((item, index) => (
                      <div key={index}>
                        <div>
                          Learned At Level: {item.level_learned_at.toString()}
                        </div>
                        <div>
                          Move Learn Method:{" "}
                          {capitalizeWord(item.move_learn_method.name)}
                        </div>
                        <div>
                          Version Group:{" "}
                          {capitalizeWord(item.version_group.name)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="self-center text-2xl font-bold my-10 dark:text-white">
        You Might Also Like
      </div>
      <div className="self-center grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {randomPokemon.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  res,
  req,
  query,
}) => {
  // Enabled cache control
  // 'public', because there is no sensitive information
  // 's-maxage' 10mins before the cache is considered stale,
  // 'stale-while-revalidate' stale version available for the next 10 mins after it becomes stale
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=1200"
  );

  try {
    if (query.qPokemonName === undefined)
      throw Error("No pokemon by that name");

    const pokemon = await getPokemonDataByName(query.qPokemonName as string);

    const randomPokemon = await getRandomPokemonSlice(3);

    return {
      props: {
        pokemon,
        randomPokemon,
      },
    };
  } catch (ex) {
    return { props: { errorMsg: `Something went wrong! ${ex}` } };
  }
};

const getPokemonDataByName = async (name: string) => {
  const api = new PokemonClient({
    cacheOptions: { maxAge: 1000 * 60 * 60 * 24 * 7 },
  });
  const pokemon = await api.getPokemonByName(name);

  return _.pick(pokemon, [
    "id",
    "name",
    "abilities",
    "weight",
    "height",
    "sprites.front_shiny",
    "order",
    "is_default",
    "species",
    "base_experience",
    "types",
    "forms",
    "game_indices",
    "stats",
    "moves",
  ]);
};

const getRandomPokemonSlice = async (amount: number) => {
  const randomOffset = generateRandomNumber(amount);

  const api = new PokemonClient({
    cacheOptions: { maxAge: 1000 * 60 * 60 * 24 * 7 },
  });

  const pokemonList = await api.listPokemons(randomOffset, amount);

  let pokemon = await Promise.all(
    pokemonList.results.map(async (pokemon) => getPokemonData(pokemon.name))
  );

  return pokemon;
};

const getPokemonData = async (name: string) => {
  const api = new PokemonClient({
    cacheOptions: { maxAge: 1000 * 60 * 60 * 24 * 7 },
  });
  const pokemon = await api.getPokemonByName(name);
  return _.pick(pokemon, [
    "id",
    "name",
    "abilities",
    "weight",
    "height",
    "sprites.front_shiny",
  ]);
};

const generateRandomNumber = (amount: number): number => {
  return Math.floor(Math.random() * (1154 - 3));
};
