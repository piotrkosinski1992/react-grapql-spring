package com.example.demo.app.graphql.domain.auth;

public class LoginInput {
  private String username;
  private String password;

  public LoginInput() {
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

  public void setPassword(String password) {
    this.password = password;
  }
}
