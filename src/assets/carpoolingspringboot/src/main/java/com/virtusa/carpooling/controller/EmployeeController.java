  package com.virtusa.carpooling.controller;

  
import com.virtusa.carpooling.exception.RecordNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import com.virtusa.carpooling.repository.*;
import com.virtusa.carpooling.model.*;
import com.virtusa.carpooling.service.*;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController @CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/e/c")
public class EmployeeController {
	
	 @Autowired
	    EmployeeService service;
	 
	    EmployeeRepository employeeRepository;
	    
	    @GetMapping
	    public ResponseEntity<List<EmployeeEntity>> getAllEmployees() {
	        List<EmployeeEntity> list = service.getAllEmployees();
	 
	        return new ResponseEntity<List<EmployeeEntity>>(list, new HttpHeaders(), HttpStatus.OK);
	    }
	 
	   
	       @GetMapping("/{id}")
	     
	    public ResponseEntity<EmployeeEntity> getEmployeeById(@PathVariable("id") Long id)
	                                                    throws RecordNotFoundException {
	        EmployeeEntity entity = service.getEmployeeById(id);
	 
	        return new ResponseEntity<EmployeeEntity>(entity, new HttpHeaders(), HttpStatus.OK);
	    }
	    @PostMapping("/employees")
	    public ResponseEntity<EmployeeEntity> createOrUpdateEmployee(EmployeeEntity employee)
	                                                    throws RecordNotFoundException {
	        EmployeeEntity updated = service.createOrUpdateEmployee(employee);
	        return new ResponseEntity<EmployeeEntity>(updated, new HttpHeaders(), HttpStatus.OK);
	    }
	    @DeleteMapping("/{id}")
	    public HttpStatus deleteEmployeeById(@PathVariable("id") Long id)
	                                                    throws RecordNotFoundException {
	        service.deleteEmployeeById(id);
	        return HttpStatus.FORBIDDEN;
	    }
	 
	}