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
      <TextFieldComp
        data={data}
        value={returnValueOrDefaultNested([data.accessor in tableRowData], [tableRowData[data.accessor]], null)}
      />
    );
  }
  if (data.type === "date") {
    return (
      <ResponsiveDatePicker
        data={data}
        value={returnValueOrDefaultNested([data.accessor in tableRowData], [tableRowData[data.accessor]], null)}
        handleChange={handleChange}
      />
    );
  }
  if (data.type === "select") {
    return (
      <SelectButton
        data={data}
        value={returnValueOrDefaultNested([data.accessor in tableRowData], [tableRowData[data.accessor]], "")}
      />
    );
  }
}

export default GenerateForm;
