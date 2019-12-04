package com.vilniurun.reactspringdemo.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor @Getter @Setter @ToString
public class LoginSuccessResponse {

	private boolean success;
	private String token;
}
