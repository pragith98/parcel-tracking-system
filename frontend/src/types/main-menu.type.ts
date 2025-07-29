import type { IconType } from "react-icons";

export interface MainMenuChildrenItem {
  id:     number;
  name:   string;
  icon:   IconType;
  route:  string;
}

export interface MainMenuItem {
  parentId: number;
  name:     string;
  children: MainMenuChildrenItem[];
}