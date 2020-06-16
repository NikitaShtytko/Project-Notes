package edu.training.backend.controller;

import edu.training.backend.service.NoteService;
import edu.training.backend.service.TopicService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/topic")
public class TopicController {
    private static final Logger LOGGER = LoggerFactory.getLogger(TopicController.class);

    private final TopicService topicService;

    @Autowired
    public TopicController(TopicService topicService){
        this.topicService = topicService;
    }

    @DeleteMapping(value = "/{id}")
    public void deleteNote(@PathVariable(name = "id") Long id) {
        LOGGER.info("Delete Topic Request");
        topicService.delete(id);
    }
}
