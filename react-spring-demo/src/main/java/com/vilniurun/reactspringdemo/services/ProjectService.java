package com.vilniurun.reactspringdemo.services;

import com.vilniurun.reactspringdemo.domain.Project;
import com.vilniurun.reactspringdemo.exceptions.ProjectException;
import com.vilniurun.reactspringdemo.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project){

        try {
            project.setProjectIdentifier(project.getProjectIdentifier().toLowerCase());
            return projectRepository.save(project);
        } catch (Exception e){
            throw new ProjectException("Project with ID " + project.getProjectIdentifier().toLowerCase() + " already exists.");
        }
    }

    public Project findByProjectIdentifier(String projectId){
        Project project = projectRepository.findByProjectIdentifier(projectId.toLowerCase());
        if (project == null){
            throw new ProjectException("Project ID '" + projectId + "' doesn't exists.");
        }
        return project;
    }

    public Iterable<Project> findAllProjects(){
        return projectRepository.findAll();
    }
}
