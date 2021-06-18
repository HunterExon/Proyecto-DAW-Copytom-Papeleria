package org.iesalixar.copytom;

import org.iesalixar.copytom.models.User;
import org.iesalixar.copytom.services.UserServiceI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CopytomApplication implements CommandLineRunner{
	
	@Autowired
	UserServiceI userService;

	public static void main(String[] args){SpringApplication.run(CopytomApplication.class, args);}

	
	public void run(String... args) throws Exception {
		/*User user1 = new User();
		user1.setUsername("juan2");
		user1.setPass("juan2");
		user1.setEmail("alum.jgonzalezc@iesalixar.org");
		user1.setRole("admin");
		
		User user2 = new User();
		user2.setUsername("alejandro");
		user2.setPass("alejandro");
		user2.setEmail("aleal@iesalixar.org ");
		user2.setRole("user");
		
		userService.save(user1);
		userService.save(user2);
		*/
	}
}
