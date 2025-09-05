package com.EmployeeManagementSystem;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor   // required for JSON deserialization
@AllArgsConstructor
public class LoginRequest {
    private String email;
    private String password;
}
