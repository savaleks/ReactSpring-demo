package com.vilniurun.reactspringdemo.payload;

import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class LoginRequest {

	@NotBlank(message = "Email cannot be blank.")
	private String email;
	@NotBlank(message = "Password cannot be blank.")
	private String password;

}
