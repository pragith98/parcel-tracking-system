import { useEffect, useState } from "react";
import { FormStyles } from "../styles";
import ModalWindow from "./ModalWindow";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { resetSelectedUserRole } from "../store/user-role.slice";

interface UserRoleFormProps {
  onClose: () => void;
}

function UserRoleForm({ onClose }: UserRoleFormProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { current } = useSelector((state: RootState) => state.userRole);
  const [isOpen, setOpen] = useState(true);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
  });

  useEffect(() => {
    if (current) {
      setFormData(current);
    }

    return () => {
      dispatch(resetSelectedUserRole());
    };
  }, [current, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
                  value={formData.name}
                  className={FormStyles.formField}
                  onChange={handleInputChange}
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
