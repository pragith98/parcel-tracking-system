import TablePagination from "../components/TablePagination";
import { TableStyles } from "../styles";

function UserRolesPage() {
  const getUserRoles = () => {
    let count = 0;
    return userRoles.map((role) => {
      count++;
      return { ...role, index: count };
    });
  };

  return (
    <div>
      <table className={TableStyles.table}>
        <thead className={TableStyles.header}>
          <tr>
            <th scope="col" className={TableStyles.headerRow}>
              <span>#</span>
            </th>

            <th scope="col" className={TableStyles.headerRow}>
              <span>Name</span>
            </th>
          </tr>
        </thead>

        <tbody className={TableStyles.body}>
          {getUserRoles().map((item) => (
            <tr className={TableStyles.row} key={item.index}>
              <td className={TableStyles.data}>
                <span className="text-xs" >{item.index}</span>
              </td>

              <td className={TableStyles.data}>
                <span>{item.name}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <TablePagination />
    </div>
  );
}

const userRoles = [
  { id: "1", name: "ADMIN" },
  { id: "2", name: "OWNER" },
  { id: "3", name: "WORKER" },
];

export default UserRolesPage;
