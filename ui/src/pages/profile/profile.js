import * as React from "react";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Unstable_Grid2";
import Avatar from "@mui/material/Avatar";
import { Edit } from "@mui/icons-material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Journal from "./journal";
import Turns from "./turns";
import { TabPanel, SetupIndex } from "../../components/tabPanel/TabPanel";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SportsIcon from '@mui/icons-material/Sports';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CreateIcon from '@mui/icons-material/Create';
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]));
  }, []);

  return (
    <div>
      <Paper elevation={3} sx={{pt:1}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
          sx={{textColor:"#2fc4b2"}}
        >
          <Tab label="Seguimiento" {...SetupIndex(0)}/>
          <Tab label="Proximos Turnos" {...SetupIndex(1)} />
        </Tabs>
      </Paper>
      <Box sx={{ m: 5 }}>
        <TabPanel value={value} index={0}>
          <Journal />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Turns />
        </TabPanel>
      </Box>

      <Grid container xs={12} sx={{marginTop: 3, height:"300px", justifyContent:"center"}} >
        <Grid container xs={10} sx={{backgroundColor:"white", marginBottom:2, borderColor:"black", border: "1px solid grey", borderRadius:"7px"}}>
          <Grid container xs={3} justifyContent={"space-evenly"} alignItems={"center"} direction={"column"} >
            <Avatar src="/img/futbol1.jpg" sx={{ width: 156, height: 156 }}/>
            <Button variant={"contained"} sx={{backgroundColor:"#2fc4b2", '&:hover':{backgroundColor: "#2fc4a1",},}}>Cambiar Foto de Perfil</Button>
          </Grid>
          <Grid container marginTop={1} marginBottom={1}>
            <Divider orientation="vertical" variant="middle" flexItem />
          </Grid>
          <Grid container xs={7.5} direction={"column"} >
            <Grid container xs={12} margin={3} alignItems={"flex-end"}>
              <Grid item marginRight={18}>
                <Typography variant="h4">Pedro Molier</Typography>
              </Grid>
              <Grid item height={"26px"}>
                <Typography variant="h7" sx={{ display: "flex", alignItems: "center" }}><CalendarMonthIcon sx={{fontSize:18}}/>22 Años.</Typography>
              </Grid>
            </Grid>
            <Grid container xs={12} sx={{display:"flex", direction:"row"}}>
            <Grid container xs={7} marginLeft={3} marginTop={2}>
              <Grid container xs={12} sx={{ display: "flex", alignItems: "center" }}>
                <Grid item>
                  <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}><MedicalServicesIcon/>Antecedentes Médicos: Sin Antecedentes Medicos Cargados.</Typography>
                </Grid>
                <Grid item marginLeft={0.2}>
                  <Link>
                    <Typography variant="body2">Link</Typography>
                  </Link>
                </Grid>
              </Grid>
              <Grid container xs={12} marginTop={2} sx={{ display: "flex", alignItems: "center" }}>
                <Grid item>
                  <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}><SportsIcon/>Apto Físico: Actualizado 15/08/2022.</Typography>
                </Grid>
                <Grid item marginLeft={0.2}>
                  <Link>
                    <Typography variant="body2">Actualizar</Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid container xs={6} marginLeft={3} marginTop={2}>
              <Grid container>
                <Grid item>
                  <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}><LocationOnIcon sx={{fontSize:18}}/>Dirección: Av. de los Incas 4586; C.A.B.A; Argentina.</Typography>
                </Grid>
                <Grid item marginTop={2}>
                  <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}><FavoriteIcon sx={{fontSize:18}}/>Género: Masculino.</Typography>
                </Grid>
              </Grid>
            </Grid>
            </Grid>
          </Grid>
          <Grid container xs={1} justifyContent={"space-evenly"} alignItems={"center"} direction={"column"} >
            <IconButton variant={"contained"} sx={{backgroundColor:"#eeeeee", '&:hover':{backgroundColor: "#bdbdbd",},}}><CreateIcon/></IconButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
