import { AppBar, Toolbar, Typography, CssBaseline } from "@mui/material";

export const Navbar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React.js - Formik
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
