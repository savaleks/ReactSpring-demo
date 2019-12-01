package com.vilniurun.reactspringdemo.exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class InvalidLoginResponse {
	private String email;
	private String password;
	
	public InvalidLoginResponse() {
		this.email = "Invalid email";
		this.password = "Invalid password";
	}
	
	
}
