import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { returnValueOrDefaultNested, validateError } from "../commonfunctions";
import dayjs from "dayjs";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { Fade, FormControl, TextField } from "@mui/material";

export default function ResponsiveDatePicker(props) {
  const [value, setValue] = React.useState(null);

  return (
    <FormControl>
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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disabled={props.data.disabled || false}
          PopperProps={{ placement: "right-end" }}
          slots={{
            OpenPickerIcon: CalendarTodayOutlinedIcon,
            desktopTransition: Fade,
          }}
          openTo="year"
          views={props.data.views}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          allowSameDateSelection={props.data.allowSameDateSelection}
          slotProps={{ textField: { variant: "outlined", autoComplete: "off", placeholder: "mm/dd/yyyy" } }}
        />
      </LocalizationProvider>
    </FormControl>
  );
}
