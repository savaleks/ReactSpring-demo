package com.vilniurun.reactspringdemo.services;

import com.vilniurun.reactspringdemo.domain.Backlog;
import com.vilniurun.reactspringdemo.domain.Project;
import com.vilniurun.reactspringdemo.exceptions.ProjectException;
import com.vilniurun.reactspringdemo.repositories.BacklogRepository;
import com.vilniurun.reactspringdemo.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private BacklogRepository backlogRepository;

    public Project saveOrUpdateProject(Project project){

        String getProjectByIdentifier = project.getProjectIdentifier().toLowerCase();

        try {
            project.setProjectIdentifier(getProjectByIdentifier);
            if (project.getId()==null){
                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentifier(getProjectByIdentifier);
            }
            if (project.getId() != null){
                project.setBacklog(backlogRepository.findByProjectIdentifier(getProjectByIdentifier));
            }
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

    public void deleteProjectByIdentifier(String projectId){
        Project project = projectRepository.findByProjectIdentifier(projectId.toLowerCase());
        if (project == null){
            throw new ProjectException("Cannot delete the project with ID " + projectId + ". This project doesn't exists.");
        }
        projectRepository.delete(project);
    }
}
