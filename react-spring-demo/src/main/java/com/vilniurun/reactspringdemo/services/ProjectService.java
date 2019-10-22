package com.vilniurun.reactspringdemo.services;

import com.vilniurun.reactspringdemo.domain.Project;
import com.vilniurun.reactspringdemo.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project){

        // logic

        return projectRepository.save(project);
    }
}
