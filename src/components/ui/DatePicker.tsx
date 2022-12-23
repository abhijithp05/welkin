import React from "react";
import {
  DesktopDatePicker,
  DesktopDatePickerProps,
} from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

// interface IDatePickerProps extends DesktopDatePickerProps {}

export const DatePicker: React.FC<any> = (props): JSX.Element => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker {...props}></DesktopDatePicker>
    </LocalizationProvider>
  );
};
