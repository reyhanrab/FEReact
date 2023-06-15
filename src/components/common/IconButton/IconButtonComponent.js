import React from "react";
import { returnValueOrDefault } from "../commonfunctions";
import { IconButton, Tooltip } from "@mui/material";

function IconButtonComponent(props) {
  return (
    <>
      <Tooltip title={returnValueOrDefault(props?.title, "More Actions")}>
        <IconButton sx={{ pointer: "cursor" }}>{props.icon}</IconButton>
      </Tooltip>
    </>
  );
}

export default IconButtonComponent;
