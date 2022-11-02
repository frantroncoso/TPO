import * as React from "react";
import { useState } from "react";
import {
  Button,
  Stack,
  CardContent,
  Card,
  Grid,
  Typography,
} from "@mui/material";
import { TabPanel, SetupIndex } from "../../components/tabPanel/TabPanel";

export default function Journal() {
  const [value, setValue] = useState(0);
  const [resultsList, setresultsList] = useState([
    {
      tratamiento: "Traumatología - Zona Hombros",
      doctor: " Pablo Perez",
      estado: "En Proceso",
    },
    {
      tratamiento: "Plan de Alimentación",
      doctor: " Juan Perez",
      estado: "Finalizado",
    },
    {
      tratamiento: "Kinesiología",
      doctor: " Alberto Perez",
      estado: "En Proceso",
    },
  ]);

  const handleCardEvent = () => {
    console.log("mostrar pagina tratamiento");
  };

  return (
    <div>
      <TabPanel value={value} index={0}>
        <Grid
          item
          width="100%"
          height="100%"
          sx={{
            backgroundColor: "#00aae4",
          }}
        >
          <Grid
            container
            component="main"
            sx={{ height: "100%", width: "100%" }}
          >
            {resultsList.map((singleResult, index) => (
              <Grid item>
                <Card
                  key={index}
                  sx={{
                    width: 1550,
                    backgroundColor: "#F5DEB3",
                    border: " 2px solid #ffff",
                  }}
                  onClick={handleCardEvent}
                >
                  <CardContent>
                    <Stack
                      direction="row"
                      spacing={5}
                      justifyContent="space-between"
                    >
                      <Typography variant="body2" color="text.secondary">
                        {singleResult.tratamiento}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {"Doctor:    "}
                        {singleResult.doctor}
                      </Typography>

                      <Button
                        {...SetupIndex(1)}
                        onClick={() => {
                          setValue(1);
                        }}
                      >
                        Comentarios
                      </Button>
                      <Button
                        {...SetupIndex(2)}
                        onClick={() => {
                          setValue(2);
                        }}
                      >
                        Seguimientos
                      </Button>
                      <Typography variant="body2" color="text.secondary">
                        {"Estado:     "}
                        {singleResult.estado}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Comentarios
        <Button
          onClick={() => {
            setValue(0);
          }}
        >
          volver
        </Button>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Seguimiento
        <Button
          onClick={() => {
            setValue(0);
          }}
        >
          volver
        </Button>
      </TabPanel>
    </div>
  );
}
