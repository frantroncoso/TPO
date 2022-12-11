import * as React from "react";
import {
  Box, Typography, ImageList, ImageListItem, ButtonGroup, Link,
  Button, Container, Grid, Stack, Item, Paper, Divider
} from "@mui/material";
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
export default function BusquedaTres() {


  const volver = () => {
    window.history.back();
  };

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
      <BootstrapButton variant="contained" disableRipple sx={{height:"10px", width:"100px", marginTop:"10px"}} onClick={volver}>
          Regresar
        </BootstrapButton>
        <Typography variant="h2" gutterBottom>
          ¿Cual es la razon de tu busqueda?
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
          <CircularProgressWithLabel value={75} />
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
            href="/ocho">
            Quiero recuperarme
          </BootstrapButton>

          <BootstrapButton variant="contained" disableRipple
            href="/ocho">
            Quiero una visión de otro doctor
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
          <div className="imagen" >
            <img src="img/pag3.webp" width="783" height="550" ></img>
          </div>

        </Grid>
      </Grid>
    </div>

  );
}
