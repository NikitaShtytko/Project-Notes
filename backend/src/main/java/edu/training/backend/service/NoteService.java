package edu.training.backend.service;

import edu.training.backend.entity.Note;

import java.util.Optional;

public interface NoteService {

    Optional<Note> getById(Long id);

    Iterable<Note> findByTopic(String topic);

    Iterable<Note> getAll();

    void delete(Long id);

    Note save(Note note);
}