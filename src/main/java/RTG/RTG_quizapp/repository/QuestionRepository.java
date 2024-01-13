package RTG.RTG_quizapp.repository;

import RTG.RTG_quizapp.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}

