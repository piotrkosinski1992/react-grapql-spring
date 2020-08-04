package com.example.demo.app.graphql.domain;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Comment {

  @Id
  private String id;
  private String username;
  private LocalDateTime createdAt;
  private String body;

  public Comment() {
  }

  public Comment(String username, String body) {
    this.id = UUID.randomUUID().toString();
    this.createdAt = LocalDateTime.now();
    this.username = username;
    this.body = body;
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

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(LocalDateTime createdAt) {
    this.createdAt = createdAt;
  }

  public String getBody() {
    return body;
  }

  public void setBody(String body) {
    this.body = body;
  }
}
