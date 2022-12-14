import * as React from "react";
import { Typography, Button, Grid, Stack, Paper, Divider, Box, Input, Rating, Tabs, Tab, Avatar, TextField, DialogContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import { TabPanel, SetupIndex } from "../../components/tabPanel/TabPanel";
import Opiniones from "./Opiniones";
import DudasResueltas from "./DudasResueltas";
import Informacion from "./Informacion";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from '@mui/material/Slide';
import DialogContentText from "@mui/material/DialogContentText";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


export default function CartaMedico() {

    const BootstrapButton = styled(Button)({
        width: "650px",
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 24,
        padding: '16px 22px',
        border: '1px solid',
        backgroundColor: '#25be8b',
        borderColor: '#25be8b',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#fff',
            borderColor: '#000',
            boxShadow: 'none',
            color: 'black'
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#fff',
            borderColor: '#fff',
        },
    });

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
    ];

    /* const estralla = styled(Icon)({
        color: "grey",

        /* clasificacion {
          direction: rtl;
          unicode-bidi: bidi-override;
        } 

        "&:hover": {
            color: "orange",
        },
    }); */

    const estralla2 = styled(Input)({
        "&:checked": {
            color: "orange",
        },
    });

    const [value, setValue] = React.useState(5);
    const [tab, setTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    const cambiarHora = (nombreImagen) => {
        var Typography = document.getElementById('hora');
        Typography.textContent = "11:00";
    };

    const [open1, setOpen1] = React.useState(false);
  
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };


    return (
        <Grid
            container
            component="main"
            sx={{
                height: "100%",
                width: "100%",
                backgroundColor: "#ebebeb",
            }}
        >
            <Grid item width="100px" height="200px">
            </Grid>
            <Grid item width="700px" height="650px" >
                <Grid container width="660px" height="230px" marginTop="20px" marginLeft="20px" >
                    <Grid item width="210px" height="180px" >
                        <div>
                            <Avatar src="/img/prof3.jpeg" sx={{ width: 156, height: 156 }} />
                        </div>
                    </Grid>
                    <Grid item width="410px" height="150px"  >
                        <Typography variant="h3" gutterBottom fontWeight="bold" textAlign="left">
                            Dr. Pedro Zabala
                        </Typography>
                        <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="left">
                            Deportólogo
                        </Typography>
                        <Grid item width="410px" height="50px"  >
                            <div>
                                <Box component="fieldset" mb={3} borderColor="transparent" marginLeft="-12px">
                                    <Rating name="read-only" value={value} readOnly size="large" />
                                </Box>
                            </div>

                        </Grid>
                    </Grid>
                    <Grid item width="700px" height="50px">
                        <Tabs
                            value={tab}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                        >
                            <Tab label="Información" {...SetupIndex(0)} />
                            <Tab label="Opiniones" {...SetupIndex(1)} />
                            {/* <Tab label="Dudas Resueltas" {...SetupIndex(2)} /> */}
                        </Tabs>
                        <Box sx={{ m: 5 }}>
                            <TabPanel value={tab} index={0}>
                                <Informacion />
                            </TabPanel>
                            <TabPanel value={tab} index={1}>
                                <Opiniones />
                            </TabPanel>
                            {/* <TabPanel value={tab} index={2}>
                                <DudasResueltas />
                            </TabPanel>  */}
                        </Box>
                    </Grid>
                </Grid>

            </Grid>
            
            <Grid item width="1px" height="650px" backgroundColor="#2fc4b2" marginRight="50px" marginBottom="20px" marginTop="20px"></Grid>
            <Grid item width="700px" height="650px">
                <Grid container width="700px" height="400px">
                    <Grid item width="700px" height="70px" >
                        <Typography variant="h3" gutterBottom fontWeight="bold" textAlign="center">
                            Pedir Turno
                        </Typography>
                    </Grid>
                    <Grid container width="700px" height="400px" >
                        <Grid item width="70px" height="400px" >
                            <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "50px", marginTop: "10px" }} >
                                <ArrowBackIcon />
                            </BootstrapButton>
                        </Grid>
                        <Grid item width="100px" height="400px">
                            <Stack spacing={0}>
                                <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="center">Jueves 15/12</Typography>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    10:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    12:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    14:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    16:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    17:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    18:00</BootstrapButton>
                            </Stack>
                        </Grid>
                        <Grid item width="1px" height="345px" backgroundColor="black">
                        </Grid>
                        <Grid item width="100px" height="400px">
                            <Stack spacing={0}>
                                <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="center">Viernes 16/12</Typography>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    8:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    10:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    11:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    13:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    17:00</BootstrapButton>
                                <Divider />
                            </Stack>
                        </Grid>
                        <Grid item width="1px" height="345px" backgroundColor="black">
                        </Grid>
                        <Grid item width="100px" height="400px">
                            <Stack spacing={0}>
                                <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="center">Sábado 17/12</Typography>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    9:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    10:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton onClick={cambiarHora} variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    11:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    14:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    16:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    17:00</BootstrapButton>
                            </Stack>
                        </Grid>
                        <Grid item width="1px" height="345px" backgroundColor="black">
                        </Grid>
                        <Grid item width="100px" height="400px">
                            <Stack spacing={0}>
                                <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="center">Domingo 18/12</Typography>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    8:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    11:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    13:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    15:00</BootstrapButton>
                                <Divider />
                            </Stack>
                        </Grid>
                        <Grid item width="1px" height="345px" backgroundColor="black">
                        </Grid>
                        <Grid item width="100px" height="400px">
                            <Stack spacing={0}>
                                <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="center">Lunes 19/12</Typography>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    8:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    10:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    12:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    13:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    17:00</BootstrapButton>
                                <Divider />
                                <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "90px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                                    18:00</BootstrapButton>
                            </Stack>
                        </Grid>
                        <Grid item width="70px" height="400px" >
                            <BootstrapButton variant="contained" disableRipple sx={{ height: "10px", width: "50px", marginTop: "10px" }} >
                                <ArrowForwardIcon />
                            </BootstrapButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item width="700px" height="50px" >
                    <Typography textAlign="center" marginTop="20px" marginRight="50px">
                        <a href="/dedede">Ver más Horarios</a>
                    </Typography>
                </Grid>
                <Grid container width="700px" height="200px">
                    <Grid item width="350px" height="200px">
                        <Stack direction="horizontally">
                            <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="center">Dirección:</Typography>
                            <Typography variant="h6" gutterBottom textAlign="center">Galván 4102, CABA</Typography>
                        </Stack>
                        <Stack direction="horizontally">
                            <Typography variant="h6" gutterBottom fontWeight="bold" textAlign="center">Horario:</Typography>
                            <Typography variant="h6" gutterBottom textAlign="center" id="hora"></Typography>
                        </Stack>
                        <BootstrapButton onClick={handleClickOpen1} variant="contained" disableRipple sx={{ height: "50px", width: "250px", marginLeft: "5px", marginTop: "5px", marginBottom: "5px" }} >
                            Confirmar Turno</BootstrapButton>
                        <Dialog
                            open={open1}
                            onClose={handleClose1}
                            TransitionComponent={Transition}
                            keepMounted
                        >
                            <DialogTitle textAlign="center">Turno Confirmado</DialogTitle>
                            <DialogContent>
                            <DialogContentText>
                                ¡Gracias por confiar en ImproveMe!
                            </DialogContentText>
                            </DialogContent>
                        </Dialog>
                    </Grid>
                    <Grid item width="200px" height="200px">
                        <div >
                            <img
                                src="img/calendario.png"
                                width="200px"
                                height="200px"
                                alt="inicio3"
                                margin-top="15px"
                            ></img>
                        </div>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    );
}