import * as React from "react";
import { Box, Typography, ImageList, ImageListItem, ButtonGroup,
  Button, Container, Grid, Stack, Item, Paper, Divider  } from "@mui/material";
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

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 24,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#000',
    borderColor: '#000',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#fff',
      borderColor: '#000',
      boxShadow: 'none',
      color: 'black'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#fff',
      borderColor: '#fff',
    },
  });


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>

      <Container 
      fixed>
      {/* <Button variant="outlined"  
      size="large"
        onClick={() => {
          alert('te lleva a opciones');
        }}
      >Contanos que necesitás y te ayudamos a buscar al profesional adecuado</Button> */}

        <Typography variant="h2" gutterBottom>
          Ya te atendiste con un especialista?
        </Typography>

    {/* 
      <ButtonGroup size="large" aria-label="large button group" >
        {buttons}
      </ButtonGroup> */}

      </Container>
      <Stack
        direction="column-reverse"
        justifyContent="flex-end"
        alignItems="stretch"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
      >
        {/* <Item>
          <Button variant="text"
            size="large"
            onClick={() => {
              alert('te lleva a opciones');
            }}  
          >No</Button>
        </Item> */}

        {/* <Button variant="contained"
          size="large"
          onClick={() => {
            alert('te lleva a opciones');
          }}
        >Si</Button> */}
        <BootstrapButton variant="contained" disableRipple>
          No
        </BootstrapButton>
        <BootstrapButton variant="contained" disableRipple>
        Si
      </BootstrapButton>
      </Stack>


    </div>

  );
}
