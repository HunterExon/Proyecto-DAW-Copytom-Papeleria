package org.iesalixar.copytom.services;

import org.iesalixar.copytom.models.User;

public interface UserServiceI {
	public User getByUsername(String username);
	public User save(User user1);
}
