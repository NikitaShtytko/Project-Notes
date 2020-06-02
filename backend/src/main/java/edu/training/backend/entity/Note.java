package edu.training.backend.entity;

import lombok.Data;

import javax.persistence.*;


@Data
@Entity
public class Note{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "note_id")
    private Long id;

    @Column(name = "color")
    private String color;

    @Column(name = "text")
    private String text;

    @Column(name = "topic")
    private String topic;
}