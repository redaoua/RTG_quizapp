package RTG.RTG_quizapp.service;

import RTG.RTG_quizapp.model.Score;
import RTG.RTG_quizapp.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScoreService {

    @Autowired
    private ScoreRepository scoreRepository;

    public List<Score> getAllScores() {
        return scoreRepository.findAll();
    }

    public Score getScoreById(Long id) {
        return scoreRepository.findById(id).orElse(null);
    }

    public Score saveScore(Score score) {
        return scoreRepository.save(score);
    }


}

