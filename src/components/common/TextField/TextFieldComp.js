import React from "react";
import { FormControl, TextField } from "@mui/material";
import { returnValueOrDefault, validateError, validateHelperText } from "../commonfunctions.js";

function TextFieldComp(props) {
  const [value, setValue] = React.useState(props.value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl required={returnValueOrDefault(props.data.required, false)} fullWidth>
      <div>
        {props.data.label}{" "}
        {props.data.required && (
          <span
            style={{
              color: "red",
            }}
          >
            *
          </span>
        )}
      </div>
      <TextField
        type={props.data.fieldType}
        multiline={returnValueOrDefault(props.data.multiline, false)}
        rows={returnValueOrDefault(props.data.rows, "1")}
        autoComplete="off"
        onChange={(event) => handleChange(event)}
        size={returnValueOrDefault(props.data.size, "small")}
        name={returnValueOrDefault(props.data.name, "")}
        disabled={returnValueOrDefault(props.data.disabled, false)}
        placeholder={returnValueOrDefault(props.data.placeholder, "")}
        value={value}
        error={props.error?.length > 0 ? validateError(props.data, props.error) : false}
        helperText={props.error?.length > 0 ? validateHelperText(props.data, props.error) : ""}
      />
    </FormControl>
  );
}

export default TextFieldComp;
