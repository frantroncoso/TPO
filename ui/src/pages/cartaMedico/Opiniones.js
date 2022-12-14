import * as React from "react";
import { useState } from "react";
import { Typography, Button, Grid, Stack, Paper, Divider, Box, Input, Rating, Tabs, Tab } from "@mui/material";

export default function Opiniones() {

    return (
        <Grid container width="660px" height="350px" marginLeft="-40px" scroll="auto">

            <Grid item width="660px" height="50px" >
                <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center" > ¡Calificá al Especialista!</Typography>
            </Grid>
            <Grid item width="660px" height="50px" marginTop="-85px" marginLeft="250px" >
                <Stack spacing={1}>
                    <Rating name="size-large" defaultValue={1} size="large" />
                </Stack>
            </Grid>
            <Grid item width="660px" height="50px" marginTop="-130px" scroll="auto">
                <Stack  spacing={2}>
                    <Typography variant="h5" gutterBottom fontWeight="bold" textAlign="left" > Comentarios</Typography>
                </Stack>
                <Divider/>
                <Stack spacing="-15px">
                    <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="left"> Mariano Trello</Typography>
                    <Typography variant="h7" gutterBottom textAlign="left">Muy buena atención de Pedro, genial todo</Typography>
                </Stack>
                <Divider/>
                <Stack spacing="-15px">
                    <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="left"> Mariano Trello</Typography>
                    <Typography variant="h7" gutterBottom textAlign="left">Muy buena atención de Pedro, genial todo</Typography>
                </Stack>
                <Divider/>
                <Stack spacing="-15px">
                    <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="left"> Mariano Trello</Typography>
                    <Typography variant="h7" gutterBottom textAlign="left">Muy buena atención de Pedro, genial todo</Typography>
                </Stack>
                <Divider/>
                

            </Grid>
        </Grid>

    );
}