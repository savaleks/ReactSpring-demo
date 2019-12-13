package com.vilniurun.reactspringdemo.security;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import com.vilniurun.reactspringdemo.domain.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;

import static com.vilniurun.reactspringdemo.security.SecurityConst.EXPIRATION_TIME;
import static com.vilniurun.reactspringdemo.security.SecurityConst.SECRET_KEY_STRING;

@Component
public class TokenProvider {
	
	// token generation
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
	
	// token validation
	public boolean validateToken(String token) {
		try {
			Jwts.parser().setSigningKey(SECRET_KEY_STRING).parseClaimsJws(token);
			return true;
		} catch (SignatureException e) {
			// TODO: handle exception
			System.out.println("Invalid JWT Signature.");
		} catch (MalformedJwtException e) {
			// TODO: handle exception
			System.out.println("Invalid JWT token.");
		} catch (ExpiredJwtException e) {
			// TODO: handle exception
			System.out.println("Expired JWT token");
		} catch (UnsupportedJwtException e) {
			// TODO: handle exception
			System.out.println("Unsupported JWT token.");
		} catch (IllegalArgumentException e) {
			// TODO: handle exception
			System.out.println("JWT token claims string is empty.");
		}
		return false;
	}
	
	// get user id from token
	public Long getUserIdFromJWT(String token) {
		Claims claims = Jwts.parser().setSigningKey(SECRET_KEY_STRING).parseClaimsJws(token).getBody();
		String id = (String) claims.get("id");
		return Long.parseLong(id);
	}
}
