package com.vilniurun.reactspringdemo.validator;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.vilniurun.reactspringdemo.domain.User;

@Component
public class UserValidation implements Validator{

	@Override
	public boolean supports(Class<?> clazz) {
		// TODO Auto-generated method stub
		return User.class.equals(clazz);
	}

	@Override
	public void validate(Object target, Errors errors) {
		// TODO Auto-generated method stub
		User user = (User) target;
		if (user.getPassword().length() < 6) {
			errors.rejectValue("password", "Length", "Password must be at least 6 characters.");
		}
		if (!user.getPassword().equals(user.getConfirmPassword())) {
			errors.rejectValue("confirmPassword", "Match", "Password must match.");
		}
	}
}
