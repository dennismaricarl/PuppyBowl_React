import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";


const AllPlayers = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        async function FetchAllPlayers() {
            try {
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players");
                const result = await response.json();
                setPlayers(result.data.players)
            } catch(error) {
                console.error(error)
            }
        }
        FetchAllPlayers();
    }, [])

   
    return (
        <>
        
        {players.map((player) => (
            <Link key={player.id} to={"/players/:id"}><h4>{player.name}</h4></Link>
        ))}
        </>

        
    )
}

export default AllPlayers; 