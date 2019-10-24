package com.vilniurun.reactspringdemo.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

@Entity
@Getter @Setter @NoArgsConstructor
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String projectName;

    private String projectIdentifier = "PRO-" + ((Integer) ThreadLocalRandom.current().nextInt(1, 100000 + 1));

    private String description;

    private Date start_date;

    private Date end_date;

    private Date created_At;

    private Date updated_At;

    @PrePersist
    protected void onCreate(){
        this.created_At = new Date();
    }

    @PreUpdate
    protected void onUpdate(){
        this.updated_At = new Date();
    }

}
