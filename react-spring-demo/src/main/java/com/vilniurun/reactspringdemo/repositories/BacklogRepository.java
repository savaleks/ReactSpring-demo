package com.vilniurun.reactspringdemo.repositories;

import com.vilniurun.reactspringdemo.domain.Backlog;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BacklogRepository extends CrudRepository<Backlog, Long> {
}
