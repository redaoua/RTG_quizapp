package RTG.RTG_quizapp.controller;

import RTG.RTG_quizapp.model.Quiz;
import RTG.RTG_quizapp.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/questions")
public class QuizController {

    @Autowired
    private QuizService QuizService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/random")
    public List<Quiz> getRandomQuestions() {
        return QuizService.getRandomQuestions();
    }
}




