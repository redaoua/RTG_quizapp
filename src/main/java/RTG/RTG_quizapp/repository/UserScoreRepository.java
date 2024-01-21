package RTG.RTG_quizapp.repository;

import RTG.RTG_quizapp.model.UserScore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserScoreRepository extends JpaRepository<UserScore, Long> {

    @Query(value = "SELECT * FROM userscores ORDER BY score DESC LIMIT 10", nativeQuery = true)
    List<UserScore> findTop10ByOrderByScoreDesc();
}