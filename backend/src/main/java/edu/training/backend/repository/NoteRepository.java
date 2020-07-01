package edu.training.backend.repository;

import edu.training.backend.entity.Note;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepository extends CrudRepository<Note, Long> {

    @Query(value = "select * from note inner join topic on note.topic_id = topic.topic_id where topic.topic = ?1",
            nativeQuery = true)
    Iterable<Note> findByTopic(String topic);
}