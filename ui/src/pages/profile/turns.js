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
      tratamiento: "Traumatología - Miembro Isquiotibial",
      doctor: "Dr. Juan Ricciardi",
      fecha: "No se Encuentra con Ningun Turno Asignado.",
      turno1:
        "30/11/2022; 15:30 horas.",
      },
    {
      tratamiento: "Kinesiología",
      doctor: "Lic. Alberto Mancini",
      fecha: "17/12/2022; 11:00 horas.",
      turnoactual: "17/12/2022; 11:00 horas. Centro de Diagnóstico Parque, Campana 3252, C.A.B.A, Argentina.",
      turno1:
        "12/12/2022; 18:00 horas. Centro de Diagnóstico Parque, Campana 3252, C.A.B.A, Argentina. ",
      turno2:
        "05/12/2022; 18:30 horas. Centro de Diagnóstico Parque, Campana 3252, C.A.B.A, Argentina.",
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
            sx={{backgroundColor:"#e0e0e0"}}
          >
            <Typography variant="h5" sx={{ width: '43%', flexShrink: 0}}>
              {singleResult.tratamiento}
            </Typography>
            <Typography sx={{ width: '23%', color: 'text.secondary' }}>
              {singleResult.doctor}
            </Typography>
            <Typography variant={"h6"} sx={{color: '#2fc4b2', fontWeight:"bold" }}>
              {singleResult.fecha}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor: "#eeeeee"}}>
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
