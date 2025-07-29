import { useNavigate } from "react-router-dom";
import { MainMenuItems } from "../constants/main-menu";
import type { MainMenuItem } from "../types/main-menu.type";

function MainMenu() {
  const menuItems = MainMenuItems;

  return (
    <aside
      className={`
        flex 
        flex-col 
        w-64 
        h-screen 
        overflow-y-auto 
        border-r 
        rtl:border-r-0 
        rtl:border-l 
      bg-gray-900 
      border-gray-700
      `}
    >
      <div className="h-10 border-b border-b-gray-700 px-5 flex items-center">
        <h1 className="text-white text-xl font-black">PARCEL TRACKER</h1>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6 px-5 ">
        <nav className="-mx-3 space-y-6 ">
          {menuItems.map((item) => MenuItem(item))}
        </nav>
      </div>
    </aside>
  );
}

function MenuItem(menuItem: MainMenuItem) {
  const navigate = useNavigate();

  const onClickNavigate = (route: string) => {
    navigate(route);
  };

  return (
    <div className="space-y-3 " key={menuItem.parentId}>
      {menuItem.name.length > 0 ? (
        <label className="px-3 text-xs uppercase text-gray-400">
          {menuItem.name}
        </label>
      ) : null}

      {menuItem.children.map((children) => (
        <a
          className={`
            flex 
            items-center 
            px-3 
            py-2 
            transition-colors 
            duration-300 
            transform 
            rounded-lg 
          text-gray-200 
          hover:bg-gray-800 
          hover:text-gray-200 
          `}
          onClick={() => onClickNavigate(children.route)}
          key={children.id}
        >
          {<children.icon />}

          <span className="mx-2 text-sm font-medium">{children.name}</span>
        </a>
      ))}
    </div>
  );
}

export default MainMenu;
