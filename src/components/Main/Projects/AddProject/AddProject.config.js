import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import IconButtonComponent from "../../../common/IconButton/IconButtonComponent";

export const dialogDataHeader = [
  {
    label: <AddCircleOutlineIcon />,
    accessor: "AddIcon",
    operation: [],
  },
  {
    label: "Create Project",
    accessor: "title",
    operation: [],
  },
  {
    label: <IconButtonComponent title="Close" icon={<CloseIcon />} />,
    accessor: "CloseIcon",
    operation: ["click"],
  },
];

export const dialogDataFooter = [
  {
    label: "Cancel",
    accessor: "cancelButton",
    operation: ["click"],
    type: "button",
    variant: "outlined",
    size: "small",
  },
  {
    label: "Save",
    accessor: "addButton",
    operation: ["click"],
    type: "button",
    variant: "contained",
    size: "small",
  },
];

export const dialogStructureHeader = [
  {
    id: 1,
    size: 0.5,
    component: "label",
    accessor: "AddIcon",
    styles: {
      display: "flex",
    },
  },
  {
    id: 2,
    size: 11,
    component: "label",
    accessor: "title",
    styles: {
      paddingLeft: "5px",
    },
  },
  {
    id: 31,
    size: 0.5,
    component: "label",
    accessor: "CloseIcon",
    styles: {
      cursor: "pointer",
    },
  },
];

export const dialogStructureFooter = [
  {
    id: 1,
    component: "label",
    accessor: "cancelButton",
    type: "button",
  },
  {
    id: 2,
    component: "label",
    accessor: "addButton",
    type: "submit",
  },
];

export const FormConfig = [
  {
    id: 1,
    type: "input",
    accessor: "title",
    label: "Project Title",
    required: true,
    size: "small",
    xs: 10,
    placeholder: "Enter Project Title",
    name: "title",
    fieldType: "text"
  },
  {
    id: 2,
    type: "input",
    accessor: "description",
    label: "Description",
    required: true,
    size: "small",
    xs: 10,
    placeholder: "Enter Project Description",
    name: "description",
    multiline: true,
    rows: 5,
    fieldType: "text"
  },
];
