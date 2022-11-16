import "./App.css";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import Nav from "./components/nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./components/footer/Footer";
import Search from "./pages/Search/search";
import Profile from "./pages/profile/profile";

import BusquedaUno from "./pages/landing/flujoBusqueda/BusquedaUno";
import BusquedaDos from "./pages/landing/flujoBusqueda/BusquedaDos";
import BusquedaTres from "./pages/landing/flujoBusqueda/BusquedaTres";
import BusquedaCuatro from "./pages/landing/flujoBusqueda/BusquedaCuatro";
import BusquedaCinco from "./pages/landing/flujoBusqueda/BusquedaCinco";
import BusquedaSeis from "./pages/landing/flujoBusqueda/BusquedaSeis";
import BusquedaSiete from "./pages/landing/flujoBusqueda/BusquedaSiete";
import BusquedaOcho from "./pages/landing/flujoBusqueda/BusquedaOcho";
import BusquedaNueve from "./pages/landing/flujoBusqueda/BusquedaNueve";


const theme = createTheme();

export default function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>TPO</title>
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
            <Route path="/uno" element={<BusquedaUno/>} />
            <Route path="/dos" element={<BusquedaDos/>} />
            <Route path="/tres" element={<BusquedaTres/>} />
            <Route path="/cuatro" element={<BusquedaCuatro/>} />
            <Route path="/cinco" element={<BusquedaCinco/>} />
            <Route path="/seis" element={<BusquedaSeis/>} />
            <Route path="/siete" element={<BusquedaSiete/>} />
            <Route path="/ocho" element={<BusquedaOcho/>} />
            <Route path="/nueve" element={<BusquedaNueve/>} />

          </Routes>
        </Router>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
