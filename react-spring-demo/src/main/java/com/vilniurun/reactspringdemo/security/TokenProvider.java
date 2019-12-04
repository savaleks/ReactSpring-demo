package com.vilniurun.reactspringdemo.security;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import com.vilniurun.reactspringdemo.domain.User;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import static com.vilniurun.reactspringdemo.security.SecurityConst.EXPIRATION_TIME;
import static com.vilniurun.reactspringdemo.security.SecurityConst.SECRET_KEY_STRING;

@Component
public class TokenProvider {
	
	public String generateToken(Authentication authentication) {
		
		User user = (User)authentication.getPrincipal();
		Date now = new Date(System.currentTimeMillis());
		Date expiryDate = new Date(now.getTime() + EXPIRATION_TIME);
		String userId = Long.toString(user.getId());
		Map<String, Object> claims = new HashMap<String, Object>();
		claims.put("id", (Long.toString(user.getId())));
		claims.put("email", user.getEmail());
		claims.put("firstName", user.getFirstName());
		claims.put("lastName", user.getLastName());
		return Jwts.builder().setSubject(userId).setClaims(claims).setIssuedAt(now)
				.setExpiration(expiryDate).signWith(SignatureAlgorithm.HS512, SECRET_KEY_STRING)
				.compact();
	}
}
