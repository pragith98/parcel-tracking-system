import { MdInventory } from "react-icons/md";

function Header() {
  const companyName = "Flash Delivers";
  const currentPageTitle = "All Parcels";
  const userName = "Kasun";

  const getUsername = () => {
    return userName.slice(0, 2).toUpperCase();
  };

  return (
    <nav className="flex flex-col">
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
            {companyName}
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

      <div className="h-10 px-3 flex items-center gap-3 shadow">
        <MdInventory size={20} className="text-gray-500" />
        <h1 className="text-gray-800 font-semibold text-xl">
          {currentPageTitle}
        </h1>
      </div>
    </nav>
  );
}

export default Header;
