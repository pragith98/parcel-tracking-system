import TablePagination from "../components/TablePagination";
import { TableStyles } from "../styles";

function AllParcelsPage() {
  const createTable = () => {
    return (
      <div>
        <table className={TableStyles.table}>
          <thead className={TableStyles.header}>
            <tr>
              <th scope="col" className={TableStyles.headerRow}>
                <span>Name</span>
              </th>

              <th scope="col" className={TableStyles.headerRow}>
                <span>Status</span>
              </th>
            </tr>
          </thead>

          <tbody className={TableStyles.body}>
            <tr className={TableStyles.row}>
              <td className={TableStyles.data}>
                <span>Hello</span>
              </td>

              <td className={TableStyles.data}>
                <span>Hello</span>
              </td>
            </tr>
          </tbody>
        </table>

        <TablePagination />
      </div>
    );
  };

  return (
    <div>
      <div className="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap ">
        <button className={tabActiveStyle}>New / Ongoing Jobs</button>

        <button className={tabStyles}>Completed Jobs</button>
      </div>

      {createTable()}
    </div>
  );
}

const tabActiveStyle = `
  inline-flex 
  items-center 
  h-10 
  px-4 -mb-px 
  text-sm 
  text-center 
  text-blue-600 
  bg-transparent 
  border-b-2 
  border-blue-500 
  sm:text-base  
  whitespace-nowrap 
  focus:outline-none
`;

const tabStyles = `
  inline-flex 
  items-center 
  h-10 
  px-4 -mb-px 
  text-sm 
  text-center 
  text-gray-700 
  bg-transparent 
  border-b-2 
  border-transparent 
  sm:text-base  
  whitespace-nowrap 
  cursor-base 
  focus:outline-none 
  hover:border-gray-400
`;

export default AllParcelsPage;
