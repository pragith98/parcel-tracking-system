import { MdInventory } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { ROUTE_CONFIG } from "../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { getCompany } from "../store/company.slice";
import Button from "./Button";
import { addUserEvent } from "../store/user-event.slice";

function Header() {
  const location = useLocation();
  const { showAddNew, userEvent } = ROUTE_CONFIG[location.pathname] || {};
  const dispatch = useDispatch<AppDispatch>();
  const { company } = useSelector((state: RootState) => state.company);

  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch]);

  const currentPageTitle = "All Parcels";
  const userName = "Kasun";

  const getUsername = () => {
    return userName.slice(0, 2).toUpperCase();
  };

  const onClickAddNew = () => {
    dispatch(addUserEvent(userEvent));
  };

  return (
    <nav className="flex flex-col">
      {/* Top Header */}
      <div
        className={`
          relative 
          shadow 
        bg-gray-900 
          h-10 
          flex 
          flex-row 
          justify-between 
          px-3
        `}
      >
        <div className="flex flex-row items-center">
          <span className="text-lg font-black text-gray-300">
            {company ? company.name : "company name"}
          </span>
        </div>

        <button
          type="button"
          className="flex items-center focus:outline-none"
          aria-label="toggle profile dropdown"
        >
          <div
            className={`
              w-8 
              h-8 
              overflow-hidden 
              border-2 
            border-gray-400 
              rounded-full 
              flex 
              items-center 
              justify-center
            `}
          >
            <h1 className="text-white font-bold">{getUsername()}</h1>
          </div>
        </button>
      </div>
      {/* End of top header */}

      {/* Bottom Header */}
      <div className="h-12 px-3 flex flex-row items-center shadow justify-between">
        <div className="flex items-center gap-3">
          <MdInventory size={20} className="text-gray-500" />
          <h1 className="text-gray-800 font-semibold text-xl">
            {currentPageTitle}
          </h1>
        </div>

        {showAddNew && (
          <div className="w-35">
            <Button variant="primary" onClick={onClickAddNew}>
              <MdAddCircleOutline size={18} className="mt-1 mr-2" />
              Add new
            </Button>
          </div>
        )}
      </div>
      {/* End of bottom header */}
    </nav>
  );
}

export default Header;
