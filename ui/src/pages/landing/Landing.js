import * as React from "react";
import { Typography, Button, Grid, Stack, Paper, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
export default function Landing() {
  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 20,
    padding: "16px 22px",
    border: "5px solid",
    backgroundColor: "#25be8b",
    borderColor: "#25be8b",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#25be8b",
      borderColor: "#000",
      boxShadow: "none",
      color: "white",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#25be8b",
      borderColor: "#fff",
    },
  });

  return (
    <div>
      <Grid
        container
        component="main"
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "#ebebeb",
        }}
      >
        <Grid item width="300px" height="200px">
          <div className="imagen">
            <img
              src="img/inicio3.png"
              width="300"
              height="300"
              alt="inicio3"
            ></img>
          </div>
        </Grid>
        <Grid
          item
          width="900px"
          height="200px"
        >
          <Typography variant="h2" gutterBottom fontWeight="bold" textAlign="center">
            ¡Bienvenido a ImproveMe!
          </Typography>
          <Typography variant="h5" gutterBottom textAlign="center">
            En nuestra página podras encontrar profesionales relacionados a
            deportes y sacar turnos con ellos. Además podrás llevar un regitro
            de tus tratamientos, como de tus próximos turnos.
          </Typography>
        </Grid>
        <Grid item width="330" height="200px">
          <div className="imagen">
            <img
              src="img/inicio6.png"
              width="300"
              height="300"
              alt="inicio6"
            ></img>
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        component="main"
        /* spacing={2} */ sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "#ebebeb",
        }}
      >
        <Grid item width="300px" height="200px" marginTop="120px">
          <div className="imagen">
            <img
              src="img/inicio4.png"
              width="300"
              height="300"
              alt="inicio4"
            ></img>
          </div>
        </Grid>
        <Grid
          item
          width="900px"
          height="400px"
        >
          <Typography variant="h3" gutterBottom textAlign="center">
            ¡Prueba nuestra búsqueda dinámica que te ayudará a buscar al
            profesional más adecuado a tus necesidades!
          </Typography>

          <Stack
            justifyContent="flex-end"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <BootstrapButton variant="contained" disableRipple href="/uno">
              Buscar Profesional
            </BootstrapButton>
          </Stack>
        </Grid>
        <Grid item width="300px" height="200px" marginTop="120px">
          <div className="imagen">
            <img
              src="img/inicio5.png"
              width="300"
              height="300"
              alt="inicio5"
            ></img>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
