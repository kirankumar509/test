package com.virtusa.carpooling.controller;
import com.virtusa.carpooling.exception.RecordNotFoundException;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import com.virtusa.carpooling.repository.*;
import com.virtusa.carpooling.model.*;
import com.virtusa.carpooling.service.PaymentService;


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
import com.virtusa.carpooling.repository.PaymentRepository;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/p/u")
public class paymentController 
{
@Autowired
private PaymentService service;


@PostMapping("/add")
public SavePayment AddPayment(@RequestBody SavePayment payment)  throws RecordNotFoundException 
{
	return service.savePaymentToDB(payment);
	
	
	  
}
}



