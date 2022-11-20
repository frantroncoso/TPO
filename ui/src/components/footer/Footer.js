import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Youtube from "@mui/icons-material/YouTube";
import Phone from "@mui/icons-material/Phone";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import { lightBlue } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      alignItems={"center"}
      sx={{ bgcolor: "#2fc4b2", py: 3 }}
    >
      <Grid container justifyContent="center" spacing={1} direction={"row"}>
        <Grid item sm={1.5}>
          <Link href="/" underline="hover">
            <Typography sx={{ color: "black", marginBottom: 0.5 }}>
              Sobre Nosotros
            </Typography>
          </Link>
        </Grid>
        <Grid item sm={2}>
          <Typography sx={{ mb: 1 }}>Números de Emergencia</Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <Phone sx={{ mr: 1, fontSize: 20 }} />
            103
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <MedicalServicesIcon sx={{ mr: 1, fontSize: 20 }} />
            107
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <LocalPoliceIcon sx={{ mr: 1, fontSize: 20 }} />
            911
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Link href="/" underline="hover">
            <Typography sx={{ color: "black", marginBottom: 0.5 }}>
              Información de Deportes
            </Typography>
          </Link>
          <Link href="/" underline="hover">
            <Typography sx={{ color: "black", marginBottom: 0.5 }}>
              Prevención de lesiones
            </Typography>
          </Link>
          <Link href="/" underline="hover">
            <Typography sx={{ color: "black" }}>Contactanos</Typography>
          </Link>
        </Grid>
        <Grid item sm={2} sx={{ display: "flex", alignItems: "center" }}>
          <Link
            variant="button"
            href="https://www.facebook.com"
            sx={{ my: 1, mx: 1 }}
          >
            <Avatar sx={{ bgcolor: "blue", fontSize: 30 }}>
              <Facebook sx={{ color: "white", fontSize: 25 }} />
            </Avatar>
          </Link>
          <Link
            variant="button"
            href="https://www.youtube.com"
            sx={{ my: 1, mx: 1 }}
          >
            <Avatar sx={{ bgcolor: "red", fontSize: 30 }}>
              <Youtube sx={{ color: "white", fontSize: 25 }} />
            </Avatar>
          </Link>
          <Link
            variant="button"
            href="https://www.twitter.com"
            sx={{ my: 1, mx: 1 }}
          >
            <Avatar sx={{ bgcolor: lightBlue[400], fontSize: 30 }}>
              <Twitter sx={{ color: "white", fontSize: 25 }} />
            </Avatar>
          </Link>
          <Link
            variant="button"
            href="https://www.linkedin.com"
            sx={{ my: 1, mx: 1 }}
          >
            <Avatar sx={{ bgcolor: "blue", fontSize: 30 }}>
              <LinkedIn sx={{ color: "white", fontSize: 25 }} />
            </Avatar>
          </Link>
        </Grid>
      </Grid>
      <Grid container marginTop={3}>
        <Grid item sm={6} ml={3}>
          <Stack direction={"row"} alignItems="center" spacing={3}>
            <Typography variant="caption">
              © 2022 ImproveME. Todos los derechos reservados.
            </Typography>
            <Typography>·</Typography>
            <Link underline="hover">
              <Typography variant="caption" sx={{ color: "black" }}>
                Políticas de Privacidad
              </Typography>
            </Link>
            <Typography>·</Typography>
            <Link underline="hover">
              <Typography variant="caption" sx={{ color: "black" }}>
                Términos y Condiciones
              </Typography>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
