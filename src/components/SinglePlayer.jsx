import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const SinglePlayer = () => {
    const { id } = useParams(); 
    const [player, setPlayer] = useState(null);
  
    useEffect(() => {
        async function fetchSinglePlayer() {
            try {
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players/1");
                const result= await response.json()
                setPlayer(result.data)

            }catch(error) {
                console.error(error)
            }
        }
        fetchSinglePlayer();
    }, [id])

    if (!player) {
        return <div>Loading...</div>
    }
    
    return (
        <>
        <h2>{player.name}</h2>
        <h4>{player.imageUrl}</h4>
        <h4>{player.breed}</h4>
        <h4>{player.status}</h4>
        </>
    )

}

export default SinglePlayer;