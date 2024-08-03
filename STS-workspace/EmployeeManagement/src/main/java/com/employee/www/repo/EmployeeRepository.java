package com.employee.www.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.employee.www.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> 
{

}
