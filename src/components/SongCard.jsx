import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Box, Button } from '@mui/material';


export default function SongCard({song}) {

  
  const coverArtUrl = song?.data?.albumOfTrack?.coverArt?.sources?.[0]?.url;
  const songName = song?.data?.name;
  const artists = song?.data?.artists?.items?.map((artist) => artist.profile.name);
  const play = song?.data?.uri;

  return (
    <>
      <Card 
      sx={{ 
        position: 'relative', 
        width: 200, 
        ':hover': { backgroundColor: '#303030' } 
      }}
    >
      <CardMedia
        sx={{ height: 200, objectFit: 'contain', position: 'relative' }}
        image={coverArtUrl}
        title="Cover de album"
      />
      
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

      <CardContent>
        <Typography gutterBottom sx={{fontSize: '1.2rem'}} component="div">
          {songName.charAt(0).toUpperCase() + songName.slice(1).toLowerCase()}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {artists.join(', ')}
        </Typography>
      </CardContent>
    </Card>
    </>
  );
}
