import React from 'react'; 
import Card from '@mui/material/Card'; 
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent'; 
import Typography from '@mui/material/Typography'; 
import CardMenu from './components/CardMenu';
import { styled } from '@mui/material/styles';

const CardInfo = styled(CardContent)(({theme}) => ({
  '&:last-child': {
    paddingBottom: theme.spacing(2),
  }
}));

const MovieCard = () => {
  const onAddClick = (movie) => alert('movie is added')
    return ( 
        <Card sx={{ maxWidth: 250, position:"relative" }}>
         <CardMenu onAddClick={onAddClick}/>
          <CardMedia
        component="img"
        height="250"
        image="https://www.themoviedb.org/t/p/w220_and_h330_face/uc2gtWczT58BiAUJWFz9P5aZmNF.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" gutterBottom component="div">
         Sonic monic
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
     Apr, 08, 2020
      </Typography>
      </CardContent>
 
    </Card>
     );
}
 
export default MovieCard;