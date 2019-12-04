package com.vilniurun.reactspringdemo.web;

import javax.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vilniurun.reactspringdemo.domain.User;
import com.vilniurun.reactspringdemo.payload.LoginRequest;
import com.vilniurun.reactspringdemo.payload.LoginSuccessResponse;
import com.vilniurun.reactspringdemo.security.TokenProvider;
import com.vilniurun.reactspringdemo.services.ErrorService;
import com.vilniurun.reactspringdemo.services.UserService;
import com.vilniurun.reactspringdemo.validator.UserValidation;

import static com.vilniurun.reactspringdemo.security.SecurityConst.TOKEN_PREFIX_STRING;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
	@Autowired
	private ErrorService errorService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private UserValidation userValidation;
	
	@Autowired
	private TokenProvider tokenProvider;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest, BindingResult result){
		ResponseEntity<?> errorMapEntity = errorService.mapValidationService(result);
		if (errorMapEntity != null) {
			return errorMapEntity;
		}
		Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
				loginRequest.getEmail(), loginRequest.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwtString = TOKEN_PREFIX_STRING + tokenProvider.generateToken(authentication);
		return ResponseEntity.ok(new LoginSuccessResponse(true, jwtString));
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result){
		userValidation.validate(user, result);
		ResponseEntity<?> errorMap = errorService.mapValidationService(result);
		if(errorMap != null) return errorMap;
		
		User newUser = userService.saveUser(user);
		return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
	}
}
