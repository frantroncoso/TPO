import * as React from "react";
import {
  Box, Typography, ImageList, ImageListItem, ButtonGroup, Link,
  Button, Container, Grid, Stack, Item, Paper, Divider
} from "@mui/material";
import { styled } from '@mui/material/styles';
export default function Landing() {

  // imagenes de landing anterior
  // const images = [
  //   {
  //     title: "landing1",
  //     img: "img/landing1.webp",
  //   },
  //   {
  //     title: "landing2",
  //     img: "img/landing2.jpg",
  //   },
  //   {
  //     title: "landing3",
  //     img: "img/landing3.jpg",
  //   },
  // ];

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 24,
    padding: '16px 22px',
    border: '1px solid',
    backgroundColor: '#000',
    borderColor: '#000',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#fff',
      borderColor: '#000',
      boxShadow: 'none',
      color: 'black'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Grid
        container
        component="main"
        /* spacing={2} */ sx={{ height: "100%", width: "100%", backgroundColor: "#ebebeb",}}
      >
        <Grid
          item
          width="300px"
          height="200px"
        >
          <div className="imagen">
            <img src="img/inicio3.png" width="300" height="300 "></img>
          </div>
        </Grid>
        <Grid
          item
          width="900px"
          height="200px"
          sx={{
            backgroundColor: "#ebebeb",
          }}
        >
          <Typography variant="h2" gutterBottom>
            ¡Bienvenido a ImproveMe!
          </Typography>
          <Typography variant="h5" gutterBottom>
            En nuestra página podras encontrar profesionales relacionados a deportes y sacar turnos con ellos. Además podrás
            llevar un regitro de tus tratamientos, como de tus próximos turnos.
          </Typography>
        </Grid>
        <Grid
          item
          width="330"
          height="200px"
        >
          <div className="imagen">
            <img src="img/inicio6.png" width="300" height="300 "></img>
          </div>
        </Grid>

      </Grid>

      <Grid
        container
        component="main"
        /* spacing={2} */ sx={{ height: "100%", width: "100%", backgroundColor: "#ebebeb", }}
      >
        <Grid
          item
          width="300px"
          height="200px"
          marginTop="120px"
        >
          <div className="imagen">
            <img src="img/inicio4.png" width="300" height="300 "></img>
          </div>

        </Grid>
        <Grid
          item
          width="900px"
          height="400px"
          sx={{
            backgroundColor: "#ebebeb",
          }}
        >
          <Typography variant="h3" gutterBottom>
            ¡Prueba nuestra búsqueda dinámica que te ayudará a buscar al profesional más adecuado a tus necesidades!
          </Typography>

          <Stack
            justifyContent="flex-end"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}>

            <BootstrapButton variant="contained" disableRipple
              href="/uno">
              Buscar Profesional
            </BootstrapButton>
          </Stack>

        </Grid>
        <Grid
          item
          width="300px"
          height="200px"
          marginTop="120px"
        >
          <div className="imagen">
            <img src="img/inicio5.png" width="300" height="300 "></img>
          </div>

        </Grid>
      </Grid>




    </div>

  );
}
