package com.virtusa.carpooling.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.virtusa.carpooling.model.FindCar;
import com.virtusa.carpooling.repository.CarRepository;

import com.virtusa.carpooling.exception.RecordNotFoundException;


@RestController 
@CrossOrigin(origins = "*")

@RequestMapping("/c/c")
public class CarController
{
	 @Autowired
	 private CarRepository carrep;
	 @PostMapping("/cardetails")
	 
	 public String FindCar(@RequestBody FindCar car) throws RecordNotFoundException
	 {
	      
	     carrep.save(car);
		
	      return "welcome" + car.getRegistrationNo() + " " + " you have succesfuly enter car Details";
	     
	    }

	 @GetMapping("/findcars")
		public List<FindCar> getAllCars() {
			return carrep.findAll();
	
		}

}