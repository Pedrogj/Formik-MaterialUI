import { Button } from "@mui/material";
import { buttonInterface } from "./buttonInterface";

export const ButtonUi = ({ name, type, endIcon }: buttonInterface) => {
  const configButton: any = {
    variant: "contained",
    color: "primary",
    fullWidth: true,
    type,
    endIcon,
  };

  return <Button {...configButton}>{name}</Button>;
};
