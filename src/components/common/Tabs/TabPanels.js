import { Box, Tab, Tabs } from "@mui/material";
import * as React from "react";

export default function TabPanels(props) {
  return (
    <Box sx={{ width: "100%", display: "flex" }}>
        {props.TabsData.map((tabData) => {
          return (
            <div key={tabData.id}>
              <Tabs value={props.value} onChange={props.handleChange} aria-label="basic tabs example">
                <Tab label={tabData.label} value={tabData.value} />
              </Tabs>
            </div>
          );
        })}
      </Box>
  );
}
