import { Grid } from "@mui/material";
import * as React from "react";
import "./ViewDetails.css";

export default function ViewDetails({ data, gridConfiguration }) {
  return (
    <Grid container>
      {gridConfiguration.map((config) => {
        return (
          <Grid item xs={config.xs} key={`${config.id}`} style={{ marginTop: '24px' }}>
            <div className={"label"}>{config.label}</div>
            <div className={"value"}>{data[config.accessor]}</div>
          </Grid>
        );
      })}
    </Grid>
  );
}
