import React from "react";
import { returnValueOrDefault } from "../commonfunctions";
import { IconButton, Tooltip } from "@mui/material";

function IconButtonComponent({ title, icon, rowActionData, handleClick, rowId }) {
  const handleOnclick = (event) => {
    if (typeof(handleClick) == "function") {
      if (rowActionData && rowActionData.length > 0) {
        handleClick(event, rowActionData, rowId);
      } else {
        handleClick(event);
      }
    }
  };

  return (
    <>
      <Tooltip title={returnValueOrDefault(title, "More Actions")}>
        <IconButton sx={{ pointer: "cursor" }} onClick={(event) => handleOnclick(event)}>
          {icon}
        </IconButton>
      </Tooltip>
    </>
  );
}

export default IconButtonComponent;
