import * as React from "react";
import { useState } from "react";
import {
  Typography,
} from "@mui/material";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Accordion from "@mui/material/Accordion";
import ReplyIcon from '@mui/icons-material/Reply';
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from '@mui/material/Slide';
import DialogContentText from "@mui/material/DialogContentText";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



export default function Journal() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  
  const handleClose3 = () => {
    setOpen3(false);
  };

  return (
    <Grid container justifyContent={"center"}>
      <Grid container xs={11} sx={{marginBottom:2}} spacing={2}>
        <Grid item xs={12}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{backgroundColor:"#e0e0e0"}}
          >
            <Typography variant="h5" sx={{ width: '45%', flexShrink: 0 }}>
              Plan de Alimentación
            </Typography>
            <Typography sx={{ width: '33%', color: 'text.secondary' }}>
              Lic. Mariana Sanchez
            </Typography>
            <Typography sx={{ width: '4.4%', color: 'text.secondary' }}>
              Estado:
            </Typography>
            <Typography sx={{width: '11.4%', color: 'red' }}>
              En Proceso
            </Typography>
            <Grid container alignItems={"flex-start"}>
              <IconButton aria-label="delete" onClick={handleClickOpen1}>
                <ReplyIcon fontSize="medium"/>
              </IconButton>
              <Dialog
                open={open1}
                onClose={handleClose1}
                TransitionComponent={Transition}
                keepMounted
              >
                <DialogTitle>Compartir el Seguimiento con Medico/s:</DialogTitle>
                  <DialogContentText>
                    *Los medicos que se seleccione van a ver toda la informacion del tratamiento.
                  </DialogContentText>
              </Dialog>
            </Grid>
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor: "#eeeeee"}}>
            <Typography variant={"h5"} sx={{color:"#2fc4b2", fontWeight:"bold"}}>
              Sesión 1:
            </Typography>
            <Typography variant={"subtitle1"}>
              El paciente se presentó con el objetivo de disminuir su grasa corporal, ganando masa muscular, siguiendo una rutina de alimentación la cual va a complementar con entrenamiento en un gimnasio.
            </Typography>
            <Typography variant={"h5"} sx={{color:"#2fc4b2", fontWeight:"bold"}}>
              Sesión 2:
            </Typography>
            <Typography>
              El paciente presentó un aumento de masa muscular y una reducción de grasa corporal, presenta dificultades para seguir extrictamente la rutina alimentaria y cumple con su entrenamiento. Se le indicó seguir con la dieta.
            </Typography>
          </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid item xs={12}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{backgroundColor:"#e0e0e0"}}
          >
            <Typography variant="h5" sx={{ width: '45%', flexShrink: 0 }}>
              Traumatología - Miembro Hombros
            </Typography>
            <Typography sx={{ width: '33%', color: 'text.secondary' }}>
              Dr. Juan Ricciardi
            </Typography>
            <Typography sx={{ width: '4.4%', color: 'text.secondary' }}>
              Estado:
            </Typography>
            <Typography sx={{width: '11.4%', color: 'green' }}>
              Finalizado
            </Typography>
            <Grid container alignItems={"flex-start"}>
              <IconButton aria-label="delete" onClick={handleClickOpen2}>
                <ReplyIcon fontSize="medium"/>
              </IconButton>
              <Dialog
                open={open2}
                onClose={handleClose2}
                TransitionComponent={Transition}
                keepMounted
              >
                <DialogTitle>Compartir el Seguimiento con Medico/s:</DialogTitle>
                  <DialogContentText>
                    *Los medicos que se seleccione van a ver toda la informacion del tratamiento.
                  </DialogContentText>
              </Dialog>
            </Grid>
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor: "#eeeeee"}}>
            <Typography variant={"h5"} sx={{color:"#2fc4b2", fontWeight:"bold"}}>
              Sesión 1:
            </Typography>
            <Typography variant={"subtitle1"}>
            
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        </Grid>
        <Grid item xs={12}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{backgroundColor:"#e0e0e0"}}
          >
            <Typography variant="h5" sx={{ width: '45%', flexShrink: 0 }}>
              Kinesiología
            </Typography>
            <Typography sx={{ width: '33%', color: 'text.secondary' }}>
              Lic. Alberto Mancini
            </Typography>
            <Typography sx={{ width: '4.4%', color: 'text.secondary' }}>
              Estado:
            </Typography>
            <Typography sx={{width: '11.4%', color: 'red' }}>
              En Proceso
            </Typography>
            <Grid container alignItems={"flex-start"}>
              <IconButton aria-label="delete" onClick={handleClickOpen3}>
                <ReplyIcon fontSize="medium"/>
              </IconButton>
              <Dialog
                open={open3}
                onClose={handleClose3}
                TransitionComponent={Transition}
                keepMounted
              >
                <DialogTitle>Compartir el Seguimiento con Medico/s:</DialogTitle>
                  <DialogContentText>
                    *Los medicos que se seleccione van a ver toda la informacion del tratamiento.
                  </DialogContentText>
              </Dialog>
            </Grid>
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor:"#eeeeee"}}>
            <Typography variant={"h5"} sx={{color:"#2fc4b2", fontWeight:"bold"}}>
              Sesión 1:
            </Typography>
            <Typography variant={"subtitle1"}>
            
            </Typography>
          </AccordionDetails>
        </Accordion>
        </Grid>
      </Grid>
    </Grid>
  );
}
