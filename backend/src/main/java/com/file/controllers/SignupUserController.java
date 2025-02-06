package com.file.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.file.dtos.LoginDTO;
import com.file.dtos.UserDTO;
import com.file.models.User;
import com.file.repositories.UserRepository;

import com.file.services.AuthService;

@CrossOrigin

@RestController
public class SignupUserController {

	@Autowired
	private com.file.email_service.EmailService emailService;

	@Autowired
	private PasswordEncoder bcryptEncoder;
	@Autowired
	private AuthService authService;

	@PostMapping("/")
	public ResponseEntity<?> createUsers(@RequestBody UserDTO userDTO) {
		String emails = userDTO.getEmail();
		// encoding password with bcrypt
		userDTO.setPassword(this.bcryptEncoder.encode(userDTO.getPassword()));
		Boolean createUser = authService.createUser(userDTO);
		if (createUser == false)
			return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
		emailService.sendEmail(emails, "SignedUp", "CONGRATULATIONS, you Signed in your device");

		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}

	@PostMapping("/login")

	public ResponseEntity<?> authenticateUser(@RequestBody LoginDTO loginDto) {
		String emails = loginDto.getEmail();
		User authUser = authService.authenticateUser(loginDto);

		if (authUser == null) {
			return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
		}

		// emailService.sendEmail(emails, "Login","CONGRATS, you logged in!!!!!!!");

		return new ResponseEntity<>(authUser, HttpStatus.ACCEPTED);
	}

}
