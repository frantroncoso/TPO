import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FormGroup from "@mui/material/FormGroup";
import Autocomplete from "@mui/material/Autocomplete";
import Box from '@mui/material/Box';

import { useState } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";

export default function Search() {
  const deportes = [
    { label: "Futbol" },
    { label: "Basketball" },
    { label: "Rugby" },
    { label: "Hockey" },
    { label: "Tenis" },
    { label: "Entrenamiento Personalizado" },
  ];

  const miembro = [
    { label: "Cuello" },
    { label: "Hombro" },
    { label: "Brazo/antebrazo" },
    { label: "Columna" },
    { label: "Pecho" },
    { label: "Muñeca/mano" }
  ];

  const especialista = [
    { label: "Traumatólogo" },
    { label: "Kinesiólogo" },
    { label: "Deportólogo" },
    { label: "Nutricionista" },
    { label: "Entrenador Personalizado" },
  ];

  

  const mockDoctores = [
    {
      nombre: "Dr. Ignacio Alonso Hidalgo",
      especialidad: "Traumatólogo",
      deporte: "Futbol",
      localidad: "CABA",
      calificacion: 5,
      address: "Avenida Callao 875 2d, Capital Federal",
      avatar: "img/doc3.webp",
    },
    {
      nombre: "Dr. Eliseo Firman",
      especialidad: "Deportólogo",
      deporte: "Futbol",
      localidad: "CABA",
      calificacion: 3,
      address: "Av Libertador 4992",
      avatar: "img/doc2.webp",
    },
    {
      nombre: "Dr. Gustavo Gómez Rodríguez",
      especialidad: "Nutricionista",
      deporte: "Futbol",
      localidad: "CABA",
      calificacion: 2,
      address: "Juramento 2089, 5° piso Of. 505",
      avatar: "img/doc1.webp",
    },
    {
      nombre: "Dr. Nicolas Irigoitia",
      especialidad: "Entrenador Personalizado",
      deporte: "Futbol",
      localidad: "CABA",
      calificacion: 4,
      address: "Marcelo T de Alvear 1719 3°Piso",
      avatar: "img/doc.webp",
    },
    {
      nombre: "Rossi - Centro de atención",
      especialidad: "Ir a la pagina del centro",
      deporte: "Click aquí",
      localidad: "CABA - GBA",
      calificacion: 4,
      address: "Marcelo T de Alvear 1719 3°Piso",
      avatar: "img/rossi.webp",
      link: "https://www.cdrossi.com/"
    },
  ];

  const [resultsList, setresultsList] = useState([]);

  const mostrarResultados = () => {
    setresultsList(mockDoctores);
  };

  const handleCardEvent = () => {
    console.log("mostrar pagina doctor");
  };

  return (
    <div>
      <Paper elevation={3} sx={{ mb: 3, p: 1 }}>
        <Typography variant="h6" gutterBottom>
        Filtre la búsqueda de un profesional según:
        </Typography>
        <Stack direction="row" spacing={5}>
          <Autocomplete
            multiple
            disablePortal
            id="deporteSeleccionado"
            options={especialista}
            filterSelectedOptions
            margin="normal"
            required
            sx={{ width: 180 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Especialidad"
              />
            )}
          />

            <Autocomplete
            multiple
            disablePortal
            id="deporteSeleccionado"
            options={deportes}
            filterSelectedOptions
            margin="normal"
            required
            sx={{ width: 180 }}
            renderInput={(params) => (
              <TextField {...params} label="Deporte" />
            )}
          />
            <Autocomplete
            multiple
            disablePortal
            id="deporteSeleccionado"
            options={miembro}
            filterSelectedOptions
            margin="normal"
            required
            sx={{ width: 180 }}
            renderInput={(params) => (
              <TextField {...params} label="Miembro a tratar" />
            )}
          />
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">Atiende</FormLabel>
            <FormGroup row={true}>
              <FormControlLabel control={<Checkbox />} label="Obra social" />
              <FormControlLabel control={<Checkbox />} label="Particular" />
            </FormGroup>
          </FormControl>

          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">Localidad</FormLabel>
            <FormGroup row={true}>
              <FormControlLabel control={<Checkbox />} label="CABA" />
              <FormControlLabel control={<Checkbox />} label="GBA" />
            </FormGroup>
          </FormControl>
          <Button onClick={() => mostrarResultados()}>
            Buscar Especialista
          </Button>
        </Stack>
      </Paper>

      <Container>
        <Grid container>
          {resultsList.map((singleResult, index) => (
            <Grid item xs={4} padding="7px">
              <Card
                key={index}
                sx={{
                  backgroundColor: "#e1f7f1",
                  border: " 2px solid #117c6f",
                }}
                onClick={handleCardEvent}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      alt={singleResult.nombre}
                      src={singleResult.avatar} 
                      sx={{ width: 80, height: 80 }}
                    />
                  }
                  title={singleResult.nombre}
                  subheader={
                    <div>
                     <a href={`${singleResult.link}`}>
                         {`${singleResult.especialidad} (${singleResult.deporte})`}
                      </a>
                      
                      <Typography variant="body2" color="text.secondary">
                        {[...Array(singleResult.calificacion)].map((e, i) => (
                          <StarIcon fontSize="small" key={`${index}-${i}`} />
                        ))}
                        {[...Array(5 - singleResult.calificacion)].map(
                          (e, i) => (
                            <StarBorderIcon
                              fontSize="small"
                              key={`${index}-${i}`}
                            />
                          )
                        )}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <LocationOnIcon fontSize="small" />
                        {singleResult.localidad}
                      </Typography>
                    </div>
                  }
                />
                {/* <CardContent>
                
              </CardContent> */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
