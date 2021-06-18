package org.iesalixar.copytom.repository;

import org.iesalixar.copytom.models.User;
import org.springframework.data.repository.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface UserRepositoryI extends JpaRepository<User, Integer>{
	User findByUsername(String username);
	List<User>findAll();
	User findById(int id);
	User save (User u);
	void delete (User u);
}