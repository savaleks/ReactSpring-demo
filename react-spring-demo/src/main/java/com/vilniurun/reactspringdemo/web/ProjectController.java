package com.vilniurun.reactspringdemo.web;

import com.vilniurun.reactspringdemo.domain.Project;
import com.vilniurun.reactspringdemo.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/athlete")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @PostMapping("")
    public ResponseEntity<Project> createNewAthlete(@RequestBody Project project){
        return new ResponseEntity<Project>(project, HttpStatus.CREATED);
    }
}
