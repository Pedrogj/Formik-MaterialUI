import { ReactElement } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface buttonInterface {
  name: string;
  type?: string;
  endIcon?: ReactElement;
}
