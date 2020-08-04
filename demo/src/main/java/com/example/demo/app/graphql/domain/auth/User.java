package com.example.demo.app.graphql.domain.auth;

import java.time.LocalDateTime;
import java.util.UUID;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {

  @Id
  private String id;
  private String username;
  private LocalDateTime createdAt;
  private String password;
  private String token;


  public User() {
  }

  public User(String username, String password) {
    this.username = username;
    this.password = password;
    this.createdAt = LocalDateTime.now();
    this.token = "TOKEN_0104a457-a77f-4d23-ba5b-215ed9c20b88";
    this.id = UUID.randomUUID().toString();
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String passowrd) {
    this.password = passowrd;
  }

  public String getToken() {
    return token;
  }

  public void setToken(String token) {
    this.token = token;
  }

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(LocalDateTime createdAt) {
    this.createdAt = createdAt;
  }
}
