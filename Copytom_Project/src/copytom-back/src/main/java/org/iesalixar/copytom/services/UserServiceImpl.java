package org.iesalixar.copytom.services;

import java.util.List;

import org.iesalixar.copytom.models.User;
import org.iesalixar.copytom.repository.UserRepositoryI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserServiceI {
	@Autowired
	private UserRepositoryI repositorio;
	
	
	@Override
	public User getByUsername(String username) {
		return repositorio.findByUsername(username);
	}

	
	@Override
	public User save(User user1) {
		return repositorio.save(user1);
	}

	@Override
	public List<User> listar() {
		return repositorio.findAll();
	}

    @Override
    public User listarId(int id) {
        return repositorio.findById(id);
    }

	@Override
	public User add(User u) {
		// TODO Auto-generated method stub
		return null;
	}

    @Override
    public User edit(User u) {
        return repositorio.save(u);
    }

    @Override
    public User delete(int id) {
        User u=repositorio.findById(id);
        if(u!=null){
            repositorio.delete(u);
        }
       return u;
    }

}
