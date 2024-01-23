import React, { useState, useEffect } from "react";
import {
    Button,
    Card,
    CardContent,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    Box,
    LinearProgress,
    Grow,
    CircularProgress,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(30);
    const [quizFinished, setQuizFinished] = useState(false);
    const userName = sessionStorage.getItem("userName");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("Chargement des questions...");

    useEffect(() => {
        axios.get("http://localhost:8080/api/questions/random")
            .then((response) => {
                setQuestions(response.data);
                setLoading(false);
                setMessage("Chargement terminé. Veuillez patienter 5 secondes...");
            })
            .catch((error) => {
                console.error("Erreur lors du chargement des questions", error);
            });

        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer > 0 ? prevTimer - 1 : 0);
        }, 1000);

        return () => clearInterval(interval);
    }, [currentQuestionIndex]);

    useEffect(() => {
        if (timer === 0 && currentQuestionIndex < questions.length - 1) {
            nextQuestion();
        }
    }, [timer, currentQuestionIndex, questions.length]);

    const handleAnswerChange = (event) => {
        setSelectedAnswer(event.target.value);
    };

    const nextQuestion = () => {
        if (selectedAnswer === questions[currentQuestionIndex].prop1) {
            setScore(score + 1);
        }

        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < questions.length) {
            setCurrentQuestionIndex(nextIndex);
            setTimer(30);
            setSelectedAnswer("");
        } else {
            setQuizFinished(true);
            axios.post("http://localhost:8080/api/userscores/insert", {
                username: userName,
                score: score
            });

            setTimeout(() => {
                navigate("/leaderboard");
            }, 5000);
        }
    };

    if (loading) {
        return (
            <Box
                sx={{
                    height: "100vh",
                    background: "linear-gradient(126deg, rgba(5,25,85,1) 35%, rgba(63,4,117,1) 76%, rgba(5,25,85,1) 100%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <CircularProgress color="primary" sx={{ mb: 2 }} />
                <Typography variant="h6" color="textSecondary">
                    {message}
                </Typography>
            </Box>
        );
    }

    if (quizFinished) {
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
                        padding: 2,
                    }}
                >
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            Quiz Terminé !
                        </Typography>
                        <Typography variant="h5">
                            Votre score : {score} / {questions.length}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                            Veuillez patienter 5 secondes avant l'affichage du leaderboard...
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        );
    }

    const question = questions[currentQuestionIndex];

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
            <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...(true ? { timeout: 1000 } : {})}>
                <Card
                    sx={{
                        minWidth: 275,
                        bgcolor: "#ffffff",
                        borderRadius: "6px",
                        padding: 2,
                        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                    }}
                >
                    <CardContent>
                        <img src="data:image/jpeg;base64,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" alt="Logo RTG Quiz" style={{ maxWidth: "100px", marginBottom: "20px" }} />
                        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                            Question {currentQuestionIndex + 1} sur {questions.length}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                            Score: {score}
                        </Typography>
                        <LinearProgress variant="determinate" value={(timer / 30) * 100} />
                        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                            {question.theme}
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 2 }}>{question.question}</Typography>
                        <FormControl component="fieldset">
                            <RadioGroup
                                name="quiz-options"
                                value={selectedAnswer}
                                onChange={handleAnswerChange}
                            >
                                <FormControlLabel value={question.prop1} control={<Radio />} label={question.prop1} />
                                <FormControlLabel value={question.prop2} control={<Radio />} label={question.prop2} />
                                <FormControlLabel value={question.prop3} control={<Radio />} label={question.prop3} />
                                <FormControlLabel value={question.prop4} control={<Radio />} label={question.prop4} />
                            </RadioGroup>
                        </FormControl>
                        <Button variant="contained" color="primary" onClick={nextQuestion} sx={{ mt: 2 }}>
                            Suivant
                        </Button>
                    </CardContent>
                </Card>
            </Grow>
        </Box>
    );
};

export default Quiz;






