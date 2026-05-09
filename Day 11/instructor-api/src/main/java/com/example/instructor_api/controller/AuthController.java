package com.example.instructor_api.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173") // Benarkan React masuk
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String password = body.get("password");

        // Logik semak manual ikut soalan
        if ("admin@admin.com".equals(email) && "pwd12345".equals(password)) {
            Map<String, String> response = new HashMap<>();
            response.put("token", "fake-jwt-token-aiman-berjaya");
            response.put("message", "Login Successful");
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }
}