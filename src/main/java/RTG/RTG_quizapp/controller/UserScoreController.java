package RTG.RTG_quizapp.controller;

import RTG.RTG_quizapp.model.UserScore;
import RTG.RTG_quizapp.service.UserScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/userscores")
public class UserScoreController {
    @Autowired
    private UserScoreService userScoreService;

    @PostMapping("/insert")
    public UserScore insertUserScore(@RequestBody UserScore userScore) {
        return userScoreService.saveUserScore(userScore);
    }

    @GetMapping("/top10")
    public List<UserScore> getTop10Users() {
        return userScoreService.getTop10Users();
    }
}
