import * as Yup from "yup";

export const formValidation = Yup.object().shape({
  firstName: Yup.string()
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Este campo solo debe contener Letras."
    )
    .trim("Este campo no debe contener espacios")
    .strict()
    .max(15, "El máximo de caracteres permitidos son 15")
    .required("Este campo es requerido"),
  lastName: Yup.string()
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Este campo solo debe contener Letras."
    )
    .trim("Este campo no debe contener espacios")
    .strict()
    .max(15, "El máximo de caracteres permitidos son 15")
    .required("Este campo es requerido"),
  email: Yup.string()
    .email("Correo inválido")
    .required("Este campo es requerido"),
  phone: Yup.number()
    .integer()
    .typeError("Por favor ingrese un número de teléfono válido")
    .required("Este campo es requerido"),
  addressLine1: Yup.string().required("Este campo es requerido"),
  addressLine2: Yup.string(),
  city: Yup.string().required("Este campo es requerido"),
  state: Yup.string().required("Este campo es requerido"),
  country: Yup.string().required("Este campo es requerido"),
  message: Yup.string(),
  termOfServices: Yup.bool().oneOf([true]).required(),
});
