import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type PaginationIProp = {
  page: number;
  pageSize: number;
  setPage: (pageNumb: number) => void;
};
export const Pagination: React.FC<PaginationIProp> = (
  props: PaginationIProp
) => {
  const total = useSelector((state: any) => state.system.customerData.total);
  const { page, pageSize, setPage } = props;
  const totalPage = Math.ceil(total / pageSize) - 1;
  const start = page * pageSize + 1;
  const end = start + pageSize - 1 > total ? total : start + pageSize - 1;

  const [listPage, setListPage] = useState<Array<number>>([]);

  useEffect(() => {
    let i = Math.floor(page / 5);
    const startPage = i * 5;
    const endPage = i + 4 > totalPage ? totalPage : i + 4;
    let listPages = [];
    for (let index = startPage; index <= endPage; index++) {
      listPages.push(index);
    }
    setListPage(listPages);
  }, []);

  return (
    <div className="pt-5">
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            {" "}
            Previous{" "}
          </button>
          <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            {" "}
            Next{" "}
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing
              <span className="font-medium">{` ${start} `}</span>
              to
              <span className="font-medium">{` ${end} `}</span>
              of
              <span className="font-medium">{` ${total} `}</span>
              results
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                onClick={() => setPage(page - 1)}
                disabled={page === 0}
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {listPage.map((index) => (
                <button
                  key={`page-${index}`}
                  onClick={() => setPage(index)}
                  className={`z-10 bg-gray-50 ${
                    index === page
                      ? "bg-indigo-500 text-white"
                      : "border-gray-300 text-gray-500 hover:bg-indigo-50"
                  } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
                >
                  {` ${index + 1} `}
                </button>
              ))}

              <button
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                onClick={() => setPage(page + 1)}
                disabled={page === totalPage}
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
