import * as React from "react";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { AccountCircle, Edit } from "@mui/icons-material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Journal from "./journal";
import Turns from "./turns";
import { TabPanel, SetupIndex } from "../../components/tabPanel/TabPanel";

export default function Profile() {
  const mockUser = {
    name: "Juan Gonzales",
    birthday: "22/05/2000",
    dni: "41547964",
    sport: "Futbol",
    wight: 76,
    height: 182,
  };

  const [user, setUser] = useState(null);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setUser(mockUser);
  });

  return (
    <div>
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.200",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        />
        <Grid
          container
          sx={{
            position: "relative",
            p: { xs: 1, md: 3 },
            pr: { md: 0 },
          }}
        >
          <Grid item md={1} gridColumn="span 3">
            <Avatar sx={{ m: 1, bgcolor: "grey.800" }}>
              <AccountCircle />
            </Avatar>
          </Grid>
          <Grid item md={10}>
            <Grid container>
              <Grid item md={6}>
                {!user ? (
                  <Skeleton />
                ) : (
                  <Typography
                    component="h1"
                    variant="h5"
                    color="inherit"
                    gutterBottom
                  >
                    Nombre: {user.name}
                  </Typography>
                )}
              </Grid>
              <Grid item md={6}>
                {!user ? (
                  <Skeleton />
                ) : (
                  <Typography variant="h5" color="inherit" paragraph>
                    Fecha de nacimiento: {user.birthday}
                  </Typography>
                )}
              </Grid>
              <Grid item md={6}>
                {!user ? (
                  <Skeleton />
                ) : (
                  <Typography variant="h5" color="inherit" paragraph>
                    DNI: {user.dni}
                  </Typography>
                )}
              </Grid>
              <Grid item md={6}>
                {!user ? (
                  <Skeleton />
                ) : (
                  <Typography
                    component="h1"
                    variant="h5"
                    color="inherit"
                    gutterBottom
                  >
                    Deporte: {user.sport}
                  </Typography>
                )}
              </Grid>
              <Grid item md={6}>
                {!user ? (
                  <Skeleton />
                ) : (
                  <Typography variant="h5" color="inherit" paragraph>
                    Peso: {user.wight} kg.
                  </Typography>
                )}
              </Grid>
              <Grid item md={6}>
                {!user ? (
                  <Skeleton />
                ) : (
                  <Typography variant="h5" color="inherit" paragraph>
                    Altura: {user.height} cm.
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={1} gridColumn="span 3">
            <Edit />
          </Grid>
        </Grid>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Seguimiento" {...SetupIndex(0)} />
          <Tab label="Proximos Turnos" {...SetupIndex(1)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <Journal />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Turns />
      </TabPanel>
    </div>
  );
}
