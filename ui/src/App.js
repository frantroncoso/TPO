import "./App.css";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import Nav from "./components/nav/Nav";
import NavProfesional from "./components/nav/NavProfesional";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./components/footer/Footer";
import Search from "./pages/Search/search";
import Profile from "./pages/profile/profile";

import BusquedaUno from "./pages/landing/flujoBusqueda/BusquedaUno";
import BusquedaDos from "./pages/landing/flujoBusqueda/BusquedaDos";
import BusquedaTres from "./pages/landing/flujoBusqueda/BusquedaTres";
import BusquedaCinco from "./pages/landing/flujoBusqueda/BusquedaCinco";
import BusquedaSeis from "./pages/landing/flujoBusqueda/BusquedaSeis";
import BusquedaSiete from "./pages/landing/flujoBusqueda/BusquedaSiete";
import BusquedaOcho from "./pages/landing/flujoBusqueda/BusquedaOcho";
import BusquedaNueve from "./pages/landing/flujoBusqueda/BusquedaNueve";
import Nosotros from "./components/nosotros/Nosotros";
import TerminosyCon from "./components/ter&con/TerminosyCon";
import PoliticasPriv from "./components/privacidad/PoliticasPriv";
import Contactanos from "./components/contacto/Contactanos";
import Prevencion from "./components/informacion/Prevencion";
import Deportes from "./components/informacion/Deportes";

const theme = createTheme();

export default function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>ImproveMe</title>
        <link rel="icon" href="img/logo.svg" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/uno" element={<BusquedaUno />} />
            <Route path="/dos" element={<BusquedaDos />} />
            <Route path="/tres" element={<BusquedaTres />} />
            <Route path="/cinco" element={<BusquedaCinco />} />
            <Route path="/seis" element={<BusquedaSeis />} />
            <Route path="/siete" element={<BusquedaSiete />} />
            <Route path="/ocho" element={<BusquedaOcho />} />
            <Route path="/nueve" element={<BusquedaNueve />} />
            <Route path="/sobrenosotros" element={<Nosotros />} />
            <Route path="/terminos&condiciones" element={<TerminosyCon />} />
            <Route path="/politicasprivacidad" element={<PoliticasPriv />} />
            <Route path="/contacto" element={<Contactanos />} />
            <Route path="/prevencion" element={<Prevencion />} />
            <Route path="/deportes" element={<Deportes />} />
          </Routes>
        </Router>
      </ThemeProvider>
      <Footer />
    </div>
  );
}
