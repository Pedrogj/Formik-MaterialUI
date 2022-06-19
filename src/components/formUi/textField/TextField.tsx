import { TextField } from "@mui/material";
import { useField } from "formik";

interface Props {
  name: string;
  label: string;
  otherProps?: any;
  multiline?: true;
  maxRows?: number;
}

export const TextFieldWrapper = ({ name, label, ...otherProps }: Props) => {
  const [field, meta] = useField(name);

  const configTextField: any = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
    size: "small",
    error: false,
    helperText: "",
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <TextField label={label} {...configTextField} />;
};
