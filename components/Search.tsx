import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { useTheme } from "next-themes";

const Search = ({
  setSearchValue,
  searchValue,
}: {
  setSearchValue: (value: string) => void;
  searchValue: string;
}) => {
  const { theme } = useTheme();
  const darkModeIsEnabled = theme === "dark" ? true : false;
  const color = darkModeIsEnabled ? "white" : "#367aac";

  return (
    <>
      <TextInput
        className="shadow-[0_0_7px_1px_rgba(74,74,74,0.2)] border-none w-full sm:max-w-lg"
        icon={<IconSearch size={27} color={color} />}
        placeholder="Search Pokemons"
        onChange={(event) => setSearchValue(event.currentTarget.value)}
        value={searchValue}
      />
    </>
  );
};

export default Search;
