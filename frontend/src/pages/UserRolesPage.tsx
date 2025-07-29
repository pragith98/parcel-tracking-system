import { useDispatch, useSelector } from "react-redux";
import { TableStyles } from "../styles";
import type { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import Alert from "../components/Alert";
import { getUserRoles } from "../store/user-role.slice";

function UserRolesPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, error } = useSelector((state: RootState) => state.userRole);

  useEffect(() => {
    dispatch(getUserRoles());
  }, [dispatch]);

  const formatUserRoles = () => {
    let count = 0;
    return list.map((role) => {
      count++;
      return { ...role, index: count };
    });
  };

  return (
    <div>
      {error && <Alert type="ERROR" message={error} />}

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
          {formatUserRoles().map((item) => (
            <tr className={TableStyles.row} key={item.index}>
              <td className={TableStyles.data}>
                <span className="text-xs">{item.index}</span>
              </td>

              <td className={TableStyles.data}>
                <span>{item.name}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserRolesPage;
