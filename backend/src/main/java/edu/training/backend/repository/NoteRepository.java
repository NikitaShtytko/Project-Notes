package edu.training.backend.repository;

import edu.training.backend.entity.Note;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepository extends CrudRepository<Note, Long> {
    Iterable<Note> findByTopic(String topic);
}