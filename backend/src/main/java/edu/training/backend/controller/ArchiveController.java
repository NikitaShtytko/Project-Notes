package edu.training.backend.controller;

import edu.training.backend.entity.Archive;
import edu.training.backend.entity.Note;
import edu.training.backend.service.ArchiveService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api/archive")
public class ArchiveController {
    private static final Logger LOGGER = LoggerFactory.getLogger(ArchiveController.class);

    private final ArchiveService archiveService;

    @Autowired
    public ArchiveController(ArchiveService archiveService){this.archiveService = archiveService;}

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Archive> getArchiveById(@PathVariable(name = "id") Long id) {
        LOGGER.info("Get Archive By Id");
        Optional<Archive> note = archiveService.getById(id);
        return note.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public Iterable<Archive> getAllArchives() {
        LOGGER.info("Get All Archives");
        return archiveService.getAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Archive saveArchive(@RequestBody Archive note) {
        LOGGER.info("Post For Archive");
        return archiveService.save(note);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Archive updatePost(@RequestBody Archive note) {
        return archiveService.update(note);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteArchive(@PathVariable(name = "id") Long id) {
        LOGGER.info("Delete Archive Request");
        archiveService.delete(id);
    }

    @RequestMapping(value = "/transfer/{id}", method = RequestMethod.GET)
    public void dataTransferToArchive(@PathVariable(name = "id") Long id) {
        archiveService.noteTransferTo(id);
    }

    @RequestMapping(value = "/back/{id}", method = RequestMethod.GET)
    public void dataTransferFromArchive(@PathVariable(name = "id") Long id) {
        archiveService.noteTransferFrom(id);
    }
}
