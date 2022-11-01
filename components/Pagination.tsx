import Link from "next/link";

const Pagination = ({
  pageSize,
  itemsCount,
  onPageChange,
  currentPage,
}: {
  pageSize: number;
  itemsCount: number;
  onPageChange: (e: React.MouseEvent<HTMLAnchorElement>, page: number) => void;
  currentPage: string;
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  const currentPageNumber = parseInt(currentPage);

  if (pagesCount === 1) return <div></div>;

  return (
    <div className="grid grid-cols-3">
      {currentPageNumber !== 1 ? (
        <Link
          className="hover:text-blue-pokemon dark:text-white hover:underline cursor-pointer hover:scale-105 transition"
          href="/"
          onClick={(e) => onPageChange(e, currentPageNumber - 1)}
        >
          Previous Page
        </Link>
      ) : (
        <span className="text-gray-400 ">Previous Page</span>
      )}
      <div className="justify-self-center dark:text-white">{`${currentPageNumber.toString()} / ${pagesCount}`}</div>
      {currentPageNumber !== pagesCount ? (
        <Link
          className="hover:text-blue-pokemon dark:text-white hover:underline cursor-pointer hover:scale-105 transition"
          href="/"
          onClick={(e) => onPageChange(e, currentPageNumber + 1)}
        >
          Next Page
        </Link>
      ) : (
        <span className="text-gray-400">Next Page</span>
      )}
    </div>
  );
};

export default Pagination;
