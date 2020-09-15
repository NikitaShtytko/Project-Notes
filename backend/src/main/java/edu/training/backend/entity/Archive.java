package edu.training.backend.entity;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;

@Data
@ToString
@Entity
@Table(name = "archive")
public class Archive {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "archive_id")
    private Long id;

    @Column(name = "color")
    private String color;

    @Column(name = "header")
    private String header;

    @Column(name = "text")
    private String text;
}
