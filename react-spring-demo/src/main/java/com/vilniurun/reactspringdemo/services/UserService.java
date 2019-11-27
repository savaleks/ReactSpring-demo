package com.vilniurun.reactspringdemo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.vilniurun.reactspringdemo.domain.User;
import com.vilniurun.reactspringdemo.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private BCryptPasswordEncoder passEncoder;
	
	public User saveUser(User newUser) {
		newUser.setPassword(passEncoder.encode(newUser.getPassword()));
		return userRepository.save(newUser);
	}
}
