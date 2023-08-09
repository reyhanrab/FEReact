import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import IconButtonComponent from "../../common/IconButton/IconButtonComponent";

export const dialogDataHeader = [
  {
    label: <AddCircleOutlineIcon />,
    accessor: "addIcon",
    operation: [],
  },
  {
    label: "Add User",
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
    accessor: "editButton",
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
    accessor: "addIcon",
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
    accessor: "editButton",
    type: "submit",
  },
];

export const FormConfig = [
  {
    id: 1,
    type: "input",
    fieldType: "text",
    accessor: "firstname",
    label: "Firstname",
    required: true,
    size: "small",
    xs: 10,
    placeholder: "Enter Firstname",
    name: "firstname",
  },
  {
    id: 2,
    type: "input",
    fieldType: "text",
    accessor: "lastname",
    name: "lastname",
    label: "Lastname",
    required: true,
    size: "small",
    xs: 10,
    placeholder: "Enter Lastname",
  },
  {
    id: 3,
    type: "input",
    fieldType: "email",
    accessor: "email",
    name: "email",
    label: "Email Adress",
    required: true,
    size: "small",
    xs: 10,
    placeholder: "Enter Email Adress",
  },
  {
    id: 4,
    type: "input",
    fieldType: "text",
    accessor: "username",
    name: "username",
    label: "Username",
    required: true,
    size: "small",
    xs: 10,
    placeholder: "Enter Username",
  },
  {
    id: 5,
    type: "input",
    fieldType: "password",
    accessor: "password",
    name: "password",
    label: "Password",
    size: "small",
    xs: 10,
    placeholder: "Enter Password",
    required: true,
  },
  {
    id: 6,
    type: "select",
    fieldType: "select",
    accessor: "role",
    label: "Role",
    required: true,
    size: "small",
    xs: 6.2,
    name: "role",
    placeholder: "Select Role",
    optionLabel: "name",
    optionValue: "_id",
    options: [],
  },
  {
    id: 7,
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
    optionValue: "id",
    options: [
      {
        id: "ACTIVE",
        name: "Active",
      },
      {
        id: "INACTIVE",
        name: "Inactive",
      },
    ],
  },
];
