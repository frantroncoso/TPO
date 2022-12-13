import * as React from "react";
import { Typography, Button, Grid, Stack, Paper, Divider,Container,TextField} from "@mui/material";
import { styled } from "@mui/material/styles";
export default function preguntaExperto() {
  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 12,
    padding: "12px 18px",
    border: "3px solid",
    backgroundColor: "#25be8b",
    borderColor: "#25be8b",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#25be8b",
      borderColor: "#000",
      boxShadow: "none",
      color: "white",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#25be8b",
      borderColor: "#fff",
    },
  });

  return (
    <div>
      <Grid
        container
        component="main"
        sx={{
          height: "100%",
          width: "100%",
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing = {1}
      >
        <Grid
          item
          width="500px"
          height="300px"
        >
          <Typography variant="h5" gutterBottom fontWeight="bold" textAlign="center">
            Pregunta al Experto
          </Typography>
          <Typography variant="h7" gutterBottom textAlign="left">
          De forma anonima vas a poder preguntarle a nuestros mejores especialistas, todas las dudas que tengas en cuanto a la salud.
            <ul>
            <li>Te aseguramos que recibiras una respuesta de calidad y confiable.</li>
            <li>Sera resuelta en menos de 48 horas.</li>
            <li>Es totalmente gratuito.</li>
            </ul> 

            
          </Typography>
        </Grid>
        <Grid item width="330" height="200px">
          <div className="imagen">
            <img
              src="img/Pregunta.jpg"
              width="300"
              height="200"
              alt="Pregunta"
            ></img>
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        component="main"
        /* spacing={2} */ sx={{
          height: "100%",
          width: "100%",
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          width="900px"
          height="400px"
        >

          <Typography fontSize={10} gutterBottom fontWeight="bold" textAlign="left">
           Tu Pregunta
          </Typography>
          <TextField
            id="outlined-multiline-static"
            multiline
            fullWidth
            defaultValue="Escribe tu Consulta..."
            inputProps={{
              style: {
                height: "150px",
              },
            }}
          />
          <Typography fontSize={10} gutterBottom textAlign="left">
            <ul>

             <li>Tu pregunta se publicará de forma anónima.</li>
             <li>Intentá que tu consulta médica sea clara y breve.</li>
             <li>La pregunta irá dirigida a todos los especialistas de ImproveMe, no a uno específico.</li>
             <li>Este servicio no sustituye a una consulta con un profesional de la salud. Si tenés un problema o una urgencia, acude a tu médico o a los servicios de urgencia.</li>
             <li>No se permiten preguntas sobre casos específicos o segundas opiniones.</li>
             <li>Por cuestiones de salud, no se publicarán cantidades ni dosis de medicamentos.</li>
            </ul>

          </Typography>


          <Container>
            <BootstrapButton variant="contained" disableRipple sx={{height:"10px", width:"10px", marginTop:"5px"}}>
              Enviar
            </BootstrapButton>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}