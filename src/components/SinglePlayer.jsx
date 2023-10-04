import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const SinglePlayer = () => {
  const [error, setError] = useState(""); 
  const [singlePup, setSinglePup] = useState(null);

   const {id}= useParams()

    useEffect(() => {
        async function fetchSinglePlayer() {
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-ghp-et-web-pt-sf/players/${id}`);
                const result = await response.json()
                console.log(result)
                setSinglePup(result.data.player)

            } catch (e) {
                console.error(e)
                setError(e.message)
            }
        }
        fetchSinglePlayer();
    }, [])

    
    return (
        <>
        {singlePup? (

        <>
        <h2>{singlePup.name}</h2>
        <img src={singlePup.imageUrl} alt={singlePup.name}/>
        <h4>Breed: {singlePup.breed}</h4>
        <h4>Status: {singlePup.status}</h4>
        </>
    ) :(
         <p>Loading...</p>
    )}
    </>
    )
}

export default SinglePlayer;