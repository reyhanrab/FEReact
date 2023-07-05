import { Grid } from "@mui/material";
import * as React from "react";
import TextFieldComp from "../TextField/TextFieldComp";
import ResponsiveDatePicker from "../DatePicker/ResponsiveDatePicker";
import SelectButton from "../SelectButton/SelectButton";
import { returnValueOrDefaultNested } from "../commonfunctions";

function GenerateForm(props) {
  const { data, tableRowData = {}, handleChange } = props;

  if (data.type === "input") {
    return (
      <Grid container>
        <Grid item xs={data.xs}>
          <TextFieldComp
            data={data}
            value={returnValueOrDefaultNested([data.accessor in tableRowData], [tableRowData[data.accessor]], null)}
          />
        </Grid>
      </Grid>
    );
  }
  if (data.type === "date") {
    return (
      <Grid container>
        <Grid item xs={data.xs}>
          <ResponsiveDatePicker
            data={data}
            value={returnValueOrDefaultNested([data.accessor in tableRowData], [tableRowData[data.accessor]], null)}
            handleChange={handleChange}
          />
        </Grid>
      </Grid>
    );
  }
  if (data.type === "select") {
    return (
      <Grid container>
        <Grid item xs={data.xs}>
          <SelectButton
            data={data}
            value={returnValueOrDefaultNested([data.accessor in tableRowData], [tableRowData[data.accessor]], null)}
          />
        </Grid>
      </Grid>
    );
  }
}

export default GenerateForm;
