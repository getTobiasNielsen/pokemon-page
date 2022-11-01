import { useState, useEffect } from "react";
import { Select } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

const LimitResults = ({ initialLimit }: { initialLimit: string }) => {
  const [limit, setLimit] = useState<string | null>(() => initialLimit);

  useEffect(() => {
    if (typeof limit === "string") {
      setCookie("limit", limit);
    }
  }, [limit]);

  const router = useRouter();

  const handleLimitChange = (limit: string) => {
    setLimit(limit);
    const path = router.pathname;
    const query = router.query;
    query.limit = limit;
    query.page = "1";
    router.push({
      pathname: path,
      query: query,
    });
  };

  return (
    <Select
      rightSection={<IconChevronDown size={14} />}
      rightSectionWidth={30}
      styles={{ rightSection: { pointerEvents: "none" } }}
      data={[
        { value: "10", label: `Showing 10 results` },
        { value: "20", label: "Showing 20 results" },
        { value: "50", label: "Showing 50 results" },
      ]}
      value={limit}
      onChange={handleLimitChange}
      className="shadow-[0_0_7px_1px_rgba(74,74,74,0.2)] dark:text-gray-400"
    />
  );
};

export default LimitResults;
