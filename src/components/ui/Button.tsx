import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

interface IButtonProps extends ButtonProps {
  // children?: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = (props): JSX.Element => {
  return <MuiButton {...props}>{props?.children}</MuiButton>;
};
