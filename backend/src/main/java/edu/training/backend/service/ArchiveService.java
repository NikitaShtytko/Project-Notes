package edu.training.backend.service;

import edu.training.backend.entity.Archive;

import java.util.Optional;

public interface ArchiveService {

    Optional<Archive> getById(Long id);

    Iterable<Archive> getAll();

    void delete(Long id);

    Archive save(Archive archive);

    Archive update(Archive archive);

    void noteTransferTo(Long id);

    void noteTransferFrom(Long id);
}
