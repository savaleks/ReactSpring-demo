package com.vilniurun.reactspringdemo.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter @Setter
public class ProjectNotFoundExceptionResponse {

    private String projectNotFound;
}
