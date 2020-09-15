package edu.training.backend.repository;

import edu.training.backend.entity.Archive;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface ArchiveRepository extends CrudRepository<Archive, Long>{
    @Modifying
//    @Query(value = "INSERT INTO archive (header, text, color) SELECT header, text, color FROM note WHERE note_id = ?1",
//            nativeQuery = true)
    @Query(value = "INSERT INTO archive (header, text, color) SELECT header, text, color FROM note WHERE note_id = ?1",
            nativeQuery = true)
    @Transactional
    void dataTransferTo(Long id);

    @Modifying
    @Query(value = "DELETE FROM note WHERE note_id = ?1",
            nativeQuery = true)
    @Transactional
    void dataDeleteTo(Long id);


    @Modifying
    @Query(value = "INSERT INTO note (header, text, color) SELECT header, text, color FROM archive WHERE archive_id = ?1",
            nativeQuery = true)
    @Transactional
    void dataTransferFrom(Long id);

    @Modifying
    @Query(value = "DELETE FROM archive WHERE archive_id = ?1",
            nativeQuery = true)
    @Transactional
    void dataDeleteFrom(Long id);
}
