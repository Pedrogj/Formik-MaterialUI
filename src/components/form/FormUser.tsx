import { Container, Grid, Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Formik, Form } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { dataCountries } from "../../data/dataCountries";

import { TextFieldWrapper as TextField } from "../formUi/textField/TextField";
import { SelectField } from "../formUi/select/SelectField";
import { CheckboxField } from "../formUi/checkbox/CheckboxField";
import { ButtonUi } from "../formUi/botton/ButtonUi";
import { formValidation } from "../../helpers/formValidations/formValidations";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  message: "",
  termOfServices: "",
};

const alertMsgSend = () => {
  toast.success("Enviado...", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const FormUser = () => {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          Formulario
        </Typography>
        <Grid style={{ paddingTop: "10px" }}>
          <Formik
            initialValues={{
              ...initialFormState,
            }}
            validationSchema={formValidation}
            onSubmit={(values, { resetForm }) => {
              resetForm();
              alertMsgSend();
            }}
          >
            <Form>
              <Grid container spacing={2}>
                {/* -----------Your details------------- */}
                <Grid item xs={12}>
                  <Typography>Contacto</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField name="firstName" label="Nombre" />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="lastName" label="Apellido" />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="email" label="Correo electrónico" />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="phone" label="Teléfono" />
                </Grid>
                {/* -----------Address------------- */}
                <Grid item xs={12}>
                  <Typography>Dirección de Contacto</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField name="addressLine1" label="Dirección 1" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="addressLine2"
                    label="Dirección 2 (opcional)"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="city" label="Ciudad" />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="state" label="Estado" />
                </Grid>
                <Grid item xs={12}>
                  <SelectField
                    name="country"
                    label="País"
                    options={dataCountries}
                  />
                </Grid>
                {/* ------------Booking information------------ */}
                <Grid item xs={12}>
                  <Typography>Mensaje opcional</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="message"
                    label="Mensaje"
                    multiline
                    maxRows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CheckboxField
                    name="termOfServices"
                    legend="Términos y Condiciones"
                    label="Acepto los términos"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ButtonUi
                    endIcon={<SendIcon />}
                    type="submit"
                    name="Enviar"
                  />
                </Grid>
              </Grid>
              <ToastContainer />
            </Form>
          </Formik>
        </Grid>
      </Paper>
    </Container>
  );
};
