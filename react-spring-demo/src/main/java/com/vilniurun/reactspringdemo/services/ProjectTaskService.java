package com.vilniurun.reactspringdemo.services;

import com.vilniurun.reactspringdemo.domain.Backlog;
import com.vilniurun.reactspringdemo.domain.Project;
import com.vilniurun.reactspringdemo.domain.ProjectTask;
import com.vilniurun.reactspringdemo.exceptions.ProjectNotFoundException;
import com.vilniurun.reactspringdemo.repositories.BacklogRepository;
import com.vilniurun.reactspringdemo.repositories.ProjectRepository;
import com.vilniurun.reactspringdemo.repositories.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectTaskService {

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    @Autowired
    private ProjectRepository projectRepository;
    
    @Autowired
    private ProjectService projectService;

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask, String username){

        // add projectTask to specific project
            Backlog backlog = projectService.findByProjectIdentifier(projectIdentifier, username).getBacklog(); //backlogRepository.findByProjectIdentifier(projectIdentifier);

            projectTask.setBacklog(backlog);
            Integer BacklogSequence = backlog.getPTSequence();
            backlog.setPTSequence(++BacklogSequence);

            projectTask.setProjectSequence(projectIdentifier + "-" + BacklogSequence);
            projectTask.setProjectIdentifier(projectIdentifier);

            if ( projectTask.getPriority() == null || projectTask.getPriority() == 0){
                projectTask.setPriority(3);
            }
            if (projectTask.getStatus() == ("") || projectTask.getStatus() == null){
                projectTask.setStatus("TO_DO");
            }
            return projectTaskRepository.save(projectTask);
    }

    public List<ProjectTask> findBacklogById(String backlog_id, String username) {
        projectService.findByProjectIdentifier(backlog_id, username);
        return projectTaskRepository.findByProjectIdentifierOrderByPriority(backlog_id);
    }

    public ProjectTask findProjectTaskByProjectSequence(String backlog_id, String projectTask_id){
        // checking if backlog exist in our database
        Backlog backlog = backlogRepository.findByProjectIdentifier(backlog_id);
        if (backlog == null){
            throw new ProjectNotFoundException("Project with id: " + backlog_id + " doesn't exist.");
        }
        // checking if project task exist in our database
        ProjectTask projectTask = projectTaskRepository.findByProjectSequence(projectTask_id);
        if (projectTask == null){
            throw new ProjectNotFoundException("Project Task with id " + projectTask_id + " doesn't exist.");
        }
        // checking if backlog and project task match
        if (!projectTask.getProjectIdentifier().equals(backlog_id)) {
            throw new ProjectNotFoundException("Project Task " + projectTask_id + " doesn't exist in project " + backlog_id);
        }
        return projectTask;
    }

    // update project task
    public ProjectTask updateByProjectSequence(ProjectTask updateTask, String backlog_id, String projectTask_id){
        ProjectTask projectTask = findProjectTaskByProjectSequence(backlog_id, projectTask_id);
        projectTask = updateTask;
        return projectTaskRepository.save(projectTask);
    }

    // delete project
    public void deleteProjectTaskByProjectSequence(String backlog_id, String projectTask_id){
        ProjectTask projectTask = findProjectTaskByProjectSequence(backlog_id, projectTask_id);
        projectTaskRepository.delete(projectTask);
    }
}
