import * as React from "react";
import MenuAppBar from "../common/MenuAppBar/MenuAppBar";
import { pages, settings } from "./Navbar.config";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

function Navbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (settings) => {
    const operation = "operation" in settings && settings.operation[0];
    switch (operation) {
      case "disptach":
        return dispatch(settings.action(navigate));
      case "navigation":
        return navigate(`${settings.path}`);

      default:
        break;
    }
  };

  return (
    <Box>
      <MenuAppBar title={"Work Tracker"} settings={settings} handleClick={handleClick} pages={pages} navigate={navigate} />
    </Box>
  );
}

export default Navbar;
