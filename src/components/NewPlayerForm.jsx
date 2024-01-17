import { useState } from "react";
import { createNewPlayer } from "./API";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import PetsRounded from "@mui/icons-material/PetsRounded";

const NewPlayerForm = () => {
  const [name, setPuppyName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function resetForm() {
    setPuppyName("");
    setBreed("");
    setimageUrl("");
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const apiData = await createNewPlayer(name, breed, imageUrl);

    if (apiData.success) {
      console.log("SUCCESS");

      console.log("new player:", apiData.data.newPlayer);

      setPuppyName("");
      setBreed("");
      setimageUrl("");
      navigate("/");
    } else {
      setError(apiData.error);
    }
  }
  return (
    <>
      <Button
        variant="contained"
        sx={{fontSize: "small", position: "absolute", top:20, left: 90}}
        onClick={() => navigate("/")}
      >
        Return To HomePage
      </Button>
      <Box
        sx={{
          width: 500,
          border: "2px solid gray",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <div>
          {error && <p>{error}</p>}
          <Typography
            fontFamily="monospace"
            variant="h6"
            align="center"
            gutterBottom
          >
            Add a new puppy <PetsRounded fontSize="small" />
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              label="Name"
              value={name}
              onChange={(e) => setPuppyName(e.target.value)}
              fullWidth
            />
            <br />
            <TextField
              required
              label="Breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              fullWidth
              margin="normal"
            />
            <br />
            <TextField
              value={imageUrl}
              label="imageUrl"
              onChange={(e) => setimageUrl(e.target.value)}
              fullWidth
              margin="normal"
            />
            <br />
            <Button
              type="Submit"
              variant="contained"
              sx={{ marginTop: "10px" }}
            >
              Submit
            </Button>
            <Button
              type="reset"
              variant="contained"
              sx={{ marginLeft: "10px", marginTop: "10px" }}
              onClick={resetForm}
            >
              clear form
            </Button>
          </form>
        </div>
      </Box>
    </>
  );
};

export default NewPlayerForm;
