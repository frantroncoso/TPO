import * as React from "react";
import { Typography,Button, Container, Stack, Paper, Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
export default function BusquedaUno() {


  const BootstrapButton = styled(Button)({
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
        Contanos que necesitás y te ayudamos a buscar al profesional adecuado
        </Typography>
      </Container>

      <Stack 
        justifyContent="flex-end"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}>

        <BootstrapButton variant="contained" disableRipple
          href="/dos">
          Me lesioné / tengo un dolor
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/seis">
          Quiero Prepararme físicamente
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/siete">
          Quiero mejorar mi plan de alimentación o rutina
        </BootstrapButton>

        <BootstrapButton variant="contained" disableRipple
          href="/professionals">
          Necesito un certificado médico
        </BootstrapButton>

      </Stack>

      <div className="imagen">
        <img src="img/4.jpg" width="600" height="650 "></img>
      </div>
    </div>

  );
}
