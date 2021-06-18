package org.iesalixar.copytom.services;

import org.iesalixar.copytom.models.User;
import java.util.List;

public interface UserServiceI {
	public User getByUsername(String username);
	public User save(User user1);
	List<User>listar();
	User listarId(int id);
	User add(User u);
	User edit(User u);
	User delete(int id);
}
