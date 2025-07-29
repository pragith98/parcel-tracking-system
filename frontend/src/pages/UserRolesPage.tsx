import { useDispatch, useSelector } from "react-redux";
import { TableStyles } from "../styles";
import type { AppDispatch, RootState } from "../store/store";
import { useEffect, useState, type MouseEvent } from "react";
import Alert from "../components/Alert";
import { getUserRoles, removeUserRole, selectUserRoleById } from "../store/user-role.slice";
import Button from "../components/Button";
import UserRoleForm from "../components/UserRoleForm";
import { UserEvents } from "../constants/user-events";

function UserRolesPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, error } = useSelector((state: RootState) => state.userRole);
  const { currentUserEvent } = useSelector((state: RootState) => state.userEvent);
  const [isFormOpen, setFormOpen] = useState(false);

  useEffect(() => {
    dispatch(getUserRoles());
  }, [dispatch]);

  useEffect(() => {
    if (currentUserEvent === UserEvents.OPEN_USER_ROLE_FORM) {
      onTriggerOpenForm();
    }
  }, [currentUserEvent]);

  const onTriggerOpenForm = () => {
    setFormOpen(true);
  };

  const formatUserRoles = () => {
    let count = 0;
    return list.map((role) => {
      count++;
      return { ...role, index: count };
    });
  };

  const onClickSelectItem = (id: string) => {
    dispatch(selectUserRoleById(id));
    onTriggerOpenForm();
  }

  const onClickDelete = (
    id: string, 
    event: MouseEvent
  ) => {
    event.preventDefault();
    event.stopPropagation();
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
            <tr
              className={TableStyles.row}
              key={item.index}
              onClick={() => onClickSelectItem(item.id)}
            >
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
                    onClick={(e) => onClickDelete(item.id, e)}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isFormOpen && <UserRoleForm onClose={() => setFormOpen(false)} />}
    </div>
  );
}

export default UserRolesPage;
