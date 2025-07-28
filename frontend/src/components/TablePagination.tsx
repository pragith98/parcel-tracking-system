import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

function TablePagination() {
  return (
    <div className="flex items-center justify-between mt-6">
      <a
        href="#"
        className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 "
      >
        <MdNavigateBefore />

        <span>previous</span>
      </a>

      <a
        href="#"
        className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 "
      >
        <span>Next</span>
        <MdNavigateNext />
      </a>
    </div>
  );
}

export default TablePagination;
