import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { deletePlayer } from './API';
import {useNavigate} from 'react-router-dom'
import { fetchSinglePlayer } from './API';


const SinglePlayer = () => {
  const [error, setError] = useState(""); 
  const [singlePup, setSinglePup] = useState(null);
  const navigate = useNavigate()

   const {id}= useParams()

   useEffect(()=> {
    async function getSinglePlayer() {
        const APIresponse = await fetchSinglePlayer(id)
        console.log(APIresponse)
        if (APIresponse.success) {
            setSinglePup(APIresponse.data.player)
        } else {
            setError(error.message)
        }
    }
    getSinglePlayer();
   }, [])


    async function handleDelete() {
        try {
          const result = await deletePlayer(singlePup.id)
          console.log(result)
          navigate("/")
        } catch(error){
            console.error(error);
        }
    }
    
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
    <button onClick={handleDelete}>Delete Puppy</button>
    </>
    )
}

export default SinglePlayer;