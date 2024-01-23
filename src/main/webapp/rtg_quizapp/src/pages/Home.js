import React, {useState, useEffect} from "react";
import Button from "@mui/material-next/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  const redirectToQuizPage = (event) => {
    sessionStorage.setItem("userName", textValue)
    navigate('/quiz');
  };

  const [textValue, setTextValue] = useState("");
  const [checkValue, setCheckValue] = useState(true);

  useEffect(() => {
    if (textValue.trim() != ""){
      setCheckValue(false);
    }
    else{
      setCheckValue(true);
    }
  }, [textValue])

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Entrez votre nom pour démarrer
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ width: "100vh", display: "flex", alignItems: "center" }}>
          <TextField
            required
            id="outlined-required"
            label="Name"
            defaultValue=""
            margin="normal"
            variant="outlined"
            sx={{ marginLeft: 1 }}
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <Button
            color="primary"
            size="medium"
            variant="filled"
            sx={{ marginLeft: 3, fontFamily: "arial" }}
            onClick={redirectToQuizPage}
            disabled={checkValue}
          >
            Start
          </Button>
        </Box>
      </CardActions>
    </React.Fragment>
  );

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          background:
            "linear-gradient(126deg, rgba(5,25,85,1) 35%, rgba(63,4,117,1) 76%, rgba(5,25,85,1) 100%)",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            minWidth: 275,
            bgcolor: "#ffffff",
            borderRadius: "6px",
            width: "100vh",
          }}
        >
          <Card variant="outlined">{card}</Card>
        </Box>
      </Box>
    </>
  );
};

export default Home;
