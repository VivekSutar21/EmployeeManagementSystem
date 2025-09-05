package com.EmployeeManagementSystem.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "email_id", nullable = false)  // important
    private String emailId;

    @Column(name = "designation")
    private String designation;

    @Column(name = "salary")
    private Double salary;

    @Column(name = "joining_date")
    private LocalDate joiningDate;
}


