import Search from "../components/Search";
import FilterBy from "./FilterBy";
import LimitResults from "./LimitResults";

const TopBar = ({
  initialLimit,
  initalFilter,
  setSearchValue,
  searchValue,
}: {
  initialLimit: string;
  initalFilter: string;
  setSearchValue: (value: string) => void;
  searchValue: string;
}) => {
  return (
    <div className="py-3 sm:py-6 shadow-[0_0_7px_1px_rgba(74,74,74,0.2)]">
      <div className="h-full max-w-6xl mx-auto flex gap-5 flex-col sm:flex-row justify-between items-center px-5 sm:px-0">
        <LimitResults initialLimit={initialLimit} />
        <Search setSearchValue={setSearchValue} searchValue={searchValue} />
        <FilterBy initalFilter={initalFilter} />
      </div>
    </div>
  );
};

export default TopBar;
