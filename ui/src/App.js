import "./App.css";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import Nav from "./components/nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./components/footer/Footer";

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
          </Routes>
        </Router>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
