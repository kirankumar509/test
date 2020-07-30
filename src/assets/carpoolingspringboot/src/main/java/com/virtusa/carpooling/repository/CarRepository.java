package com.virtusa.carpooling.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.virtusa.carpooling.model.FindCar;
import com.virtusa.carpooling.model.Login;

public interface CarRepository extends JpaRepository<FindCar, Long> {
	//List<FindCar>  findCarByRegistration(Long RegistrationNo);
	
}
