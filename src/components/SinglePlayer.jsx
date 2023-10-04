import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const SinglePlayer = ({singlePuppyId, setSinglePuppy}) => {
  const [error, setError] = useState(""); 

    useEffect(() => {
        async function fetchSinglePlayer() {
            try {
                if (singlePuppyId) {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-ghp-et-web-pt-sf/players/${singlePuppyId.id}`);
                const result = await response.json()
                console.log(result)
                console.log(singlePuppyId)
                setSinglePuppy(result.data.player)
                }

            } catch (e) {
                console.error(e)
                setError(e.message)
            }
        }
        fetchSinglePlayer();
    }, [])

    
    return (
        <>
        <h2>{singlePuppyId.name}</h2>
        <img src={singlePuppyId.imageUrl} alt={singlePuppyId.name}/>
        <h4>Breed={singlePuppyId.breed}</h4>
        <h4>Status={singlePuppyId.status}</h4>
        </>
    )

}

export default SinglePlayer;