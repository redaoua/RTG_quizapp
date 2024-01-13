package RTG.RTG_quizapp.controller;

import RTG.RTG_quizapp.model.Question;
import RTG.RTG_quizapp.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping
    public String getAllQuestions(Model model) {
        List<Question> questions = questionService.getAllQuestions();
        model.addAttribute("questions", questions);
        return "question"; // Nom du template Thymeleaf pour afficher les questions
    }

    @GetMapping("/add")
    public String addQuestionForm(Model model) {
        model.addAttribute("question", new Question());
        return "add_question"; // Nom du template Thymeleaf pour ajouter une question
    }

    @PostMapping("/add")
    public String createQuestion(Question question) {
        questionService.saveQuestion(question);
        return "redirect:/question";
    }

}




