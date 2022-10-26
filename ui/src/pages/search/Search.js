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
import { width } from "@mui/system";
import { CheckBoxRounded } from "@mui/icons-material";
import FormGroup from "@mui/material/FormGroup";
import Autocomplete from "@mui/material/Autocomplete";



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
                        <Button>Buscar Especialista</Button>
                    </Box>
                    
                    <h5> NO es necesario utilizar todas las opciones </h5>
                </Grid>

                <Grid item
                    width="1133px"
                    height="782px"
                    sx={{
                        backgroundColor: "#00aae4",
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
                        <h4>Mis Resultados</h4>
                    </Box>

                </Grid>

            </Grid>
        </div>
    )
}