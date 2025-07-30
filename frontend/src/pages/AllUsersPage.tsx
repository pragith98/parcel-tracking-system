import { useDispatch, useSelector } from "react-redux";
import { TableStyles } from "../styles";
import type { AppDispatch, RootState } from "../store/store";
import { useEffect, useState, type MouseEvent } from "react";
import { UserEvents } from "../constants/user-events";
import { getUsers, removeUser, selectUserById } from "../store/user.slice";
import Alert from "../components/Alert";
import UserForm from "../components/UserForm";
import Button from "../components/Button";

function AllUsersPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, error } = useSelector((state: RootState) => state.user);
  const { currentUserEvent } = useSelector(
    (state: RootState) => state.userEvent
  );
  const [isFormOpen, setFormOpen] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (currentUserEvent === UserEvents.OPEN_USER_FORM) {
      onTriggerOpenForm();
    }
  }, [currentUserEvent]);

  const onTriggerOpenForm = () => {
    setFormOpen(true);
  };

  const onClickSelectItem = (id: string) => {
    dispatch(selectUserById(id));
    onTriggerOpenForm();
  };

  const onClickDelete = (id: string, event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(removeUser(id));
  };

  return (
    <div>
      {error && <Alert type="ERROR" message={error} />}

      <table className={TableStyles.table}>
        <thead className={TableStyles.header}>
          <tr>
            <th scope="col" className={TableStyles.headerRow}>
              <span>Name</span>
            </th>

            <th scope="col" className={TableStyles.headerRow}>
              <span>Email</span>
            </th>

            <th scope="col" className={TableStyles.headerRow}>
              <span>Telephone</span>
            </th>

            <th scope="col" className={TableStyles.headerRow}>
              <span>NIC</span>
            </th>

            <th scope="col" className={TableStyles.headerRow}>
              <span>Role</span>
            </th>

            <th scope="col" className={TableStyles.headerRow}></th>
          </tr>
        </thead>

        <tbody className={TableStyles.body}>
          {list.map((item) => (
            <tr
              className={TableStyles.row}
              key={item.id}
              onClick={() => onClickSelectItem(item.id)}
            >
              <td className={TableStyles.data}>
                <span>{item.name}</span>
              </td>

              <td className={TableStyles.data}>
                <span>{item.email}</span>
              </td>

              <td className={TableStyles.data}>
                <span>{item.telephone}</span>
              </td>

              <td className={TableStyles.data}>
                <span>{item.nic}</span>
              </td>

              <td className={TableStyles.data}>
                <span>{item.userRole.name}</span>
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

      {isFormOpen && <UserForm onClose={() => setFormOpen(false)} />}
    </div>
  );
}

export default AllUsersPage;
