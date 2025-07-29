import { useState } from "react";
import { FormStyles } from "../styles";
import ModalWindow from "./ModalWindow";
import Button from "./Button";

interface UserFormProps {
  onClose: () => void;
}

function UserForm({ onClose }: UserFormProps) {
  const [isOpen, setOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    nic: "",
    address: "",
    username: "",
    password: "",
    userRoleId: "",
  });

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

  return (
    <>
      {isOpen && (
        <ModalWindow>
          <div>
            <h1 className="text-xl font-bold mb-2">User</h1>

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
                  {userRoles.map((role) => (
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
              <Button variant="primary" onClick={onClickClose}>
                Save
              </Button>
            </div>
          </div>
        </ModalWindow>
      )}
    </>
  );
}

const userRoles = [
  { id: "1", name: "ADMIN" },
  { id: "2", name: "OWNER" },
  { id: "3", name: "WORKER" },
];

export default UserForm;
