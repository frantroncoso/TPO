import * as React from "react";
import { useState } from "react";
import {
  Button,
  DialogContent,
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
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const names1 = [
  'Lic. Alberto Mancini',
];

const names2 = [
  'Dr. Juan Ricciardi',
];

export default function Journal() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  
  
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
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
              Traumatología - Miembro Isquiotibial
            </Typography>
            <Typography sx={{ width: '33%', color: 'text.secondary' }}>
              Dr. Juan Ricciardi
            </Typography>
            <Typography sx={{ width: '4.4%', color: 'text.secondary' }}>
              Estado:
            </Typography>
            <Typography sx={{width: '11.4%', color: 'red' }}>
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
                  <DialogContent>
                    <DialogContentText>
                      *Los medicos que se seleccione van a ver toda la informacion del tratamiento.
                    </DialogContentText>
                    <Grid container xs={12} justifyContent={"center"} direction={"column"} alignItems={"center"}>
                      <Grid container xs={6}>
                      <FormControl sx={{ m: 1, width: 200 }}>
                      <InputLabel id="demo-multiple-checkbox-label">Seleccione:</InputLabel>
                        <Select
                          multiple
                          value={personName}
                          onChange={handleChange}
                          input={<OutlinedInput label="Seleccione:" />}
                          renderValue={(selected) => selected.join(', ')}
                          fullWidth
                        >
                          {names1.map((name) => (
                            <MenuItem key={name} value={name}>
                              <Checkbox checked={personName.indexOf(name) > -1} />
                              <ListItemText primary={name} />
                            </MenuItem>
                          ))}
                        </Select>
                        </FormControl>
                      </Grid>
                      <Grid container xs={6}>
                        <Button onClick={handleClose2}>Guardar</Button>
                      </Grid>
                    </Grid>
                  </DialogContent>
              </Dialog>
            </Grid>
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor: "#eeeeee"}}>
            <Typography variant={"h5"} sx={{color:"#2fc4b2", fontWeight:"bold"}}>
              Sesión 1: 30/11/2022
            </Typography>
            <Typography variant={"subtitle1"}>
              El paciente se presento con un desgarro de tipo 2 en el Miembro Isquiotibial Izquierdo. Se recomienda reposo colocando el musculo en posiciones de relajación, aplicación de hielo para la reducción de inflamación del musculo y sesiones de Kinesiología para la recuperación apropiada del musculo.
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
            <Typography sx={{width: '11.4%', color: 'green' }}>
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
                <DialogContent>
                    <DialogContentText>
                      *Los medicos que se seleccione van a ver toda la informacion del tratamiento.
                    </DialogContentText>
                    <Grid container xs={12} justifyContent={"center"} direction={"column"} alignItems={"center"}>
                      <Grid container xs={6}>
                      <FormControl sx={{ m: 1, width: 200 }}>
                      <InputLabel id="demo-multiple-checkbox-label">Seleccione:</InputLabel>
                        <Select
                          multiple
                          value={personName}
                          onChange={handleChange}
                          input={<OutlinedInput label="Seleccione:" />}
                          renderValue={(selected) => selected.join(', ')}
                          fullWidth
                        >
                          {names2.map((name) => (
                            <MenuItem key={name} value={name}>
                              <Checkbox checked={personName.indexOf(name) > -1} />
                              <ListItemText primary={name} />
                            </MenuItem>
                          ))}
                        </Select>
                        </FormControl>
                      </Grid>
                      <Grid container xs={6}>
                        <Button onClick={handleClose2}>Guardar</Button>
                      </Grid>
                    </Grid>
                  </DialogContent>
              </Dialog>
            </Grid>
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor:"#eeeeee"}}>
            <Typography variant={"h5"} sx={{color:"#2fc4b2", fontWeight:"bold"}}>
              Sesión 1: 05/12/2022
            </Typography>
            <Typography variant={"subtitle1"}>
              El paciente se presento a la sesión con un desgarro de tipo 2 en el miembro Isquiotibial Izquierdo. Concentración de liquido linfático en el lugar del desgarro. Se realizaron ejercicios de recuperación y masajes drenantes para la estimulación del musculo y tratar dolor. Se recomendaron cuatro(4) sesiones de Kinesiología para la recuperación correcta.
            </Typography>
            <Typography variant={"h5"} sx={{color:"#2fc4b2", fontWeight:"bold"}}>
              Sesión 2: 12/12/2022
            </Typography>
            <Typography variant={"subtitle1"}>
              Se realizaron ejercicios de recuperación y masajes para la estimulación del musculo y tratar dolor. El musculo se encuentra en una recuperación optima, se observa una desinflamación acorde a los ejercicios realizados.
            </Typography>
          </AccordionDetails>
        </Accordion>
        </Grid>
      </Grid>
    </Grid>
  );
}
