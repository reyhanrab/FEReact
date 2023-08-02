import * as React from "react";
import { TabsData, ToolbarData, ToolbarStructure, PositionedMenuAddItems, PositionedMenuEditItems } from "./Users.config";
import { Box, Paper } from "@mui/material";
import TabPanels from "../common/Tabs/TabPanels";
import Panels from "../common/Tabs/Panels";
import ToolbarComponent from "../common/ToolbarComponent/ToolbarComponent";
import PositionedMenu from "../common/PositionedMenu/PositionedMenu";
import IconButtonComponent from "../common/IconButton/IconButtonComponent";
import { MoreHoriz } from "@mui/icons-material";
import AddUser from "./AddUser/AddUser";
import EditUser from "./EditUser/EditUser";
import ViewUser from "./ViewUsers/ViewUser";
import { useDispatch } from "react-redux";


export default function Projects() {
  const [tabValue, setTableValue] = React.useState(1);
  const [addAnchorEl, setAddAnchorEl] = React.useState(null);
  const [editAnchorEl, setEditAnchorEl] = React.useState(null);
  const [showDialog, setDialog] = React.useState(false);
  const [menuItemsData, setmenuItemsData] = React.useState(null);
  const [menuItemsEditData, setmenuItemsEditData] = React.useState(null);
  const [tableRowData, settableRowData] = React.useState("");

  const disptach = useDispatch();

  const addOpen = Boolean(addAnchorEl);
  const editOpen = Boolean(editAnchorEl);

  React.useEffect(() => {
    if (menuItemsData && menuItemsData?.operation?.includes("disptach")) {
      return disptach(menuItemsData.action(tableRowData._id));
    }
  }, [menuItemsData]);

  const handleDialog = (value, menuItemsData) => {
    setmenuItemsData(menuItemsData);
    setDialog(value);
  };

  /*--------------------- handle tab function -----------------*/

  const handleTabChange = (event, newValue) => {
    setTableValue(newValue);
  };

  const handlePositionedMenu = (event) => {
    setAddAnchorEl(event.currentTarget);
  };

  const handlePositionedMenuEdit = (event, menuItemsData, tableRowData) => {
    setmenuItemsEditData(menuItemsData);
    setEditAnchorEl(event.currentTarget);
    settableRowData(tableRowData);
  };

  const handleClose = () => {
    if (addAnchorEl) {
      setAddAnchorEl(null);
      return true;
    }
    setEditAnchorEl(null);
  };

  ToolbarData.forEach((data) => {
    if (data.accessor === "iconButton") {
      data.label = <IconButtonComponent title=" More Actions" icon={<MoreHoriz />} handleClick={handlePositionedMenu} />;
      return data;
    }
  });

  return (
    <>
      <Box sx={{ width: "100%", marginTop: "10px" }}>
        <Paper sx={{ width: "100%", mb: 2 }} elevation={10}>
          <ToolbarComponent
            ToolbarData={ToolbarData}
            ToolbarStructure={ToolbarStructure}
            tabs={<TabPanels TabsData={TabsData} value={tabValue} handleChange={handleTabChange} />}
          />
          <Panels
            TabsData={TabsData}
            value={tabValue}
            components={[
              {
                key: "activeUsers",
                value: (
                  <ViewUser
                    handleClick={handlePositionedMenuEdit}
                    rowActionData={PositionedMenuEditItems}
                    tabValue={tabValue === 1 ? "active" : "inactive"}
                  />
                ),
              },
              {
                key: "inactiveUsers",
                value: (
                  <ViewUser
                    handleClick={handlePositionedMenuEdit}
                    rowActionData={PositionedMenuEditItems}
                    tabValue={tabValue === 1 ? "active" : "inactive"}
                  />
                ),
              },
            ]}
          />
        </Paper>
      </Box>
      {/******************* RENDER COMPONENTS ***********************************/}

      {menuItemsData?.componentToRender === "addUser" && <AddUser showDialog={showDialog} handleDialog={handleDialog} />}
      {menuItemsData?.componentToRender === "editUser" && (
        <EditUser showDialog={showDialog} handleDialog={handleDialog} tableRowData={tableRowData} />
      )}

      <PositionedMenu
        handleClose={handleClose}
        MenuItems={editAnchorEl ? menuItemsEditData : PositionedMenuAddItems}
        showDialog={showDialog}
        handleDialog={handleDialog}
        open={addOpen ? addOpen : editOpen}
        anchorEl={addAnchorEl ? addAnchorEl : editAnchorEl}
      />
    </>
  );
}
