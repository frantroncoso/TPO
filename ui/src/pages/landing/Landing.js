import * as React from "react";
import { Box, Typography, ImageList, ImageListItem } from "@mui/material";

export default function Landing() {
  const images = [
    {
      title: "landing1",
      img: "img/landing1.webp",
    },
    {
      title: "landing2",
      img: "img/landing2.jpg",
    },
    {
      title: "landing3",
      img: "img/landing3.jpg",
    },
  ];

  return (
    <Box
      m={5}
      p={3}
      sx={{
        background: "linear-gradient(to right bottom, #D7A0FC, #64B3FF)",
        borderRadius: "30px",
      }}
    >
      <Typography variant="h3" color="white">
        La mejor solucion a tus problemas con el deporte las vas a encontrar
        en...
      </Typography>
      <ImageList
        cols={3}
        sx={{ borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px" }}
      >
        {images.map((item) => (
          <ImageListItem sx={{ border: "1px white" }} key={item.img}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
