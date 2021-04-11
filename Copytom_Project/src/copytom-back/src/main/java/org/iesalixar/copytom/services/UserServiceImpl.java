package org.iesalixar.copytom.services;

import org.iesalixar.copytom.models.User;
import org.iesalixar.copytom.repository.UserRepositoryI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserServiceI {

	@Autowired
	private UserRepositoryI userRepository;

	@Override
	public User getByUsername(String username) {			
		return userRepository.findByUsername(username);
	}

	@Override
	public User save(User user1) {
		return userRepository.save(user1);
		
	}	
}
