import * as React from "react";
import { useState } from "react";
import { Typography, Button, Grid, Stack, Paper, Divider, Box, Input, Rating, Tabs, Tab } from "@mui/material";

export default function Informacion() {

    return (
        <Grid container width="660px" height="350px"  marginLeft="-40px" scroll="auto">

            <Grid item width="660px" height="350px"  scroll="auto" >
                <Stack direction="horizontal">
                    <Grid container width="330px" height="50px" >
                        <Grid item width="50px" height="150px" marginLeft="10px" marginTop="7px">
                            <div>
                                <img
                                    src="img/estetoscopio.png"
                                    width="35"
                                    height="35"
                                    alt="inicio3"
                                    margin-top="15px"
                                ></img>
                            </div>

                        </Grid>
                        <div>
                            <Stack spacing="-15px">
                                <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="left"> Profesión</Typography>
                                <Typography variant="h7" gutterBottom textAlign="left">Deportólogo</Typography>
                            </Stack>
                        </div>
                    </Grid>
                    <Grid container width="330px" height="50px" >
                        <Grid item width="50px" height="150px" marginLeft="10px" marginTop="7px">
                            <div>
                                <img
                                    src="img/futbol-americano.png"
                                    width="35"
                                    height="35"
                                    alt="inicio3"
                                    margin-top="15px"
                                ></img>
                            </div>

                        </Grid>
                        <div>
                            <Stack spacing="-15px">
                                <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="left"> Especialidad</Typography>
                                <Typography variant="h7" gutterBottom textAlign="left">Futbol, Rugby</Typography>
                            </Stack>
                        </div>
                    </Grid>
                </Stack>
                <Stack direction="horizontal">
                    <Grid container width="330px" height="50px" >
                        <Grid item width="50px" height="150px" marginLeft="10px" marginTop="7px">
                            <div>
                                <img
                                    src="img/carnet-de-identidad.png"
                                    width="35"
                                    height="35"
                                    alt="inicio3"
                                    margin-top="15px"
                                ></img>
                            </div>

                        </Grid>
                        <div>
                            <Stack spacing="-15px">
                                <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="left"> Sobre Mi</Typography>
                                <a href="javascript:popUp('ventana.html')">Leer</a>
                            </Stack>
                        </div>
                    </Grid>
                    <Grid container width="330px" height="50px" >
                        <Grid item width="50px" height="150px" marginLeft="10px" marginTop="7px">
                            <div>
                                <img
                                    src="img/tratamiento.png"
                                    width="35"
                                    height="35"
                                    alt="inicio3"
                                    margin-top="15px"
                                ></img>
                            </div>

                        </Grid>
                        <div>
                            <Stack spacing="-15px">
                                <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="left"> Problemas Tratados</Typography>
                                <Typography variant="h7" gutterBottom textAlign="left">Lesiones, Desgarros</Typography>
                            </Stack>
                        </div>
                    </Grid>
                </Stack>
                <Stack direction="horizontal">
                    <Grid container width="330px" height="50px" >
                        <Grid item width="50px" height="150px" marginLeft="10px" marginTop="7px">
                            <div>
                                <img
                                    src="img/humano.png"
                                    width="35"
                                    height="35"
                                    alt="inicio3"
                                    margin-top="15px"
                                ></img>
                            </div>

                        </Grid>
                        <div>
                            <Stack spacing="-15px">
                                <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="left"> Miembros Tratados</Typography>
                                <Typography variant="h7" gutterBottom textAlign="left">Brazo, Muñeca, Mano</Typography>
                            </Stack>
                        </div>
                    </Grid>
                    <Grid container width="330px" height="50px" >
                        <Grid item width="50px" height="150px" marginLeft="10px" marginTop="7px">
                            <div>
                                <img
                                    src="img/gorro-de-graduacion.png"
                                    width="35"
                                    height="35"
                                    alt="inicio3"
                                    margin-top="15px"
                                ></img>
                            </div>

                        </Grid>
                        <div>
                            <Stack spacing="-15px">
                                <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="left"> Estudios</Typography>
                                <Typography variant="h7" gutterBottom textAlign="left">Facultad de Medicina - UBA</Typography>
                            </Stack>
                        </div>
                    </Grid>
                </Stack>
                <Stack direction="horizontal">
                    <Grid container width="330px" height="50px" >
                        <Grid item width="50px" height="150px" marginLeft="10px" marginTop="7px">
                            <div>
                                <img
                                    src="img/telefono.png"
                                    width="35"
                                    height="35"
                                    alt="inicio3"
                                    margin-top="15px"
                                ></img>
                            </div>

                        </Grid>
                        <div>
                            <Stack spacing="-15px">
                                <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="left"> Telefono</Typography>
                                <Typography variant="h7" gutterBottom textAlign="left">+11 54 4938-0291</Typography>
                            </Stack>
                        </div>
                    </Grid>
                    <Grid container width="330px" height="50px" >
                        <Grid item width="50px" height="150px" marginLeft="10px" marginTop="7px">
                            <div>
                                <img
                                    src="img/ubicacion.png"
                                    width="35"
                                    height="35"
                                    alt="inicio3"
                                    margin-top="15px"
                                ></img>
                            </div>

                        </Grid>
                        <div>
                            <Stack spacing="-15px">
                                <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="left"> Ubicación</Typography>
                                <Typography variant="h7" gutterBottom textAlign="left">Galván 4102, CABA</Typography>
                            </Stack>
                        </div>
                    </Grid>
                </Stack>
                <Stack direction="horizontal">
                    <Grid container width="330px" height="50px" >
                        <Grid item width="50px" height="150px" marginLeft="10px" marginTop="7px">
                            <div>
                                <img
                                    src="img/hospital.png"
                                    width="35"
                                    height="35"
                                    alt="inicio3"
                                    margin-top="15px"
                                ></img>
                            </div>

                        </Grid>
                        <div>
                            <Stack spacing="-15px">
                                <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="left"> Atiende a Pacientes</Typography>
                                <Typography variant="h7" gutterBottom textAlign="left">Privados, con Obra Social</Typography>
                            </Stack>
                        </div>
                    </Grid>
                    <Grid container width="330px" height="50px" >
                        <Grid item width="50px" height="150px" marginLeft="10px" marginTop="7px">
                            <div>
                                <img
                                    src="img/dinero.png"
                                    width="35"
                                    height="35"
                                    alt="inicio3"
                                    margin-top="15px"
                                ></img>
                            </div>

                        </Grid>
                        <div>
                            <Stack spacing="-15px">
                                <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="left"> Método de Pago</Typography>
                                <Typography variant="h7" gutterBottom textAlign="left">Efectivo</Typography>
                            </Stack>
                        </div>
                    </Grid>
                </Stack>
                <Stack direction="horizontal">
                    <Grid container width="330px" height="50px" >
                        <Grid item width="50px" height="150px" marginLeft="10px" marginTop="7px">
                            <div>
                                <img
                                    src="img/certificado.png"
                                    width="35"
                                    height="35"
                                    alt="inicio3"
                                    margin-top="15px"
                                ></img>
                            </div>

                        </Grid>
                        <div>
                            <Stack spacing="-15px">
                                <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="left"> Certificados</Typography>
                                <a href="javascript:popUp('ventana.html')">Ver</a>
                            </Stack>
                        </div>
                    </Grid>
                    <Grid container width="330px" height="50px" >
                        <Grid item width="50px" height="150px" marginLeft="10px" marginTop="7px">
                            <div>
                                <img
                                    src="img/grupo-de-chat.png"
                                    width="35"
                                    height="35"
                                    alt="inicio3"
                                    margin-top="15px"
                                ></img>
                            </div>

                        </Grid>
                        <div>
                            <Stack spacing="-15px">
                                <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="left"> Atiende a</Typography>
                                <Typography variant="h7" gutterBottom textAlign="left">Adultos</Typography>
                            </Stack>
                        </div>
                    </Grid>
                </Stack>
                


            </Grid>

        </Grid >

    );

}