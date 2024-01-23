package RTG.RTG_quizapp.repository;

import RTG.RTG_quizapp.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
    @Query(value = "SELECT DISTINCT * FROM openquizzdb ORDER BY RAND() LIMIT 100", nativeQuery = true)
    List<Quiz> findAllQuestions();

    default List<Quiz> findRandomQuestions() {
        List<Quiz> allQuestions = findAllQuestions();
        Collections.shuffle(allQuestions);
        return allQuestions.stream().limit(10).collect(Collectors.toList());
    }
}

