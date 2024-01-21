package RTG.RTG_quizapp.repository;

import RTG.RTG_quizapp.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
    @Query(value = "SELECT * FROM openquizzdb ORDER BY RAND() LIMIT 10", nativeQuery = true)
    List<Quiz> findRandomQuestions();
}

