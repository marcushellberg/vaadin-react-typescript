package org.vaadin.marcus.backend;

import java.util.List;

import com.vaadin.flow.server.connect.Endpoint;
import com.vaadin.flow.server.connect.auth.AnonymousAllowed;

@Endpoint
@AnonymousAllowed
public class EmployeeEndpoint {

  private BackendService service;

  EmployeeEndpoint(BackendService service) {
    this.service = service;
  }

  public List<Employee> findAll() {
    return service.getEmployees();
  }
}