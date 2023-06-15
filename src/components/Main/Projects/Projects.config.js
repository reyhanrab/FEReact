import { MoreHoriz } from "@mui/icons-material";
import IconButtonComponent from "../../common/IconButton/IconButtonComponent";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

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
    label: <IconButtonComponent title="More Actions" icon={<MoreHoriz />} />,
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
    label: <AddCircleOutlineIcon />,
    accessor: "Create Project",
    componentToRender: "createProject",
    styles: {
      icon: {
        display: "flex",
      },
      text: {
        paddingLeft: "5px",
        fontWeight: 400,
      },
    },
  },
];
