package com.vilniurun.reactspringdemo.web;

import com.vilniurun.reactspringdemo.domain.ProjectTask;
import com.vilniurun.reactspringdemo.services.ErrorService;
import com.vilniurun.reactspringdemo.services.ProjectService;
import com.vilniurun.reactspringdemo.services.ProjectTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/backlog")
@CrossOrigin
public class BacklogController {

    @Autowired
    private ProjectTaskService projectTaskService;

    @Autowired
    private ErrorService errorService;

    @PostMapping("/{backlog_id}")
    public ResponseEntity<?> addProjectTaskToBacklog(@Valid @RequestBody ProjectTask projectTask,
                                                     BindingResult result, 
                                                     @PathVariable String backlog_id,
                                                     Principal principal){
        ResponseEntity<?> errorMap = errorService.mapValidationService(result);
        if (errorMap != null) return errorMap;
        ProjectTask projectTask1 = projectTaskService.addProjectTask(backlog_id, projectTask, principal.getName());
        return new ResponseEntity<ProjectTask>(projectTask1, HttpStatus.CREATED);
    }

    @GetMapping("/{backlog_id}")
    public ResponseEntity<List<ProjectTask>> getProjectBacklog(@PathVariable String backlog_id, Principal principal){
        return new ResponseEntity<List<ProjectTask>>(projectTaskService.findBacklogById(backlog_id, principal.getName()), HttpStatus.OK);
    }

    @GetMapping("/{backlog_id}/{projectTask_id}")
    public ResponseEntity<?> getProjectTask(@PathVariable String backlog_id, @PathVariable String projectTask_id, Principal principal){
        ProjectTask projectTask = projectTaskService.findProjectTaskByProjectSequence(backlog_id, projectTask_id, principal.getName());
        return new ResponseEntity<ProjectTask>(projectTask, HttpStatus.OK);
    }

    @PatchMapping("/{backlog_id}/{projectTask_id}")
    public ResponseEntity<?> updateProjectTask(@Valid @RequestBody ProjectTask projectTask, BindingResult result,
                                               @PathVariable String backlog_id, @PathVariable String projectTask_id,
                                               Principal principal){
        ResponseEntity<?> errorMap = errorService.mapValidationService(result);
        if (errorMap != null) return errorMap;
        ProjectTask updateTask = projectTaskService.updateByProjectSequence(projectTask, backlog_id, projectTask_id, principal.getName());
        return new ResponseEntity<ProjectTask>(updateTask, HttpStatus.OK);
    }

    @DeleteMapping("/{backlog_id}/{projectTask_id}")
    public ResponseEntity<?> deleteProjectTask(@PathVariable String backlog_id, @PathVariable String projectTask_id, Principal principal){
        projectTaskService.deleteProjectTaskByProjectSequence(backlog_id, projectTask_id, principal.getName());
        return new ResponseEntity<>("Project Task " + projectTask_id + " was deleted.", HttpStatus.OK);
    }
}
