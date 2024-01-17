import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import TextField from "@mui/material/TextField";
import { fetchAllPlayers } from "./API";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Card, CardMedia, Grid } from "@mui/material";

const AllPlayers = () => {
  const [puppyList, setPuppyList] = useState([]);
  const [error, setError] = useState(" ");
  const [searchParam, setSearchParam] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllPlayers() {
      const APIdata = await fetchAllPlayers();
      if (APIdata.success) {
        setPuppyList(APIdata.data.players);
      } else {
        setError(error);
      }
    }
    getAllPlayers();
  }, []);

  const playersToDisplay = searchParam
    ? puppyList.filter((player) =>
        player.name.toLowerCase().includes(searchParam)
      )
    : puppyList;

  return (
    <div style={{width: "80vw"}}>
      <div>
      <Button
          variant="contained"
          sx={{ position: "absolute", top: 50, right: 50 }}
          onClick={() => navigate("./NewPlayerForm")}
        >
          <Typography fontSize={15}>
           Add New Player
          </Typography>
        </Button>

        <TextField
          onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          label="Search"
          placeholder="Puppy Name"
          sx={{ mb: 8, mt: 2, minHeight: "40px", width: "80%"}}
    
        />
      </div>

      <Grid container spacing={2}>
        {puppyList ? (
          playersToDisplay.map((player) => (
            <Grid item key={player.id} xs={12} sm={6} md={4}>
              <Card sx={{ width: 300, mb: 5, p: 1 }}>
                <div key={player.id}>
                  <Typography
                    fontFamily="Georgia"
                    fontWeight="bold"
                    variant="h4"
                  >
                    {player.name}
                  </Typography>
                  <CardMedia
                    component="img"
                    sx={{ height: 400, objectFit: "contain" }}
                    alt={player.name}
                    src={player.imageUrl}
                  ></CardMedia>
                  <br />
                  <Button
                    variant="contained"
                    onClick={() => navigate(`/players/${player.id}`)}
                  >
                    See details
                  </Button>
                </div>
              </Card>
            </Grid>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Grid>
    </div>
  );
};

export default AllPlayers;
