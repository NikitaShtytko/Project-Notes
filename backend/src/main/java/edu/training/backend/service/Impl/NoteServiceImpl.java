package edu.training.backend.service.Impl;

import edu.training.backend.entity.Note;
import edu.training.backend.repository.NoteRepository;
import edu.training.backend.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class NoteServiceImpl implements NoteService {

    private NoteRepository noteRepository;

    @Autowired
    public NoteServiceImpl(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @Override
    public Optional<Note> getById(Long id) {
        return noteRepository.findById(id);
    }

    @Override
    public Iterable<Note> findByTopic(String topic) {
        return noteRepository.findByTopic(topic);
    }

    @Override
    public Iterable<Note> getAll() {
        return noteRepository.findAll();
    }

    @Override
    public void delete(Long id) {
        noteRepository.deleteById(id);
    }

    @Override
    public Note save(Note note) {
        return noteRepository.save(note);
    }
}
