import { useEffect, useState } from "react";
import { FormStyles } from "../styles";
import ModalWindow from "./ModalWindow";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { addNewUser, resetSelectedUser, updateUser } from "../store/user.slice";
import { addUserEvent } from "../store/user-event.slice";
import { UserEvents } from "../constants/user-events";
import { getUserRoles } from "../store/user-role.slice";

interface UserFormProps {
  onClose: () => void;
}

function UserForm({ onClose }: UserFormProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { current } = useSelector((state: RootState) => state.user);
  const userRoles = useSelector((state: RootState) => state.userRole);
  const [isOpen, setOpen] = useState(true);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    telephone: "",
    nic: "",
    address: "",
    username: "",
    password: "",
    userRoleId: "",
  });

  useEffect(() => {
    if (current) {
      setFormData({
        id: current.id,
        name: current.name,
        email: current.email,
        telephone: current.telephone,
        nic: current.nic,
        address: current.address,
        username: "",
        password: "",
        userRoleId: current.userRole.id,
      });
    }

    dispatch(getUserRoles());

    return () => {
      dispatch(resetSelectedUser());
      dispatch(addUserEvent(UserEvents.NONE));
    };
  }, [current, dispatch]);

  const onClickClose = () => {
    setOpen(false);
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formDataValidate = (): boolean => {
    if (!formData.name.trim()) {
      alert("Company name is required.");
      return false;
    }
    if (!formData.telephone.trim()) {
      alert("Telephone is required.");
      return false;
    }
    if (
      !formData.email.trim() ||
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
    ) {
      alert("A valid email is required.");
      return false;
    }
    if (!formData.address.trim()) {
      alert("Address is required.");
      return false;
    }
    if (!formData.nic.trim()) {
      alert("NIC is required.");
      return false;
    }
    if (!formData.username.trim()) {
      alert("Username is required.");
      return false;
    }
    if (!formData.userRoleId.trim() || formData.userRoleId === "0") {
      alert("User role is required.");
      return false;
    }

    return true;
  };

  const onClickSubmit = () => {
    if (!formDataValidate()) return;

    if (!formData.id && !formData.password.trim()) {
      alert("Password is required.");
      return false;
    }

    if (formData.id) {
      dispatch(
        updateUser({
          id: formData.id,
          name: formData.name,
          email: formData.email,
          telephone: formData.telephone,
          nic: formData.nic,
          address: formData.address,
          username: formData.username,
          userRoleId: formData.userRoleId,
        })
      );
    } else {
      dispatch(addNewUser(formData));
    }

    onClickClose();
  };

  return (
    <>
      {isOpen && (
        <ModalWindow>
          <div>
            <h1 className="text-xl font-bold mb-2">
              {formData.id ? "User" : "Create User"}
            </h1>

            <form className="grid gap-6 mt-4 grid-cols-2 w-full">
              <div>
                <label className={FormStyles.formFieldLabel}>Name</label>
                <input
                  name="name"
                  autoFocus={true}
                  type="text"
                  value={formData.name}
                  className={FormStyles.formField}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className={FormStyles.formFieldLabel}>Email</label>
                <input
                  name="email"
                  type="text"
                  value={formData.email}
                  className={FormStyles.formField}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className={FormStyles.formFieldLabel}>Telephone</label>
                <input
                  name="telephone"
                  type="text"
                  value={formData.telephone}
                  className={FormStyles.formField}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className={FormStyles.formFieldLabel}>NIC</label>
                <input
                  name="nic"
                  type="text"
                  value={formData.nic}
                  className={FormStyles.formField}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className={FormStyles.formFieldLabel}>Address</label>
                <input
                  name="address"
                  type="text"
                  value={formData.address}
                  className={FormStyles.formField}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className={FormStyles.formFieldLabel}>Username</label>
                <input
                  name="username"
                  type="text"
                  value={formData.username}
                  className={FormStyles.formField}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className={FormStyles.formFieldLabel}>Password</label>
                <input
                  name="password"
                  type="text"
                  value={formData.password}
                  className={FormStyles.formField}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className={FormStyles.formFieldLabel}>User Role</label>
                <select
                  name="userRoleId"
                  value={formData.userRoleId}
                  className={FormStyles.formField}
                  onChange={handleSelectChange}
                >
                  <option value="0">-- Select --</option>
                  {userRoles.list.map((role) => (
                    <option value={role.id} key={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </div>

          <div className="mt-5 sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:items-center sm:justify-end w-full gap-5">
              <Button variant="outlined" onClick={onClickClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={onClickSubmit}>
                Save
              </Button>
            </div>
          </div>
        </ModalWindow>
      )}
    </>
  );
}

export default UserForm;
