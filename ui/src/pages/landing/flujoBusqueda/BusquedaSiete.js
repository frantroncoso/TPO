import * as React from "react";
import { Typography,Button, Container, Stack, Paper, Divider, Grid,Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

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
          Regresar
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
          Futbol 
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
            Tenis
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
            Rugby
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
            Basquet
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
            Voley
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
            Hockey
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cinco">
            Natacion
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
        <img src="img/pag7.webp" width="782" height="650 "></img>
      </div>
      </Grid>
      </Grid>
    </div>

  );
}
