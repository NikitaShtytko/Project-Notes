package edu.training.backend.service.Impl;

import edu.training.backend.entity.Note;
import edu.training.backend.entity.Topic;
import edu.training.backend.repository.NoteRepository;
import edu.training.backend.repository.TopicRepository;
import edu.training.backend.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TopicServiceImpl implements TopicService {

    private TopicRepository topicRepository;

    @Autowired
    public TopicServiceImpl(TopicRepository topicRepository) {
        this.topicRepository = topicRepository;
    }

    @Override
    public Optional<Topic> getById(Long id) {
        return topicRepository.findById(id);
    }

    @Override
    public Iterable<Topic> findByTopic(String topic) {
        return null;
    }

    @Override
    public Iterable<Topic> getAll() {
        return topicRepository.findAll();
    }

    @Override
    public void delete(Long id) {
        topicRepository.deleteById(id);
    }

    @Override
    public Topic update(Topic topic) {
        return topicRepository.save(topic);
    }

    @Override
    public Topic save(Topic topic) {
        return topicRepository.save(topic);
    }
}
