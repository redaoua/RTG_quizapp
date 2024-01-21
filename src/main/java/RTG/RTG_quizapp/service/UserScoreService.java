package RTG.RTG_quizapp.service;

import RTG.RTG_quizapp.model.Quiz;
import RTG.RTG_quizapp.model.UserScore;
import RTG.RTG_quizapp.repository.UserScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserScoreService {
    @Autowired
    private UserScoreRepository userScoreRepository;

    public UserScore saveUserScore(UserScore userScore) {
        return userScoreRepository.save(userScore);
    }

    public List<UserScore> getTop10Users() {
        return userScoreRepository.findTop10ByOrderByScoreDesc();
    }
}
