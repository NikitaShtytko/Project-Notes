package edu.training.backend.service;

import edu.training.backend.entity.Topic;

import java.util.Optional;

public interface TopicService {

    Optional<Topic> getById(Long id);

    Iterable<Topic> findByTopic(String topic);

    Iterable<Topic> getAll();

    void delete(Long id);

    Topic save(Topic Topic);

    Topic update(Topic topic);
}
