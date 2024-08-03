package com.employee.www.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.employee.www.exception.ResourceNotFoundException;
import com.employee.www.model.Employee;
import com.employee.www.repo.EmployeeRepository;

@Service
public class EmployeeService 
{
	@Autowired
	EmployeeRepository employeeRepository;
	
	public List<Employee> getAllEmployee()
	{
		return employeeRepository.findAll();
	}
	
	public Employee addEmployee(Employee employee) 
	{
		return employeeRepository.save(employee);
	}
	
	public Employee getEmployeeById(Long id)
	{
		return employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Id Not Found"));
		
	}
	
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee employee) 
	{
		Employee emp=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Id Not Found"));
		emp.setFirstName(employee.getFirstName());
		emp.setLastName(employee.getLastName());
		emp.setEmail(employee.getEmail());
		
		Employee updateEmp=employeeRepository.save(emp);
		
		return ResponseEntity.ok(updateEmp);
	}
	
	public ResponseEntity<HttpStatus> deleteEmployee(Long id)
	{
		Employee emp=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Id NOt Found"));
		
		employeeRepository.delete(emp);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	

}