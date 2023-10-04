import {useState} from 'react';

const NewPlayerForm = () => {
    const[puppyName, setPuppyName] = useState("");
    const[breed, setBreed] = useState("");
    const[status, setStatus] = useState("");
    const[error, setError] = useState("")

  function resetForm() {
        setPuppyName("");
        setBreed("");
        setStatus("");
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (!error) {
        try{
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF/players", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({puppyName, breed, status})
            })
            const result = await response.json();
            console.log(result.data.player)

        } catch(error){
            setError(error.message);
        }
}
    }


    return (
    <>
    <form method="POST" onSubmit={handleSubmit}>
    <h2>New Puppy Form</h2>

    <div>
        <label>
            Name:
            <input
                value={puppyName}
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

    <div>
        <label>
            Status: 
            <input
                value={status}
                onChange={(e)=>setStatus(e.target.value)}
            />
        </label>
    </div>

        <button type="Submit">Submit</button>
        <button type="reset" onClick={resetForm}>Reset</button>
    </form>
    </>

    )
    
}


export default NewPlayerForm