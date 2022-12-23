import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {
  Select as MuiSelect,
  SelectProps,
  SelectChangeEvent,
} from "@mui/material";

interface IMenuItem {
  [key: string]: number | string;
}

interface ISelectProps extends SelectProps {
  selectLabel: string;
  menuItems: IMenuItem;
  value: string;
  onSelectChange: (e: SelectChangeEvent) => void;
}

export const Select: React.FC<ISelectProps> = (props): JSX.Element => {
  const { selectLabel, menuItems, value, name, onSelectChange } = props || {};
  const selectHandler = (event: SelectChangeEvent) => {
    console.log("event.target.value ", event.target.value);
    onSelectChange(event);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{selectLabel}</InputLabel>
        <MuiSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          name={name}
          label={selectLabel}
          onChange={selectHandler}
        >
          {Object.entries(menuItems).map((item) => {
            const [key, value] = item;
            return (
              <MenuItem key={key} value={value}>
                {key}
              </MenuItem>
            );
          })}
        </MuiSelect>
      </FormControl>
    </Box>
  );
};
