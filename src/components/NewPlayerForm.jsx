import {useState} from 'react';
import { createNewPlayer } from './API';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';


const NewPlayerForm = ({puppyList, setPuppyList}) => {
    const[name, setPuppyName] = useState("");
    const[breed, setBreed] = useState("");
    const[imageUrl, setimageUrl] = useState("");
    const[error, setError] = useState(null)

  function resetForm() {
        setPuppyName("");
        setBreed("");
        setimageUrl("");
        setError("");
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const apiData = await createNewPlayer(name, breed, imageUrl);
      console.log('apiData:', apiData)
        if(apiData.success) { 
    console.log('SUCCESS')
        
            console.log("new player:", apiData.data.newPlayer)
         
            console.log("puppyList:", puppyList)
            const newPlayerList =[apiData.data.newPlayer, ...puppyList,]
            setPuppyList(newPlayerList)

            setPuppyName("");
            setBreed("");
            setimageUrl("");
            console.log(name,breed,imageUrl)

        } else {
            setError(apiData.error)
        }
    }
    return (
    <>
    <Box
        sx={{
          width: 500,
          border: "1px solid #F3EEEA",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <div>
        {error && <p>{error}</p>}
            <Typography
            fontFamily="monospace"
            variant="h6"
            align="left"
            gutterBottom>
            Create a new puppy 
            </Typography>
            <form onSubmit={handleSubmit}>
            <TextField
               required
               label= "Name"
               value={name}
               onChange={(e) => setPuppyName(e.target.value)}
               fullWidth
            />
          <br/>
          <TextField
            required
            label="Breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            fullWidth
            margin="normal"
          />
          <br/>
          <TextField
            required
            value={imageUrl}
            label="imageUrl"
            onChange={(e)=> setimageUrl(e.target.value)}
            fullWidth
            margin="normal"
          />
          <br/>
          <Button
            type='Submit'
            variant='contained'
            sx={{ marginTop: "10px"}}
          >
           Submit
          </Button>
          <Button
            type='reset'
            variant='contained'
            sx={{ marginLeft: "10px", marginTop: "10px"}}
            onClick={resetForm}
          >
            clear form
          </Button>

          </form>
        </div>
    </Box>

    </>

    )
    
}


export default NewPlayerForm