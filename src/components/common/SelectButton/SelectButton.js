import { Box, FormControl, MenuItem, Select } from "@mui/material";
import * as React from "react";
import { returnValueOrDefault } from "../commonfunctions";

function SelectButton(props) {
  const [value, setValue] = React.useState("");
  const [options, setOptions] = React.useState(props.data.options);

  const setDefaultObject = () => {
    let defaultObject = {};
    defaultObject[props.data.optionValue] = props.data.defaultValue || '';
    defaultObject[props.data.optionLabel] = props.data.defaultLabel || props.data.placeholder;
    let newOptions = [defaultObject, ...options];
    setOptions(newOptions);
  };

  React.useEffect(() => {
    setDefaultObject();
  }, [props.data.options]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth required={returnValueOrDefault(props.data.required, false)} sx={{ borderRight: "none" }}>
        {props.data.label && (
          <Box component="div">
            {props.data.label} {props.data.required && <span style={{ color: "red" }}>*</span>}
          </Box>
        )}

        <Select displayEmpty disabled={props.data.disabled} value={value} onChange={(event) => setValue(event.target.value)}>
          {options?.map((item) => {
            return (
              <MenuItem
                style={{ textTransform: "none !important" }}
                key={item.id}
                value={item[props.data.optionValue]}
                disabled={item.disabled}
              >
                {item[props.data.optionLabel]}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectButton;
