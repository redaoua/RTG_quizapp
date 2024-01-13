package RTG.RTG_quizapp.controller;

import RTG.RTG_quizapp.model.Quiz;
import RTG.RTG_quizapp.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    private QuizService quizService;

    @GetMapping
    public String getAllQuiz(Model model) {
        List<Quiz> quizList = quizService.getAllQuizzes();
        model.addAttribute("quizList", quizList);
        return "quiz"; // Nom du template Thymeleaf pour afficher les quiz
    }

    @GetMapping("/add")
    public String addQuizForm(Model model) {
        model.addAttribute("quiz", new Quiz());
        return "add_quiz"; // Nom du template Thymeleaf pour ajouter un quiz
    }

    @PostMapping("/add")
    public String createQuiz(Quiz quiz) {
        quizService.saveQuiz(quiz);
        return "redirect:/quiz";
    }


}





