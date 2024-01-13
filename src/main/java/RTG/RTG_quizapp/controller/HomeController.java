package RTG.RTG_quizapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "home"; // Renvoie le nom du template Thymeleaf pour la page d'accueil
    }
}

