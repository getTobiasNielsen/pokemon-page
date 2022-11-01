import { useState, useEffect } from "react";
import { Select } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

const FilterBy = ({ initalFilter }: { initalFilter: string }) => {
  const [filter, setFilter] = useState<string | null>(() => initalFilter);

  useEffect(() => {
    if (typeof filter === "string") {
      setCookie("filter", filter);
    }
  }, [filter]);

  const router = useRouter();

  const handlefilterChange = (filter: string) => {
    setFilter(filter);
    const path = router.pathname;
    const query = router.query;
    query.filter = filter;
    router.push({
      pathname: path,
      query: query,
    });
  };

  return (
    <Select
      placeholder="Sort Pokemon"
      rightSection={<IconChevronDown size={14} />}
      rightSectionWidth={30}
      styles={{ rightSection: { pointerEvents: "none" } }}
      data={[
        { value: "asc", label: `From A-Z` },
        { value: "desc", label: "From Z-A" },
        { value: "height", label: "By Height" },
        { value: "weight", label: "By Weight" },
      ]}
      value={filter}
      onChange={handlefilterChange}
      className="shadow-[0_0_7px_1px_rgba(74,74,74,0.2)] dark:text-gray-400"
    />
  );
};

export default FilterBy;
