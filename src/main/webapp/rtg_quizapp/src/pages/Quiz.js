import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Typography, Radio, RadioGroup, FormControlLabel, FormControl, Box } from '@mui/material';
import axios from 'axios';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8080/api/questions/random')
            .then(response => {
                const questionsData = response.data[0];
                setQuestions(questionsData);
            })
            .catch(error => {
                console.error('Erreur lors du chargement des questions', error);
            });
    }, []);

    const handleAnswerChange = (event) => {
        setSelectedAnswer(event.target.value);
    };

    const nextQuestion = () => {

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer('');
        } else {
            console.log('Quiz terminé. Score final :', score);
        }
    };

    if (!questions.length) return <p>Chargement des questions...</p>;

    const question = questions[currentQuestionIndex];

    return (
        <Box sx={{ height: "100vh", background: "linear-gradient(126deg, rgba(5,25,85,1) 35%, rgba(63,4,117,1) 76%, rgba(5,25,85,1) 100%)", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Card sx={{ minWidth: 275, bgcolor: "#ffffff", borderRadius: "6px", padding: 2 }}>
                <CardContent>
                    <Typography variant="h5" component="div">{question.theme}</Typography>
                    <Typography variant="h6">{question.question}</Typography>
                    <FormControl component="fieldset">
                        <RadioGroup name="quiz-options" value={selectedAnswer} onChange={handleAnswerChange}>
                            <FormControlLabel value={question.prop1} control={<Radio />} label={question.prop1} />
                            <FormControlLabel value={question.prop2} control={<Radio />} label={question.prop2} />
                            <FormControlLabel value={question.prop3} control={<Radio />} label={question.prop3} />
                            <FormControlLabel value={question.prop4} control={<Radio />} label={question.prop4} />
                        </RadioGroup>
                    </FormControl>
                    <Button variant="contained" color="primary" onClick={nextQuestion}>Suivant</Button>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Quiz;




