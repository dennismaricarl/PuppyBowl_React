import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'

import '../App.css';

const AllPlayers = ({puppyList, setPuppyList, setSinglePuppy}) => {
const [error, setError] = useState(" ");

    useEffect(() => {
        async function FetchAllPlayers() {
            try {
                const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2306-ghp-et-web-pt-sf/players');
                const result = await response.json();
                console.log(result)
                setPuppyList(result.data.players)
            } catch(e) {
                setError(error.message)
            }
        }
        FetchAllPlayers();
    }, [])


return (
    <>
    {puppyList ? (
  puppyList.map((player) => (
    <div key={player.id}>
      <h2>{player.name}</h2>
      <img src={player.imageUrl} alt={player.name} width="200"/>
      <button onClick={() => setSinglePuppy(player)}> See Details</button>
    <Link to={`/players/${player.id}`}>See Details</Link>
    </div>
    
  ))
) : (
  <p>Loading...</p>
)}
    </>
)
}

export default AllPlayers;