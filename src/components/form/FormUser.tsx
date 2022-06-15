import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { Formik, Form } from "formik";

export const FormUser = () => {
  return (
    <Grid
      container
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        paddingTop: "50px",
      }}
    >
      <Card
        style={{
          maxWidth: 450,
          padding: "20px 5px",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            Form
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <TextField
                  size="small"
                  type="text"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  size="small"
                  type="text"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  size="small"
                  type="text"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  size="small"
                  type="text"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Created
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
};
