import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../App.css';

const AllPlayers = () => {

    const [puppyList, setPuppyList] = useState([]);
    const [error, setError] = useState(" ");
    const navigate = useNavigate();

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