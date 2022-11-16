import * as React from "react";
import { Box, Typography, ImageList, ImageListItem, ButtonGroup, Link,
  Button, Container, Grid, Stack, Item, Paper, Divider  } from "@mui/material";
import { styled } from '@mui/material/styles';
import { fontStyle } from "@mui/system";
import { dark } from "@mui/material/styles/createPalette";
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
    fontSize: 20,
    padding: '16px 22px',
    border: '5px solid',
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
      backgroundColor: '#25be8b',
      borderColor: '#000',
      boxShadow: 'none',
      color: 'white'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#25be8b',
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
    <div >
      
      <Container>
        <Typography variant="h5" align="center"  gutterBottom>
          Cuida tu salud
        </Typography>
      </Container>
      
      <Container>
        <Typography variant="h2" align="center" fontFamily={'arial'} gutterBottom>
          Contacta a los mejores especialistas
        </Typography>
      </Container>

      <Container>
        <Typography variant="h5" align="center"  gutterBottom>
          Te ayudaremos a encontrar al especialista indicado para tu situación
        </Typography>
      </Container>
     


      <Stack 
        justifyContent="flex-end"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}>

        <BootstrapButton variant="contained" disableRipple
          href="/uno">
          Cuéntanos tu problema
        </BootstrapButton>
      </Stack>
      <div>
        <Grid
            container
            justify="center"
            direction="column"
            alignItems="center"
            spacing={10}
            >
            <Grid item xs={12}>
            <img src="img/landing.jpg" width="800" height="400" ></img>
            <img src="img/landing4.jpg" width="800" height="400 " ></img>
            </Grid>
        </Grid>
        
        
      </div>

    </div>
  );
}
