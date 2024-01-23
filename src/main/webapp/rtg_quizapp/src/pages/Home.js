import React, { useState, useEffect } from "react";
import { Button, TextField, Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [textValue, setTextValue] = useState("");
    const [checkValue, setCheckValue] = useState(true);

    useEffect(() => {
        setCheckValue(textValue.trim() === "");
    }, [textValue]);

    const redirectToQuizPage = () => {
        sessionStorage.setItem("userName", textValue);
        navigate('/quiz');
    };

    return (
        <Box
            sx={{
                height: "100vh",
                background: "linear-gradient(126deg, rgba(5,25,85,1) 35%, rgba(63,4,117,1) 76%, rgba(5,25,85,1) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Card
                sx={{
                    minWidth: 275,
                    bgcolor: "#ffffff",
                    borderRadius: "6px",
                    width: "100vh",
                }}
            >
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
                            label="Nom"
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
                            variant="contained"
                            sx={{ marginLeft: 3, fontFamily: "arial" }}
                            onClick={redirectToQuizPage}
                            disabled={checkValue}
                        >
                            Démarrer
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    );
};

export default Home;

