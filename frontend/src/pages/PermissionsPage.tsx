import { useState } from "react";
import UserRoleForm from "../components/UserRoleForm";

function PermissionsPage() {
  const [isFormOpen, setFormOpen] = useState(false);

  const onClickTrigger = () => {
    setFormOpen(true);
  };

  return (
    <div className="relative flex justify-center">
      <button
        onClick={onClickTrigger}
        className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      >
        Open Modal
      </button>

      {isFormOpen ? <UserRoleForm onClose={() => setFormOpen(false)} /> : null}
    </div>
  );
}

export default PermissionsPage;
