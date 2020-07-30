package com.virtusa.carpooling.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="car")
public class FindCar
{
	
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	@Column(name="carOwner", nullable = false)
	public String getCarOwner() {
		return carOwner;
	}
	public void setCarOwner(String carOwner) {
		this.carOwner = carOwner;
	}
	@Column(name="RegistrationNo", nullable = false)
	public String getRegistrationNo() {
		return RegistrationNo;    
	}
	public void setRegistrationNo(String registrationNo) {
		RegistrationNo = registrationNo;
	}
	@Column(name="phoneNo", nullable = false)
	public Long getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(Long phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getEmail() {
		return email;
	}
	@Column(name="email", nullable = false)
	public void setEmail(String email) {
		this.email = email;
	}
private String carOwner;
private String RegistrationNo;
private Long phoneNo;
private String email;


@Override
public String toString() {
return "FindCar [id=" + id + ", carOwner=" + carOwner +", RegistrationNo=" + RegistrationNo + ", phoneNo=" + phoneNo + " ,email="+ email +"]";
}
}
