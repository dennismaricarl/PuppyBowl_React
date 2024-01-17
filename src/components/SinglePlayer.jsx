import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deletePlayer } from "./API";
import { useNavigate } from "react-router-dom";
import { fetchSinglePlayer } from "./API";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { Card, CardMedia, Typography } from "@mui/material";

const SinglePlayer = () => {
  const [error, setError] = useState("");
  const [singlePup, setSinglePup] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    async function getSinglePlayer() {
      const APIresponse = await fetchSinglePlayer(id);
      console.log(APIresponse);
      if (APIresponse.success) {
        setSinglePup(APIresponse.data.player);
      } else {
        setError(error.message);
      }
    }
    getSinglePlayer();
  }, []);

  async function handleDelete() {
    alert("Are you sure you want to remove this pup from the roster?");

    try {
      const result = await deletePlayer(singlePup.id);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {singlePup ? (
        <>
          <Button
            variant="contained"
            sx={{ mb: 8, fontSize: "small" }}
            onClick={() => navigate("/")}
          >
            Return To HomePage
          </Button>

          <Card sx={{ width: 500, mb: 5, p: 1 }}>
            <Typography fontFamily="Georgia" fontWeight="bold" variant="h4">
              {singlePup.name}
            </Typography>
            <CardMedia
              component="img"
              sx={{ height: 450, objectFit: "contain" }}
              alt={singlePup.name}
              src={singlePup.imageUrl}
            ></CardMedia>
            <Typography
              sx={{
                fontFamily: "Georgia",
                fontSize: 20,
                fontWeight: 50,
                mt: 2,
              }}
            >
              {" "}
              {singlePup.breed}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Georgia",
                fontSize: 20,
                fontWeight: 50,
                mt: 1,
              }}
            >
              Status: {singlePup.status}
            </Typography>
          </Card>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <Button
        variant="contained"
        color="warning"
        startIcon={<DeleteForeverIcon />}
        sx={{ mt: 2, fontSize: "small" }}
        onClick={handleDelete}
      >
        delete
      </Button>
    </>
  );
};

export default SinglePlayer;
