import { Container, Grid, Paper, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import countries from "../../data/countries.json";

import { TextFieldWrapper as TextField } from "../formUi/TextField";
import { SelectField } from "../formUi/SelectField";
import { DataTimePicker } from "../formUi/DataTimePicker";
import { CheckboxField } from "../formUi/CheckboxField";
import { ButtonUi } from "../formUi/ButtonUi";

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
  arrivealDate: "",
  departureDate: "",
  message: "",
  termOfServices: "",
};

const formValidation = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Rquired"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("required"),
  addressLine1: Yup.string().required("Required"),
  addressLine2: Yup.string(),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  arrivealDate: Yup.date().required("Required"),
  departureDate: Yup.date().required("Required"),
  message: Yup.string(),
  termOfServices: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
});

export const FormUser = () => {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          Contact
        </Typography>
        <Grid style={{ paddingTop: "10px" }}>
          <Formik
            initialValues={{
              ...initialFormState,
            }}
            validationSchema={formValidation}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
            }}
          >
            <Form>
              <Grid container spacing={2}>
                {/* -----------Your details------------- */}
                <Grid item xs={12}>
                  <Typography>Your details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField name="firstName" label="firstName" />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="lastName" label="lastName" />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="email" label="email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="phone" label="phone" />
                </Grid>
                {/* -----------Address------------- */}
                <Grid item xs={12}>
                  <Typography>Address</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField name="addressLine1" label="Address Line 1" />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="addressLine2" label="Address Line 2" />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="city" label="City" />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="state" label="State" />
                </Grid>
                <Grid item xs={12}>
                  <SelectField
                    name="country"
                    label="Country"
                    options={countries}
                  />
                </Grid>
                {/* ------------Booking information------------ */}
                <Grid item xs={12}>
                  <Typography>Booking information</Typography>
                </Grid>
                <Grid item xs={12}>
                  <DataTimePicker name="arrivealDate" label="Arrival Date" />
                </Grid>
                <Grid item xs={12}>
                  <DataTimePicker name="departureDate" label="Departure Date" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="message"
                    label="Message"
                    multiline={true}
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CheckboxField
                    name="termOfServices"
                    legend="Term Of Service"
                    label="I agree"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ButtonUi>Submit Form</ButtonUi>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Grid>
      </Paper>
    </Container>
  );
};
