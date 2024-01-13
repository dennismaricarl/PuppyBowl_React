
const URL = "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-PT-SF"


export const fetchAllPlayers = async () => {
    try{
        const response = await fetch(`${URL}/players`);
        const result = await response.json();
        return result 
    }catch{
        console.error(error)
    }
}


export async function fetchSinglePlayer(id) {
    try{
        const response = await fetch(`${URL}/players/${id}`)
        const result = await response.json();
        return result
    }catch{
        console.error(error)
    }
}


export async function createNewPlayer (name,breed) {
       try {
        const response = await fetch(`${URL}/players`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, breed})
        })
        const result = await response.json();
        console.log(result)
        return result
       }catch(error){
        console.error(error)
       }
}


export async function deletePlayer(id) {
    try {
        const response = await fetch(`${URL}/players/${id}`, {
            method: "DELETE"
        });
        const result = await response.json();
        return result 
    } catch(error) {
        console.error(error)
    }
}