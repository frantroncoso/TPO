import * as React from "react";
import { Typography,Button, Container, Stack, Paper, Divider, Grid,Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import PoolIcon from '@mui/icons-material/Pool';

export default function BusquedaSiete() {

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

  const volver = () => {
    window.history.back();
  };

  return (
    <div>
      <Container>
      <BootstrapButton variant="contained" disableRipple sx={{height:"33px", width:"100px", marginTop:"10px"}} onClick={volver}>
      <ArrowBackIcon/>
        </BootstrapButton>
        <Typography variant="h2" gutterBottom>
        ¿Que deporte practicas/querés practicás?
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
          <CircularProgressWithLabel value={100} />
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
          <SportsSoccerIcon/>Futbol 
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
          <SportsTennisIcon/>Tenis
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
          <SportsFootballIcon/>Rugby
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
          <SportsBasketballIcon/>Basquet
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
          <SportsVolleyballIcon/>Voley
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
          <SportsHockeyIcon/>Hockey
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
          <PoolIcon/>Natacion
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
        <img src="img/imagenfulbopaint.png" width="782" height="650 "></img>
      </div>
      </Grid>
      </Grid>
    </div>

  );
}
