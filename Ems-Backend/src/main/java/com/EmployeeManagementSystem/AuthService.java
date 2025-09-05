package com.EmployeeManagementSystem;

import org.springframework.stereotype.Service;

@Service
public class AuthService {

    // ✅ Hardcoded demo user (later replace with DB + password hashing)
    private final String demoEmail = "admin@gmail.com";
    private final String demoPassword = "admin";

    public boolean authenticate(String email, String password) {
        return demoEmail.equals(email) && demoPassword.equals(password);
    }
}
