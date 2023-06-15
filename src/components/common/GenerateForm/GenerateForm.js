import { Grid } from "@mui/material";
import * as React from "react";
import TextFieldComp from "../TextField/TextFieldComp";

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
}

export default GenerateForm;
