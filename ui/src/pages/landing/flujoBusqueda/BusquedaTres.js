import * as React from "react";
import { Box, Typography, ImageList, ImageListItem, ButtonGroup, Link,
  Button, Container, Grid, Stack, Item, Paper, Divider  } from "@mui/material";
import { styled } from '@mui/material/styles';
export default function BusquedaTres() {


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
      <Container>
        <Typography variant="h2" gutterBottom>
        ¿Cual es la razon de tu busqueda?
        </Typography>
      </Container>

      <Stack 
        justifyContent="flex-end"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}>

        <BootstrapButton variant="contained" disableRipple
          href="/cuatro">
            Quiero recuperarme
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/cuatro">
          Quiero una visión de otro doctor
        </BootstrapButton>

      </Stack>

      <div className="imagen">
      <img src="img/2.jpg" width="550" height="550 "></img>
      </div>
    </div>

  );
}
