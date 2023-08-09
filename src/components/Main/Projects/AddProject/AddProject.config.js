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
    fieldType: "text",
    accessor: "title",
    label: "Project Title",
    required: true,
    size: "small",
    xs: 10,
    placeholder: "Enter Project Title",
    name: "title",
  },
  {
    id: 2,
    type: "input",
    fieldType: "text",
    accessor: "description",
    label: "Description",
    required: true,
    size: "small",
    xs: 10,
    placeholder: "Enter Project Description",
    name: "description",
    multiline: true,
    rows: 5,
  },
  {
    id: 3,
    type: "date",
    fieldType: "text",
    accessor: "startDate",
    label: "Start Date",
    required: true,
    size: "small",
    xs: 6.2,
    name: "startDate",
    openTo: "year",
    views: ["year", "month", "day"],
    allowSameDateSelection: true,
    maxDate: new Date(),
  },
  {
    id: 4,
    type: "date",
    fieldType: "text",
    accessor: "endDate",
    label: "End Date",
    required: true,
    size: "small",
    xs: 6.2,
    name: "endDate",
    openTo: "year",
    views: ["year", "month", "day"],
    allowSameDateSelection: true,
  },
  {
    id: 5,
    type: "select",
    fieldType: "select",
    accessor: "owner",
    label: "Owner",
    required: true,
    size: "small",
    xs: 6.2,
    name: "owner",
    placeholder: "Select Owner",
    optionLabel: "username",
    optionValue: "_id",
    options: [],
  },
  {
    id: 6,
    type: "select",
    fieldType: "select",
    accessor: "status",
    label: "Status",
    required: true,
    size: "small",
    xs: 6.2,
    name: "status",
    placeholder: "Select Status",
    optionLabel: "name",
    optionValue: "_id",
    options: [],
  },
];
