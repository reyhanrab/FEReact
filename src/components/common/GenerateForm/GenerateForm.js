import { Grid } from "@mui/material";
import * as React from "react";
import TextFieldComp from "../TextField/TextFieldComp";
import ResponsiveDatePicker from "../DatePicker/ResponsiveDatePicker";
import SelectButton from "../SelectButton/SelectButton";

function GenerateForm(props) {
  if (props.data.type === "input") {
    return (
      <Grid container>
        <Grid item xs={props.data.xs}>
          <TextFieldComp data={props.data} />
        </Grid>
      </Grid>
    );
  }
  if (props.data.type === "date") {
    return (
      <Grid container>
        <Grid item xs={props.data.xs}>
          <ResponsiveDatePicker data={props.data} />
        </Grid>
      </Grid>
    );
  }
  if (props.data.type === "select") {
    return (
      <Grid container>
        <Grid item xs={props.data.xs}>
          <SelectButton data={props.data} />
        </Grid>
      </Grid>
    );
  }
}

export default GenerateForm;
