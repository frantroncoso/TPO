import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { AccountCircle, Edit } from "@mui/icons-material";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Journal from "./journal";
import Turns from "./turns";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Profile() {
  const mockUser = {
    name: "Juan Gonzales",
    birthday: "22/05/2000",
    dni: "41547964",
    sport: "Futbol",
    wight: 76,
    height: 182,
  };

  const [user, setUser] = useState(mockUser);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.300",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          // backgroundImage: `url(${})`,
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
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "grey.800" }}>
                <AccountCircle />
              </Avatar>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                color="inherit"
                gutterBottom
              >
                Nombre: {user.name}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Fecha de nacimiento: {user.birthday}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                DNI: {user.dni}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                color="inherit"
                gutterBottom
              >
                Deporte: {user.sport}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Peso: {user.wight} kg.
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Altura: {user.height} cm.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Edit />
            </Box>
          </Grid>
        </Grid>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Seguimiento" {...a11yProps(0)} />
          <Tab label="Proximos Turnos" {...a11yProps(1)} />
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
