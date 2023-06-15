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
    if (settings?.operation?.includes("dispatch")) {
      dispatch(settings.action(navigate));
    } else {
      settings.action(navigate);
    }
  };

  return (
    <Box>
      <MenuAppBar title={"Work Tracker"} settings={settings} handleClick={handleClick} pages={pages} navigate={navigate} />
    </Box>
  );
}

export default Navbar;
