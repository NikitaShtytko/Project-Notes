package edu.training.backend.controller;

import edu.training.backend.entity.Note;
import edu.training.backend.service.NoteService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api/note")
public class NoteController {
    private static final Logger LOGGER = LoggerFactory.getLogger(NoteController.class);

    private final NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService){
        this.noteService = noteService;
    }

    @RequestMapping(value = "/topic/{topic}", method = RequestMethod.GET)
    public Iterable<Note> getNoteByTopic(@PathVariable(name = "topic") String topic) {
        Iterable<Note> note = noteService.findByTopic(topic);
        LOGGER.info("Get Request For Note By Topic");

        //TODO find normal check for empty object
                if (((Collection<?>)note).size() == 0){
            LOGGER.warn("No Posts With Such Topic");
        }
        return note;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Note> getNoteById(@PathVariable(name = "id") Long id) {
        Optional<Note> note = noteService.getById(id);
        return note.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public Iterable<Note> getAllNotes() {
        return noteService.getAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Note saveNote(@RequestBody Note note) {
        return noteService.save(note);
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteNote(@PathVariable(name = "id") Long id) {
        LOGGER.info("Delete Note Request");
        noteService.delete(id);
    }
}