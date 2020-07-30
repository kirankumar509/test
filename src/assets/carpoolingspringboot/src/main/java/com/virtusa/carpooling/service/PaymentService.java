package com.virtusa.carpooling.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.virtusa.carpooling.repository.PaymentRepository;
import com.virtusa.carpooling.model.SavePayment;
import com.virtusa.carpooling.exception.RecordNotFoundException;

@Service
public class PaymentService 
{

	@Autowired
	private PaymentRepository payrep;
	public SavePayment savePaymentToDB(SavePayment payment) throws RecordNotFoundException
	{
	return payrep.save(payment);
	}
}




