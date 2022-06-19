import { MenuItem, TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";

interface Props {
  name: string;
  label: string;
  options: any;
  otherProps?: any;
}

export const SelectField = ({ name, options, ...otherProps }: Props) => {
  const { setFieldValue } = useFormikContext();

  const [field, meta] = useField(name);

  const handleChange = (event: any) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };

  const configSelect: any = {
    ...field,
    ...otherProps,
    select: true,
    variant: "outlined",
    fullWidth: true,
    size: "small",
    onChange: handleChange,
    error: false,
    helperText: "",
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect}>
      {Object.keys(options).map((item, index) => {
        return (
          <MenuItem key={index} value={item}>
            {options[item]}
          </MenuItem>
        );
      })}
    </TextField>
  );
};
