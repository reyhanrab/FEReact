import { LOGOUT } from "../../actions/General/ActionCreators";

export const settings = [
  {
    id: 1,
    name: "profile",
    operation: ["navigation"],
    path: "/profile"
  },
  {
    id: 2,
    name: "Users",
    operation: ["navigation"],
    path: "/users"
  },
  {
    id: 3,
    name: "Logout",
    operation: ["disptach"],
    action: (navigate) => LOGOUT(localStorage.getItem("userId"), navigate),
  },
];

export const pages = [
  {
    id: 1,
    name: "Your Work",
  },
  {
    id: 2,
    name: "Project",
    operation: ["navigation"],
    path: "/projects",
  },
  {
    id: 3,
    name: "People",
  },
];
