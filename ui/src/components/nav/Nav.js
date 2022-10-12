import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";

export default function Nav() {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Link href="/" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Nombre de pagina o Logo
        </Link>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="/login"
            sx={{ my: 1, mx: 1.5 }}
          >
            Ingresar
          </Link>
        </nav>
        <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Registrase
        </Button>
      </Toolbar>
    </AppBar>
  );
}
