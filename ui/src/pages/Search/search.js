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

  const dolores = [
    { label: "Muñeca" },
    { label: "Hombro" },
    { label: "Rodilla" },
    { label: "Cadera" },
    { label: "Cuello" },
    { label: "Codo" },
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
      avatar: "img/prof1.png",
    },
    {
      nombre: "Dr. Eliseo Firman",
      especialidad: "Deportólogo",
      deporte: "Futbol",
      localidad: "CABA",
      calificacion: 3,
      address: "Av Libertador 4992",
      avatar: "img/prof2.png",
    },
    {
      nombre: "Dr. Gustavo Gómez Rodríguez",
      especialidad: "Nutricionista",
      deporte: "Futbol",
      localidad: "CABA",
      calificacion: 2,
      address: "Juramento 2089, 5° piso Of. 505",
      avatar: "img/prof3.png",
    },
    {
      nombre: "Dr. Nicolas Irigoitia",
      especialidad: "Entrenador Personalizado",
      deporte: "Futbol",
      localidad: "CABA",
      calificacion: 4,
      address: "Marcelo T de Alvear 1719 3°Piso",
      avatar: "img/prof4.png",
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
        <Stack direction="row" spacing={5}>
          <Autocomplete
            multiple
            disablePortal
            id="deporteSeleccionado"
            options={especialista}
            filterSelectedOptions
            margin="normal"
            required
            sx={{ width: 350 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Seleccione la Profesión del Especialista"
              />
            )}
          />
          <Autocomplete
            multiple
            disablePortal
            id="deporteSeleccionado"
            options={dolores}
            filterSelectedOptions
            margin="normal"
            required
            sx={{ width: 350 }}
            renderInput={(params) => (
              <TextField {...params} label="Seleccione su Zona de dolor" />
            )}
          />
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
                    />
                  }
                  title={singleResult.nombre}
                  subheader={
                    <div>
                      <Typography variant="body2" color="text.secondary">
                        {`${singleResult.especialidad} (${singleResult.deporte})`}
                      </Typography>
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
