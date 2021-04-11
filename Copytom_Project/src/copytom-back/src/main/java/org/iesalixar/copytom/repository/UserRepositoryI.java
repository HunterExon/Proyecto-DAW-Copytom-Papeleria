package org.iesalixar.copytom.repository;

import org.iesalixar.copytom.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepositoryI extends JpaRepository<User, Long>{
	public User findByUsername(String username);
}
