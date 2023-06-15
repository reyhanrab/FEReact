import * as React from "react";
import { Grid, Toolbar } from "@mui/material";
import { returnValueOrDefault } from "../commonfunctions";

export default function ToolbarComponent(props) {
  const onPressClick = (ToolbarData) => {
    if (!ToolbarData.disabled) {
      if (ToolbarData.operation?.includes("click") && props.data) {
        return (event) => props.handleClick(event, props.data);
      }
      if (ToolbarData.operation?.includes("click")) {
        return (event) => props.handleClick(event);
      }
    }
  };
  return (
    <Toolbar>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", alignItems: "center", borderBottom: "1px solid #A6A6A6", justifyContent: "space-between" }}
        >
          {props.ToolbarData.map((ToolbarData) =>
            props.ToolbarStructure.map((ToolbarStructureData) => {
              if (props.tabs && ToolbarData.accessor === "tabs") ToolbarData.label = props.tabs;
              if (ToolbarData.accessor === ToolbarStructureData.accessor) {
                return (
                  <ToolbarStructureData.tag key={ToolbarStructureData.id} onClick={onPressClick(ToolbarData)}
                  style={returnValueOrDefault(ToolbarStructureData.styles, {})}>
                    {ToolbarData[ToolbarStructureData.component]}
                  </ToolbarStructureData.tag>
                );
              }
            })
          )}
        </Grid>
      </Grid>
    </Toolbar>
  );
}
