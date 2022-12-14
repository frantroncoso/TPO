import * as React from "react";
import { Typography, Button, Container, Stack, Paper, Divider, Grid, Input,Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BusquedaOcho() {

  function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex', marginLeft:"20px", marginTop:"225px"}}>
        
        <CircularProgress sx={{color:"#25be8b"}} variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }

  const volver = () => {
    window.history.back();
  };


  const BootstrapButton = styled(Button)({
    width: "650px",
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

  /*  const Input = styled(Input)({
    background: "#00aec9",
    color: "#fff",
    cursor:" pointer",
    marginbottom: "0",
    texttransform: "uppercase",
    width: "100%",
    borderradius: "5px",
    height: "35px",
    bordercolor: "transparent",
    boxshadow: "0px",
    outline: "none",
    transition: "0.15s",
    textalign: "center",
    "&:active": {
      backgroundcolor: "#f1ac15",
    },

  }); */

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const deseleccionar = () => {
    document.querySelectorAll('[value=a]').forEach((x) => x.checked = false);
  };

  const aductor = (nombreImagen) => {
    var image = document.getElementById('imagen');
    image.src = "img/aductor.jpg";
  };

  const cadera = (nombreImagen) => {
    var image = document.getElementById('imagen');
    image.src = "img/cadera.jpg";
  };

  const Cuadricep = (nombreImagen) => {
    var image = document.getElementById('imagen');
    image.src = "img/cuadricep.jpg";
  };

  const Isquiotibial = (nombreImagen) => {
    var image = document.getElementById('imagen');
    image.src = "img/isquiotibial.jpg";
  };

  const Gemelo = (nombreImagen) => {
    var image = document.getElementById('imagen');
    image.src = "img/gemelo.png";
  };

  const Tobillo = (nombreImagen) => {
    var image = document.getElementById('imagen');
    image.src = "img/tobillo.jpg";
  };

  const Pie = (nombreImagen) => {
    var image = document.getElementById('imagen');
    image.src = "img/pie.png";
  };

  const Cuello = (nombreImagen) => {
    var image = document.getElementById('imagen');
    image.src = "img/cuello.jpg";
  };

  const Hombro = (nombreImagen) => {
    var image = document.getElementById('imagen');
    image.src = "img/hombro.jpg";
  };

  const Brazo = (nombreImagen) => {
    var image = document.getElementById('imagen');
    image.src = "img/brazo.jpg";
  };

  const Columna = (nombreImagen) => {
    var image = document.getElementById('imagen');
    image.src = "img/columna.jpg";
  };

  const Pecho = (nombreImagen) => {
    var image = document.getElementById('imagen');
    image.src = "img/pecho.jpg";
  };

  const Muñeca = (nombreImagen) => {
    var image = document.getElementById('imagen');
    image.src = "img/muñeca.webp";
  };

  const Dorsales = (nombreImagen) => {
    var image = document.getElementById('imagen');
    image.src = "img/dorsales.jpg";
  };

  const Trapecios = (nombreImagen) => {
    var image = document.getElementById('imagen');
    image.src = "img/trapecios.jpg";
  };

  const Abdominales = (nombreImagen) => {
    var image = document.getElementById('imagen');
    image.src = "img/abs.jpg";
  };

  const Gluteos = (nombreImagen) => {
    var image = document.getElementById('imagen');
    image.src = "img/gluteos.jpg";
  };

  const Aquiles = (nombreImagen) => {
    var image = document.getElementById('imagen');
    image.src = "img/aquiles.png";
  };


  return (
    <div>
      <Container>
      <BootstrapButton variant="contained" disableRipple sx={{height:"33px", width:"100px", marginTop:"10px"}} onClick={volver}>
      <ArrowBackIcon/>
        </BootstrapButton>
        <Typography variant="h2" gutterBottom>
          ¿En que miembro se encuentra tu dolor?
        </Typography>
      </Container>
      <Grid
        container
        component="main"
        sx={{ height: "810px", width: "100%" }}
      >
        <Grid
          item
          width="175px"
          height="550px"
        >
           <CircularProgressWithLabel value={100} />
        </Grid>
        <Grid
          item
          width="277px"
          height="650px"
        >

          <Stack
            justifyContent="flex-end"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={1}>

            <Typography variant="h4" gutterBottom marginLeft="20px">
              Miembro Inferior
            </Typography>
            <div>
              <input type="radio" id="aductor" value="a"></input>
              <BootstrapButton variant="contained" disableRipple sx={{ width: "255px" }} onClick={aductor}>
                Aductor/ingle
              </BootstrapButton>
            </div>

            <div>
              <input type="radio" value="a"></input>
              <BootstrapButton variant="contained" disableRipple sx={{ width: "255px" }} onClick={cadera}
              >
                Cadera
              </BootstrapButton>
            </div>

            <div>
              <input type="radio" value="a"></input>
              <BootstrapButton variant="contained" disableRipple sx={{ width: "255px" }} onClick={Cuadricep}
              >
                Cuadricep
              </BootstrapButton>
            </div>
            <div>
              <input type="radio" value="a"></input>
              <BootstrapButton variant="contained" disableRipple sx={{ width: "255px" }} onClick={Isquiotibial}
              >
                Isquiotibial
              </BootstrapButton>
            </div>
            <div>
              <input type="radio" value="a"></input>
              <BootstrapButton variant="contained" disableRipple sx={{ width: "255px" }} onClick={Gemelo}
              >
                Gemelo
              </BootstrapButton>
            </div>
            <div>
              <input type="radio" value="a"></input>
              <BootstrapButton variant="contained" disableRipple sx={{ width: "255px" }} onClick={Tobillo}
              >
                Tobillo
              </BootstrapButton>
            </div>
            <div>
              <input type="radio" value="a"></input>
              <BootstrapButton variant="contained" disableRipple sx={{ width: "255px" }} onClick={Pie}
              >
                Pie
              </BootstrapButton>
            </div>
            <div>
              <input type="radio" value="a"></input>
              <BootstrapButton variant="contained" disableRipple sx={{ width: "255px" }} onClick={Gluteos}
              >
                Glúteos
              </BootstrapButton>
            </div>
            <div>
              <input type="radio" value="a"></input>
              <BootstrapButton variant="contained" disableRipple sx={{ width: "255px" }} onClick={Aquiles}
              >
                Tendón de Aquiles
              </BootstrapButton>
            </div>
          </Stack>
        </Grid>
        <Grid
          item
          width="130px"
          height="550px"
        >
        </Grid>
        <Grid
          item
          width="500px"
          height="650px"
          marginTop="100px"
        >
          <Stack
            justifyContent="flex-end"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={1}>
            <div className="imagen">
              <img id="imagen" src="img/instruc2.png" width="450" height="550 "></img>
            </div>
          </Stack>

          <BootstrapButton variant="contained" disableRipple sx={{ width: "255px", marginLeft: "100px" }} onClick={deseleccionar}>
            Anular Selección
          </BootstrapButton>
          <p></p>

          <BootstrapButton variant="contained" disableRipple sx={{ width: "255px", marginLeft: "100px" }}
          href="/search"
          >
            Siguiente
          </BootstrapButton>
        </Grid>
        <Grid
          item
          width="67px"
          height="550px"
        >
        </Grid>

        <Grid
          item 
          width="277px"
          height="600px"
        >

          <Stack
            justifyContent="flex-end"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={1}>

            <Typography variant="h4" gutterBottom >
              Miembro Superior
            </Typography>

            <div>
              <input type="radio" value="a"></input>
              <BootstrapButton variant="contained" disableRipple sx={{ width: "255px" }} onClick={Cuello}
              >
                Cuello
              </BootstrapButton>
            </div>
            <div>
              <input type="radio" value="a"></input><BootstrapButton variant="contained" disableRipple sx={{ width: "255px" }} onClick={Hombro}

              >
                Hombro
              </BootstrapButton>
            </div>
            <div>
              <input type="radio" value="a"></input>
              <BootstrapButton variant="contained" disableRipple sx={{ width: "255px" }} onClick={Brazo}
              >
                Brazo/antebrazo
              </BootstrapButton>
            </div>
            <div>
              <input type="radio" value="a"></input>
              <BootstrapButton variant="contained" disableRipple sx={{ width: "255px" }} onClick={Columna}
              >
                Columna
              </BootstrapButton>
            </div>
            <div>
              <input type="radio" value="a"></input>
              <BootstrapButton variant="contained" disableRipple sx={{ width: "255px" }} onClick={Pecho}
              >
                Pecho
              </BootstrapButton>
            </div>
            <div>
              <input type="radio" value="a"></input>
              <BootstrapButton variant="contained" disableRipple sx={{ width: "255px" }} onClick={Muñeca}
              >
                Muñeca/mano
              </BootstrapButton>
            </div>
            <div>
              <input type="radio" value="a"></input>
              <BootstrapButton variant="contained" disableRipple sx={{ width: "255px" }} onClick={Dorsales}
              >
                Dorsales
              </BootstrapButton>
            </div>
            <div>
              <input type="radio" value="a"></input>
              <BootstrapButton variant="contained" disableRipple sx={{ width: "255px" }} onClick={Trapecios}
              >
                Trapecios
              </BootstrapButton>
            </div>
            <div>
              <input type="radio" value="a"></input>
              <BootstrapButton variant="contained" disableRipple sx={{ width: "255px" }} onClick={Abdominales}
              >
                Abdominales
              </BootstrapButton>
            </div>
          </Stack>
        </Grid>


      </Grid>
    </div>

  );
}
