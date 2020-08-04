package com.example.demo.app.graphql.domain;

import java.time.LocalDateTime;
import java.util.UUID;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "LIKE_TABLE")
public class Like {

  @Id
  private String id;
  private String username;
  private LocalDateTime createdAt;

  public Like() {
  }

  public Like(String username) {
    this.id = UUID.randomUUID().toString();
    createdAt = LocalDateTime.now();
    this.username = username;
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
}
