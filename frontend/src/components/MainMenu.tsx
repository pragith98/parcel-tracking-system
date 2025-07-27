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
        px-5 
        py-8 
        overflow-y-auto 
      bg-white 
        border-r 
        rtl:border-r-0 
        rtl:border-l 
      dark:bg-gray-900 
      dark:border-gray-700
      `}
    >
      <div className="flex flex-row justify-between">
        <img className="w-auto h-7" src="logo.svg" />
        <h1 className="text-white text-xl font-black">PARCEL TRACKER</h1>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="-mx-3 space-y-6 ">
          {menuItems.map((item) => MenuItem(item))}
        </nav>
      </div>
    </aside>
  );
}

function MenuItem(menuItem: MainMenuItem) {
  return (
    <div className="space-y-3 " key={menuItem.parentId}>
      <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
        {menuItem.name}
      </label>

      {menuItem.children.map((children) => (
        <a
          className={`
            flex 
            items-center 
            px-3 
            py-2 
            text-gray-600 
            transition-colors 
            duration-300 
            transform 
            rounded-lg 
          dark:text-gray-200 
          hover:bg-gray-100 
          dark:hover:bg-gray-800 
          dark:hover:text-gray-200 
          hover:text-gray-700
          `}
          href="#"
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
