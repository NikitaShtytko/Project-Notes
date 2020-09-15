package edu.training.backend.service.Impl;

import edu.training.backend.entity.Archive;
import edu.training.backend.repository.ArchiveRepository;
import edu.training.backend.service.ArchiveService;
import edu.training.backend.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ArchiveServiceImpl implements ArchiveService {

    private final ArchiveRepository archiveRepository;

    @Autowired
    public ArchiveServiceImpl (ArchiveRepository archiveRepository){this.archiveRepository = archiveRepository;}


    @Override
    public Optional<Archive> getById(Long id) {
        return archiveRepository.findById(id);
    }

    @Override
    public Iterable<Archive> getAll() {
        System.out.println("here");
        return archiveRepository.findAll();
    }

    @Override
    public void delete(Long id) {
        archiveRepository.deleteById(id);
    }

    @Override
    public Archive save(Archive archive) {
        return archiveRepository.save(archive);
    }

    @Override
    public Archive update(Archive archive) {
        return archiveRepository.save(archive);
    }

    @Override
    public void noteTransferTo(Long id) {
        archiveRepository.dataTransferTo(id);
        archiveRepository.dataDeleteTo(id);
    }

    @Override
    public void noteTransferFrom(Long id) {
        archiveRepository.dataTransferFrom(id);
        archiveRepository.dataDeleteFrom(id);
    }
}
