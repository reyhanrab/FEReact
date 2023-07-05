import * as React from "react";
import { Menu, MenuItem, Divider, styled, Tooltip, tooltipClasses } from "@mui/material";

function PositionedMenu(props) {
  const handleMenuItemClick = (menuItemsData) => {
    props.handleClose();
    props.handleDialog(!props.showDialog, menuItemsData);
  };

  return (
    <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      anchorEl={props.anchorEl}
      open={props.open}
      onClose={props.handleClose}
      anchorReference="anchorEl"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {props.MenuItems?.map((menuItemsData, menuItemsIndex) => (
        <div key={`${menuItemsData.label}_${menuItemsIndex + 1}`}>
          <MenuItem disabled={menuItemsData.disabled} onClick={() => handleMenuItemClick(menuItemsData)}>
            {menuItemsData.label}
          </MenuItem>
        </div>
      ))}
    </Menu>
  );
}

export default React.memo(PositionedMenu);
