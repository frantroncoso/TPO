import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { Divider } from "@mui/material/divider";
import { Button } from "@mui/material";

export default function Journal() {

  const [resultsList, setresultsList] = useState([{
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
  },]);

  


  const handleCardEvent = () => {
    console.log("mostrar pagina tratamiento");
  };

  return (
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
                    <Stack direction="row" spacing={5} justifyContent="space-between">
                      <Typography variant="body2" color="text.secondary">
                        {singleResult.tratamiento}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {"Doctor:    "}
                        {singleResult.doctor}
                      </Typography>

                      <Button>
                        Comentarios
                        </Button>     
                        <Button>
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
  );
}
