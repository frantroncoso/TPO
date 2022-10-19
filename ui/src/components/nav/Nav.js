import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Button, Link, Toolbar, Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Nav() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar disableGutters>
        <img
          href="/"
          src="img/logo.svg"
          alt="logo"
          style={{ marginLeft: "15px", maxHeight: "50px", maxWeight: "50px" }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {/* <Link
            variant="button"
            color="text.primary"
            href="/"
            sx={{ my: 1, mx: 1.5 }}
          >
            Buscar
          </Link> */}
          <Link
            variant="button"
            color="text.primary"
            href="/professionals"
            sx={{ my: 1, mx: 1.5 }}
          >
            Profecionales
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="/sports"
            sx={{ my: 1, mx: 1.5 }}
          >
            Deportes
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="/preventions"
            sx={{
              my: 1,
              mx: 1.5,
            }}
          >
            Prevenciones
          </Link>
        </Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Buscar"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Link
          variant="button"
          color="text.primary"
          href="/login"
          sx={{ my: 1, mx: 1.5 }}
        >
          Ingresar
        </Link>
        <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Registrase
        </Button>
      </Toolbar>
    </AppBar>
  );
}
