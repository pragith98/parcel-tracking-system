import { useDispatch, useSelector } from "react-redux";
import { TableStyles } from "../styles";
import type { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import Alert from "../components/Alert";
import { getUserRoles, removeUserRole } from "../store/user-role.slice";
import Button from "../components/Button";

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

  const onClickDelete = (id: string) => {
    dispatch(removeUserRole(id));
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

            <th scope="col" className={TableStyles.headerRow}></th>
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

              <td className={TableStyles.data}>
                <div className="w-20">
                  <Button
                    variant="danger"
                    onClick={() => onClickDelete(item.id)}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserRolesPage;
