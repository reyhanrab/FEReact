import { LOGOUT } from "../../actions/General/ActionCreators";

export const settings = [
  {
    id: 1,
    name: "profile",
  },
  {
    id: 2,
    name: "Account",
  },
  {
    id: 3,
    name: "Logout",
    operation: ["dispatch"],
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
    action: (navigate) => navigate("/projects"),
  },
  {
    id: 3,
    name: "People",
  },
];
