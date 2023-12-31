
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { MovieCard } from '../../components';


const SelectedMovies = styled(Paper)(({ theme }) => ({
    backgroundColor:  '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1), 
    color: theme.palette.text.secondary,
    height: 'calc(100vh - 140px)',
    position: "sticky",
    top: theme.spacing(2),
  }));

const Home = () => {
    return ( 
<Box sx={{ flexGrow: 1, marginTop: 2, }}>
<Grid container spacing={2}>
  <Grid xs={12} md={8}>
    <Paper>
   Filter section
   </Paper>
  </Grid>
  <Grid xs={12} md={8}>
  <Paper>
  <Box sx={{ flexGrow: 1, padding:1 }}>
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <MovieCard/> 
        </Grid> 
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <MovieCard/> 
        </Grid> 
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <MovieCard/> 
        </Grid> 
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <MovieCard/> 
        </Grid> 
    </Grid>
</Box>
   
    </Paper>
  </Grid>
  <Grid xs={12} md={4}>
  <SelectedMovies>
     selected movie
  </SelectedMovies>
  </Grid> 
</Grid>
</Box>

     );
}
 
export default Home;