import TablePagination from "../components/TablePagination";
import { TableStyles } from "../styles";

function AllUsersPage() {
  return (
    <div className="p-2">
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
}

export default AllUsersPage;
