import React, { useState, useEffect } from "react";
import { Box, Paper, Typography, List, ListItem, Fade, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Leaderboard = () => {
    const [scores, setScores] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/api/userscores/top10")
            .then(response => {
                setScores(response.data);
            })
            .catch(error => {
                console.error("Erreur lors du chargement des scores", error);
            });
    }, []);

    const navigateToHome = () => {
        navigate("/"); // Utilisez la route "/" pour la page d'accueil
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
            <Fade in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : {})}>
                <Paper elevation={6} sx={{ minWidth: 275, maxWidth: 500, padding: 2, borderRadius: "6px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
                    <Typography variant="h4" gutterBottom align="center" sx={{ color: "#000000" }}>
                        Leaderboard
                    </Typography>
                    <List sx={{ bgcolor: "#ffffff", borderRadius: "6px" }}>
                        {scores.map((score, index) => (
                            <ListItem key={index} divider sx={{ justifyContent: "space-between", display: "flex", bgcolor: index % 2 === 0 ? "#f0f0f0" : "#ffffff" }}>
                                <Typography variant="subtitle1">{score.username}</Typography>
                                <Typography variant="subtitle1">{score.score}</Typography>
                            </ListItem>
                        ))}
                    </List>
                    <Button variant="contained" color="primary" onClick={navigateToHome} sx={{ mt: 2 }}>
                        Retour à l'accueil
                    </Button>
                </Paper>
            </Fade>
        </Box>
    );
};

export default Leaderboard;



