import { MdInventory } from "react-icons/md";
import type { MainMenuItem } from "../types/main-menu.type";
import { MdVerifiedUser } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { MdSettings } from "react-icons/md";

export const MainMenuItems: MainMenuItem[] = [
  {
    parentId: 1,
    name: "Parcels",
    children: [
      {
        id: 2,
        name: "All Parcels",
        icon: MdInventory,
      },
    ],
  },
  {
    parentId: 10,
    name: "Users",
    children: [
      {
        id: 11,
        name: "All Users",
        icon: MdAccountCircle,
      },
      {
        id: 12,
        name: "User Roles",
        icon: MdManageAccounts,
      },
      {
        id: 13,
        name: "Permissions",
        icon: MdVerifiedUser,
      },
    ],
  },
  {
    parentId: 20,
    name: "Settings",
    children: [
      {
        id: 21,
        name: "Company",
        icon: MdSettings,
      },
    ],
  },
];