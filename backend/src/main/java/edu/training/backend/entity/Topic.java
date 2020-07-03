package edu.training.backend.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Topic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "topic_id")
    private Long id;

    @Column(name = "topic")
    private String topic;

    @Column(name = "color")
    private String color;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "note_id")
    private List<Note> notes;
}
