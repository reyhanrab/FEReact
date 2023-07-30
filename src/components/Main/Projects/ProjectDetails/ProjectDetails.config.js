import CloseIcon from "@mui/icons-material/Close";
import IconButtonComponent from "../../../common/IconButton/IconButtonComponent";
import { EditOutlined } from "@mui/icons-material";

export const PROJECTDETAILSSTRUCTURE = [
  {
    id: 1,
    label: "Title",
    accessor: "title",
    xs: 8,
  },
  {
    id: 2,
    label: "Description",
    accessor: "description",
    xs: 8,
  },
  {
    id: 3,
    label: "Start Date",
    accessor: "startDate",
    xs: 6,
    operation: ["convertDate"]
  },
  {
    id: 4,
    label: "End Date",
    accessor: "endDate",
    xs: 6,
    operation: ["convertDate"]
  },
  {
    id: 5,
    label: "Status",
    accessor: "status",
    xs: 6,
  },
  {
    id: 6,
    label: "Owner",
    accessor: "owner",
    xs: 6,
  },
];

export const dialogDataHeader = [
  {
    label: <EditOutlined />,
    accessor: "EditIcon",
    operation: [],
  },
  {
    label: "Project Details",
    accessor: "title",
    operation: [],
  },
  {
    label: <IconButtonComponent title="Close" icon={<CloseIcon />} />,
    accessor: "CloseIcon",
    operation: ["click"],
  },
];

export const dialogStructureHeader = [
  {
    id: 1,
    size: 0.5,
    component: "label",
    accessor: "EditIcon",
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
