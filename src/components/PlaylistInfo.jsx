import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Box } from '@mui/material';



export default function PlaylistInfo({ playlist }) {

    const name = playlist.playlists.items[0].data.name 
    const image = playlist.playlists.items[0].data.images.items[0].sources[0].url
    const play = playlist.playlists.items[0].data.uri

  return (

    <Card style={{position: 'relative', minWidth:'10rem', height: '7rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#303030'}}>
      <Card.Img variant="left" src={image} style={{width: '7rem'}} />
      <Card.Body >
        <Card.Title style={{color: 'white', fontSize: '1rem', ':hover': {with: '80%'}}}>{name}</Card.Title>      
      </Card.Body>
      <Card.Footer>
      <Box 
        sx={{
          position: 'absolute',
          top: '50%',  
          left: '85%', 
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          transition: 'opacity 0.2s',
          width: '100%',
          height: '100%',
          display: 'flex', // Usar flexbox
          justifyContent: 'center', // Centrar horizontalmente
          alignItems: 'center', // Centrar verticalmente
          // Cuando el mouse está sobre el Card, el ícono se vuelve visible
          '&:hover': { opacity: 1 },
        }}
      >
       <a href={play}>
          <PlayCircleIcon sx={{ color: 'green', fontSize: '50px', backgroundColor: 'black', borderRadius: '50%', width: '100%'}}/>
       </a>
       
      </Box>
      </Card.Footer>
    </Card>
  );
}
