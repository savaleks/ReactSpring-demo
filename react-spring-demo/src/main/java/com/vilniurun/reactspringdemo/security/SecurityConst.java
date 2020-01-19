package com.vilniurun.reactspringdemo.security;

public class SecurityConst {
	
	public static final String SIGN_UP_URL_STRING = "/api/users/**";
	public static final String SECRET_KEY_STRING = "keyToGenerateJwt";
	public static final String TOKEN_PREFIX_STRING = "Bearer "; //should be space after bearer
	public static final String HEADER_STRING = "Authorization";
	public static final long EXPIRATION_TIME = 300_000; //5min.
}
