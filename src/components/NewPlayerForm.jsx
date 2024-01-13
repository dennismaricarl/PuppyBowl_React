import {useState} from 'react';
import { createNewPlayer } from './API';

const NewPlayerForm = ({puppyList, setPuppyList}) => {
    const[name, setPuppyName] = useState("");
    const[breed, setBreed] = useState("");
    const[error, setError] = useState(null)

  function resetForm() {
        setPuppyName("");
        setBreed("");
        setStatus("");
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const apiData = await createNewPlayer(name, breed);
      console.log('apiData:', apiData)
        if(apiData.success) { 
    console.log('SUCCESS')
        
            console.log("new player:", apiData.data.newPlayer)
         
            console.log("puppyList:", puppyList)
            const newPlayerList =[...puppyList, apiData.data.newPlayer]
            setPuppyList(newPlayerList)

            setPuppyName("");
            setBreed("");
            console.log('logging uState')
            console.log(name,breed)

        } else {
            setError(apiData.error)
        }
    }
    return (
    <>
    <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
    <h2>New Puppy Form</h2>

    <div>
        <label>
            Name:
            <input
                value={name}
                onChange={(e)=> setPuppyName(e.target.value)}
            />
        </label>
    </div>
        <br/>

    <div>
        <label>
            Breed: 
            <input
                value={breed}
                onChange={(e)=> setBreed(e.target.value)}
            />
        </label>
    </div>  
        <br/>

        <button type="Submit">Submit</button>
        <button type="reset" onClick={resetForm}>Reset</button>
    </form>
    </>

    )
    
}


export default NewPlayerForm