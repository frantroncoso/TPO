import * as React from "react";
import { Typography,Button, Container, Stack, Paper, Divider, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
export default function BusquedaOcho() {


  const BootstrapButton = styled(Button)({
    width:"650px",
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 24,
    padding: '10px 20px',
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
        ¿Que zona?
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
          height="650px"
        >

      <Stack 
        justifyContent="flex-end"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
            Aductor/ingle
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
            Cadera
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
          Cuadricep 
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
            Isquiotibial
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
            Gemelo
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
            Tobillo
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
            Pie
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
            Otro
        </BootstrapButton>

      </Stack>
      </Grid>
      <Grid
          item
          width="300px"
          height="650px"
          sx={{
            backgroundColor: "#ebebeb",
          }}
        >

      <div className="imagen">
        <img src="img/pag8.jpg" width="780" height="650 "></img>
      </div>
      </Grid>
      </Grid>
    </div>

  );
}
