package RTG.RTG_quizapp.repository;

import RTG.RTG_quizapp.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepository extends JpaRepository<Quiz, Long> {

}

