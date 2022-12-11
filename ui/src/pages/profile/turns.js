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

export default function Turns() {
  
  
  
  const [value, setValue] = useState(0);
  const [resultsList, setresultsList] = useState([
    {
      tratamiento: "Plan de Alimentación",
      doctor: " Pablo Perez",
      fecha: "07/12/2022; 16:00 horas",
      turnoactual: "07/12/2022; 16:00 horas. Str. General Traian Moșoiu, nr. 24, Bran",
      turno1:
        "21/11/2022; 16:00 horas.",
      turno2:
        "30/10/2022; 16:00 horas",
      },
    {
      tratamiento: "Traumatología - Zona Hombros",
      doctor: " Juan Perez",
      fecha: "08/12/2022; 14:45 horas",
      turnoactual: "08/12/2022; 14:45 horas. Avenida Siempre Viva 742",
      turno1:
        "18/11/2022; 15:30 horas.",
      turno2:
        "30/10/2022; 09:30 horas",
      },
    {
      tratamiento: "Kinesiología",
      doctor: " Alberto Perez",
      fecha: "22/12/2022; 11:00 horas",
      turnoactual: "22/12/2022; 11:00 horas. 221B Baker Street",
      turno1:
        "05/12/2022; 12:30 horas. ",
      turno2:
        "21/11/2022; 11:30 horas",
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
            <Typography variant="h5" sx={{ width: '33%', flexShrink: 0}}>
              {singleResult.tratamiento}
            </Typography>
            <Typography sx={{ width: '33%', color: 'text.secondary' }}>
              {singleResult.doctor}
            </Typography>
            <Typography variant={"h5"} sx={{color: '#2fc4b2', fontWeight:"bold" }}>
              {singleResult.fecha}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant={"h5"} sx={{color:"#2fc4b2", fontWeight:"bold"}}>
              Turnos:
              
            </Typography>
            <Typography variant={"subtitle1"} sx={{color:'green'}}>
            {singleResult.turnoactual}
            </Typography>
            <Typography variant={"subtitle1"} sx={{color:'red'}}>
            {singleResult.turno1}
            </Typography>
            <Typography variant={"subtitle1"} sx={{color:'red'}}>
            {singleResult.turno2}
            </Typography>
            
          </AccordionDetails>
        </Accordion>
        </Grid>
      </Grid>
        ))}
    </Grid>
  );
  
}
