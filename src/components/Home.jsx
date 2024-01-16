
import AllPlayers from "./AllPlayers";
import NewPlayerForm from "./NewPlayerForm";
import { Typography } from "@mui/material/";
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import PetsRounded from "@mui/icons-material/PetsRounded";
import { blueGrey } from "@mui/material/colors";



const Home = () => {
    return (
    <>
        <PetsRoundedIcon />
        <Typography fontFamily="Georgia" fontSize={60} fontWeight="bold">Puppy Bowl</Typography>
       <AllPlayers/>
       
  
    </>
    )
  }
  
  export default Home; 