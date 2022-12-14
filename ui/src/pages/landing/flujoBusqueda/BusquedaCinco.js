import * as React from "react";
import { Typography,Button, Container, Stack, Paper, Divider, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BusquedaCinco() {


  const BootstrapButton = styled(Button)({
    width:"650px",
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 24,
    padding: '16px 22px',
    border: '1px solid',
    backgroundColor: '#25be8b',
    borderColor: '#25be8b',
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
      <Container>
        <Typography variant="h2" gutterBottom>
        ¿Queres ver resultados de profesionales particulares, de tu obra social o ambos?
        </Typography>
      </Container>
      <Grid
        container
        component="main"
        sx={{ height: "100%", width: "100%" }}
      >
        <Grid
          item
          width="73px"
          height="550px"
        >
        </Grid>
        <Grid
          item //Checkbox especialidades
          width="700px"
          height="550px"
        >

      <Stack 
        justifyContent="flex-end"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}>

        <BootstrapButton variant="contained" disableRipple
          href="/professionals">
          Profesional Particular 
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/professionals">
            Obra Social
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/professionals">
            Ambos
        </BootstrapButton>

      </Stack>
      </Grid>
      <Grid
          item
          width="300px"
          height="550px"
          sx={{
            backgroundColor: "#ebebeb",
          }}
        >

      <div className="imagen">
        <img src="img/pag5.jpg" width="770" height="550 "></img>
      </div>
      </Grid>
      </Grid>
    </div>

  );
}
