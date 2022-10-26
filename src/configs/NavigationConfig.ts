import ic_home from "../assets/img/ic_home.svg";
import ic_find from "../assets/img/ic_find.svg";
import ic_table from "../assets/img/ic_table.svg";
import ic_calendar from "../assets/img/ic_calendar.svg";
import ic_map from "../assets/img/ic_map.svg";
import ic_widget from "../assets/img/ic_widget.svg";
import ic_setting from "../assets/img/ic_setting.svg";

type TNavigation = {
  key: string;
  path: string;
  title: string;
  icon: string;
  submenu: { key: string; path: string; title: string; icon: string }[];
};

const MainNavTree: TNavigation[] = [
  {
    key: "home",
    path: "/",
    title: "Главная",
    icon: ic_home,
    submenu: [],
  },
  {
    key: "find",
    path: "/address",
    title: "Поиск адресов",
    icon: ic_find,
    submenu: [],
  },
  {
    key: "table",
    path: "/",
    title: "Таблицы",
    icon: ic_table,
    submenu: [],
  },
  {
    key: "calendar",
    path: "/",
    title: "Календарь",
    icon: ic_calendar,
    submenu: [],
  },
  {
    key: "map",
    path: "/",
    title: "Карты",
    icon: ic_map,
    submenu: [],
  },
  {
    key: "widget",
    path: "/",
    title: "Виджеты",
    icon: ic_widget,
    submenu: [],
  },
  {
    key: "settings",
    path: "/",
    title: "Настройки",
    icon: ic_setting,
    submenu: [],
  },
];

const navigationConfig = [...MainNavTree];

export default navigationConfig;
