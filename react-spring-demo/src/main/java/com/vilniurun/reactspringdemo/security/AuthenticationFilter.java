package com.vilniurun.reactspringdemo.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.vilniurun.reactspringdemo.domain.User;
import com.vilniurun.reactspringdemo.services.UserDetailsService;

import static com.vilniurun.reactspringdemo.security.SecurityConst.HEADER_STRING;
import static com.vilniurun.reactspringdemo.security.SecurityConst.TOKEN_PREFIX_STRING;;


public class AuthenticationFilter extends OncePerRequestFilter{
	
	@Autowired
	private TokenProvider tokenProvider;
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	private String getJWTfromRequest(HttpServletRequest request) {
		String bearerToken = request.getHeader(HEADER_STRING);
		if (StringUtils.hasText(bearerToken)&&bearerToken.startsWith(TOKEN_PREFIX_STRING)) {
			return bearerToken.substring(7, bearerToken.length());
		}
		return null;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
			String jwt = getJWTfromRequest(request);
			if (StringUtils.hasText(jwt)&&tokenProvider.validateToken(jwt)) {
				Long userId = tokenProvider.getUserIdFromJWT(jwt);
				User userDetails = userDetailsService.loadUserById(userId);
				UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
						userDetails, null, java.util.Collections.emptyList());
				authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(authenticationToken);
			}
		} catch (Exception e) {
			// TODO: handle exception
			logger.error("Cannot set user authentication in security context.", e);
		}
		filterChain.doFilter(request, response);
	}

	
}
