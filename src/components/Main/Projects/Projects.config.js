import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { getMenuOptions } from "../../common/commonfunctions";

export const TabsData = [
  {
    id: 1,
    label: "Current",
    component: "currentProjects",
    value: 1,
  },

  {
    id: 2,
    label: "Historical",
    component: "historicalProjects",
    value: 2,
  },
];

export const ToolbarData = [
  {
    label: "Projects",
    accessor: "projects",
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
    accessor: "projects",
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
    label: getMenuOptions(<AddCircleOutlineIcon />, 'Create Project'),
    componentToRender: "createProject",
  },
];

export const PositionedMenuEditItems = [
  {
    id: 1,
    label: getMenuOptions(<EditOutlinedIcon />, "View Project"),
    componentToRender: "projectDetails",
    operation: ["view"],
  },
  {
    id: 2,
    label: getMenuOptions(<EditOutlinedIcon />, "Edit Project"),
    componentToRender: "editProject",
    operation: ["edit"],
  },
];
