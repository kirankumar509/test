package com.virtusa.carpooling.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.virtusa.carpooling.model.Login;
import com.virtusa.carpooling.model.SavePayment;
@Repository
public interface PaymentRepository extends JpaRepository<SavePayment, Long> 
{

}












	

