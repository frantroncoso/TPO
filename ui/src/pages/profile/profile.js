import * as React from "react";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { Edit } from "@mui/icons-material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Journal from "./journal";
import Turns from "./turns";
import { TabPanel, SetupIndex } from "../../components/tabPanel/TabPanel";
import { Stack } from "@mui/system";

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
      <Paper elevation={3} sx={{ m: 5, pt: 1 }}>
        <Stack direction="row" sx={{ mx: 3 }} spacing={2} alignItems="center">
          {!user ? (
            <Skeleton variant="circular" />
          ) : (
            <Avatar
              alt="Remy Sharp"
              src={user.picture.thumbnail}
              sx={{ width: 75, height: 75 }}
            />
          )}
          <Grid container>
            <Grid item md={6}>
              {!user ? (
                <Skeleton />
              ) : (
                <Typography
                  component="h1"
                  variant="subtitle1"
                  color="inherit"
                  gutterBottom
                >
                  Nombre: {user.name.first} {user.name.last}
                </Typography>
              )}
            </Grid>
            <Grid item md={6}>
              {!user ? (
                <Skeleton />
              ) : (
                <Typography variant="subtitle1" color="inherit" paragraph>
                  Fecha de nacimiento: {"19/11/1995"}
                </Typography>
              )}
            </Grid>
            <Grid item md={6}>
              {!user ? (
                <Skeleton />
              ) : (
                <Typography variant="subtitle1" color="inherit" paragraph>
                  DNI: {"38991915"}
                </Typography>
              )}
            </Grid>
            <Grid item md={6}>
              {!user ? (
                <Skeleton />
              ) : (
                <Typography
                  component="h1"
                  variant="subtitle1"
                  color="inherit"
                  gutterBottom
                >
                  Deporte: {"Futbol"}
                </Typography>
              )}
            </Grid>
            <Grid item md={6}>
              {!user ? (
                <Skeleton />
              ) : (
                <Typography variant="subtitle1" color="inherit" paragraph>
                  Peso: {75} kg.
                </Typography>
              )}
            </Grid>
            <Grid item md={6}>
              {!user ? (
                <Skeleton />
              ) : (
                <Typography variant="subtitle1" color="inherit" paragraph>
                  Altura: {170} cm.
                </Typography>
              )}
            </Grid>
          </Grid>
          <Edit sx={{ mb: "auto" }} />
        </Stack>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Seguimiento" {...SetupIndex(0)} />
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
    </div>
  );
}
