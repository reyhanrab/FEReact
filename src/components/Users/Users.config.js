import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { getMenuOptions } from "../common/commonfunctions";
import { DELETEUSER } from "../../actions/Users/ActionCreators";

export const TabsData = [
  {
    id: 1,
    label: "Active",
    component: "activeUsers",
    value: 1,
  },

  {
    id: 2,
    label: "Inactive",
    component: "inactiveUsers",
    value: 2,
  },
];

export const ToolbarData = [
  {
    label: "Users",
    accessor: "users",
  },
  {
    accessor: "tabs",
  },
  {
    label: null,
    accessor: "iconButton",
    operation: ["click"],
  },
];

export const ToolbarStructure = [
  {
    id: 1,
    tag: "div",
    component: "label",
    accessor: "icon",
  },
  {
    id: 2,
    tag: "div",
    component: "label",
    accessor: "users",
    styles: {
      fontWeight: "600",
      fontSize: "16px",
    },
  },
  {
    id: 3,
    tag: "div",
    component: "label",
    accessor: "tabs",
  },
  {
    id: 4,
    tag: "div",
    component: "label",
    accessor: "iconButton",
  },
];

export const PositionedMenuAddItems = [
  {
    id: 1,
    label: getMenuOptions(<AddCircleOutlineIcon />, 'Add Users'),
    componentToRender: "addUser",
  },
];

export const PositionedMenuEditItems = [
  {
    id: 1,
    label: getMenuOptions(<EditOutlinedIcon />, "Edit User"),
    componentToRender: "editUser",
    operation: ["edit"],
  },
  {
    id: 2,
    label: getMenuOptions(<RemoveCircleOutlineOutlinedIcon />, "Delete User"),
    componentToRender: "deleteUser",
    operation: ["disptach"],
    action: (userId) => DELETEUSER(userId),
  },
];
