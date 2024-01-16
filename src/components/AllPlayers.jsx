import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../App.css';
import TextField from '@mui/material/TextField';
import { fetchAllPlayers } from './API';
import NewPlayerForm from './NewPlayerForm';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import {
  Card,
  CardMedia,
  Grid,
  Box
 
} from "@mui/material";


const AllPlayers = () => {

    const [puppyList, setPuppyList] = useState([]);
    const [error, setError] = useState(" ");
    const [searchParam, setSearchParam] = useState("");
    const navigate = useNavigate();

    useEffect(()=> {
      async function getAllPlayers() {
        const APIdata = await fetchAllPlayers();
        if (APIdata.success) {
          setPuppyList(APIdata.data.players)
        }
        else {
          setError(error)
        }
      }
      getAllPlayers();
    }, [])
   

    const playersToDisplay = searchParam
    ? puppyList.filter((player) => 
      player.name.toLowerCase().includes(searchParam)
    ) : puppyList;


    

return (
    <>

    <div>
      
      <TextField 
      onChange={(e)=> setSearchParam(e.target.value.toLowerCase())}
        label="Search" 
        placeholder="Puppy Name"
        sx={{mb: 8, minHeight: '40px', width: '80%' }}
      />
      <Button
        variant='contained'
        sx={{bgcolor: "bluegreen", mb: 8}}
        onClick={() => navigate('./NewPlayerForm')}

      ><Typography fontFamily={'monospace'} fontsize={40}>Want to add a new Puppy? Click here! </Typography></Button>
    </div>

  

  <Grid container spacing={2}>
    {puppyList ? (
    playersToDisplay.map((player) => (
    <Grid item key={player.id} xs={12} sm={6} md={4}>
    <Card
    sx={{ width: 300, mb: 5, p: 1}}
    >
    <div key={player.id}>
      <Typography fontFamily="Georgia" fontWeight="bold" variant='h4'>{player.name}</Typography>
      <CardMedia
      component="img"
      sx={{ height: 400, objectFit: "contain" }}
      alt={player.name}
      src={player.imageUrl}>
    
      </CardMedia>
      <br/>
      <Button 
      variant='contained'
      onClick={() => navigate(`/players/${player.id}`)}
      >
      See details</Button>
    </div>
    </Card>
    </Grid>

  ))
) : (
  <p>Loading...</p>
)}
</Grid>

  </>
)
}

export default AllPlayers;