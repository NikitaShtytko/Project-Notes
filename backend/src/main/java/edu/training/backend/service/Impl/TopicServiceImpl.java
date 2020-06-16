package edu.training.backend.service.Impl;

import edu.training.backend.entity.Topic;
import edu.training.backend.repository.TopicRepository;
import edu.training.backend.service.TopicService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TopicServiceImpl implements TopicService {

    private TopicRepository topicRepository;

    @Override
    public Optional<Topic> getById(Long id) {
        return Optional.empty();
    }

    @Override
    public Iterable<Topic> findByTopic(String topic) {
        return null;
    }

    @Override
    public Iterable<Topic> getAll() {
        return null;
    }

    @Override
    public void delete(Long id) {
    }

    @Override
    public Topic save(Topic Topic) {
        return null;
    }
}
