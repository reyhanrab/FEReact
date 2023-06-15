import * as React from "react";
import { TabsData, ToolbarData, ToolbarStructure, PositionedMenuAddItems } from "./Projects.config";
import { Box, Paper } from "@mui/material";
import TabPanels from "../../common/Tabs/TabPanels";
import Panels from "../../common/Tabs/Panels";
import ToolbarComponent from "../../common/ToolbarComponent/ToolbarComponent";
import PositionedMenu from "../../common/PositionedMenu/PositionedMenu";
import AddProject from "./AddProject/AddProject";
import ViewProject from "./ViewProject/ViewProject";

export default function Projects() {
  const [tabValue, setTableValue] = React.useState(1);
  const [addAnchorEl, setAddAnchorEl] = React.useState(null);
  const [editAnchorEl, setEditAnchorEl] = React.useState(null);
  const [showDialog, setDialog] = React.useState(false);
  const [menuItemsData, setmenuItemsData] = React.useState({});

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

  const handleClose = () => {
    if (addAnchorEl) {
      setAddAnchorEl(null);
      return true;
    }
    setEditAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ width: "100%", marginTop : "10px" }}>
        <Paper sx={{ width: "100%", mb: 2 }} elevation={10}>
          <ToolbarComponent
            ToolbarData={ToolbarData}
            ToolbarStructure={ToolbarStructure}
            handleClick={handlePositionedMenu}
            tabs={<TabPanels TabsData={TabsData} value={tabValue} handleChange={handleTabChange} />}
          />
          <Panels
            TabsData={TabsData}
            value={tabValue}
            components={[
              {
                key: "currentProjects",
                value: <ViewProject />,
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
      <PositionedMenu
        handleClose={handleClose}
        MenuItems={PositionedMenuAddItems}
        showDialog={showDialog}
        handleDialog={handleDialog}
        open={addOpen ? addOpen : editOpen}
        anchorEl={addAnchorEl ? addAnchorEl : editAnchorEl}
      />
    </>
  );
}
