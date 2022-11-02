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
import { fontWeight } from "@mui/system";

export default function Journal() {
  const [value, setValue] = useState(0);
  const [resultsList, setresultsList] = useState([
    {
      tratamiento: "Plan de Alimentación",
      doctor: " Pablo Perez",
      estado: "En Proceso",
      sesion1:
        "El paciente se presentó con el objetivo de disminuir su grasa corporal, ganando masa muscular, siguiendo una rutina de alimentación la cual va a complementar con entrenamiento en un gimnasio. ",
      sesion2:
        "El paciente presentó un aumento de masa muscular y una reducción de grasa corporal, presenta dificultades para seguir extrictamente la rutina alimentaria y cumple con su entrenamiento. Se le indicó seguir con la dieta",
      pasos:
        "Se le indicó asistir a un turno con una nutricionista, para obtener medidas corporales y luego armar un plan de alimentación en base a eso.",
      sesion1Comentarios:
        "La Lic. Gutierrez recomienda al paciente reservar un turno con la nutricionista Lic. Díaz, ya que trabajo con muchos pacientes junto a ella. Tiene buena disponibilidad y trabaja de manera excelente.",
      sesion2Comentarios:
        "Se nota un avance en los objetivos del paciente, aunque no ha realizado todas las actividades que se le pidió. Se le recomienda seguir con la mima dieta y ejercicios para que pueda seguir aumentando su masa muscular.",
    },
    {
      tratamiento: "Traumatología - Zona Hombros",
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
        <Grid item width="100%" height="100%">
          <Grid
            container
            component="main"
            sx={{ height: "100%", width: "100%" }}
          >
            {resultsList.map((singleResult, index) => (
              <Grid
                item
                sx={{
                  width: "100%",
                  mb: 3,
                }}
              >
                <Card
                  key={index}
                  sx={{
                    backgroundColor: "#a8d0da",
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
        <Grid container component="main" sx={{ height: "100%", width: "100%" }}>
          <Grid
            item
            sx={{
              backgroundColor: "#a8d0da",
              height: "100%",
              width: "100%",
              border: " 3px solid black",
            }}
          >
            <Stack direction="row" spacing={5} justifyContent="space-between">
              <Typography
                fontSize="x-large"
                fontWeight="1000"
                variant="subtitle1"
                color="text.secondary"
                align="justify"
              >
                Comentarios: {resultsList[0].tratamiento}
              </Typography>
              <Typography
                fontSize="x-large"
                fontWeight="1000"
                variant="subtitle1"
                color="text.secondary"
                align="justify"
              >
                Doctor: {resultsList[0].doctor}
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            sx={{
              backgroundColor: "#d8e8e8",
              height: "100%",
              width: "100%",
              border: " 1px solid black",
            }}
          >
            <Typography
              fontSize="large"
              fontWeight="bold"
              variant="body2"
              color="text.secondary"
            >
              Sesion 1:
            </Typography>
            <Typography
              fontSize="medium"
              variant="body2"
              color="text.secondary"
            >
              {resultsList[0].sesion1Comentarios}
            </Typography>
            <Typography
              fontSize="large"
              fontWeight="bold"
              variant="body2"
              color="text.secondary"
            >
              Sesion 2:
            </Typography>
            <Typography
              fontSize="medium"
              variant="body2"
              color="text.secondary"
            >
              {resultsList[0].sesion2Comentarios}
            </Typography>
          </Grid>
        </Grid>
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
        <Grid container component="main" sx={{ height: "100%", width: "100%" }}>
          <Grid
            item
            sx={{
              backgroundColor: "#a8d0da",
              height: "100%",
              width: "100%",
              border: " 3px solid black",
            }}
          >
            <Stack direction="row" spacing={5} justifyContent="space-between">
              <Typography
                fontSize="x-large"
                fontWeight="1000"
                variant="subtitle1"
                color="text.secondary"
                align="justify"
              >
                {resultsList[0].tratamiento}
              </Typography>
              <Typography
                fontSize="x-large"
                fontWeight="1000"
                variant="subtitle1"
                color="text.secondary"
                align="justify"
              >
                Doctor: {resultsList[0].doctor}
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            sx={{
              backgroundColor: "#d8e8e8",
              height: "100%",
              width: "100%",
              border: " 1px solid black",
            }}
          >
            <Typography
              fontSize="large"
              fontWeight="bold"
              variant="body2"
              color="text.secondary"
            >
              Sesion 1:
            </Typography>
            <Typography
              fontSize="medium"
              variant="body2"
              color="text.secondary"
            >
              {resultsList[0].sesion1}
            </Typography>

            <Typography
              fontSize="large"
              fontWeight="bold"
              variant="body2"
              color="text.secondary"
            >
              Sesion 2:
            </Typography>
            <Typography
              fontSize="medium"
              variant="body2"
              color="text.secondary"
            >
              {resultsList[0].sesion2}
            </Typography>

            <Typography
              fontSize="large"
              fontWeight="bold"
              variant="body2"
              color="text.secondary"
            >
              Pasos a seguir:
            </Typography>
            <Typography
              fontSize="medium"
              variant="body2"
              color="text.secondary"
            >
              {resultsList[0].pasos}
            </Typography>
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
}
