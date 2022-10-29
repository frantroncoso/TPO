import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { height, width } from "@mui/system";
import { CheckBoxRounded, AccountCircle } from "@mui/icons-material";
import FormGroup from "@mui/material/FormGroup";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from 'react'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { red } from "@mui/material/colors";
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
        { label: "Kinesiólogo" },
        { label: "Deportólogo" },
        { label: "Nutricionista" },
        { label: "Entrenador Personalizado" },

    ];

    const mockDoctores = [
        { nombre: "Juan Perez", especialidad: " Kinesiólogo", deporte: "Futbol", localidad: "CABA", calificacion: "5 Estrellas" },
        { nombre: "Carlos Perez", especialidad: " Deportólogo", deporte: "Futbol", localidad: "CABA", calificacion: "5 Estrellas" },
        { nombre: "Alberto Perez", especialidad: "Nutricionista", deporte: "Futbol", localidad: "CABA", calificacion: "5 Estrellas" },
        { nombre: "Pablo Perez", especialidad: " Entrenador Personalizado", deporte: "Futbol", localidad: "CABA", calificacion: "5 Estrellas" },

    ];

    const [resultsList, setresultsList] = useState([]);

    /* const handleIngredientChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...ingredientList];
      list[index][name] = value;
      setingredientList(list);
    }; */

    const mostrarResultados = () => {
        setresultsList(mockDoctores);
    };

    const handleCardEvent = () => {
        console.log("mostrar pagina doctor");
    };

    return (
        <div
            alignItems="center">
            <Grid container component="main" /* spacing={2} */ sx={{ height: "100%", width: "100%" }}>
                <Grid item //Checkbox especialidades
                    width="450px"
                    height="782px"

                    sx={{
                        backgroundColor: "#F5DEB3",
                    }}
                >


                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",

                        }}
                    >
                        <Autocomplete
                            multiple
                            disablePortal
                            id="deporteSeleccionado"
                            options={especialista}
                            filterSelectedOptions
                            margin="normal"
                            required
                            fullWidth
                            renderInput={(params) => <TextField {...params} label="Seleccione la Profesión del Especialista" />}

                        />
                    </Box>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",

                        }}
                    >

                        <Autocomplete
                            multiple
                            disablePortal
                            id="deporteSeleccionado"
                            options={dolores}
                            filterSelectedOptions
                            margin="normal"
                            required
                            fullWidth
                            renderInput={(params) => <TextField {...params} label="Seleccione su Deporte" />}

                        />
                    </Box>

                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",

                        }}
                    >
                        <Autocomplete
                            multiple
                            disablePortal
                            id="deporteSeleccionado"
                            options={deportes}
                            filterSelectedOptions
                            margin="normal"
                            required
                            fullWidth
                            renderInput={(params) => <TextField {...params} label="Seleccione su Deporte" />}

                        />
                    </Box>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",

                        }}
                    >

                        <h4>Seleccione la Localidad donde desea atenderse</h4>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="CABA" />
                            <FormControlLabel control={<Checkbox />} label="GBA" />
                        </FormGroup>

                    </Box>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",

                        }}
                    >
                        <Button onClick={() => mostrarResultados()}>Buscar Especialista</Button>
                    </Box>

                    <h5> NO es necesario utilizar todas las opciones </h5>
                </Grid>

                <Grid item
                    width="1133px"
                    height="782px"
                    sx={{
                        backgroundColor: "#00aae4",
                        overflow: "scroll"
                    }}
                >
                    <h4>Mis Resultados</h4>
                    <Grid container component="main" sx={{ height: "100%", width: "100%" }}>

                        {resultsList.map((singleResult, index) => (
                            <Grid item>

                                <Card key={index} sx={{ width: 1116, backgroundColor: "#F5DEB3", border: " 2px solid #ffff", }} onClick={handleCardEvent}>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                                <AccountCircle />
                                            </Avatar>
                                        }
                                        title={singleResult.nombre}
                                        subheader={singleResult.especialidad}
                                    />
                                    <CardContent>
                                        <Stack direction="row" spacing={5}>
                                        <Typography variant="body2" color="text.secondary">
                                            {"Deporte:    "}
                                            {singleResult.deporte}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {"Localidad:    "}
                                            {singleResult.localidad}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {"Calificación:     "}
                                            {singleResult.calificacion}
                                        </Typography>
                                        </Stack>
                                    </CardContent>
                                        
                            </Card>
                            </Grid>

                        ))}

                    </Grid>



                </Grid>

            </Grid>
        </div >
    )
}
