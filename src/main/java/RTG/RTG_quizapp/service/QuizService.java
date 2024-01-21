package RTG.RTG_quizapp.service;

import RTG.RTG_quizapp.model.Quiz;
import RTG.RTG_quizapp.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {

    @Autowired
    private QuizRepository quizRepository;

    public List<Quiz> getRandomQuestions() {
        return quizRepository.findRandomQuestions();
    }


}

