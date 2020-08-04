package com.example.demo.app.graphql.domain.auth;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {

  Optional<User> findByUsernameAndPassword(String username, String password);

  Optional<User> findByToken(String token);
}
