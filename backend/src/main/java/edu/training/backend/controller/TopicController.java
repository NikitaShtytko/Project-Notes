package edu.training.backend.controller;

import edu.training.backend.entity.Note;
import edu.training.backend.entity.Topic;
import edu.training.backend.service.NoteService;
import edu.training.backend.service.TopicService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/topic")
public class TopicController {
    private static final Logger LOGGER = LoggerFactory.getLogger(TopicController.class);

    private final TopicService topicService;

    @Autowired
    public TopicController(TopicService topicService){
        this.topicService = topicService;
    }

    @GetMapping(value = "")
    public Iterable<Topic> getAllTopics(){
        LOGGER.info("Get All Topics");
        return topicService.getAll();
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Topic> getTopicById(@PathVariable(name = "id") Long id){
        LOGGER.info("Get Topic By Id");
        Optional<Topic> topic = topicService.getById(id);
        return topic.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Topic saveTopic(@RequestBody Topic topic) {
        LOGGER.info("Post For Topic");
        return topicService.save(topic);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteNote(@PathVariable(name = "id") Long id) {
        LOGGER.info("Delete Topic Request");
        topicService.delete(id);
    }
}
