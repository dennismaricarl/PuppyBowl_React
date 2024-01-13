import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../App.css';
import TextField from '@mui/material/TextField';
import { fetchAllPlayers } from './API';
import NewPlayerForm from './NewPlayerForm';


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
      <TextField label="Enter puppy" variant='filled' 
        placeholder="Search"
        onChange={(e)=> setSearchParam(e.target.value.toLowerCase())}
     />
     <NewPlayerForm puppyList={puppyList} setPuppyList={setPuppyList}/>
    </div>
    {puppyList ? (
  playersToDisplay.map((player) => (
    <div key={player.id}>
      <h2>{player.name}</h2>
      <img src={player.imageUrl} alt={player.name} width="200"/>
      <button onClick={() => navigate(`/players/${player.id}`)}>See details</button>
    </div>
    
  ))
) : (
  <p>Loading...</p>
)}
    </>
)
}

export default AllPlayers;