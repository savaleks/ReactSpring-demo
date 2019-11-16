package com.vilniurun.reactspringdemo.services;

import com.vilniurun.reactspringdemo.domain.Backlog;
import com.vilniurun.reactspringdemo.domain.Project;
import com.vilniurun.reactspringdemo.domain.ProjectTask;
import com.vilniurun.reactspringdemo.repositories.BacklogRepository;
import com.vilniurun.reactspringdemo.repositories.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask){

        // add projectTask to specific project
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
    }
}
