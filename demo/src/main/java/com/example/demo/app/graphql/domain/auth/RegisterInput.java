package com.example.demo.app.graphql.domain.auth;

import java.time.LocalDateTime;

public class RegisterInput {
  private String username;
  private String password;
  private String repeatPassword;

  public RegisterInput() {
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

  public String getRepeatPassword() {
    return repeatPassword;
  }

  public void setRepeatPassword(String repeatPassword) {
    this.repeatPassword = repeatPassword;
  }
}
