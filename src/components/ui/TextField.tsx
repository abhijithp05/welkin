import React from "react";
import { TextField as MuiTextField, TextFieldProps } from "@mui/material";

type ITextFieldProps = TextFieldProps | {};

export const TextField: React.FC<ITextFieldProps> = (props): JSX.Element => {
  return <MuiTextField {...props}></MuiTextField>;
};
