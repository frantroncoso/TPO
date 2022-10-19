import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#D9D9D9", py: 3 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Pie de pagina
        </Typography>
        {/* <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Lorem ipsum dolor sit amet
        </Typography> */}
      </Container>
    </Box>
  );
}
