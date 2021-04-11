package org.iesalixar.copytom.controller;

import org.iesalixar.copytom.models.User;
import org.iesalixar.copytom.repository.UserRepositoryI;
import org.iesalixar.copytom.services.UserServiceI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", exposedHeaders = "Authorization")
public class UserController {

	@Autowired
	private UserRepositoryI userRepository;

	@Autowired
	private UserServiceI userService;

	@PostMapping("/login")
	public User loginUser(@RequestBody User userLogin) {
		User user = userService.getByUsername(userLogin.getUsername());
		if (user != null && user.getPass().equals(userLogin.getPass())
				&& user.getUsername().equals(userLogin.getUsername())) {
			return user;
		}		
		return new User();
	}

	@PostMapping("/register")
	public User registerUser(@RequestBody User userRegister) {
		
		User userUsername = userService.getByUsername(userRegister.getUsername());
		
		if (userUsername == null) {
			User saved = userRepository.save(userRegister);
			return saved;
		}
		return null;
		
	}
}
