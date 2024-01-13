package RTG.RTG_quizapp.controller;

import RTG.RTG_quizapp.model.Score;
import RTG.RTG_quizapp.service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/scores")
public class ScoreController {

    @Autowired
    private ScoreService scoreService;

    @GetMapping
    public String getAllScores(Model model) {
        List<Score> scores = scoreService.getAllScores();
        model.addAttribute("scores", scores);
        return "scores"; // Nom du template Thymeleaf pour afficher les scores
    }


}




