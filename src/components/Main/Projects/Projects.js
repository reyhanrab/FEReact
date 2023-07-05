import * as React from "react";
import { TabsData, ToolbarData, ToolbarStructure, PositionedMenuAddItems, PositionedMenuEditItems } from "./Projects.config";
import { Box, Paper } from "@mui/material";
import TabPanels from "../../common/Tabs/TabPanels";
import Panels from "../../common/Tabs/Panels";
import ToolbarComponent from "../../common/ToolbarComponent/ToolbarComponent";
import PositionedMenu from "../../common/PositionedMenu/PositionedMenu";
import AddProject from "./AddProject/AddProject";
import ViewProject from "./ViewProject/ViewProject";
import IconButtonComponent from "../../common/IconButton/IconButtonComponent";
import { MoreHoriz } from "@mui/icons-material";
import EditProject from "./EditProject/EditProject";

export default function Projects() {
  const [tabValue, setTableValue] = React.useState(1);
  const [addAnchorEl, setAddAnchorEl] = React.useState(null);
  const [editAnchorEl, setEditAnchorEl] = React.useState(null);
  const [showDialog, setDialog] = React.useState(false);
  const [menuItemsData, setmenuItemsData] = React.useState(null);
  const [menuItemsEditData, setmenuItemsEditData] = React.useState(null);
  const [tableRowId, setTableRowId] = React.useState('');

  const addOpen = Boolean(addAnchorEl);
  const editOpen = Boolean(editAnchorEl);

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

  const handlePositionedMenuEdit = (event, menuItemsData, tableRowId) => {
    setmenuItemsEditData(menuItemsData);
    setEditAnchorEl(event.currentTarget);
    setTableRowId(tableRowId);
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
                key: "currentProjects",
                value: <ViewProject handleClick={handlePositionedMenuEdit} rowActionData={PositionedMenuEditItems} />,
              },
              {
                key: "historicalProjects",
                value: <>historical</>,
              },
            ]}
          />
        </Paper>
      </Box>
      {/******************* RENDER ADD COMPONENTS ***********************************/}

      {menuItemsData?.componentToRender == "createProject" && <AddProject showDialog={showDialog} handleDialog={handleDialog} />}
      {menuItemsData?.componentToRender == "viewProject" && <AddProject showDialog={showDialog} handleDialog={handleDialog} />}
      {menuItemsData?.componentToRender == "editProject" && (
        <EditProject showDialog={showDialog} handleDialog={handleDialog} tableRowId={tableRowId} />
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
