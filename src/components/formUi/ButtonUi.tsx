import { Button } from "@mui/material";
import { useFormikContext } from "formik";

export const ButtonUi = ({ children, ...otherProps }: any) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    ...otherProps,
    variant: "contained",
    color: "primary",
    fullWidth: true,
    onClick: handleSubmit,
  };

  return <Button {...configButton}>{children}</Button>;
};
