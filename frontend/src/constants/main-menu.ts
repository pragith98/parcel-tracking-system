import { MdInventory, MdSpaceDashboard } from "react-icons/md";
import type { MainMenuItem } from "../types/main-menu.type";
import { MdVerifiedUser } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { ROUTES } from "./routes";

export const MainMenuItems: MainMenuItem[] = [
  {
    parentId: 0,
    name: "",
    children: [
      {
        id: 0,
        name: "Dashboard",
        icon: MdSpaceDashboard,
        route: ROUTES.HOME
      },
    ],
  },
  {
    parentId: 1,
    name: "Parcels",
    children: [
      {
        id: 2,
        name: "All Parcels",
        icon: MdInventory,
        route: ROUTES.PARCELS
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
        route: ROUTES.USERS
      },
      {
        id: 12,
        name: "User Roles",
        icon: MdManageAccounts,
        route: ROUTES.USER_ROLES
      },
      {
        id: 13,
        name: "Permissions",
        icon: MdVerifiedUser,
        route: ROUTES.PERMISSIONS
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
        route: ROUTES.COMPANY
      },
    ],
  },
];