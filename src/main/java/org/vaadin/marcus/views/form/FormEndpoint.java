package org.vaadin.marcus.views.form;

import org.vaadin.marcus.backend.Employee;
import com.vaadin.flow.server.connect.Endpoint;
import com.vaadin.flow.server.connect.auth.AnonymousAllowed;
import com.vaadin.flow.server.connect.exception.EndpointException;

/**
 * The endpoint for the client-side Form View.
 */
@Endpoint
@AnonymousAllowed
public class FormEndpoint {
    public void saveEmployee(Employee employee) throws EndpointException {
        throw new EndpointException("not implemented");
    }
}
