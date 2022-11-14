import * as React from "react";
import { Box, Typography, ImageList, ImageListItem, ButtonGroup,Button, Container, Grid, Stack, Item, Paper  } from "@mui/material";
import { styled } from '@mui/material/styles';
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
  const buttons = [
    <Button key="one">Si</Button>,
    <Button key="two">No</Button>,
  ];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Container maxWidth="sm">

      {/* <Button variant="outlined"  
      size="large"
        onClick={() => {
          alert('te lleva a opciones');
        }}
      >Contanos que necesitás y te ayudamos a buscar al profesional adecuado</Button> */}

        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <Typography variant="h3" gutterBottom>
            Ya te atendiste con un especialista?
          </Typography>
        </Box>

        <Stack spacing={2}>
          <Item> 
          <Button variant="outlined"  
      size="large"
        onClick={() => {
          alert('te lleva a opciones');
        }}
      >Si</Button>
          </Item>
          <Item>
          <Button variant="outlined"  
      size="large"
        onClick={() => {
          alert('te lleva a opciones');
        }}
      >No</Button>
            </Item>
        </Stack>

    {/* 
      <ButtonGroup size="large" aria-label="large button group" >
        {buttons}
      </ButtonGroup> */}
      </Container>
      
    </div>

  );
}
