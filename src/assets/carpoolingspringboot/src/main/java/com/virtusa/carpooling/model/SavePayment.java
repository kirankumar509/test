package com.virtusa.carpooling.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="savepayment1")
public class SavePayment {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Long id;
	  
	  public Long getId() {
		return id;
	}

public void setId(Long id) {
		this.id = id;
	}

private Long Number;
@Column(name="Number", nullable = false)
	

	
	  public long getNumber() {
	return Number;
}

public void setNumber(long number) {
	Number = number;
}
private String Name;
@Column(name="Name", nullable = false)

public String getName() {
	return Name;
}

public void setName(String name) {
	Name = name;
}
private int Month;
	  @Column(name="Month", nullable = false)
	public int getMonth() {
		return Month;
	}

public void setMonth(int month) {
		Month = month;
	}
	
private int Year;
	@Column(name="Year", nullable = false)
	public int getYear() {
		return Year;
	}


public void setYear(int year) {
		Year = year;
	}

private int Cvv;
	  @Column(name="Cvv", nullable = false)
	public int getCvv() {
		return Cvv;
	}


	public void setCvv(int cvv) {
		Cvv = cvv;
	}

	 private Float Price;
	  @Column(name="Price", nullable = false)
	public Float getPrice() {
		return Price;
	}


	public void setPrice(Float price) {
		Price = price;
	}

	 
	  
@Override
public String toString() {
 return "SavePayment [id=" + id + ", Number=" + Number +", Name=" + Name + ", Month=" + Month + " ,Year="+ Year +", Cvv="+ Cvv +", Price=" + Price + "]";
}
}


