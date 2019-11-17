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

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask){

        // add projectTask to specific project
        try {
            Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);

            projectTask.setBacklog(backlog);
            Integer BacklogSequence = backlog.getPTSequence();
            backlog.setPTSequence(++BacklogSequence);

            projectTask.setProjectSequence(projectIdentifier + "-" + BacklogSequence);
            projectTask.setProjectIdentifier(projectIdentifier);

            if (projectTask.getPriority() == null){
                projectTask.setPriority(3);
            }
            if (projectTask.getStatus() == ("") || projectTask.getStatus() == null){
                projectTask.setStatus("TO_DO");
            }
            return projectTaskRepository.save(projectTask);
        } catch (Exception e){
            throw new ProjectNotFoundException("Project Not Found Exception.");
        }

    }

    public List<ProjectTask> findBacklogById(String backlog_id) {
        Project project = projectRepository.findByProjectIdentifier(backlog_id);
        if (project == null){
            throw new ProjectNotFoundException("Project with id: " + backlog_id + " doesn't exist.");
        }
        return projectTaskRepository.findByProjectIdentifierOrderByPriority(backlog_id);
    }
}
