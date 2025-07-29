import { useState } from "react";
import { FormStyles } from "../styles";
import ModalWindow from "./ModalWindow";
import Button from "./Button";

interface UserRoleFormProps {
  onClose: () => void;
}

function UserRoleForm({ onClose }: UserRoleFormProps) {
  const [isOpen, setOpen] = useState(true);
  const [role, setRole] = useState("");

  const onClickClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <ModalWindow>
          <div className="mt-0 ">
            <h1 className="text-xl font-bold mb-2">User Role</h1>

            <form>
              <div>
                <label className={FormStyles.formFieldLabel}>Role</label>
                <input
                  name="role"
                  autoFocus={true}
                  type="text"
                  value={role}
                  className={FormStyles.formField}
                  onChange={(event) => setRole(event.target.value)}
                />
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

export default UserRoleForm;
