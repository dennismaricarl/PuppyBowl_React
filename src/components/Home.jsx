import AllPlayers from "./AllPlayers";
import { Typography } from "@mui/material/";
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";

const Home = () => {
  return (
    <>
      <PetsRoundedIcon fontSize="large"/>
      <Typography fontFamily="Georgia" fontSize={60} fontWeight="bold" textAlign="center" >
        Puppy Bowl
      </Typography>
      <Typography fontFamily="monospace">a roster of cute puppies ready to compete</Typography>
      <AllPlayers />
    </>
  );
};

export default Home;
