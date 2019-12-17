package com.vilniurun.reactspringdemo.services;

import com.vilniurun.reactspringdemo.domain.Backlog;
import com.vilniurun.reactspringdemo.domain.Project;
import com.vilniurun.reactspringdemo.domain.User;
import com.vilniurun.reactspringdemo.exceptions.ProjectException;
import com.vilniurun.reactspringdemo.exceptions.ProjectNotFoundException;
import com.vilniurun.reactspringdemo.repositories.BacklogRepository;
import com.vilniurun.reactspringdemo.repositories.ProjectRepository;
import com.vilniurun.reactspringdemo.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private BacklogRepository backlogRepository;
    
    @Autowired
    private UserRepository userRepository;

    public Project saveOrUpdateProject(Project project, String username){

        String getProjectByIdentifier = project.getProjectIdentifier().toLowerCase();
        
        if (project.getId() != null) {
			Project existingProject = projectRepository.findByProjectIdentifier(project.getProjectIdentifier());
			if (existingProject != null && (!existingProject.getProjectLeader().equals(username))) {
				throw new ProjectNotFoundException("Project not found in your account.");
			} else if (existingProject == null) {
				throw new ProjectNotFoundException("Project with id " + project.getProjectIdentifier() + " cannot be updated.");
			}
		}

        try {
        	User user = userRepository.findByEmail(username);
        	project.setUser(user);
        	
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

    public Project findByProjectIdentifier(String projectId, String username){
        Project project = projectRepository.findByProjectIdentifier(projectId.toLowerCase());
        if (project == null){
            throw new ProjectException("Project ID '" + projectId + "' doesn't exists.");
        }
        if (!project.getProjectLeader().equals(username)) {
			throw new ProjectNotFoundException("Project not found in your account.");
		}
        return project;
    }

    public Iterable<Project> findAllProjects(String username){
        return projectRepository.findAllByProjectLeader(username);
    }

    public void deleteProjectByIdentifier(String projectId, String username){
       
        projectRepository.delete(findByProjectIdentifier(projectId, username));
    }
}
