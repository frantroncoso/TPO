import * as React from "react";
import { useState } from "react";
import {
  Button,
  Stack,
  CardContent,
  Card,
  Typography,
} from "@mui/material";
import { TabPanel, SetupIndex } from "../../components/tabPanel/TabPanel";
import { fontWeight } from "@mui/system";
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Accordion from "@mui/material/Accordion";





export default function Journal() {
  const [value, setValue] = useState(0);
  const [resultsList, setresultsList] = useState([
    {
      tratamiento: "Plan de Alimentación",
      doctor: " Pablo Perez",
      estado: "En Proceso",
      sesion1:
        "El paciente se presentó con el objetivo de disminuir su grasa corporal, ganando masa muscular, siguiendo una rutina de alimentación la cual va a complementar con entrenamiento en un gimnasio. ",
      sesion2:
        "Sesión 2: El paciente presentó un aumento de masa muscular y una reducción de grasa corporal, presenta dificultades para seguir extrictamente la rutina alimentaria y cumple con su entrenamiento. Se le indicó seguir con la dieta",
      pasos:
        "Se le indicó asistir a un turno con una nutricionista, para obtener medidas corporales y luego armar un plan de alimentación en base a eso.",
      sesion1Comentarios:
        "La Lic. Gutierrez recomienda al paciente reservar un turno con la nutricionista Lic. Díaz, ya que trabajo con muchos pacientes junto a ella. Tiene buena disponibilidad y trabaja de manera excelente.",
      sesion2Comentarios:
        "Se nota un avance en los objetivos del paciente, aunque no ha realizado todas las actividades que se le pidió. Se le recomienda seguir con la mima dieta y ejercicios para que pueda seguir aumentando su masa muscular.",
    },
    {
      tratamiento: "Traumatología - Zona Hombros",
      doctor: " Juan Perez",
      estado: "Finalizado",
      sesion1:
        "El paciente se presentó con el objetivo de disminuir su grasa corporal, ganando masa muscular, siguiendo una rutina de alimentación la cual va a complementar con entrenamiento en un gimnasio. ",
      pasos:
        "Se le indicó asistir a un turno con una nutricionista, para obtener medidas corporales y luego armar un plan de alimentación en base a eso.",
      sesion1Comentarios:
        "La Lic. Gutierrez recomienda al paciente reservar un turno con la nutricionista Lic. Díaz, ya que trabajo con muchos pacientes junto a ella. Tiene buena disponibilidad y trabaja de manera excelente.",
    },
    {
      tratamiento: "Kinesiología",
      doctor: " Alberto Perez",
      estado: "En Proceso",
    },
  ]);

  const handleCardEvent = () => {
    console.log("mostrar pagina tratamiento");
  };

  return (
    <Grid container justifyContent={"center"}>
      {resultsList.map((singleResult, index) => (

            
      <Grid container xs={11} sx={{marginBottom:2}}>
        <Grid item xs={12}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            
          >
            <Typography variant="h5" sx={{ width: '33%', flexShrink: 0 }}>
              {singleResult.tratamiento}
            </Typography>
            <Typography sx={{ width: '33%', color: 'text.secondary' }}>
              {singleResult.doctor}
            </Typography>
            <Typography sx={{color: 'red' }}>
              {singleResult.estado}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant={"h5"} sx={{color:"#2fc4b2", fontWeight:"bold"}}>
              Sesion 1:
              
            </Typography>
            <Typography variant={"subtitle1"}>
            {singleResult.sesion1}
            </Typography>
            <Typography>
              sesion 2:
              {singleResult.sesion2}
            </Typography>
          </AccordionDetails>
        </Accordion>
        </Grid>
      </Grid>
        ))}
    </Grid>
  );
}
